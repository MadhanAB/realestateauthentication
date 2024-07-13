import './Contact.css';
import image1 from "../images/logo-white.svg";
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Footer from "../components/Footer";


export default function Contact(){
   
   

    return(
        <>
         <Navbar />

         <Contactus>
          <Contactmain>Contact us</Contactmain>
          <Contactnext>Get in touch with us</Contactnext>
          <Contactpara>Whether you're a prospective student, a current learner, 
            a business partner, or a member of the media, we're here to help.
             Reach out to us with your questions, comments, or requests. We look forward to connecting with you!</Contactpara>
         </Contactus>
        <Contactcontainer>

          <Contactcontent>
        <Contacttitle>Contact us</Contacttitle>
         
        <ContactForm>
      <Row>
        <Input type="text" placeholder="First Name" />
        <Input type="text" placeholder="Last Name" />
      </Row>
      <Row>
        <Input type="email" placeholder="Email" />
        <Input type="text" placeholder="Mobile Number" />
      </Row>
      <Row>
        <TextArea placeholder="Message"></TextArea>
      </Row>
      <SubmitButton type="submit">Submit</SubmitButton>
    </ContactForm>

          </Contactcontent>
          <Contactcontent2 >

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62220.42259615828!2d80.07175567871087!3d12.9220871310854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f14844aad0f%3A0xe16d3a66c4ce38d4!2sTambaram%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1720429299000!5m2!1sen!2sin" style={{width:"100%",height:"400px"}}></iframe>
          
         </Contactcontent2> 
        </Contactcontainer>


         <Footer />
        </>
    )
}

const Contactcontainer = styled.div`
 box-sizing: border-box;
width: 100%;
  max-width: 1200px;
display:flex;
gap:40px;
  margin-top:30px;
  margin-left:50px;
 
 @media (max-width: 1024px) {
      width:100%;
       max-width:870px;
       margin-left:60px;
   }
  @media (max-width: 768px) {
    
     max-width:730px;
      margin-left:10px;
   }
      @media (max-width: 425px) {
    
     max-width:400px;
     height:800px;
     
    margin-top: 130px;
    position:relative;
   }
      @media (max-width: 375px) {
     
     max-width:370px;
     margin-left:1px;
     
   }
      @media (max-width: 320px) {
     
     max-width:300px;
   }
  
`;
const Contactus = styled.div`
  width:100%;
  height:250px;
    margin: 100px auto 0 auto;
`
const Contactmain = styled.h2`
   font-size:38px;
    color: #f98866;
`
const Contactnext = styled.h2`
   font-size:45px
`
const Contactpara = styled.p`
    font-size:19px;
`

const Contactcontent = styled.div`

width: 50%;
  height:400px;

 
  padding: 10px;
  @media (max-width: 425px) {
    position:absolute;
    width:100%;
    height:300px;
    padding:2px;
  }
     @media (max-width: 375px) {
    position:absolute;
    width:100%;
    height:300px;
   
  }
     @media (max-width: 320px) {
      box-sizing: border-box;
    position:absolute;
    width:100%;
    height:300px;
   
    margin-left:10px;
    margin-top:10px;
  }

`;
const Contactcontent2 = styled.div`

width: 50%;
height:400px;

  @media (max-width: 425px) {
    position:absolute;
    width:100%;
    height:300px;
    top:390px;
    
  }
     @media (max-width: 375px) {
    position:absolute;
    width:100%;
    height:300px;
   
  }
     @media (max-width: 320px) {
      box-sizing: border-box;
    position:absolute;
    width:100%;
    height:300px;
   
    margin-left:10px;
    margin-top:10px;
  }
`;


const Contacttitle = styled.h2`

  font-size:39px;
text-align: center
`




const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const Input = styled.input`
  width: 48%;
  height: 40px;
  border-radius:10px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 80px;
  border-radius:10px;
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 40px;
  align-self: center;
  background-color: rgba(255, 0, 0, 0.465);
  color:white;
`;