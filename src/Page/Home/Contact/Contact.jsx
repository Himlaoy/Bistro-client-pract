import React from 'react';
import './Contact.css'
import SectionTitle from '../../../shared/sectionTitle/SectionTitle';
import feature from '../../../assets/home/featured.jpg'

const Contact = () => {
    return (
        <div className='contact'>
            <SectionTitle
                subheading={'Check it out'}
                heading={'FROM OUR MENU'}
            >
            </SectionTitle>
            <div>
                <img src={feature} alt="" />
                <div>
                    <p>March 20, 2023</p>
                    <p className='uppercase'>WHERE CAN I GET SOME?</p>
                </div>

            </div>

        </div>
    );
};

export default Contact;