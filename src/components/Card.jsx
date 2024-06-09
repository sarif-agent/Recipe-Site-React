import React, { useContext, useState } from 'react'
import { FaRegTrashAlt, FaPen } from "react-icons/fa";
import { ApiContext } from "../context/ApiContext";
const Card = ({ title, description, image, id, }) => {

    const { updateRecipe, deleteRecipe } = useContext(ApiContext);

    const [isEditing, setIsEditing] = useState(false);
    const [editData, setEditData] = useState({ title, description, image });

    const handleEditChange = (e) => {
        setEditData({ ...editData, [e.target.name]: e.target.value });
    };

    const handleUpdate = async () => {

        updateRecipe(id, editData);
        setIsEditing(false);
    };

    //    console.log(updateRecipe);
    return (
        <div className='card'>
            {isEditing ?
                (
                    <div className='edit-form'>
                        <div className='input-area'>
                            <label > Title:</label>
                            <input type="text" name='title' value={editData.title} onChange={handleEditChange} />
                        </div>

                        <div className='input-area'>
                            <label > Description:</label>
                            <input type="text" name='description' value={editData.description} onChange={handleEditChange} />

                        </div>

                        <div className='input-area'>
                            <label > Image URL:</label>
                            <input type="text" name='image' value={editData.image} onChange={handleEditChange} />

                        </div>

                        <button onClick={handleUpdate}>Update</button>
                        <button onClick={() => setIsEditing(false)}>Cancel</button>
                    </div>
                )
                :
                (
                    <div className='cardContainer'>
                        <div className='imgContainer'>
                            <img src={image} alt={title} className="recipe-image" />
                        </div>

                        <h2>{title}</h2>
                        <p>{description}</p>

                        <button id='edit' onClick={() => setIsEditing(true)}><FaPen size={64} opacity={1} /></button>
                        <button id='del' onClick={() => {
                            if (confirm("Are sure you want to delete?"))
                                return deleteRecipe(id);
                        }}><FaRegTrashAlt size={64} opacity={1} /></button>
                    </div>
                )
            }



        </div>
    )
}

export default Card