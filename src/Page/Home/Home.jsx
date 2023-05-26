import React from 'react';
import Footer from '../../shared/Footer/Footer';
import NavBar from '../../shared/Navbar/NavBar';
import Slider from './Slider/Slider';
import Banner from './Banner/Banner';
import Server from './server/Server';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Banner></Banner>
            <Server></Server>
        </div>
    );
};

export default Home;