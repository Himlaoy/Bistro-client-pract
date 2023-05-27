import React from 'react';
import MenuItem from '../../Page/Home/MenuItem/MenuItem';
import Cover from '../Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ item, title, img }) => {
    return (
        <div className='py-10'>
           {title && <Cover image={img} title={title}></Cover>}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                {

                    item.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}> <button className="btn btn-outline border border-b-4 text-center py-4">{title}</button></Link>
        </div>
    );
};

export default MenuCategory;