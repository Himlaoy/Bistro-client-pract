import React from 'react';
import SectionTitle from '../../shared/sectionTitle/SectionTitle';
import Cover from '../../shared/Cover/Cover';
import img from '../../assets/menu/banner3.jpg'
import { Helmet } from 'react-helmet-async';
import useMenu from '../../Hook/useMenu';

const OurMenu = () => {
    const [menu] = useMenu()
    const dessert = menu.filter(item=>item.category=== 'dessert')
    const soup = menu.filter(item=>item.category=== 'soup')
    const salad = menu.filter(item=>item.category=== 'salad')
    const pizza = menu.filter(item=>item.category=== 'pizza')
    const drinks = menu.filter(item=>item.category=== 'drinks')
    const offered = menu.filter(item=>item.category=== 'offered')

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Our Menu</title>
            </Helmet>
            <Cover image={img} title={'Our Menu'}></Cover>
            <SectionTitle subheading={"Don't miss "}
            heading={'Todays offer'}
            >

            </SectionTitle>
        </div>
    );
};

export default OurMenu;