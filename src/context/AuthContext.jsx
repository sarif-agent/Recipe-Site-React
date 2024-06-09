import { createContext, useState, useEffect } from "react";
import AuthService from "../Services/AuthService";
import { json } from "react-router-dom";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [user, setUser] = useState({});

    useEffect(() => {
        const getUserProfile = async () => {
            if (localStorage.getItem("user")) {
                const response = await axios.get("https://api.escuelajs.co/api/v1/auth/profile", {
                    headers: {
                        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).access_token}`
                    }
                })
                    .then(response => {

                        setUser(response.data)

                    })
                    .catch(e => e)
            }



        }

        getUserProfile();
    },);




    const login = async (username, password) => {
        try {
            // const response = await AuthService.loginService(username, password)
            const response = await AuthService.loginService("john@mail.com", "changeme")

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
        <AuthContext.Provider value={{ isAuthenticated, login, logout, user }}>
            {children}
        </AuthContext.Provider >
    )


}