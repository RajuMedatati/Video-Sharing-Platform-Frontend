import './Style.css'
import React from 'react';
import { useNavigate } from 'react-router-dom';


function SingIn(){
    const navigate = useNavigate();
    return (<>
        <main>
            <section className="sec-first">
                <img src="https://img.buzzfeed.com/buzzfeed-static/static/2022-05/6/11/campaign_images/9615c13b38f0/the-47-best-mother-son-movies-to-watch-on-mothers-2-1448-1651836261-30_dblbig.jpg?resize=1200:*" alt=""/>
                <div className='logo'>
                <h1 >Tuner</h1>
                <div >Enjoy Multiple videos at one place</div>
                
                </div>
                <button  onClick={() => navigate('/register')}>Register</button>
            </section>
            <section className="sec-second">
                <form action="#"  className='formdata'>
                    <h1>Sing In</h1>
                    <div>Sing in to continue access pages</div><br />
                    <input type="email" name="email" id="email" placeholder="Email"/><br />
                    <input type="password" name="passord" id="password" placeholder="Password"/><br />
                    <button type="submit">Sing in</button>
                </form>
            </section>
        </main>
    </>);
}
export default SingIn;