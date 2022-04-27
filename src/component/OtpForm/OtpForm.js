import axios from 'axios'
import React,{useState} from 'react'
import{Form,Button} from 'react-bootstrap'
import './OtpForm.css'
 
const OtpForm = () => {
  const[data,setData]=useState({phoneNumber:"",otpCode:""});
  const phoneHandler=(event)=>{
    console.log(data)
    setData({...data,phoneNumber:event.target.value})
  }
  const otpHandler=(event)=>{
    console.log(data);
    setData({...data,otpCode:event.target.value})
  }
   const submitHandler=(e)=>{
    e.preventDefault();
    axios.post("http://taxi-booking-app.herokuapp.com/api/user/verifyotp",data)
  .then(response =>{ 
    console.log(response);
   } )
  .catch(error=>{
    console.log(error);
  })
  
  
  }
  return (
    <>
    <div className='VerifyformHeading'>
    <h2>Verification Form</h2>
    <Form className='verifyForm'>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="formlabel">phone Number</Form.Label>
    <Form.Control  className="forminput"  type="number" placeholder="Enter phone Number" onChange={phoneHandler}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label  className="formlabel">Otp</Form.Label>
    <Form.Control  className="forminput"  type="text" placeholder="otp" onChange={otpHandler}/>
  </Form.Group>
  <div className='d-grid submitbutton'>
  <Button variant="secondary"  size="lg" type="submit" onClick={submitHandler}>
    verify
  </Button>
  </div>
</Form>
</div>
    </>
  )
}

export default OtpForm
