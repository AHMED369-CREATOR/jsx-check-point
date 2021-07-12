import superMario from './image.jpg';
import './App.css';
import './style.css';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <div style={{ border: 'solid 1px black', maxWidth: '100vw' }}>
        <h1 className='title red'>Your name here</h1>
        <br />
        <img src={superMario} alt='superMario' />
        <br />
        <img src='/minion.jpg' alt='publicImage' />
      </div>
      <iframe
        width='560'
        height='315'
        src='https://www.youtube.com/embed/Ke90Tje7VS0'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      ></iframe>
    </React.Fragment>
  );
}

export default App;
