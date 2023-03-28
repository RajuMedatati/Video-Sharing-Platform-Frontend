import React from 'react';
import Singin from './Components/Sign-Register/Signin.jsx';
import Home from './Components/Main/Landingpage.jsx';
import Register from './Components/Sign-Register/Register.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Myvideos from './Components/Main/Myvideos.jsx';

function App() {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign" element={<Singin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/myvideos" element={<Myvideos />} />
      </Routes>
    </BrowserRouter>
  </>);

}
export default App;
