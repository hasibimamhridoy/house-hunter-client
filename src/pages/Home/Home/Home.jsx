import React, { useContext } from 'react';
import { AuthContext } from '../../../authProvider/AuthProvider';
import Search from './Search';
import AllHouse from './AllHouse';
import BannerSlider from '../Banner/BannerSlider/BannerSlider';
import HeroSection from '../HeroSection/HeroSection';

const Home = () => {

    const {user,loading} = useContext(AuthContext)



    if (loading) {
        return <div>Loding..........</div>
    }
    return (
        <div>
            <BannerSlider></BannerSlider>
            <Search></Search>
            <div className='my-5'>
            <AllHouse></AllHouse>
            </div>
            <HeroSection></HeroSection>
        </div>
    );
};

export default Home;