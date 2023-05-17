// import React from 'react';
// import { BrowserRouter, Routes, Route, } from 'react-router-dom';
// import './App.css';
// import {} from "antd";
// import Home from './pages/home/Home'
// import Marketplace from './pages/marketplace/Marketplace'
// import Activities from './pages/activities/Activities'
// import Myportfolio from './pages/myportfolio/Myportfolio'
// import More from './pages/more/More'
// import Notfound from './pages/notfound/Notfound'
// import SideMenu from './components/SideMenu';


// const App = () => {
//   return (
//     <BrowserRouter className="App">
//       <SideMenu />
//       <Routes>
//       <Route exact path="/" element={<Home/>} />
//       <Route path="marketplace" element={<Marketplace/>} />
//       <Route path="activities" element={<Activities/>} />
//       <Route path="myportfolio" element={<Myportfolio/>} />
//       <Route path="more" element={<More/>} />
//       <Route path="notfound" element={<Notfound/>} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App;
import { useState } from "react";
import { Space } from "antd";
import "./App.css";
import PageContent from "./components/PageContent/PageContent";
import SideMenu from "./components/SideMenu/SideMenu";
// import LoginPage from "./components/LoginPage"
// import SignUp from "./components/SignUp";
import RegForm from "./components/FormReg";

const App = () => {
  const [isRegistered, setIsRegistered] = useState();
  return <div className="App">
  {isRegistered ? <Space className="SideMenuAndPageContent">
    <SideMenu></SideMenu>
    <PageContent></PageContent>
  </Space> : <RegForm setIsRegistered ={setIsRegistered} />}
  </div>
}

export default App;