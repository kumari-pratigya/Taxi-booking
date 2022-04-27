import {useState,createContext} from 'react'
import {Form,Button,Container, Navbar} from 'react-bootstrap'
import NavbarRouting from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './Login.css'
import IMAGES from '../../img/Image'
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const firstname=createContext(false);
const Login = () => {
  document.title="login"

  // const [email,setEmail]=useState('');
  // const [password,setpassword]=useState('');
  const [data,setData]=useState({email:"",password:""});
  const[login,SetLogin]=useState(false);
  <firstname.Provider  value={[login,SetLogin]}>
  <Navbar/>
</firstname.Provider>

  const handleEmail=(event)=>{
     setData({email:event.target.value});
    console.log(data);
  }
  const handlePassword=(event)=>{
    setData({...data, password:event.target.value});
   console.log(data);
 }

 const submitData=(event)=>{
      event.preventDefault();
      console.log(data);
      axios.post("http://taxi-booking-app.herokuapp.com/api/user/login",data)
      .then(response=>{
        console.log(response);
        localStorage.setItem("token",response.data.token);
        if(response.data==="Email Not Matched"){
          toast.error("please check email");
        }
        else if(response.data==="User Password Not MAtch"){
          toast.error("password is Incorrect");
        }
        else if(response.data.result==="User Matched"){
          toast.success("Succesful Login");
          SetLogin(true)
        }
      
      })
      .catch(error=>{
        console.log("error");
        toast.error("error");
      })
  } 
 
//   console.log(email)
//  console.log(password);

  return (
    <>
    <NavbarRouting />
    <ToastContainer />
    {login===false?
    <Container className='FormContainer'>
    <img src={IMAGES.Logo} alt="logo"/>
    <h3>Login with Taxi Park</h3>
      <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="formlabel">Email address</Form.Label>
    <Form.Control  className="forminput" onChange={handleEmail} type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label  className="formlabel">Password</Form.Label>
    <Form.Control  className="forminput" onChange={handlePassword} autoComplete="on" type="password" placeholder="Password" />
  </Form.Group>
  <div className='d-grid submitbutton'>
  <Button variant="secondary"  size="lg" type="submit" onClick={submitData}>
    Login
  </Button>
  </div>
</Form>
</Container>
:
<>
<button>logout</button>
</>
}
<Footer/>


    </>
  )
}

export default Login
