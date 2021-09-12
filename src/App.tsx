import React from 'react';
import styled from 'styled-components';

import './App.css';

function App() {
  const Button = styled.button`
    font-size: 1em;
    color: white;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #05d806;
    border-radius: 32px;
    background-color: #05d806;
    transition: 0.3s;
    :hover{
      background-color: #34bf44;
      border: 2px solid #34bf44;
      cursor: pointer;
      /* color: black; */
      /* border: 2px solid black; */
    }
  `

  return (
      <div className="App">
        <header className="App-header">
          <p>We're trying out a link.</p>
          <a href="https://livelife.church/online">
            <Button>Life Church Online</Button>
          </a>
        </header>
      </div>
  );
}

export default App;
