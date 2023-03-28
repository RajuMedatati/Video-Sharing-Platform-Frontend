import React, { useState , useEffect} from 'react'
import axios from 'axios';
import Navbar from './Navbar/Navbar';
import "./Myvideos.css"
import Myvideocard from './Myvideocard';
function Myvideos() {
    const [data,setData] = useState([]);
    useEffect(() => {
        const newToken = localStorage.getItem("mytoken")
        axios.post("http://localhost:8080/myvideos",{newToken})
            .then((res) => {
                console.log(res)
                setData(res.data)
            }).catch((err) => {
                console.log(err)
                window.alert("something went wrong")

            })
    }, []);
    console.log(data);

  return (
    <>
    <Navbar/>
     <div id='myvideo-main'>
        <div id='myvideo-left'>
            
           {
            data.map((data)=>{
                return <Myvideocard data={data}/> 
            })
           }
        </div>

        <div id='myvideo-right'>
           
        </div>

    </div>
    </>
   
  )
}

export default Myvideos

