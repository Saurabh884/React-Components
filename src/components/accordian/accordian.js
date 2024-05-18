import React, { useState } from 'react'
import "./accordian.css"
const Accordian = ({items}) => {
    const [isExpanded, setIsExpanded] = useState(null)
    const handleToggle = (index) => {
        if(index===isExpanded){
            setIsExpanded(null)
        }
        else{
            setIsExpanded(index);
        }
    }
  return (
    <div className='accordian'>
        {items.map((item,index)=>
        <div className='accordian-items' key={index}>
         <div className='accordian-title'onClick={()=>handleToggle(index)} >{item.title}</div>  
        {isExpanded===index && (<div className='accordian-content'>{item.content} </div>)}
            
        </div>

        
        )}

       
        
    </div>
  )
}

export default Accordian;