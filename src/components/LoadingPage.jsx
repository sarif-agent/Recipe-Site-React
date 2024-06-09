import React, { useEffect } from 'react';


const LoadingPage = (element) => {

    useEffect(() => {
        setTimeout(() => {

        }, 2000);
    });
    return (
        <div className="loading">
            <div className="loader"></div>
            <div className="loader-1"></div>
        </div>
    );
};

export default LoadingPage;
