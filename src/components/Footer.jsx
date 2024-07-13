import React from "react";
import styled from "styled-components";
import { InstagramOutlined, GoogleOutlined, FacebookOutlined, HeatMapOutlined, PhoneOutlined, MessageOutlined, DashboardOutlined } from "@ant-design/icons";
import image1 from "../images/logo-white.svg";
import image3 from "../images/ghvgh.jpg";

const ContactSection = () => {
  return (
    <ContactContainer>
      <ContactContent>
        <ContactPositive>
          <ContactBox>
            <ContactInner1>
              <ContactInner1Content1>
                <img src={image1} alt="Inner Image" />
              </ContactInner1Content1>
              <ContactInner1Content2>
                <p>
                  There are many variations of pass Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                </p>
              </ContactInner1Content2>
              <ContactInner1Content3>
                <SocialIcon><InstagramOutlined /></SocialIcon>
                <SocialIcon><GoogleOutlined /></SocialIcon>
                <SocialIcon><FacebookOutlined /></SocialIcon>
              </ContactInner1Content3>
            </ContactInner1>
            <ContactInner2>
              <ContactInner2Content1>
                <SectionTitle>Our Services</SectionTitle>
              </ContactInner2Content1>
              <ContactInner2Content2>
                <ServiceList>
                  <li>Architectural Design</li>
                  <li>Design & Planning</li>
                  <li>Furniture & Decor</li>
                  <li>Construction Art Design</li>
                  <li>Lighting Design</li>
                </ServiceList>
              </ContactInner2Content2>
            </ContactInner2>
            <ContactInner3>
              <ContactInner3Content1>
                <SectionTitle>Contact Us</SectionTitle>
              </ContactInner3Content1>
              <ContactInfo>
                <ContactInfoIcon><HeatMapOutlined /></ContactInfoIcon>
                <ContactInfoText>1245 Rang Raod, medical, E152 95RB</ContactInfoText>
              </ContactInfo>
              <ContactInfo>
                <ContactInfoIcon><PhoneOutlined /></ContactInfoIcon>
                <ContactInfoText>Telephone: (922) 3354 2252</ContactInfoText>
              </ContactInfo>
              <ContactInfo>
                <ContactInfoIcon><MessageOutlined /></ContactInfoIcon>
                <ContactInfoText>Email: info@example.com</ContactInfoText>
              </ContactInfo>
              <ContactInfo>
                <ContactInfoIcon><DashboardOutlined /></ContactInfoIcon>
                <ContactInfoText>Time: 9.00am-4.00pm</ContactInfoText>
              </ContactInfo>
            </ContactInner3>
            <ContactInner4>
              <ContactInner4Content1>
                <SectionTitle>Recent Posts</SectionTitle>
              </ContactInner4Content1>
              <RecentPosts>
                <Post>
                  <PostImage src={image3} alt="Recent Post Image" />
                  <PostContent>
                    <PostTitle>The Way To Avoid New Construction</PostTitle>
                    <PostDate>April 9, 2024</PostDate>
                  </PostContent>
                </Post>
                <Post>
                  <PostImage src={image3} alt="Recent Post Image" />
                  <PostContent>
                    <PostTitle>The Way To Avoid New Construction</PostTitle>
                    <PostDate>April 9, 2024</PostDate>
                  </PostContent>
                </Post>
              </RecentPosts>
            </ContactInner4>
          </ContactBox>
        </ContactPositive>
      </ContactContent>
    </ContactContainer>
  );
};

export default ContactSection;

const ContactContainer = styled.div`
  background-color: #f8f9fa;
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    padding: 10px;
  }

  @media (max-width: 768px) {
    padding: 5px;
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

const ContactContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ContactPositive = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const ContactBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const ContactInner1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
  box-sizing: border-box;

  p {
    font-size: 14px;
    line-height: 1.6;
    font-family: 'Jost', sans-serif;
    font-weight: 400;

    @media (max-width: 375px) {
      font-size: 12px;
    }
  }

  @media (max-width: 768px) {
    padding: 5px;
  }
`;

const ContactInner1Content1 = styled.div`
  img {
    width: 100px;
    height: auto;

    @media (max-width: 375px) {
      width: 80px;
    }
  }
`;

const ContactInner1Content2 = styled.div`
  p {
    font-size: 14px;
    font-family: 'Jost', sans-serif;
    font-weight: 400;

    @media (max-width: 375px) {
      font-size: 12px;
    }
  }
`;

const ContactInner1Content3 = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SocialIcon = styled.div`
  font-size: 20px;
  color: #333;

  @media (max-width: 375px) {
    font-size: 16px;
  }
`;

const ContactInner2 = styled.div`
  flex: 1;
  padding: 10px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 5px;
  }
`;

const ContactInner2Content1 = styled.div`
  h2 {
    font-size: 20px;
    margin-bottom: 10px;

    @media (max-width: 375px) {
      font-size: 18px;
    }
  }
`;

const ContactInner2Content2 = styled.div`
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    font-size: 14px;
   

    @media (max-width: 375px) {
      font-size: 12px;
    }
  }

  li {
    margin-bottom: 5px;
  }
`;

const ContactInner3 = styled.div`
  flex: 1;
  padding: 10px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 5px;
  }
`;

const ContactInner3Content1 = styled.div`
  h2 {
    font-size: 20px;
    margin-bottom: 10px;

    @media (max-width: 375px) {
      font-size: 18px;
    }
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 5px;
 font-family: 'Jost', sans-serif;
    font-weight: 400;
  @media (max-width: 375px) {
    gap: 5px;
  }
`;

const ContactInfoIcon = styled.div`
  font-size: 20px;
  color: #333;

  @media (max-width: 375px) {
    font-size: 16px;
  }
`;

const ContactInfoText = styled.p`
  font-size: 14px;

  @media (max-width: 375px) {
    font-size: 12px;
  }
`;

const ContactInner4 = styled.div`
  flex: 1;
  padding: 10px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 5px;
  }
`;

const ContactInner4Content1 = styled.div`
  h2 {
    font-size: 20px;
    margin-bottom: 10px;

    @media (max-width: 375px) {
      font-size: 18px;
    }
  }
`;

const RecentPosts = styled.div`
  display: flex;
  flex-direction: column;
`;

const Post = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;

  @media (max-width: 375px) {
    gap: 5px;
  }
`;

const PostImage = styled.img`
  width: 50px;
  height: auto;

  @media (max-width: 375px) {
    width: 40px;
  }
`;

const PostContent = styled.div`
  flex: 1;
`;

const PostTitle = styled.p`
  font-size: 14px;
  font-weight: bold;
  
  @media (max-width: 375px) {
    font-size: 12px;
  }
`;

const PostDate = styled.p`
  font-size: 12px;
  color: #666;
  font-family: 'Jost', sans-serif;
    font-weight: 400;
  @media (max-width: 375px) {
    font-size: 10px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;

  @media (max-width: 375px) {
    font-size: 18px;
  }
`;

const ServiceList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
 font-family: 'Jost', sans-serif;
    font-weight: 400;
  @media (max-width: 375px) {
    font-size: 12px;
  }
`;
