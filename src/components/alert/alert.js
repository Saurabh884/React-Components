import React from 'react';
import "./alert.css"

const Alert = ({message,handleCloseModal,handleOpenModal,open}) => {
  return <>
   {open && (<div className='modal'>
        <div className='modal-content'>
             <span className='close' onClick={handleCloseModal}>&times;</span>
             <p>{message}</p>
        </div>

    </div>)}
    </>
}

export default Alert;