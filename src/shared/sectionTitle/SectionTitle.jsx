import React from 'react';

const SectionTitle = ({subheading, heading}) => {
    return (
        <div className='text-center py-5 space-y-4 md:w-3/12 mx-auto'>
            <p className='text-orange-300 uppercase'>--- {subheading} -- -</p>
            <p className='uppercase border-y-4 py-4 '>{heading}</p>
        </div>
    );
};

export default SectionTitle;