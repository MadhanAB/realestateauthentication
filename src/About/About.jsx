import './About.css';
import image1 from "../images/logo-white.svg";
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import BuildingAbout from "../components/Buildingaboutus";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";




export default function About(){

   
    



    return(
        <>
        
        <Navbar />
       <br/>
       <br/>
        <BuildingAbout />

        <Testimonials />
        <Footer />

        

    

        </>
    )
}