import React, { useContext, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { ApiContext } from "../context/ApiContext";
const NewRecipeForm = () => {


    const { addRecipe, recipes } = useContext(ApiContext);


    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [desc, setDesc] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();


        addRecipe({
            id: Number(recipes[recipes.length - 1].id) + 1,
            title: title,
            description: desc,
            image: image
        })

        navigate("/recipes");

        setTitle("");
        setImage("");
        setDesc("");
    };


    return (

        <>
            <form onSubmit={handleSubmit} >
                <input type='text' placeholder='Recipe Title' value={title} onChange={(event) => { setTitle(event.target.value) }} />
                <input type='text' placeholder='Recipe Image' value={image} onChange={(event) => { setImage(event.target.value) }} />
                <input type='text' placeholder='Recipe Description' value={desc} onChange={(event) => { setDesc(event.target.value) }} />
                <input type='submit' placeholder='Add Recipe' />
            </form >
        </>
    )
}

export default NewRecipeForm