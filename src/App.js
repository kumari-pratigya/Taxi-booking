import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './component/Home/Home'
import Helmet from 'react-helmet'

import Register from './component/signup/Register'
import Login from './component/Login/Login';
// import OtpForm from './component/Footer/OtpForm/OtpForm';

const Title="Taxi Booking"
function App() {
  return (
    <div className="App">
    
    <Helmet>
    <title> {Title}</title>
    </Helmet>
    <Routes>
         <Route path="/" element={<Home/>}></Route>
       </Routes>
       <Routes>
         <Route path="/company"></Route>
       </Routes>
       <Routes>
         <Route path="/help"></Route>
       </Routes>
       <Routes>
         <Route path="/safety"></Route>
       </Routes>
       <Routes>
         <Route path="/covid"></Route>
       </Routes>
       <Routes>
         <Route path="/global"></Route>
       </Routes>
       <Routes>
         <Route path="/products"></Route>
       </Routes>
       <Routes>
         <Route path="/login" element={<Login/>}></Route>
       </Routes>
       <Routes>
         <Route path="/signup"  element={<Register/>}> </Route>
       </Routes>
       
    </div>
  );
}

export default App;
