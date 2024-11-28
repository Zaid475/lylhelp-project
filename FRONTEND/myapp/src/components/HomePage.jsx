import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
    const path=useNavigate();
  return (
    <div>

        <h1 style={{fontSize:"20px"}}>Welcome to Template World</h1>
        <p>Click to navigate to TemplateListPage</p>
        <button onClick={()=>path("/templatelist")}>TemplateList</button>


        
      
    </div>
  )
}

export default HomePage
