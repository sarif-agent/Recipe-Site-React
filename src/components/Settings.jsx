import React, { useContext, useEffect, useState } from 'react'
import { UserPreferencesContext } from '../context/UserPreferencesContext'
import axios from "axios";

const Settings = () => {
    const { language, changeLanguage, theme, toggleTheme } = useContext(UserPreferencesContext)
    const [user, setUser] = useState({});

    useEffect(() => {
        const getUserProfile = async () => {

            const response = await axios.get("https://api.escuelajs.co/api/v1/auth/profile", {
                headers: {
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).access_token}`
                }
            })
                .then(response => setUser(response.data))
                .catch(e => console.log(e))


        }

        getUserProfile();
    }, []);



    return (
        <div className='settings-page'>
            <h2>Settings</h2>
            <div className="language-options">
                <select value={language} onChange={e => changeLanguage(e.target.value)}>
                    <option value="English">English</option>
                    <option value="Turkish">Turkish</option>
                    <option value="French">French</option>
                </select>
            </div>
            <div className="theme-options">
                <label>Theme:</label>
                <button onClick={toggleTheme}>{theme === 'light' ? 'Switch to Dark' : 'Switch to Light'}</button>
            </div>

            {user && (
                <div>
                    {user.avatar && <img src={user.avatar} alt={user.name} />}
                    <p>{user.name}</p>
                    <p>{user.role}</p>
                    <p>{user.email}</p>
                </div>
            )}
        </div>
    );
}

export default Settings;
