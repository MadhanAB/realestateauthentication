import React from "react";
import styled from "styled-components";
import image1 from "../images/s1.png";
import image5 from "../images/s2.png";
import image6 from "../images/s3.png";
const buildings = [
  {
    id: 1,
    name: "Interior Design for Apartments",
    image: image1,
    description: "Home Architecture Element Design Qodex Placement",
    button: {
      text: "Read More",
      link: "",
    },
  },
  {
    id: 2,
    name: "Smartest Design For Apartments",
    image: image5,
    description: "Home Architecture Element Design Qodex Placement",
    button: {
      text: "Read More",
      link: "",
    },
  },
  {
    id: 3,
    name: "Renewable Design For Apartments",
    image: image6,
    description: "Home Architecture Element Design Qodex Placement",
    button: {
      text: "Read More",
      link: "",
    },
  },
];

const Buildings = () => {
  return (
    <BuildingsContainer>
      <Heading>
        <h2>Our Services</h2>
        <h1>WE PROVIDE ROOFING SERVICES</h1>
      </Heading>

      <BuildingsList>
        {buildings.map((building) => (
          <Building key={building.id}>
            <BuildingImage src={building.image} alt={building.name} />
            <BuildingInfo>
              <h3>{building.name}</h3>
              <p>{building.description}</p>
              <Button>{building.button.text}</Button>
            </BuildingInfo>
          </Building>
        ))}
      </BuildingsList>
    </BuildingsContainer>
  );
};

export default Buildings;

const BuildingsContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
 @media (max-width: 1024px) {
    width:100%;
     max-width:1024px;
   }
      @media (max-width: 768px) {
     
     max-width:768px;
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

const Heading = styled.div`
  text-align: center;
  margin-bottom: 40px;

  h2 {
    color: #333;
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  h1 {
    color: #f98866;
    font-size: 2.5rem;
    margin: 0;
  }
`;

const BuildingsList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Building = styled.div`
  width: calc(33.33% - 20px);
  margin-bottom: 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 1024px) {
    width: calc(50% - 20px);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const BuildingImage = styled.img`
  width: 100%;
  height: auto;
`;

const BuildingInfo = styled.div`
  padding: 20px;

  h3 {
    color: #333;
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  p {
    color: #666;
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 20px;
    font-family: 'Jost', sans-serif;
    font-weight: 400;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #f98866;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d62828;
  }
`;
