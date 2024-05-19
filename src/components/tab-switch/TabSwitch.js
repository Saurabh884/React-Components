import React, { useState } from 'react'
import "./index.css"

const TabSwitch = () => {
     const [currentTab, setCurrentTab] = useState("tab1");

     const handleTabs = (tab) => {
        setCurrentTab(tab);

     }

  return (
    <div className='tabs-container'>
        <div className='tabs'>
            <button className={currentTab === "tab1" ? 'active' : ''}  onClick={()=>handleTabs("tab1")}>Tab1</button>
            <button className={currentTab === "tab2" ? 'active' : ''}  onClick={()=>handleTabs("tab2")}>Tab2</button>
            <button className={currentTab === "tab3" ? 'active' : ''}  onClick={()=>handleTabs("tab3")}>Tab3</button>
        </div> 
       <div className='tabs-content'> 
        { currentTab==="tab1" && <div>Content of tab 1</div>}
        { currentTab==="tab2" && <div>Content of tab 2</div>}
        { currentTab==="tab3" && <div>Content of tab 3</div>}
       </div>
    </div>
  )
}

export default TabSwitch;