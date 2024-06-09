import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ element }) => {

    const { isAuthenticated } = useContext(AuthContext);

    return isAuthenticated ? element : <Navigate to='/login' />
}

export default PrivateRoute;
