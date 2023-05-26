import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../shared/sectionTitle/SectionTitle';
import useMenu from '../../../Hook/useMenu';
import MenuCategory from '../../../shared/MenuCategory/MenuCategory';

const Menu = () => {

    const [menu] = useMenu()

    const popular = menu.filter(pop => pop.category === 'popular')
   

    return (
        <div>
            <SectionTitle
                subheading={'Check it out'}
                heading={'from our menu'}
            ></SectionTitle>
            <MenuCategory item={popular}></MenuCategory>

        </div>
    );
};

export default Menu;
