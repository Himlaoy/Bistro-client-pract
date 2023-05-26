import React from 'react';
import MenuItem from '../../Page/Home/MenuItem/MenuItem';
import Cover from '../Cover/Cover';

const MenuCategory = ({ item, title, img }) => {
    return (
        <div className='py-10'>
            <Cover image={img} title={title}></Cover>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                {

                    item.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;