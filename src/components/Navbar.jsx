
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

    return (
        <nav className="Nav-full">

            <div className="Nav-content">

                <h2>Weatherly</h2>

                <ul className="Nav-lists">

                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/forecast">Forecast</Link>
                    </li>

                </ul>

            </div>

        </nav>
    );
}

export default Navbar;
