import React from 'react'
import '../../App.css'
import '../css/events.css';
import { Button } from '../Button';
// import img9 from '../../../public/images/image-9.jpg'

export default function NMSC() {
    return (
      <div className='event-container'>
        <h1>National Math Competition 2021</h1>
        <h2>Test on April 24th (Sat) - 25th (Sun), 2021</h2>
        <h2>Online registration will close on 4/15/2021 (Thu) 5PM EDT</h2>
        <br/>
        <img src='images/img-2.jpg'/>
        <h3>About NMSC 2021</h3>
        <p>Mathematics and Science are very important in our rapidly changing technological and scientific age. Proficiency in math and science is the gateway to all kinds of careers. The Korean-American Scientists & Engineers Association (KSEA) offers the National Mathematics & Science Competition (NMSC) to challenge and inspire students. The KSEA NMSC is also dedicated to elevate mathematical abilities, talents, and scientific innovation of all students. The KSEA NMSC is dedicated to the goal of fostering mathematical and scientific capabilities of all students.</p>
        <br/>
        <h2>Upcoming Events</h2>
        <h3>NMC 2021 National Award Ceremony</h3>
        <div className='event-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Join via Zoom
        </Button>
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
  
  