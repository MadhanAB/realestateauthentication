import styled from "styled-components";

import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Buildings from "../components/Buildings";
import BuildingAbout from "../components/Buildingaboutus";
import OurAboutUs from "../components/Ouraboutus";
import Ourservicepage from "../components/Ourservicepage";
import BannerImage from "../components/BannerImage";
import Ourmenbers from "../components/Ourmenbers";
import Testimonials from "../components/Testimonials";
import Homecontect from "../components/Homecontect";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <main className="container">
        <Navbar />
        <Banner />
        <BuildingAbout />
        <Buildings />
        <OurAboutUs />
        <Ourservicepage />
        <BannerImage />
        <Ourmenbers />
        <Testimonials />
        <Homecontect />
        <Footer />
      </main>
    </>
  );
};

export default Home;

const Main = styled.div`
  width: 100%;
  max-width: 100%;
`;
