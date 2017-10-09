import React from 'react';
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1 className="main-title">Training Center Plataforma</h1>
      <nav>
      	<a href="">Cadastre-se</a>
      	<a href="">Login</a>
      </nav>
    </header>
  )
}