import React from 'react';
import { Link, NavLink } from "react-router-dom";
import Logo from '../images/logo-tc.png';
import styled from 'styled-components';

export default function Header() {

const Header = styled.header`
	height: 100px;
	padding: 5px 0;
	background-color: #F4F4F5;
	box-shadow: 0 0 5px 0 #999;
	@media (max-width: 800px) {
		height: 70px;
	}
`;

const Container = styled.div`
	max-width: 1000px;
	margin: 0 auto;
	@media (max-width: 1000px) {
		padding: 0 10px;
	}
`;

const Title = styled.h1`
	width: 100px;
	height: 100px;
	margin: 0;
	display: block;
	float: left;
	text-indent: -9999px;
	background: url(${Logo}) center center no-repeat;
	background-size: contain;
	@media (max-width: 800px) {
		width: 70px;
		height: 70px;
	}
`;

const Nav = styled.nav`
	float: right;
	padding: 40px 0;
	@media (max-width: 800px) {
		padding: 25px 0;
	}
`;

const StyledLink = styled.a`
	float: left;
	line-height: 20px;
	font-family: Arial, sans-serif;
	font-size: 16px;
	color: #D33837;
	margin-left: 20px;
	cursor: pointer;
	&:hover {
		color: #ED684E;
	}
`;

  return (
    <Header>
	    <Container>
	      <Title>Training Center Plataforma</Title>
	      <Nav>
			<StyledLink>Cadastre-se</StyledLink>
			<StyledLink>Login</StyledLink>
	      </Nav>
      </Container>
    </Header>
  )
}