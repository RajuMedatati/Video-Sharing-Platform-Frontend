import "./Style.css"
import { useNavigate } from "react-router-dom"
import { useState,useEffect } from "react"
import Upload from "./Upload.jsx";
import axios from "axios";


function Navbar() {
    const [toggle,setToggle] = useState(false);
    const [open,setOpen] = useState(false)
    const [q,setQ] = useState("");
  const navigateResgister = useNavigate();
  const navigateSignIn = useNavigate();
  const nav1 = useNavigate();
  const nav2 = useNavigate();
  const nav3 = useNavigate();
  const nav4 = useNavigate();
  const token=localStorage.getItem("mytoken");


  useEffect(()=>{
    if(token){
      setToggle(true)
    }else{
      setToggle(false)
    }
    
   },[token])

   const handleSignout=async ()=>{
    const newToken=localStorage.getItem("mytoken")
    axios.post("http://localhost:8080/logout",{newToken})
        .then((res)=>{
          if(res.status==200){
            window.alert("logout sucessfully")
            localStorage.clear()
            setToggle(false)
            nav3("/")
            
           }
        }).catch((err)=>{
            console.log(err)
            window.alert("error in signout")

        })
    
   }
 
  
  return (<>
  {!toggle?
    <nav>
      <div className="Container">
        <span className="heading" onClick={()=>{nav4("/")}}>Tuner</span>
        <input placeholder="Search" className="input" type="text" onChange={(e)=>setQ(e.target.value)}/>
        <div className="search-btn" onClick={()=>nav2(`/search?q=${q}`)}><img src="https://icon-library.com/images/blue-search-icon/blue-search-icon-23.jpg" alt="Search" /></div>
        <button className="btn-2 com-btn" onClick={() => { navigateResgister('/register') }}>Register</button>
        <span className="com-btn">|</span>
        <button className="btn-1 com-btn" onClick={() => { navigateSignIn('/sign') }}>Login</button>
      </div>
    </nav>: <>
    <nav>
      <div className="Container">
        <span className="heading" onClick={()=>{nav4("/")}}>Tuner</span>
        <input placeholder="Search" className="input" type="text" onChange={(e)=>setQ(e.target.value)}/>
        <div  className="search-btn" onClick={()=>nav2(`/search?q=${q}`)}><img src="https://icon-library.com/images/blue-search-icon/blue-search-icon-23.jpg" alt="Search" /></div>
        <button className="btn-3 com-btn" onClick={handleSignout} >Sign out</button>
        <span className="com-btn">|</span>
        <button className="btn-2 com-btn" onClick={()=>setOpen(true)}>Upload</button>
        <span className="com-btn">|</span>
        <button className="btn-11 com-btn" onClick={()=>{nav1("/myvideos")}}>My Videos</button>
      </div>
    </nav>
    {open && <Upload setOpen={setOpen}/>}
    </>
    }
  </>);
}

export default Navbar;
