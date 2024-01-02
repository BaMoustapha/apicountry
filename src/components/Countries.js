import { useState, useEffect } from "react";
import Article from "./Article";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Countries() {
    const [countries, setCountries] = useState([]);
    const [searchCountry, setSearchCountry] = useState("");
    const regions = [
        {
            name: "Africa",
        },
        {
            name: "Europe",
        },
        {
            name: "Asia",
        },
        {
            name: "Americas",
        },
        {
            name: "Oceania",
        },
        {
            name: "Antarctic",
        },
    ]

    useEffect(() => {
        const getCountries = async () => {
            try {
                const res = await fetch("https://restcountries.com/v3.1/all");
                const data = await res.json();
                setCountries(data)
            } catch (error) {
                console.error(error)
            }
        };   
    getCountries();
    }, []);

    async function searchByCountry(){
        try {
            const res = await fetch(`https://restcountries.com/v3.1/name/${searchCountry}`);
            const data = await res.json();
            setCountries(data);
        } catch (error) {
            console.error(error);
        }
    }

    function handleSearch (e) {
        e.preventDefault()
        searchByCountry()
    }

    async function filterByRegion(region){
        try {
            const res = await fetch(`https://restcountries.com/v3.1/region/${region}`);
            const data = await res.json();
            setCountries(data);
        } catch (error) {
            console.error(error);
        }
    }


    function handleFilter (e) {
        e.preventDefault()
        filterByRegion()
    }

    return ( 
        <>
        <section className="container mx-auto">
        <div className="row mb-5">
        <form onSubmit={handleSearch}
        className="col">
        <input 
        type="text" 
        name="search" 
        id="search"
        value={searchCountry}
        onChange={(e) => setSearchCountry(e.target.value)}
        className="w-50 shadow rounded p-2"
        placeholder="Search for a country" required />
        </form>
        <form onSubmit={handleFilter}
        className="col-auto">
        <select className="shadow rounded p-2"
        value={regions.name}
        onChange={(e)=> filterByRegion(e.target.value)}
        name="filter-by-region" id="filter-by-region"
        >
        <option selected>Select by region</option>
        {regions.map((region, index) => (
            <option key={index}>{region.name}</option>
        ))}
        </select>
        </form>
        </div>
            <div className="row">
            {countries.map((country) => (
                <Article key={country.name.common} {...country}></Article>
            ))
            }
            </div>
            
        </section>
        </>
    );
}

