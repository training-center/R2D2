import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from 'client/assets/images/logo-tc.png';

const Head = styled.header`
  align-items: center;
  display: flex;
  padding: 10px;
  background-color: #f4f4f5;
  box-shadow: 0 0 5px 0 #999;
  @media (max-width: 800px) {
    height: 70px;
  }
`;

const Logo = styled(Link)`
  width: 70px;
  height: 70px;
  margin: 0;
`;

const StyledImg = styled.img`
  max-width: 100%;
`;

const Nav = styled.nav`
  margin-left: auto;
`;

const StyledLink = styled(Link)`
  color: #d33837;
  cursor: pointer;
  font-family: Arial, sans-serif;
  font-size: 16px;
  line-height: 20px;
  margin-left: 20px;
  text-decoration: none;
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
  </Head>
);

export default Header;
