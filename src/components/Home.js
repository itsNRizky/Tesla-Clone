import React from 'react';
import styled from 'styled-components'
import Section from './Section';

function Home() {
  return <div>
      <Container>
        <Section
          car="Model S" 
          img="model-s.jpg"/>
        <Section
          car="Model Y" 
          img="model-y.jpg"/>
        <Section
          car="Model 3" 
          img="model-3.jpg"/>
        <Section
          car="Model X" 
          img="model-x.jpg"/>
        <Section
          car="Lowest Cost Solar Panels in America"
          img='solar-panel.jpg' />

      </Container>
  </div>;
}

export default Home;

const Container = styled.div`
    height: 100vh;

`