import React from 'react';
import Footer from '../../shared/Footer/Footer';
import NavBar from '../../shared/Navbar/NavBar';
import Slider from './Slider/Slider';
import Banner from './Banner/Banner';
import Server from './server/Server';
import Menu from './Menu/Menu';
import Contact from './Contact/Contact';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Banner></Banner>
            <Server></Server>
            <Menu></Menu>
            <Contact></Contact>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;