import { createContext, useState } from "react";

export const UserPreferencesContext = createContext();

export const UserPreferencesProvider = ({ children }) => {

    const [language, setLanguage] = useState("English");
    const [theme, setTheme] = useState('light')

    const changeLanguage = (newLanguage) => setLanguage(newLanguage);
    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

    return (
        <UserPreferencesContext.Provider value={{ language, changeLanguage, theme, toggleTheme }}>
            {children}
        </UserPreferencesContext.Provider>
    );
};
