import React from 'react';

const MenuItem = ({item}) => {
    const {name, recipe, price,image } = item
    return (
        <div className='flex gap-4 py-5'>
            <img className='w-[120px]' style={{borderRadius:"0px 200px 200px 200px"}} src={image} alt="" />
            <div>
                <p className='uppercase '>{name}-----------------</p>
                <p>{recipe}</p>
            </div>
            <p className='text-orange-400'>${price}</p>
            
        </div>
    );
};

export default MenuItem;