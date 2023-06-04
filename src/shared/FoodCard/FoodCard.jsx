import React from 'react';

const FoodCard = ({ item }) => {
    const { name, recipe, price, image } = item
    return (
        <div className="card w-80 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className='absolute bg-black right-0 top-0 mr-4 rounded px-2 text-white mt-4'>$ {price}</p>
            <div className="card-body text-center items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline border border-b-4">Add to card</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;