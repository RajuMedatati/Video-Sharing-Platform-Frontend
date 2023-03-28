import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import "./Card.css"
import Videoplayer from './Videoplayer'
const Card = ({data})=> {
    const [toggle,setToggle] = useState(false)
  return (
    <>{!toggle?
    <div className='card'>
        <img src={data.imgUrl} alt='image not found'/>
        <div className='btn'>
            <img src='https://www.freeiconspng.com/thumbs/video-play-icon/video-play-icon-24.png' alt='img not' onClick={()=>{setToggle(true)}}/>
        </div>
        <h3>{data.tittle}</h3>
    </div>:
    <Videoplayer setToggle={setToggle} data={data}/>
    }

    
    </>
  )
}
export default Card
