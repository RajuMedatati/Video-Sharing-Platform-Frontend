import React from "react"
import Deletecard from "./Deletecard"
import { useState } from "react"
import"./Myvideos.css"
const Myvideocard = ({data})=> {
    const [toggle,setToggle] = useState(false)
    const handleOnOff = () =>{
        if(!toggle){
            setToggle(true)
        }else{
            setToggle(false)
        }
    }
  return (
    <>{!toggle?
    <div className='my-video-card'>
        <img src={data.imgUrl} alt='image not found'/>
        <div className='my-video-btn'>
            <img src='https://thumbs.dreamstime.com/b/computer-generated-illustration-recycle-bin-icon-isolated-white-background-suitable-logo-delete-icon-button-175612353.jpg' alt='img not' onClick={handleOnOff}/>
        </div>
        <h3>{data.tittle}</h3>
    </div>:
    <Deletecard setToggle={setToggle} data={data}/>
    }

    
    </>
  )
}
export default Myvideocard