import React from "react";
import "./Deletecard.css"
const Deletecard =({setToggle,data})=> {
  return (
    <>
     <div id="delete-main">
        <div id="photo">
            <img src={data.imgUrl} alt="not found"/>
        </div>
        <div id="photo-name">
            <h1>{data.tittle}</h1>
        </div>
        <div id="photo-desc">
            <p>{data.desc}</p>
        </div>
        <div id="photo-btns">
            <button>Delete</button>
            <button onClick={()=>setToggle(false)}>Cancel</button>
        </div>
         
    </div>
    </>
  
  )
}

export default Deletecard
