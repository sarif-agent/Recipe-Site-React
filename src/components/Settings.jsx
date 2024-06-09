import React, { useContext } from 'react'
import { UserPreferencesContext } from '../context/UserPreferencesContext'
import { AuthContext } from '../context/AuthContext'
const Settings = () => {
    const { language, changeLanguage, theme, toggleTheme } = useContext(UserPreferencesContext)
    const { user } = useContext(AuthContext);

    console.log(user);

    return (
        <div className='settings-page'>
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
