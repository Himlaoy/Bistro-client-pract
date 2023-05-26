import React from 'react';

const SectionTitle = ({subheading, heading}) => {
    return (
        <div className='text-center py-5 space-y-2'>
            <p className='text-orange-300 uppercase'>{subheading}</p>
            <p className='uppercase'>{heading}</p>
        </div>
    );
};

export default SectionTitle;