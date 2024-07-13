import React from "react";
import styled from "styled-components";
import { Carousel } from "antd";
import image1 from "../images/02-960x940.jpg.webp";

const BannerImage = () => {
  const bannerImageonly = [
    {
      id: 1,
      image: image1,
    },
    {
      id: 2,
      image: image1,
    },
    {
      id: 3,
      image: image1,
    },
    {
      id: 4,
      image: image1,
    },
  ];

  return (
    <BannerContainer>
      <BannerHeader>
        <h2>Our Projects</h2>
        <h1>RECENT PROJECTS</h1>
      </BannerHeader>
      <CarouselContainer>
        <StyledCarousel autoplay>
          {bannerImageonly.map((banner) => (
            <BannerItem key={banner.id}>
              <BannerImg src={banner.image} alt="banner" />
            </BannerItem>
          ))}
        </StyledCarousel>
      </CarouselContainer>
      <ButtonContainer>
        View All Projects
      </ButtonContainer>
    </BannerContainer>
  );
};

export default BannerImage;

const BannerContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const BannerHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;

  h2 {
    font-size: 2rem;
    color: #f98866;
    margin-bottom: 10px;
  }

  h1 {
    font-size: 3rem;
    margin: 0;
  }

  @media (max-width: 1024px) {
    h2 {
      font-size: 1.75rem;
    }

    h1 {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.5rem;
    }

    h1 {
      font-size: 2rem;
    }
  }

  @media (max-width: 425px) {
    h2 {
      font-size: 1.25rem;
    }

    h1 {
      font-size: 1.75rem;
    }
  }

  @media (max-width: 375px) {
    h2 {
      font-size: 1.1rem;
    }

    h1 {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 320px) {
    h2 {
      font-size: 1rem;
    }

    h1 {
      font-size: 1.25rem;
    }
  }
`;

const CarouselContainer = styled.div`
  .slick-slide {
    text-align: center;
  }
`;

const StyledCarousel = styled(Carousel)`
  .slick-slide {
    text-align: center;
  }
`;

const BannerItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BannerImg = styled.img`
  width: 100%;
  max-height: 500px;
  object-fit: cover;

  @media (max-width: 1024px) {
    max-height: 400px;
  }

  @media (max-width: 768px) {
    max-height: 300px;
  }

  @media (max-width: 425px) {
    max-height: 200px;
  }

  @media (max-width: 375px) {
    max-height: 180px;
  }

  @media (max-width: 320px) {
    max-height: 150px;
    padding: 0 10px;
    box-sizing: border-box;
  }
`;

const ButtonContainer = styled.button`
  padding: 10px 20px;
  background-color: #f98866;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d62828;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 8px 16px;
  }

  @media (max-width: 425px) {
    font-size: 0.8rem;
    padding: 6px 12px;
  }

  @media (max-width: 375px) {
    font-size: 0.75rem;
    padding: 5px 10px;
  }

  @media (max-width: 320px) {
    font-size: 0.7rem;
    padding: 4px 8px;
  }
`;
