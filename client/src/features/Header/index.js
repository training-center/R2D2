import React from 'react';
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from 'client/assets/images/logo-tc.png';

const Head = styled.header`
  align-items: center;
  justify-content: space-between;
  display: flex;
  padding: 5px 30px;
  background-color: #f4f4f5;
  box-shadow: 0 0 5px 0 #999;
  @media (max-width: 1070px) {
    padding: 5px 10px;
  }
  @media (max-width: 800px) {
    height: 70px;
  }
`;

const Logo = styled(Link)`
  width: 80px;
  height: auto;
  margin: 0;
`;

const StyledImg = styled.img`
  max-width: 100%;
`;

const StyledLink = styled(Link)`
  color: #d33837;
  font-family: Arial, sans-serif;
  font-size: 16px;
  line-height: 20px;
  margin: 0 20px;
  text-decoration: none;
  text-shadow: 1px 1px 1px rgba(255, 255, 255, 1);
  &:hover {
    color: #0c1624;
  }
`;

const SocialLink = styled(Link)`
  text-shadow: 1px 1px 1px rgba(255, 255, 255, 1);
  color: #0c1624;
  font-size: 26px;
  margin-left: 20px;
  &:hover {
    color: #d33837;
  }
`;

const Header = () => (
  <Head>
    <Logo to="/">
      <StyledImg src={logo} alt="Training Center Plataform" />
    </Logo>
    <nav>
      <StyledLink to="/sign-in">Cadastre-se</StyledLink>
      <StyledLink to="/sign-up">Login</StyledLink>
    </nav>
    <nav>
      <SocialLink to="https://github.com/training-center">
        <FontAwesome name="github" />
      </SocialLink>
      <SocialLink to="https://twitter.com/trainingcentr">
        <FontAwesome name="twitter" />
      </SocialLink>
      <SocialLink to="https://ctgroups.herokuapp.com/">
        <FontAwesome name="slack" />
      </SocialLink>
      <SocialLink to="https://medium.com/trainingcenter">
        <FontAwesome name="medium" />
      </SocialLink>
      <SocialLink to="https://www.youtube.com/c/TrainingCenterChannel">
        <FontAwesome name="youtube" />
      </SocialLink>
      <SocialLink to="https://www.facebook.com/trainingcenterbr/">
        <FontAwesome name="facebook" />
      </SocialLink>
    </nav>
  </Head>
);

export default Header;
