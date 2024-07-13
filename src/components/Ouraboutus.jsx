import React from "react";
import styled from "styled-components";
import image1 from "../images/ghvgh.jpg";
const Ouraboutus = () => {
  return (
    <AboutUsContainer>
      <div>
        <h2>OUR ABOUT US</h2>
        <h1>WE ELEVATE THE BEAUTY OF YOUR HOME</h1>
        <p>
          Each color evokes different emotions for each individual. Your
          emotions depend on your individual life experience. ipsum dolor sit
          amet, ctetur adipisicing elit, sed do eiusmod tempor incididunt ut
          labore et dolore gna aliqua quis nostrud consequat
        </p>
      </div>
      <div>
        <Button>More About Us</Button>
      </div>
    </AboutUsContainer>
  );
};

export default Ouraboutus;

const AboutUsContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  h2 {
    font-size: 2rem;
    margin-bottom: 10px;
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 20px;
    font-family: 'Jost', sans-serif;
    font-weight: 400;
  }
     @media (max-width: 1024px) {
      width:100%;
       max-width:1024px;
   }

  @media (max-width: 768px) {
 
   
     max-width:768px;
   

    h2 {
      font-size: 1.5rem;
    }

    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1rem;
    }
  }
     @media (max-width: 425px) {
   
     max-width:425px;
   }
      @media (max-width: 375px) {
   
     max-width:375px;
   }
      @media (max-width: 320px) {
   
     max-width:320px;
   }
     
`;

const Button = styled.button`
  padding: 12px 24px;
  background-color: #f98866;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e76f51;
  }

  @media (max-width: 768px) {
    font-size: 0.875rem;
    padding: 8px 16px;
  }
`;

const ImageContainer = styled.div`
  margin-top: 20px;
  text-align: center;

  img {
  width: 100%;
    max-width: 80%;
    height: auto;
    display: block;
  }

  
`;
