import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';
import NavBar from '../shared/Navbar/NavBar';
import { Helmet } from 'react-helmet-async';

const Main = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home </title>
            </Helmet>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;