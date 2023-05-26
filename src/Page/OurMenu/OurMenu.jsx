import React from 'react';
import SectionTitle from '../../shared/sectionTitle/SectionTitle';
import Cover from '../../shared/Cover/Cover';
import img from '../../assets/menu/banner3.jpg'
import { Helmet } from 'react-helmet-async';

const OurMenu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Our Menu</title>
            </Helmet>
            <Cover image={img} title={'Our Menu'}></Cover>
        </div>
    );
};

export default OurMenu;