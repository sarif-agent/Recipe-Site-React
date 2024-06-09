import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const ApiContext = createContext();

export const ApiContextProvider = ({ children }) => {

    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState({
        read: false,
        add: false,
        delete: [],
        update: false,
    });

    const addRecipe = async ({ title, description, image }) => {
        setIsLoading((prevIsLoading) => ({ ...prevIsLoading, add: true }));
        const newRecipe = { title, description, image };
        const response = await axios.post(
            "http://localhost:3001/recipes",
            newRecipe
        );
        if (response.status === 201) {
            setRecipes((prevRecipeList) => [...prevRecipeList, response.data]);
        }
        setIsLoading((prevIsLoading) => ({ ...prevIsLoading, add: false }));
    };

    const deleteRecipe = async (id) => {
        setIsLoading((prevIsLoading) => ({
            ...prevIsLoading,
            delete: [...prevIsLoading.delete, id],
        }));
        const response = await axios.delete(`http://localhost:3001/recipes/${id}`);
        if (response.status === 200) {
            setRecipes((prevRecipeList) =>
                prevRecipeList.filter((recipe) => recipe.id !== id)
            );
        }
        setIsLoading((prevIsLoading) => ({
            ...prevIsLoading,
            delete: prevIsLoading.delete.filter((deletingId) => deletingId !== id),
        }));
    };

    useEffect(() => {
        setTimeout(() => {

            const getRecipes = async () => {
                try {
                    setIsLoading((prevIsLoading) => ({ ...prevIsLoading, read: true }));
                    const response = await axios
                        .get("http://localhost:3001/recipes")
                        .then((response) => {
                            setRecipes(response.data);
                        });

                } catch (error) {
                    console.log(error);
                }
            }
            getRecipes();
        }, 1000)



    }, []);

    const updateRecipe = async (id, updatedRecipe) => {
        try {
            const response = await axios.put(
                `http://localhost:3001/recipes/${id}`,
                updatedRecipe
            );
            if (response.status === 200) {
                setRecipes((prevRecipeList) =>
                    prevRecipeList.map((recipe) =>
                        recipe.id === id ? response.data : recipe
                    )
                );
            }
        } catch (error) {
            console.error("Error updating recipe:", error);
        }
    };


    useEffect(() => {
        console.log(isLoading.read);
    }, [isLoading.read]);


    return (
        <ApiContext.Provider value={{ recipes, addRecipe, updateRecipe, deleteRecipe, isLoading }}>
            {children}
        </ApiContext.Provider>

    );

}