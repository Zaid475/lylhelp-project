import React, { useState } from 'react'

import "../styles/Templatelist.css"
import Xyz from './xyz'

const Templatelist = () => {
    const[activestate,updatestate]=useState("")

    const handletab=(bat)=>{
        updatestate(bat);


    }
  return (
    <div>
        <p style={{fontSize:"22px",marginRight:"2000px"}}>Templates</p>

        <div style={{border:"1px solid black",display:"flex"}}>
            <div >
                <p onClick={()=>handletab("xyz")} style={{color:"#6f7071"}}>Template Library </p>
            </div>
            <div>
                <p style={{marginLeft:"20px", color:"#6f7071"}}> Saved Templates</p>
            </div>
        </div>
        {activestate==="xyz" && <div><Xyz/></div>}
      
    </div>
  )
}

export default Templatelist
