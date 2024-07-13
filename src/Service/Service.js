import './Service.css';
import image1 from "../images/logo-white.svg";
import { Link } from 'react-router-dom';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';
import {  ConfigProvider, Space, Carousel } from 'antd';
import image2 from '../images/02-960x940.jpg.webp';
import image3 from '../images/ghvgh.jpg';
import image4 from '../images/s1.png';
import image5 from '../images/s2.png';
import image6 from '../images/s3.png';
import image7 from '../images/pro1.jpg';
import image8 from '../images/pro2.jpg';
import image9 from '../images/pro3.jpg';
import image10 from '../images/pro4.jpg';
import image12 from '../images/team2.png';
import image13 from '../images/team3.png';
import {InstagramOutlined ,GoogleOutlined , FacebookOutlined ,PhoneOutlined,HeatMapOutlined,MessageOutlined ,DashboardOutlined ,ArrowRightOutlined,PlusOutlined,StarFilled    } from '@ant-design/icons';




const contentStyles = {
    height: '300px',
    color: '#fff',
    //lineHeight: '160px',
    textAlign: 'center',
    background: 'rgba(255, 166, 0, 0.705)9',
  };

  const contentStyless = {
    height: '300px',
    color: '#fff',
    //lineHeight: '160px',
    textAlign: 'center',
    background: 'rgba(255, 166, 0, 0.705)9',
  };



export default function Service(){


    const items = [
   
        {
          label:<Link style={{color:"brown", fontWeight:"bold"}} to={'/Apartment'}>Apartment</Link>,
          
          key: '0',
        },
        {
          label: <Link style={{color:"brown", fontWeight:"bold"}} to={'/Villa'}>Villa</Link>,
          
        
          key: '1',
        },
        {
          type: 'divider',
          
        },
        {
          label: <Link style={{color:"brown", fontWeight:"bold"}} to={'/Plots'}>Plots</Link>,
          key: '3',
        },
      ];

    return(
        <>
        <div className='whole_content'>
      <header>
      <div className='whole_inside'>
      <div className='whole_logo'>
      <img src={image1}></img>
      </div>
      <nav>
      <ul>
      <li><Link to={'/'}>HOME</Link>  </li>
     
      <li>  <Link to={'/About'}></Link>
      <Dropdown
                   
     menu={{
      items,
     
     }}
     trigger={['click']}
   
  >
    <a  onClick={(e) => e.preventDefault()}>
    <Space >
     PROPERTIES
    <DownOutlined />
    </Space>
    </a>
  </Dropdown>
                    
                    
   </li>
   <li> <Link to={'/About'}>ABOUT</Link></li>
   <li> <Link to={'/Service'}>SERVICE</Link></li>
   <li> <Link to={'/Contact'}>CONTACT</Link></li>
   </ul>
   </nav>
   <div
    className="menus"
      style={{
        width: 56,
        height:50,
        
        
      }}
    >
     
    </div>


  <div className='get_in'>
    <button>Get in Touch</button>
  </div>


 
         
   </div>
  </header>
   </div>


   <div className='about_content'>
    <img src={image2}></img>
   <div className='about_content_inner'>
    <div className='about_content_inner1'>
        <h2>Our Services</h2>
       <div className='about_content_inner2'>
        <p>Your here/ </p>
        <p> <Link style={{color:"white",}} to={'/'}>HOME/</Link></p>
        <p>Service Us</p>
        
        </div> 
    </div>
   </div>
   </div>



   <div className='service'>
   <div className='service_inner'>
    <h2>Our Service</h2>
    <h1>WE PROVIDE ROOFING SERVICE</h1>
   </div>
   <div className='service_inner2'>
   <div className='service_box1'>
   <img src={image4}></img>
   <div className='service_content'>
    <h2>Interior Design for Apartments</h2>
    <p>Home Architecture Element Design Qodex Placement</p>
    <button>Read More</button>
   </div>
   </div>
   <div className='service_box2'>
  
   <img src={image5}></img>
   
   <div className='service_content'>
    <h2>Smartest Design For Apartments</h2>
    <p>Home Architecture Element Design Qodex Placement</p>
    <button>Read More</button>
   </div>
    </div>
    <div className='service_box3'>
  
    <img src={image6}></img>
    <div className='service_content'>
    <h2>Renewable Design For Apartments</h2>
    <p>Home Architecture Element Design Qodex Placement</p>
    <button>Read More</button>
   </div>
    </div>

   </div>

   </div>


   <div className='project'>

<div className='project_inner'>
<h2>Our Project</h2>
<h1>RECENT PROJECT</h1>
</div>
<div className='project_content'>
<Carousel autoplay>
 <div style={contentStyles}>
  <div className='project_image1'>
      <div className='project_box1'>
     <img src={image7}></img>
      </div>
      <div className='project_box2'>
      <img src={image8}></img>
         </div>
         <div className='project_box3'>
         <img src={image9}></img>
         </div>
         <div className='project_box3'>
         <img src={image10}></img>
         </div>
  </div>
 </div>
 <div style={contentStyles}>
   
 <div className='project_image1'>
      <div className='project_box1'>
      <img src={image7}></img>
      </div>
      <div className='project_box2'>
      <img src={image8}></img>
         </div>
         <div className='project_box3'>
         <img src={image9}></img>
         </div>
         <div className='project_box4'>
         <img src={image10}></img>
         </div>
  </div>
  
 </div>
 <div style={contentStyles}>
 
 <div className='project_image1'>
      <div className='project_box1'>
      <img src={image7}></img>
      </div>
      <div className='project_box2'>
      <img src={image8}></img>
         </div>
         <div className='project_box3'>
         <img src={image9}></img>
         </div>
         <div className='project_box3'>
         <img src={image10}></img> 
         </div>
  </div>

 </div>
 <div style={contentStyles}>
 
 <div className='project_image1'>
      <div className='project_box1'>
      <img src={image7}></img>
      </div>
      <div className='project_box2'>
      <img src={image8}></img>
         </div>
         <div className='project_box3'>
         <img src={image9}></img> 
         </div>
         <div className='project_box3'>
         <img src={image10}></img>
         </div>
  </div>

 </div>
</Carousel>
</div>
<div className='project_button'>
<button>View Project</button>
</div>

</div>
     


<div className='testimonials'>
       <div className='testimonials_inner'>
       <h2>Our Testimonial</h2>
       <h1>WE ELEVATE THE BEAUTY</h1>
          <h1>  OF YOUR HOME</h1>

       </div>

       <div className='testmonials_content'>

       <Carousel autoplay>
    <div style={contentStyless}>
     <div className='testimonial_photos'>

     <div className='testimonial_box1'>
        <div className='star1'>
        <StarFilled />
        <StarFilled />
        <StarFilled />
        <StarFilled />
        <StarFilled />
        </div>
        <div>
            <p>Each color evokes different emotions for each individual. Your emotions still depend on your individual life experience
            Each color evokes different emotions for each individual.Each color evokes different emotions for each individual.
            </p>
            </div>
            <div className='start1_content'>

                <div className='start_content_box1'>
               <img src={image12}></img>
                </div>
                <div className='start_content_box2'>
                    <h2>Elwin Dawson</h2>
                    <p>Desighner</p>
                    </div>
            </div>

     </div>
     <div className='testimonial_box2'>
        
     <div className='star1'>
        <StarFilled />
        <StarFilled />
        <StarFilled />
        <StarFilled />
        <StarFilled />
        </div>
        <div>
            <p>Each color evokes different emotions for each individual. Your emotions still depend on your individual life experience
            Each color evokes different emotions for each individual.Each color evokes different emotions for each individual.
            </p>
            </div>
            <div className='start1_content'>

                <div className='start_content_box1'>
               <img src={image13}></img>
                </div>
                <div className='start_content_box2'>
                    <h2>Robik Arzar</h2>
                    <p>Developer</p>
                    </div>
            </div>
     </div>

     </div>
    </div>
    <div style={contentStyless}>
     
    <div className='testimonial_photos'>

<div className='testimonial_box1'>
   <div className='star1'>
   <StarFilled />
   <StarFilled />
   <StarFilled />
   <StarFilled />
   <StarFilled />
   </div>
   <div>
       <p>Each color evokes different emotions for each individual. Your emotions still depend on your individual life experience
       Each color evokes different emotions for each individual.Each color evokes different emotions for each individual.
       </p>
       </div>
       <div className='start1_content'>

           <div className='start_content_box1'>
          <img src={image12}></img>
           </div>
           <div className='start_content_box2'>
               <h2>Elwin Dawson</h2>
               <p>Desighner</p>
               </div>
       </div>

</div>
<div className='testimonial_box2'>
   
<div className='star1'>
   <StarFilled />
   <StarFilled />
   <StarFilled />
   <StarFilled />
   <StarFilled />
   </div>
   <div>
       <p>Each color evokes different emotions for each individual. Your emotions still depend on your individual life experience
       Each color evokes different emotions for each individual.Each color evokes different emotions for each individual.
       </p>
       </div>
       <div className='start1_content'>

           <div className='start_content_box1'>
          <img src={image13}></img>
           </div>
           <div className='start_content_box2'>
               <h2>Robik Arzar</h2>
               <p>Developer</p>
               </div>
       </div>
</div>

</div>


    </div>
    <div style={contentStyless}>
      
    <div className='testimonial_photos'>

<div className='testimonial_box1'>
   <div className='star1'>
   <StarFilled />
   <StarFilled />
   <StarFilled />
   <StarFilled />
   <StarFilled />
   </div>
   <div>
       <p>Each color evokes different emotions for each individual. Your emotions still depend on your individual life experience
       Each color evokes different emotions for each individual.Each color evokes different emotions for each individual.
       </p>
       </div>
       <div className='start1_content'>

           <div className='start_content_box1'>
          <img src={image12}></img>
           </div>
           <div className='start_content_box2'>
               <h2>Elwin Dawson</h2>
               <p>Desighner</p>
               </div>
       </div>

</div>
<div className='testimonial_box2'>
   
<div className='star1'>
   <StarFilled />
   <StarFilled />
   <StarFilled />
   <StarFilled />
   <StarFilled />
   </div>
   <div>
       <p>Each color evokes different emotions for each individual. Your emotions still depend on your individual life experience
       Each color evokes different emotions for each individual.Each color evokes different emotions for each individual.
       </p>
       </div>
       <div className='start1_content'>

           <div className='start_content_box1'>
          <img src={image13}></img>
           </div>
           <div className='start_content_box2'>
               <h2>Robik Arzar</h2>
               <p>Developer</p>
               </div>
       </div>
</div>

</div>


    </div>
    <div style={contentStyless}>
     
    <div className='testimonial_photos'>

<div className='testimonial_box1'>
   <div className='star1'>
   <StarFilled />
   <StarFilled />
   <StarFilled />
   <StarFilled />
   <StarFilled />
   </div>
   <div>
       <p>Each color evokes different emotions for each individual. Your emotions still depend on your individual life experience
       Each color evokes different emotions for each individual.Each color evokes different emotions for each individual.
       </p>
       </div>
       <div className='start1_content'>

           <div className='start_content_box1'>
          <img src={image12}></img>
           </div>
           <div className='start_content_box2'>
               <h2>Elwin Dawson</h2>
               <p>Desighner</p>
               </div>
       </div>

</div>
<div className='testimonial_box2'>
   
<div className='star1'>
   <StarFilled />
   <StarFilled />
   <StarFilled />
   <StarFilled />
   <StarFilled />
   </div>
   <div>
       <p>Each color evokes different emotions for each individual. Your emotions still depend on your individual life experience
       Each color evokes different emotions for each individual.Each color evokes different emotions for each individual.
       </p>
       </div>
       <div className='start1_content'>

           <div className='start_content_box1'>
          <img src={image13}></img>
           </div>
           <div className='start_content_box2'>
               <h2>Robik Arzar</h2>
               <p>Developer</p>
               </div>
       </div>
</div>

</div>


    </div>
  </Carousel>
       
       </div>


        </div>



        <div className='contact'>
            <img src={image6}></img>
            <div className='contact_positive'>
        <div className='contact_box1'>
         <div className='contact_inner1'>
           <div className='contact_inner1_content1'>
          <img src={image1}></img>
           </div>
           <div className='contact_inner1_content2'>
           <p>There are many variations of pass 
            Lorem Ipsum available there is ut duis 
            vel quis dignissim nulla vel hendrerit maecenasctetur</p>
         </div>
         <div className='contact_inner1_content3'>
         <InstagramOutlined/> 
         <GoogleOutlined/>
         < FacebookOutlined/>
         </div>
         </div>
         <div className='contact_inner2'>
         <div className='contact_inner2_content1'>
         <h2>Our Service</h2>
           </div>
           <div className='contact_inner2_content2'>
          <ul>
            <li> – Architectural Design</li>
            <li>– Design & Planning</li>
            <li>– Furniture & Decor</li>
            <li>– Construction Art Design</li>
            <li>– Lighting Design</li>
          </ul>
         </div>
        </div>
        <div className='contact_inner3'>
        <div className='contact_inner3_content1'>
          <h2>Contact Us</h2>
           </div>
           <div className='contact_inner3_content2'>
            < HeatMapOutlined/>
            <p>1245 Rang Raod, medical, E152 95RB</p>
         </div>
         <div className='contact_inner3_content3'>
          <PhoneOutlined/>
          <p>Telephone: (922) 3354 2252</p>
          </div>
          <div className='contact_inner3_content4'>
          <MessageOutlined/>
          <p>Email: info@exmple.com</p>
          </div>
          <div className='contact_inner3_content5'>
          <DashboardOutlined />
          <p>Time: 9.00am-4.00pm</p>
          </div>
       </div>
       <div className='contact_inner4'>
       <div className='contact_inner4_content1'>
          <h2>Recent Post</h2>
           </div>
           <div className='contact_inner4_content2'>
          <div className='contact_inner6'>
             <img src={image3}></img>
          </div>
          <div  className='contact_inner7'>
            <p>The Way To Avoid New Construction</p>
            <p>April 9, 2024</p>
            </div>
         </div>
         <div className='contact_inner4_content3'>
         <div className='contact_inner6'>
             <img src={image3}></img>
          </div>
          <div  className='contact_inner7'>
          <p>The Way To Avoid New Construction</p>
          <p>April 9, 2024</p>
            </div>
          </div>
          </div>
       </div> 
       </div>  
          
        </div>
       
        </>
    )
}