import React, { useContext, useEffect } from 'react';
import Card from './Card';
import '../styles/card.scss'
import { ApiContext } from "../context/ApiContext";
import LoadingPage from './LoadingPage';

import { useNavigate } from 'react-router-dom';





const CardList = () => {

    const { recipes, isLoading } = useContext(ApiContext);


    if (!isLoading.read) {
        return (
            <>
                <LoadingPage />
            </>
        )

    }
    if (isLoading.read)
        return (
            <div>

                <div div className="card-list" >
                    {
                        recipes.map((recipe) => (
                            <Card
                                key={recipe.id}
                                {...recipe}

                            />
                        ))
                    }

                </div>





            </div>
        )


}


export default CardList;