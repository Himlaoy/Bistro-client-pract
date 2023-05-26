import React from 'react';
import './Contact.css'
import SectionTitle from '../../../shared/sectionTitle/SectionTitle';
import feature from '../../../assets/home/featured.jpg'

const Contact = () => {
    return (
        <div className='contact bg-fixed p-16'>
            <SectionTitle
                subheading={'Check it out'}
                heading={'FROM OUR MENU'}
            >
            </SectionTitle>
            <div className='flex gap-4 justify-center items-center'>
                <div>
                    <img className='rounded' src={feature} alt="" />
                </div>
                <div>
                    <p>March 20, 2023</p>
                    <p className='uppercase'>WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                </div>

            </div>

        </div>
    );
};

export default Contact;