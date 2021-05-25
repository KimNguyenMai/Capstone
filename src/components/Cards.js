import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Korean-American Scientist and Engineers Association</h1>
      <h1>Featured Events and Activities</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Pursuing Global Health and Sustainability The US-KOREA Conference on Science, Technology, and Entrepreneurship (UKC)'
              label='UKC'
              path='/activities'
            />
            <CardItem
              src='images/img-2.jpg'
              text='National Math & Science Competition (NMSC)'
              label='NMSC'
              path='/activities'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='KSEA Science Concert'
              label='Science Concert'
              path='/activities'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Youth STEM Video Contest'
              label='UCC'
              path='/activities'
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
  );
}

export default Cards;
