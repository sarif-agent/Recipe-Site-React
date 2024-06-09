import React, { useContext } from 'react'
import { UserPreferencesContext } from '../context/UserPreferencesContext'
import { AuthContext } from '../context/AuthContext'
const Settings = () => {
    const { language, changeLanguage, theme, toggleTheme } = useContext(UserPreferencesContext)
    const { user } = useContext(AuthContext);



    return (
        <div className='settings-page'>
            <div className='settings-container'>
                {user && (
                    <div className='profile'>
                        {user.avatar && <img src={user.avatar} alt={user.name} />}

                        <div className='container'>
                            <label >Name:   <span>{user.name}</span></label>
                            <label >Role   <span>{user.role}</span></label>
                            <label >Mail:   <span>{user.email}</span> </label>
                        </div>

                    </div>
                )}

                <div className='settings'>
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

                </div>
            </div>

        </div>
    );
}

export default Settings;
