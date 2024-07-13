import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";

import image4 from "../images/s1.png";

export default function Apartment() {
  const [selectedLocation, setSelectedLocation] = useState("chennai");

  const handleButtonClick = (location) => {
    setSelectedLocation(location);
  };

  const chennaiApartment = [
    {
      id: 1,
      heading: "Interior Design for Apartments",
      address1: "Chennai",
      address2: "Chennai",
      subHeading: "Interior Design for Apartments",
      price: "Rs. 1,00,000",
      image: image4,
      size: "3bhk",
      type: "Apartment",
      sqft: "565 sqft",
      status: "Ready",
      location: "Chennai",
      button: {
        text: "Read More",
        link: "",
      },
    },
    {
      id: 2,
      heading: "Interior Design for Apartments",
      address1: "Chennai",
      address2: "Chennai",
      subHeading: "Interior Design for Apartments",
      price: "Rs. 1,00,000",
      image: image4,
      size: "3bhk",
      type: "Apartment",
      sqft: "565 sqft",
      status: "Ready",
      location: "Chennai",
      button: {
        text: "Read More",
        link: "",
      },
    },
    {
      id: 3,
      heading: "Interior Design for Apartments",
      address1: "Chennai",
      address2: "Chennai",
      subHeading: "Interior Design for Apartments",
      price: "Rs. 1,00,000",
      image: image4,
      size: "3bhk",
      type: "Apartment",
      sqft: "565 sqft",
      status: "Ready",
      location: "Chennai",
      button: {
        text: "Read More",
        link: "",
      },
    },
    {
      id: 4,
      heading: "Interior Design for Apartments",
      address1: "Chennai",
      address2: "Chennai",
      subHeading: "Interior Design for Apartments",
      price: "Rs. 1,00,000",
      image: image4,
      size: "3bhk",
      type: "Apartment",
      sqft: "565 sqft",
      status: "Ready",
      location: "Chennai",
      button: {
        text: "Read More",
        link: "",
      },
    },
  ];

  const thambaramappartment = [
    {
      id: 1,
      heading: "Interior Design for Thambaram",
      address1: "Chennai",
      address2: "Chennai",
      subHeading: "Interior Design for Apartments",
      price: "Rs. 1,00,000",
      image: image4,
      size: "3bhk",
      type: "Apartment",
      sqft: "565 sqft",
      status: "Ready",
      location: "Chennai",
      button: {
        text: "Read More",
        link: "",
      },
    },
    {
      id: 2,
      heading: "Interior Design for Apartments",
      address1: "Chennai",
      address2: "Chennai",
      subHeading: "Interior Design for Apartments",
      price: "Rs. 1,00,000",
      image: image4,
      size: "3bhk",
      type: "Apartment",
      sqft: "565 sqft",
      status: "Ready",
      location: "Chennai",
      button: {
        text: "Read More",
        link: "",
      },
    },
    {
      id: 3,
      heading: "Interior Design for Apartments",
      address1: "Chennai",
      address2: "Chennai",
      subHeading: "Interior Design for Apartments",
      price: "Rs. 1,00,000",
      image: image4,
      size: "3bhk",
      type: "Apartment",
      sqft: "565 sqft",
      status: "Ready",
      location: "Chennai",
      button: {
        text: "Read More",
        link: "",
      },
    },
    {
      id: 4,
      heading: "Interior Design for Apartments",
      address1: "Chennai",
      address2: "Chennai",
      subHeading: "Interior Design for Apartments",
      price: "Rs. 1,00,000",
      image: image4,
      size: "3bhk",
      type: "Apartment",
      sqft: "565 sqft",
      status: "Ready",
      location: "Chennai",
      button: {
        text: "Read More",
        link: "",
      },
    },
  ];

  const guindyappartment = [
    {
      id: 1,
      heading: "Interior Design for guindy",
      address1: "Chennai",
      address2: "Chennai",
      subHeading: "Interior Design for Apartments",
      price: "Rs. 1,00,000",
      image: image4,
      size: "3bhk",
      type: "Apartment",
      sqft: "565 sqft",
      status: "Ready",
      location: "Chennai",
      button: {
        text: "Read More",
        link: "",
      },
    },
    {
      id: 2,
      heading: "Interior Design for Apartments",
      address1: "Chennai",
      address2: "Chennai",
      subHeading: "Interior Design for Apartments",
      price: "Rs. 1,00,000",
      image: image4,
      size: "3bhk",
      type: "Apartment",
      sqft: "565 sqft",
      status: "Ready",
      location: "Chennai",
      button: {
        text: "Read More",
        link: "",
      },
    },
    {
      id: 3,
      heading: "Interior Design for Apartments",
      address1: "Chennai",
      address2: "Chennai",
      subHeading: "Interior Design for Apartments",
      price: "Rs. 1,00,000",
      image: image4,
      size: "3bhk",
      type: "Apartment",
      sqft: "565 sqft",
      status: "Ready",
      location: "Chennai",
      button: {
        text: "Read More",
        link: "",
      },
    },
    {
      id: 4,
      heading: "Interior Design for Apartments",
      address1: "Chennai",
      address2: "Chennai",
      subHeading: "Interior Design for Apartments",
      price: "Rs. 1,00,000",
      image: image4,
      size: "3bhk",
      type: "Apartment",
      sqft: "565 sqft",
      status: "Ready",
      location: "Chennai",
      button: {
        text: "Read More",
        link: "",
      },
    },
  ];
  const vadapalaniappartment = [
    {
      id: 1,
      heading: "Interior Design for Vadapalani",
      address1: "Chennai",
      address2: "Chennai",
      subHeading: "Interior Design for Apartments",
      price: "Rs. 1,00,000",
      image: image4,
      size: "3bhk",
      type: "Apartment",
      sqft: "565 sqft",
      status: "Ready",
      location: "Chennai",
      button: {
        text: "Read More",
        link: "",
      },
    },
    {
      id: 2,
      heading: "Interior Design for Apartments",
      address1: "Chennai",
      address2: "Chennai",
      subHeading: "Interior Design for Apartments",
      price: "Rs. 1,00,000",
      image: image4,
      size: "3bhk",
      type: "Apartment",
      sqft: "565 sqft",
      status: "Ready",
      location: "Chennai",
      button: {
        text: "Read More",
        link: "",
      },
    },
    {
      id: 3,
      heading: "Interior Design for Apartments",
      address1: "Chennai",
      address2: "Chennai",
      subHeading: "Interior Design for Apartments",
      price: "Rs. 1,00,000",
      image: image4,
      size: "3bhk",
      type: "Apartment",
      sqft: "565 sqft",
      status: "Ready",
      location: "Chennai",
      button: {
        text: "Read More",
        link: "",
      },
    },
    {
      id: 4,
      heading: "Interior Design for Apartments",
      address1: "Chennai",
      address2: "Chennai",
      subHeading: "Interior Design for Apartments",
      price: "Rs. 1,00,000",
      image: image4,
      size: "3bhk",
      type: "Apartment",
      sqft: "565 sqft",
      status: "Ready",
      location: "Chennai",
      button: {
        text: "Read More",
        link: "",
      },
    },
  ];
  return (
    <>
      <Wrapper>
        <Navbar />
        <Container>
          <ButtonGroup>
            <Button onClick={() => handleButtonClick("chennai")}>
              Chennai
            </Button>
            <Button onClick={() => handleButtonClick("thambaram")}>
              Thambaram
            </Button>
            <Button onClick={() => handleButtonClick("guindy")}>Guindy</Button>
            <Button onClick={() => handleButtonClick("vadapalani")}>
              Vadapalani
            </Button>
          </ButtonGroup>
          <ApartmentList>
            {selectedLocation === "chennai" &&
              chennaiApartment.map((item) => (
                <ApartmentCard key={item.id}>
                  <img src={item.image} alt="Apartment" />
                  <CardContent>
                    <h2>{item.heading}</h2>
                    <p>{item.subHeading}</p>
                    <Address>
                      <p>{item.address1}</p>
                      <p>{item.address2}</p>
                    </Address>
                    <Details>
                      <p>{item.price}</p>
                      <p>{item.size}</p>
                      <p>{item.sqft}</p>
                      <p>{item.status}</p>
                    </Details>
                  </CardContent>
                </ApartmentCard>
              ))}

            {selectedLocation === "thambaram" &&
              thambaramappartment.map((item) => (
                <ApartmentCard key={item.id}>
                  <img src={item.image} alt="Apartment" />
                  <CardContent>
                    <h2>{item.heading}</h2>
                    <p>{item.subHeading}</p>
                    <Address>
                      <p>{item.address1}</p>
                      <p>{item.address2}</p>
                    </Address>
                    <Details>
                      <p>{item.price}</p>
                      <p>{item.size}</p>
                      <p>{item.sqft}</p>
                      <p>{item.status}</p>
                    </Details>
                  </CardContent>
                </ApartmentCard>
              ))}

            {selectedLocation === "guindy" &&
              guindyappartment.map((item) => (
                <ApartmentCard key={item.id}>
                  <img src={item.image} alt="Apartment" />
                  <CardContent>
                    <h2>{item.heading}</h2>
                    <p>{item.subHeading}</p>
                    <Address>
                      <p>{item.address1}</p>
                      <p>{item.address2}</p>
                    </Address>
                    <Details>
                      <p>{item.price}</p>
                      <p>{item.size}</p>
                      <p>{item.sqft}</p>
                      <p>{item.status}</p>
                    </Details>
                  </CardContent>
                </ApartmentCard>
              ))}
            {selectedLocation === "vadapalani" &&
              vadapalaniappartment.map((item) => (
                <ApartmentCard key={item.id}>
                  <img src={item.image} alt="Apartment" />
                  <CardContent>
                    <h2>{item.heading}</h2>
                    <p>{item.subHeading}</p>
                    <Address>
                      <p>{item.address1}</p>
                      <p>{item.address2}</p>
                    </Address>
                    <Details>
                      <p>{item.price}</p>
                      <p>{item.size}</p>
                      <p>{item.sqft}</p>
                      <p>{item.status}</p>
                    </Details>
                  </CardContent>
                </ApartmentCard>
              ))}
          </ApartmentList>
        </Container>
        <Testimonials />
        <Footer />
      </Wrapper>
    </>
  );
}

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: #f98866;
  color: #fff;
  img {
    width: 50px;
    margin-right: 20px;
  }
`;

const HeaderText = styled.div`
  text-align: center;
  h2 {
    margin: 0;
    font-size: 2rem;
  }
`;

const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin: 10px 0;
  p {
    margin: 0;
    a {
      text-decoration: none;
      color: #f98866;
    }
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1320px;
  margin: 100px 0 0 0;
  padding: 0 2px;
  @media (max-width: 1024px) {
       width:100%;
       max-width:870px;
   }
      @media (max-width: 768px) {
  
     max-width:730px;
   }
      @media (max-width: 425px) {
    
     max-width:400px;
   }
      @media (max-width: 375px) {
  
     max-width:370px;
   }
      @media (max-width: 320px) {
    
     max-width:300px;
   }
`;

const Wrapper = styled.div`
  padding: 20px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  button {
    margin: 0 10px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    button {
      margin-bottom: 10px;
    }
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background: #f98866;
  color: #fff;
  border: none;
  cursor: pointer;
  &:hover {
    background: #f57b50;
  }
`;

const ApartmentList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const ApartmentCard = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  width: calc(33% - 20px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 768px) {
    width: calc(50% - 20px);
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const CardContent = styled.div`
  padding: 20px;
  h1 {
    font-size: 2rem;
    margin: 0;
  }
  h2 {
    margin: 0 0 10px;
    font-size: 1.5rem;
  }
  p {
    margin: 5px 0;
  }
`;

const Address = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    margin: 5px 0;
  }
`;
