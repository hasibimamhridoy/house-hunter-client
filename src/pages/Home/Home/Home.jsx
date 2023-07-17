import React, { useContext } from 'react';
import { AuthContext } from '../../../authProvider/AuthProvider';

const Home = () => {

    const {user} = useContext(AuthContext)

    console.log(user);

    return (
        <div>
            This is a home
        </div>
    );
};

export default Home;