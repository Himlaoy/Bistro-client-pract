import React from 'react';

const Cover = ({image, title}) => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("${image}")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                    <p className="mb-5">Would you like to our dish.</p>
                   
                </div>
            </div>
        </div>
    );
};

export default Cover;