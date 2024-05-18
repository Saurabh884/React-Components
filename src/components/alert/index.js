import React, { useState } from 'react'
import Alert from './alert'

const AlertApp = () => {
  const [open, setOpen] = useState(false)
  const handleOpenModal = () =>{
    setOpen(true)
  }

  const handleCloseModal = () => {
    setOpen(false)
  }

  return (
    <div>
        <button onClick={handleOpenModal}>Open Modal</button>
        <Alert message="I am modal content" open={open} handleCloseModal={handleCloseModal} handleOpenModal={handleOpenModal} />
    </div>
  )
}

export default AlertApp;