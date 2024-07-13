import React from "react";
import styled from "styled-components";
import { Carousel } from "antd";
import image1 from "../images/02-960x940.jpg.webp";
import { Link } from "react-router-dom";

const BannerCarousel = () => {
  const bannerContent = [
    {
      id: 1,
      image: image1,
      heading: "WE PLACESS SPACES IN BEST POLICY",
      description:
        ' Could you be mine. And when the odds are against him and their dangers work to do. You bet your life Speed Racer against him and their dangers work to do.{" "}',
      buttonText: {
        buttonText: "view details",
        buttonLink: "https://www.google.com",
      },
    },
    {
      id: 2,
      image: image1,
      heading: "202 PARK NOW LEASING",
      description:
        "Could you be mine. And when the odds are against him and their dangers work to do. You bet your life Speed Racer against him and their dangers work to do.",
      buttonText: {
        buttonText: "view Apartment",
        buttonLink: "/Apartment",
      },
    },
    {
      id: 3,
      image: image1,
      heading: "FULLY DEVELOPED PLOTS",
      description:
        "Could you be mine. And when the odds are against him and their dangers work to do. You bet your life Speed Racer against him and their dangers work to do.",
      buttonText: {
        buttonText: "view Plots",
        buttonLink: "/Plots",
      },
    },
    {
      id: 4,
      image: image1,
      heading: "WELCOME TO VILLA RESORT",
      description:
        "Could you be mine. And when the odds are against him and their dangers work to do. You bet your life Speed Racer against him and their dangers work to do.",
      buttonText: {
        buttonText: "view Villa",
        buttonLink: "/Villa",
      },
    },
  ];

  return (
    <BannerContainer>
      <StyledCarousel autoplay>
        {bannerContent.map((item) => (
          <CarouselItem key={item.id}>
            <CarouselImg src={item.image} alt={item.heading} />
            <CarouselText>
              <h2>{item.heading}</h2>
              <p>{item.description}</p>
              <Link to={item.buttonText.buttonLink}>
                <Button>{item.buttonText.buttonText}</Button>
              </Link>
            </CarouselText>
          </CarouselItem>
        ))}
      </StyledCarousel>
    </BannerContainer>
  );
};

export default BannerCarousel;

const BannerContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  `;

const StyledCarousel = styled(Carousel)`
  .slick-slide {
    text-align: center;
  }
`;

const CarouselItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const CarouselImg = styled.img`
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
  }
`;

const CarouselText = styled.div`
  padding: 20px;
  text-align: center;

  h2 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 10px;
    font-family:Raleway;

    @media (max-width: 1024px) {
      font-size: 1.75rem;
    }

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }

    @media (max-width: 425px) {
      font-size: 1.25rem;
    }

    @media (max-width: 375px) {
      font-size: 1.1rem;
    }

    @media (max-width: 320px) {
      font-size: 1rem;
    }
  }

  p {
    font-size: 1.2rem;
    color: #666;
    font-family: 'Jost', sans-serif;
    font-weight: 400;
    @media (max-width: 1024px) {
      font-size: 1rem;
    }

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }

    @media (max-width: 425px) {
      font-size: 0.8rem;
    }

    @media (max-width: 375px) {
      font-size: 0.75rem;
    }

    @media (max-width: 320px) {
      font-size: 0.7rem;
    }
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
  margin-top: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d62828;
  }

  @media (max-width: 1024px) {
    font-size: 0.9rem;
    padding: 8px 16px;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 6px 12px;
  }

  @media (max-width: 425px) {
    font-size: 0.75rem;
    padding: 5px 10px;
  }

  @media (max-width: 375px) {
    font-size: 0.7rem;
    padding: 4px 8px;
  }

  @media (max-width: 320px) {
    font-size: 0.6rem;
    padding: 3px 6px;
  }
`;
