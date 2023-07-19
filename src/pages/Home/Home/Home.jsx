import React, { useContext } from 'react';
import { AuthContext } from '../../../authProvider/AuthProvider';
import Search from './Search';
import AllHouse from './AllHouse';

const Home = () => {

    const {user,loading} = useContext(AuthContext)

    console.log(user);


    if (loading) {
        return <div>Loding..........</div>
    }
    return (
        <div>
            <Search></Search>
            <div className='my-5'>
            <AllHouse></AllHouse>
            </div>
        </div>
    );
};

export default Home;