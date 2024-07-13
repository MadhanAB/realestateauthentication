import React from "react";
import styled from "styled-components";
import image11 from "../images/team1.png";
import image12 from "../images/team2.png";
import image13 from "../images/team3.png";
import image14 from "../images/team4.png";

const Ourmenbers = () => {
  const teamMembers = [
    {
      id: 1,
      image: image11,
      name: "John Smith",
      title: "CEO",
    },
    {
      id: 2,
      image: image12,
      name: "Sarah Johnson",
      title: "CTO",
    },
    {
      id: 3,
      image: image13,
      name: "Michael Davis",
      title: "CFO",
    },
    {
      id: 4,
      image: image14,
      name: "Emily Wilson",
      title: "COO",
    },
  ];

  return (
    <MembersContainer>
      <Header>
        <h2>Our Members</h2>
        <h1>OUR EXECUTIVE TEAM</h1>
      </Header>
      <MembersGrid>
        {teamMembers.map((member) => (
          <MemberCard key={member.id}>
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.title}</p>
          </MemberCard>
        ))}
      </MembersGrid>
    </MembersContainer>
  );
};

export default Ourmenbers;

const MembersContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
`;

const Header = styled.div`
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

  @media (max-width: 768px) {
    h2 {
      font-size: 1.5rem;
    }

    h1 {
      font-size: 2rem;
    }
  }
`;

const MembersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const MemberCard = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;

  img {
    width: 100%;
    max-width: 200px;
    height: auto;
    border-radius: 50%;
    margin-bottom: 20px;
  }

  h3 {
    font-size: 1.5rem;
    margin: 0 0 10px;
  }

  p {
    font-size: 1.2rem;
    color: #666;
  }

  @media (max-width: 768px) {
    img {
      max-width: 150px;
    }

    h3 {
      font-size: 1.25rem;
    }

    p {
      font-size: 1rem;
    }
  } 
    &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;
