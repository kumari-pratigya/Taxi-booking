import React from 'react'
import { Form ,Button,Card} from 'react-bootstrap'
import './Section.css'
import 'animate.css';
import IMAGES from '../../img/Image';

const Sections = () => {
  return (
    <>
    <div className='main'>
    <div className='text1'>
    <h2> Get a taxi now</h2>
      <h1>800-5-800</h1>
    </div>
     
       <div className='section1'>
      <center> <img src={IMAGES.Car} alt="image1"/></center>
      <div className='row  row1'>
      <div className="col-md  icon">
        <img src={IMAGES.Icon1}  alt='image2'/>
        <p> STANDART</p>
       </div>
       
        <div className="col-md  icon">
          <img src={IMAGES.Icon2} alt="image3"/>
           <p> BUSSINESS</p>
         </div>

         <div className="col-md  icon">
          <img src={IMAGES.Icon3} alt="image4"/>
         <p> VIP</p>
         </div>

         <div className="col-md icon">
           <img src={IMAGES.Icon4} alt="image5"/>
           <p> BUS-MINIVAN</p>
         </div>
      </div>
    
         <Form >
  <Form.Group className=" row form" controlId="exampleForm.ControlInput1">
  
    <Form.Control className="col-md mb-2 mx-3 input" type="text" placeholder="From Address" />
    <Form.Control className=" col-md mb-2 mx-3 input" type="text" placeholder="To" />
    
    
    <Form.Control className=" col-md mb-2 mx-3 input" type="text" placeholder="Phone Number" />
    
    <Form.Control className="col-md mb-2 mx-3 input" type="text" placeholder="Car Type" />
  </Form.Group>
  </Form> 
  <div >
  <Button className="btn btn-danger btn-lg booking ">Get Taxi</Button>
  </div>
   </div> 

  <div className='section2'>
      <h2 className='heading1'>Welcome</h2>
      <h1 className='heading2'>Our Services</h1>
      <div className='row'>
      <div className='col-md'>
      <Card className='card'>
 <center ><Card.Img  className='cardimg'  src={IMAGES.Card1} /></center>
  <Card.Body>
    <Card.Title>RAPID CITY TRANSFER</Card.Title>
    <Card.Text>
    We will bring you quickly and comfortably to anywhere in your city
    </Card.Text>
  </Card.Body>
</Card>
</div>
  <div className='col-md'>
 <Card className='card '>
 <center> <Card.Img  className='cardimg' src={IMAGES.Card2} /></center>
  <Card.Body>
    <Card.Title>BOOKING A HOTEL</Card.Title>
    <Card.Text>
    If you need a comfortable hotel, our operators will book it for you, and take a taxi to the address
    </Card.Text>
  </Card.Body>
</Card>
</div>
<div className='col-md'>
 <Card className='card ' >
 <center> <Card.Img   className='cardimg'  src={IMAGES.Card3} /></center>
  <Card.Body>
    <Card.Title>AIRPORT TRANSFER</Card.Title>
    <Card.Text>
    We will bring you quickly and comfortably to anywhere in your city
    </Card.Text>
  </Card.Body>
</Card>
</div>
  <div className='col-md '>
 <Card className='card '>
  <center><Card.Img className='cardimg'  src={IMAGES.card4} /></center>
  <Card.Body>
    <Card.Title>BAGGAGE TRANSPORT</Card.Title>
    <Card.Text>
    If you need a comfortable hotel, our operators will book it for you, and take a taxi to the address
    </Card.Text>
  </Card.Body>
</Card>
</div>

</div>

   </div>
      </div>
    </>
  )
}

export default Sections
