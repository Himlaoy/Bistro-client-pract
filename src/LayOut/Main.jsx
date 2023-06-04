import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';
import NavBar from '../shared/Navbar/NavBar';
import { Helmet } from 'react-helmet-async';

const Main = () => {


    const location = useLocation()
    const noHeaderFooter = location.pathname.includes('login') 

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home </title>
            </Helmet>
            {noHeaderFooter ||  <NavBar></NavBar>}
            <Outlet></Outlet>
            {noHeaderFooter ||  <Footer></Footer>}
        </div>
    );
};

export default Main;