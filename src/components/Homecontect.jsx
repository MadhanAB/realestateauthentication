import React from "react";
import styled from "styled-components";
import Image1 from "../images/ghvgh.jpg";

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <Content>
        <SectionTitle>OUR STORY</SectionTitle>
        <MainTitle>WE ELEVATE THE BEAUTY OF YOUR HOME</MainTitle>
        <Description>
          Each color evokes different emotions for each individual. Your emotions
          depend on your individual life experience. Ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </Description>
        <ActionButton>Learn More</ActionButton>
      </Content>
      <ImageContainer>
        <img src={Image1} alt="About Us" />
      </ImageContainer>
    </AboutUsContainer>
  );
};

export default AboutUs;

const AboutUsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1320px;
  padding: 20px;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
    padding: 10px;
  }

  @media (max-width: 768px) {
    padding: 10px;
  }

  @media (max-width: 425px) {
    padding: 5px;
  }

  @media (max-width: 375px) {
    padding: 5px;
  }

  @media (max-width: 320px) {
    padding: 5px;
  }
`;

const Content = styled.div`
  flex: 1;
  padding-right: 40px;
  text-align: left;

  @media (max-width: 1024px) {
    padding-right: 0;
    text-align: center;
  }

  @media (max-width: 768px) {
    padding-right: 0;
    text-align: center;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #f98866;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 425px) {
    font-size: 1.6rem;
  }

  @media (max-width: 375px) {
    font-size: 1.4rem;
  }

  @media (max-width: 320px) {
    font-size: 1.2rem;
  }
`;

const MainTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 425px) {
    font-size: 2rem;
  }

  @media (max-width: 375px) {
    font-size: 1.8rem;
  }

  @media (max-width: 320px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 20px;
  font-family: 'Jost', sans-serif;
    font-weight: 400;
  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 425px) {
    font-size: 0.9rem;
  }

  @media (max-width: 375px) {
    font-size: 0.8rem;
  }

  @media (max-width: 320px) {
    font-size: 0.7rem;
  }
`;

const ActionButton = styled.button`
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
    font-size: 0.9rem;
    padding: 10px 20px;
  }

  @media (max-width: 425px) {
    font-size: 0.8rem;
    padding: 8px 16px;
  }

  @media (max-width: 375px) {
    font-size: 0.7rem;
    padding: 6px 12px;
  }

  @media (max-width: 320px) {
    font-size: 0.6rem;
    padding: 4px 10px;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  padding-left: 40px;

  img {
    width: 100%;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 1024px) {
    padding-left: 0;
    margin-top: 20px;
  }

  @media (max-width: 768px) {
    padding-left: 0;
    margin-top: 20px;
  }
`;
