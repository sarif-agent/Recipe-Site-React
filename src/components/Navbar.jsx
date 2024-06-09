import React, { useContext } from 'react'
import '../styles/navbar.scss';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {

    const { isAuthenticated, logout } = useContext(AuthContext);

    return (
        <nav className="navbar">
            <a href="/" className="navbar-logo">Logo</a>
            <ul className="navbar-links">

                <li className="navbar-item">
                    <Link to="/" className="navbar-link">Home</Link>
                </li>

                <li className="navbar-item">
                    <Link to="/recipes" className="navbar-link">Recipe list</Link>
                </li>

                <li className="navbar-item">
                    <Link to="/newRecipe" className="navbar-link">Add New Recipe</Link>
                </li>

                <li className="navbar-item">
                    <Link to="/settings" className="navbar-link">Settings</Link>
                </li>
                {
                    isAuthenticated ? (
                        <li className="navbar-item">
                            <Link onClick={logout}
                                className="navbar-link">Logout</Link>
                        </li>
                    ) :
                        (
                            <li className="navbar-item">
                                <Link to="/Login" className="navbar-link">Login</Link>
                            </li>
                        )
                }






            </ul>
        </nav>
    );
}

export default Navbar