import React from 'react';
import Footer from '../../shared/Footer/Footer';
import NavBar from '../../shared/Navbar/NavBar';
import Slider from './Slider/Slider';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Banner></Banner>
        </div>
    );
};

export default Home;