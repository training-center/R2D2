import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from 'client/assets/images/logo-tc.png';

const Head = styled.header`
  align-items: center;
  justify-content: space-between;
  display: flex;
  padding: 10px 30px;
  background-color: #f4f4f5;
  box-shadow: 0 0 5px 0 #999;
  @media (max-width: 1070px) {
    padding: 10px;
  }
  @media (max-width: 800px) {
    height: 70px;
  }
`;

const Logo = styled(Link)`
  width: 70px;
  height: auto;
  margin: 0;
`;

const StyledImg = styled.img`
  max-width: 100%;
`;

const Nav = styled.nav`
  
`;

const SocialNav = styled.nav`
  
`;

const StyledLink = styled(Link)`
  color: #d33837;
  cursor: pointer;
  font-family: Arial, sans-serif;
  font-size: 16px;
  line-height: 20px;
  margin-left: 20px;
  text-decoration: none;
  text-shadow: 1px 1px 1px rgba(255, 255, 255, 1);
  &:hover {
    color: #ed684e;
  }
`;

const Header = () => (
  <Head>
    <Logo to="/">
      <StyledImg src={logo} alt="Training Center Plataform" />
    </Logo>
    <Nav>
      <StyledLink to="/sign-in">Cadastre-se</StyledLink>
      <StyledLink to="/sign-up">Login</StyledLink>
    </Nav>
    <SocialNav>
      <i className="fa fa-github" aria-hidden="true"></i>
      <StyledLink to="/sign-up">Login</StyledLink>
    </SocialNav>
  </Head>
);

export default Header;
