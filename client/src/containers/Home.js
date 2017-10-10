/* eslint-disable max-len */
import React from 'react'
import Header from '../components/Header'
import styled from 'styled-components';

export default function Home() {

const Wrapper = styled.section`
  margin: 0;
  height: 100%;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  @media (max-width: 1000px) {
    padding: 0 10px;
  }
`;

  return (
    <Wrapper>
      <Header />
      <main>
        <Container>
          Home
        </Container>
      </main>
    </Wrapper>
  )
}