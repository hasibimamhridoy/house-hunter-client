import React, { useContext } from 'react';
import { AuthContext } from '../../../authProvider/AuthProvider';
import Search from './Search';

const Home = () => {

    const {user,loading} = useContext(AuthContext)

    console.log(user);


    if (loading) {
        return <div>Loding..........</div>
    }
    return (
        <div>
            <Search></Search>
            This is a home
        </div>
    );
};

export default Home;