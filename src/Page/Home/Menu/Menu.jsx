import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../shared/sectionTitle/SectionTitle';
import MenuItem from '../MenuItem/MenuItem';

const Menu = () => {
    const [menu, setMenu] = useState([])

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popular = data.filter(pop => pop.category === 'popular')
                setMenu(popular)

            })
    }, [])

    return (
        <div>
            <SectionTitle
                subheading={'Check it out'}
                heading={'from our menu'}
            ></SectionTitle>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                {

                    menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>

        </div>
    );
};

export default Menu;
