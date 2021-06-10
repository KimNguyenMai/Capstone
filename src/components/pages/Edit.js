import React, { Component } from 'react'
import Select from 'react-select';
import { Button } from '../Button';
import '../css/events.css';
import { Link } from 'react-router-dom';

const options = [
  { value: 'UKC', label: 'UKC' },
  { value: 'UCC', label: 'UCC' },
  { value: 'NMSC', label: 'NMSC' }
]

function Edit(){
    return(
        <>
        <h2>Fill out below information to create new events</h2>
        <p>Enter Event Name</p>
        <form>
        <input type="text"/>
        </form>
        <p>Enter Event Date</p>
        <form>
        <input type="text"/>
        </form>
        <p>Enter Event Description</p>
        <form>
        <input type="text"/>
        </form>
        <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
            Submit
        </Button>
        </div> <br/>

        <h2> Select event to edit or delete </h2>
        <Select options={options} />

        <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
            Edit
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
            Delete
        </Button>
        </div> 

        </>
    )
} 

export default Edit;