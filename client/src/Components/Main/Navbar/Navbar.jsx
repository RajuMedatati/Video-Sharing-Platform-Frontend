import "./Style.css"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import Upload from "./Upload.jsx";


function Navbar() {
    const [toggle,setToggle] = useState(true);
    const [open,setOpen] = useState(false)
  const navigateResgister = useNavigate();
  const navigateSignIn = useNavigate();
  
  return (<>
  {!toggle?
    <nav>
      <div className="Container">
        <span className="heading">Tuner</span>
        <input placeholder="Search" className="input" type="text" />
        <button className="btn-2 com-btn" onClick={() => { navigateResgister('/register') }}>Register</button>
        <span className="com-btn">|</span>
        <button className="btn-1 com-btn" onClick={() => { navigateSignIn('/sign') }}>Login</button>
      </div>
    </nav>: <>
    <nav>
      <div className="Container">
        <span className="heading">Tuner</span>
        <input placeholder="Search" className="input" type="text" />
        <button className="btn-3 com-btn" onClick={()=>setToggle(false)}>Sign out</button>
        <span className="com-btn">|</span>
        <button className="btn-2 com-btn" onClick={()=>setOpen(true)}>Upload</button>
        <span className="com-btn">|</span>
        <button className="btn-11 com-btn">My Videos</button>
      </div>
    </nav>
    {open && <Upload setOpen={setOpen}/>}
    </>
    }
  </>);
}

export default Navbar;
