import React from 'react';
import MenuItem from '../../Page/Home/MenuItem/MenuItem';

const MenuCategory = ({ item }) => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
            {

                item.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
            }
        </div>
    );
};

export default MenuCategory;