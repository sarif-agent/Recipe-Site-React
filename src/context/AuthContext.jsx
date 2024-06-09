import { createContext, useState } from "react";
import AuthService from "../Services/AuthService";
import { json } from "react-router-dom";


export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false)




    const login = async (username, password) => {
        try {
            const response = await AuthService.loginService(username, password)

            if (response.data.access_token) {
                setIsAuthenticated(JSON.parse(localStorage.getItem("user")))
            }
            console.log(isAuthenticated);
            // console.log(response.data.access_token);
        }
        catch (error) {
            setIsAuthenticated(false);
            throw new Error(error);
        }

    }


    const logout = () => {
        AuthService.logoutService();
        setIsAuthenticated(false);
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider >
    )


}