import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
const Welcome = () => {
    const { isAuthenticated, user } = useContext(AuthContext);
    return (
        <div className='welcome'>
            {isAuthenticated ? (<h1>Welcome,{user.name}</h1>) : (<h1>Welcome</h1>)
            }
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In mollitia asperiores natus debitis adipisci a nostrum maxime unde dicta blanditiis!
            </p>

        </div>

    )
}

export default Welcome