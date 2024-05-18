import React, { useState } from 'react'

const Child = ({getChildMessageData}) => {
    const [messageData, setMessageData] = useState("");
    
    const handleInputMessage = (e) => {
        setMessageData(e.target.value);

    }

    const handleGetMessage = () =>{
      getChildMessageData(messageData);
      setMessageData("");
    }
  return (
    <div>
        <input type='text' placeholder='Enter message' value={messageData} onChange={handleInputMessage} />
        <button onClick={handleGetMessage}> GetMessage</button>
    </div>
  )
}

export default Child