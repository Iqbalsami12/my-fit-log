'use client'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface RemoveButtonsProps{
    onRemove: () => void;
}


const RemoveButtons = ({onRemove}: RemoveButtonsProps) => {

    return (
        <div>
            <button onClick={onRemove}
            className='text-gray-400 hover:text-red-500 p-2'
            >
            
            <FontAwesomeIcon icon={faXmark}/>

            </button>
        </div>
    );
};

export default RemoveButtons;