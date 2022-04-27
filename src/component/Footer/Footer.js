import React from 'react'
import {BsFacebook,BsTwitter,BsSkype,BsGoogle} from 'react-icons/bs'
import {IoIosArrowForward} from 'react-icons/io'
import {IoMdCall,IoMdMail} from 'react-icons/io'
import './Footer.css'
import IMAGES from '../../img/Image';
const Footer = () => {
  return (
    <>
      <div className='main-footer'>
        <div className='container-fluid'>
            <div className='row'>
            <div className='col-md-1'></div>
                <div className='col-md mr-3'>
                    <h3 className="footerheading">ABOUT US</h3>
                    <p className='paragraph'>Nullam orci dui, dictum et magna sollicitudin, tempor blandit erat. Maecenas suscipit tellus sit amet augue placerat fringilla a id lacus. Fusce tincidunt in leo lacinia condimentum.</p>
                 <div > <BsFacebook className='footericon '/>
                 <BsTwitter className='footericon '/>
                <BsSkype className='footericon '/>  
                <BsGoogle className='footericon '/></div>
                </div>
                <div className='col-md mx-2'>
                    <h3 className="footerheading"> EXPLORE</h3>
                    <p className='paragraph'>  <IoIosArrowForward className="arrowforward1"/>Gallery</p>  
                    <hr/>
                    <p className='paragraph2'>  <IoIosArrowForward className="arrowforward2"/>Testimonials</p>  
                    <hr/>
                    <p className='paragraph3'>  <IoIosArrowForward className="arrowforward3"/>Services</p>  
                    <hr/>
                    <p className='paragraph4'>  <IoIosArrowForward className="arrowforward4"/>shortcodes</p>  
                    <hr/>
                    
                </div>
                <div className='col-md mx-2'>
                    <p className='third'>  <IoIosArrowForward className="arrowforward1"/>Contacts</p>  
                    <hr/>
                    <p className='paragraph2'>  <IoIosArrowForward className="arrowforward1"/>Blog</p>  
                    <hr/>
                    <p className='paragraph3'>  <IoIosArrowForward className="arrowforward1"/>Get Taxi</p>  
                    <hr/>
                </div>
                <div className='col-md mx-2'>
                    <h3 className="footerheading">CONTACT US</h3>
                   <h6 className='paragraph'>Address:</h6><p>43 2-nd Avenue, New York, NY 29004-7153   </p>
                 <p className='paragraph2'> <IoMdCall className='call'/>800-5-800</p>
                 <p className='paragraph3'> <IoMdMail className='mail'/> gettaxi@taxipark.co.uk</p>
                 <p className='paragraph4'> <BsSkype className='skype'/>gettaxipark</p>
                </div>
                <div className='col-md-1'></div>
            </div>
            <div className='row footerbottom'>
           <p className=' col-md footerbottomparagraph'>Like-themes 2022 © All Rights Reserved Terms of use</p> 
           <div className='col-md'></div>
            <div className='col-md'></div>
           <div className='col-md'>
           <img className='footerbottomimg' src={IMAGES.CarFooter} alt="car"/>
            </div>
            
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer
