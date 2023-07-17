import React, { useContext } from 'react';
import { AuthContext } from '../../../authProvider/AuthProvider';

const Home = () => {

    const {user,loading} = useContext(AuthContext)

    console.log(user);


    if (loading) {
        return <div>Loding..........</div>
    }
    return (
        <div>
            This is a home
        </div>
    );
};

export default Home;