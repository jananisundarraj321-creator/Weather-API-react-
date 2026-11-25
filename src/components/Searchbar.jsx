
import React, { useState } from "react";

function Searchbar({ onSearch }) {

    const [city, setCity] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (city.trim()) {
            onSearch(city.trim());
        }
    }
    return (
        <form className="search-container" onSubmit={handleSubmit}>
            
            <input
                type="text"
                placeholder="Search for a city..."
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            

            <button type="submit">
                Search
            </button>

        </form>
    );
}

export default Searchbar;
