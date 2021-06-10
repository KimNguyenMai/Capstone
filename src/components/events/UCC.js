import React from 'react'
import '../../App.css'
import '../css/events.css';
import { Button } from '../Button';
// import img9 from '../../../public/images/image-9.jpg'
import ReactPlayer from "react-player";

export default function SciCon() {
    return (
      <div className='event-container'>
        <img src='images/img-4.jpg'/>
        <h2>Learn more about UCC</h2>
        <div className='event-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Continue Reading
        </Button>
      </div>
        <h2>Join the Competition</h2>
        <div className='event-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Register
        </Button>
      </div>
      </div>
    );
  }
  
  