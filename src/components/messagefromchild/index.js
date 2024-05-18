import React, { useState } from 'react'
import Child from './Child';

const MessageFromChildApp = () => {
    const [message, setMessage] = useState("");

    const getChildMessage = (data) =>{
        setMessage(data)
    }

  return (
    <div>
        <h1>Message from child:{message}</h1>
        <Child getChildMessageData={getChildMessage} />
    </div>
  )
}

export default MessageFromChildApp