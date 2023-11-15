import React from 'react';
import logo from './../logo.svg';
import './../App.css';

import { useNavigate } from 'react-router-dom';

const MainMenu = () => {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        navigate('/flow');
    }

    return (
      <>
      <button className='btn btn-primary' onClick={routeChange}>Go to Flow menu</button>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </>
    );
}

export default MainMenu;