import React from 'react'
import '../../App.css'
import '../css/events.css';
import { Button } from '../Button';
// import img9 from '../../../public/images/image-9.jpg'

export default function UKC() {
    return (
      <div className='event-container'>
        <h1>Pursuing Global Health and Sustainability</h1>
        <h2 >Hyatt Regency Orange County, Garden Grove, CA</h2>
        <h2>December 15 - 18, 2021</h2>
        <br/>
        <img src='images/img-9.jpg'/>
        <h3>About UKC 2021</h3>
        <p>The US-KOREA Conference on Science, Technology, and Entrepreneurship (UKC) 2021 will be held on December 15 – 18, 2021 at the Hyatt Regency Orange County hotel in Los Angeles area, California in the United States.</p>
        <p>UKC 2021 is organized by three prestigious organizations – the Korean-American Scientists and Engineers Association (KSEA), Korean Federation of Science & Technology Societies (KOFST), and Korea-U.S. Science Cooperation Center (KUSCO).</p>
        <br/>
        <img src='images/UKC.png'/><br/>
        <h2>Call for Papers</h2>
        <h3>Please submit your paper to present in UKC 2021. </h3> <br/>
        <div className='event-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          View Call for Papers
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Submit Paper
        </Button>
      </div>
      </div>
    );
  }
  
  