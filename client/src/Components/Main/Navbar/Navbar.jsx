import "./Style.css"
import { useNavigate } from "react-router-dom"
import { useState } from "react";


function Navbar() {
    const [toggle,setToggle] = useState(true)
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
    </nav>: <nav>
      <div className="Container">
        <span className="heading">Tuner</span>
        <input placeholder="Search" className="input" type="text" />
        <button className="btn-3 com-btn" onClick={()=>setToggle(false)}>Sign out</button>
        <span className="com-btn">|</span>
        <button className="btn-2 com-btn">Upload</button>
        <span className="com-btn">|</span>
        <button className="btn-11 com-btn">My Videos</button>
      </div>
    </nav>}
  </>);
}

export default Navbar;