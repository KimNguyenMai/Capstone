import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import CardItem from '../CardItem';
import { Button } from '../Button';
import '../css/events.css';
import { withAuthenticator } from '@aws-amplify/ui-react';

function Login() {
  return (
    <>
        <div >
    <h1>Available Events</h1>
    <div className='cards__container'>
      <div className='cards__wrapper'>
        <ul className='cards__items'>
          <CardItem
            src='images/img-9.jpg'
            text='Pursuing Global Health and Sustainability The US-KOREA Conference on Science, Technology, and Entrepreneurship (UKC)'
            label='UKC'
            path='/ukc'
          />
          <CardItem
            src='images/img-2.jpg'
            text='National Math & Science Competition (NMSC)'
            label='NMSC'
            path='/nmsc'
          />
        </ul>
        <ul className='cards__items'>
          <CardItem
            src='images/img-3.jpg'
            text='KSEA Science Concert'
            label='Science Concert'
            path='/science-concert'
          />
          <CardItem
            src='images/img-4.jpg'
            text='Youth STEM Video Contest'
            label='UCC'
            path='/ucc'
          />
          <CardItem
            src='images/img-8.jpg'
            text='Become KSEA Member'
            label='Memebership'
            path='/sign-up'
          />
        </ul>
      </div>
    </div>
  </div>


    <div className='login-container'>
    <div className='event-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Create Events 
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Edit My Events 
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Delete My Events 
        </Button>
      </div>
    </div>

  </>
  )
}


export default withAuthenticator(Login);
//export default Login;
