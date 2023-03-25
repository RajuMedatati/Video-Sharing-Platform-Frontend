import "./Style.css"
import React,{useState }from "react";


import { useNavigate } from 'react-router-dom';

const Register=()=>{
    const navigate = useNavigate();

    const [user,setUser]=useState({name:"",email:"",phone:"",profession:"",password:"",cpassword:""});

      let name,value;
      const handleInputs=(e)=>{
        // console.log(e)
        name=e.target.name;
        value=e.target.value;
        setUser({...user,[name]:value})
        console.log(user)


    }

    const Postdata=async(e)=>{
        e.preventDefault();
        const {name,email,phone,profession,password,cpassword}=user;
        const res= await fetch("/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({name,email,phone,profession,password,cpassword})
        });
        const data=await res.json()
        if(data.status==422 || !data){
            window.alert("INVALID Registration")
            console.log("INVALID Registration")
        }
        else{
            window.alert(" Registration Succesfull")
            console.log("Registration succesfull")
            // history.push("/signin")
        }
      
    }
    return(
        <>
       <main>
            <section className="sec-first">
            <img src="https://img.buzzfeed.com/buzzfeed-static/static/2022-05/6/11/campaign_images/9615c13b38f0/the-47-best-mother-son-movies-to-watch-on-mothers-2-1448-1651836261-30_dblbig.jpg?resize=1200:*" alt=""/>
                <div className='logo'>
                <h1 >Tuner</h1>
                <div >Enjoy Multiple videos at one place</div>
                
                </div>
                <button  onClick={() => {navigate("/sign")}}>Signin</button>
            </section>
            <section className="sec-second register">
                <form method="POST" >
                    <h1>Register</h1>
                    <div>Register to continue access pages</div>
                    <button id='btn-circle'>+</button><br />
                    <input type="text" name="name"  id="name" placeholder="Name" value={user.name} onChange={handleInputs}/><br />
                    <input type="email" name="email" id="email" placeholder="Email" value={user.email} onChange={handleInputs}/><br />
                    <input type="number" name="phone" id="phone" placeholder="Phone" value={user.phone} onChange={handleInputs}/><br />
                    <input type="text" name="profession" id="profession" placeholder="Profession" value={user.profession} onChange={handleInputs}/><br />
                    <input type="password" name="password" id="password" placeholder="Password" value={user.password} onChange={handleInputs}/><br />
                    <input type="password" name="cpassword" id="cpasswword" placeholder="Confirm Password" value={user.cpassword} onChange={handleInputs}/><br />
                    <input  className="submit" type="submit" name="signup" id="signup" value="Register" onClick={Postdata}></input><br />
                </form>
            </section>
        </main>
        </>
    )
}
export default Register;