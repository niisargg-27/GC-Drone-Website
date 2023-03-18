import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';

import Navbar from './Components/Navbar';
import LoginPage from './Components/LoginPage';
import SignupPage from './Components/SignupPage';
import Home from './Components/Hero/Home'
import Footer from './Components/Footer/Footer';
import UserOrder from './Components/UserOrder';
import OrderHistory from './Components/OrderHistory';
import AdminLogin from "./Components/Hero/AdminLogin";
import DashBoard from "./Components/DashBoard";


function App() {
  return (
  //   <>
  //   <Navbar/>
  //   {/* <BrowserRouter>
  //     <Routes>
  //       <Route path="/" element={<Navbar />}>
  //         {/* <Route path="signup" element={<SignupPage/>} /> }
  //         <Route path="login" element={<LoginPage/>} />
  //       </Route>
  //     </Routes>
  //   </BrowserRouter>*/
  //   <LoginPage/>
  // }
  // <SignupPage/>
  //   </>
  <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='user-order' element={<UserOrder/>} />
      <Route path='login' element={<LoginPage/>} />
      <Route path='signup' element={<SignupPage/>} />
      <Route path='past-orders' element={<OrderHistory/>} />
      <Route path='login-admin' element={<AdminLogin/>} />
      <Route path='dashboard' element={<DashBoard/>} />
    </Routes>
    
  </Router>
  // <Navbar/>
  );
}

export default App;
