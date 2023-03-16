import React from "react";
import { NavLink, Outlet } from 'react-router-dom';
const styles = ({ isActive }) => ({ textDecoration: isActive ? 'underline' : none });

const Header = () => {
    return (
        <main>
            <header>
                <nav>
                    <NavLink to="/" style={styles}>Home</NavLink>
                    <NavLink to="/shows" style={styles}>Shows</NavLink>
                    <NavLink to="search">Search Shows</NavLink>
                </nav>
            </header>
            <Outlet />
        </main>
    )
};

export default Header;