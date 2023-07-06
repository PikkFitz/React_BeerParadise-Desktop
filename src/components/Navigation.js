import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}> {/* Si nav est active alors className="nav-active" (class qui souligne l'élément est actif dans notre NavBar) */}
                    <li>Produits</li>
                </NavLink>
                <NavLink to="/statistics" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Statistiques</li>
                </NavLink>
                <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>à propos</li>
                </NavLink>
                
            </ul>
        </div>
    );
};

export default Navigation;