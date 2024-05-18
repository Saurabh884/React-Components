import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [timer, setTimer] = useState(0);
    const [isActive, setIsActive] = useState(false)


    useEffect(()=>{
        let interval = null;

        if(isActive){
            interval = setInterval(()=>{
            setTimer(timer=>timer+1)
            },1000)
        }

        return ()=>clearInterval(interval)
    },[isActive])

const handleStartStopTimer = () => {
    setIsActive(!isActive)
}

const handleResetTimer = () => {
    setTimer(0);
    setIsActive(false);
}

  return (
    <div> 
        <h1> Timer:{timer} </h1>
        <div>
            <button onClick={handleStartStopTimer}>{isActive?"Stop":"Start"}</button>
          
            <button onClick={handleResetTimer}>Reset</button>
        </div>
  </div>
  )
}

export default Timer;