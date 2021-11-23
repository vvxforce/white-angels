import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import styled from "styled-components";
import img from '../img/bg.jpeg';

const Container = styled.div`
  background-image: url(${img});
  min-height: 100vh;
`;

const Text = styled.div`
 display:flex;
 justify-content: center;
 font-size: 48px;
`;

const SubText = styled.div`
 margin-top: 8vw;
 display:flex;
 justify-content: center;
 font-size: 48px;
`;

const About = () => {
  return (
    <Container>
      <Navbar/>
      <Text>Gift</Text>
      <Text>Collection</Text>
      <SubText>White Angels</SubText>
      </Container>
  );
};

export default About;