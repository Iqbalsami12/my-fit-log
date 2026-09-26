import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <div className='flex justify-between  mt-12 container mx-auto  '>
            <div className='flex gap-1.5'>
                <Image
                src='/assets/logo.png'
                alt='logo'
                width={30}
                height={30}
                />
                <h2 className='font-bold text-2xl'>FITLOG</h2>
            </div>
                <div>
                    <p className='text-gray-400'> <FontAwesomeIcon icon={faCopyright}/> Fitlog - Workout Library. Train, log honest. </p>
                </div>
        </div>
    );
};

export default Footer;