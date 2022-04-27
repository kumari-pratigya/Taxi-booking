import React,{useState} from 'react'
import axios from 'axios'
import NavbarRouting from '../Navbar/Navbar'
import{Form,Button, Container} from 'react-bootstrap'
import './Register.css'
import Footer from '../Footer/Footer'
import IMAGES from '../../img/Image'
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import OtpForm from '../OtpForm/OtpForm'

const Register = () => {
  let formdata=new FormData();
   const [data,setData]=useState({fname:"",lname:"",email:"",phoneNumber:"",password:"",roles:"",pImage:""});
   const[Register,setRegister]=useState(true);

  const firstNameHandle=(event)=>{
    setData({...data,fname:event.target.value});
    console.log(data);
 }
 const lNameHandle=(event)=>{
  setData({...data,lname:event.target.value});
  console.log(data);
}
 const handleEmail=(event)=>{
      setData({...data,email:event.target.value});
      console.log(data);
 }
 const handlePhone=(event)=>{
  setData({...data,phoneNumber:event.target.value});
  console.log(data);
}
const handlePassword=(event)=>{
  setData({...data, password:event.target.value});
  console.log(data);
 }
 const handleRole=(event)=>{
  setData({...data, roles:event.target.value});
  console.log(data);
 }

 const handleImage=(event)=>{
  // setData({...data, PImage:event.target.value,});
  formdata.append("pImage",event.target.files);
  // console.log(data);
 }
 
   const handleSubmit=(e)=>{
     console.log(data)
      e.preventDefault();
    axios.post("http://taxi-booking-app.herokuapp.com/api/user/signup",data,formdata)
    .then(response =>{ 
      console.log(response.data);
     
      if(response.data==='Invalid Role'){
        toast.error("Role is empty");
        setRegister(true);
      }
      else if(response.data==='email already exist'){
        toast.error("email is exist");
        setRegister(true);
      }
      else{
        setRegister(false);
      }
     })
    .catch(error=>{
      console.log(error);
    })
 }

  return (
    <>
    <NavbarRouting/>
  <ToastContainer />

    {
     ! Register?
        <Container className='FormContainer1'>
          <img src={IMAGES.Logo} alt="logo"/>
          <h3>Sign up with Taxi Park</h3>
    <Form >
    <div className='row '>
  <Form.Group className='col-md mb-3 '>
    <Form.Label className='formlabel1'>Firstname</Form.Label>
    <Form.Control className='forminput' type="text" placeholder=" First Name" onChange={firstNameHandle} />
  </Form.Group>

  <Form.Group  className='col-md mb-3'>
    <Form.Label  className='formlabel1'>Lastname</Form.Label>
    <Form.Control className="forminput"  type="text" placeholder=" Last Name" onChange={lNameHandle} />
  </Form.Group>
</div>

  <Form.Group className="col-md mb-3" >
    <Form.Label  className='formlabel1'> Enter your Email</Form.Label>
    <Form.Control className="forminput" type="text" placeholder="Email"  onChange={handleEmail}/>
  </Form.Group>

  <Form.Group className="col-md mb-3" >
    <Form.Label  className='formlabel1'>Enter your Phone Number</Form.Label>
    <Form.Control  className="forminput" type="number" placeholder="Phone Number" onChange= {handlePhone} />
  </Form.Group>

  <Form.Group className=" col-md mb-3" >
    <Form.Label  className='formlabel1'> Enter your Password</Form.Label>
    <Form.Control  className="forminput" type="Password" placeholder="Password" onChange={handlePassword} />
  </Form.Group>


  <Form.Group className="col-md mb-3" >
    <Form.Label  className='formlabel1'> Roles</Form.Label>
    <select className='select1'  onChange={handleRole}>
    <option value="">---</option>
      <option value="driver">Driver</option>
      <option value="user">User</option>
    </select>
  </Form.Group>

  <Form.Group className="col-md mb-3" >
    <Form.Label  className='formlabel1'>please enter your profile picture </Form.Label>
    <Form.Control  className="forminput" type="file" onChange={handleImage} />
  </Form.Group>

<div className='d-grid  submitbutton'>
  <Button variant="secondary"  size="lg" type="submit" onClick={handleSubmit}>
    Signup
  </Button>

  </div>
</Form>
</Container>

:
<>
<OtpForm />
</>
}

    
<Footer/>
    </>
  )
}

export default Register
