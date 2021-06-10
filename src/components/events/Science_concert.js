import React from 'react'
import '../../App.css'
import '../css/events.css';
import { Button } from '../Button';
// import img9 from '../../../public/images/image-9.jpg'
import ReactPlayer from "react-player";

export default function SciCon() {
    return (
      <div className='event-container'>
        <img src='images/img-3.jpg'/>
        <h3>Meeting with World-Renowned Korean-American Scientists and Engineers</h3>
        <p>KSEA is pleased to offer its first “KSEA Science Concert,” online meetings with renowned scientists and engineers. The concert is to provide high school students with opportunities to meet world-renowned Korean-American scientists and engineers through a series of online meetings. Participants will not only listen to their success stories, but also have opportunities to directly interact with them. This will be a particularly good opportunity for those who think of science and engineering as their future career.</p>
        <h2>Speakers and Topics</h2>
        <h4>“Stacking atomic layers: quest for new materials and physics”</h4>
        <p>Modern electronics has been heavily relied on the technology to confine 
        electrons in the interface layers of semiconductors. In recent years, 
        scientists discovered that various atomically thin materials including graphene, 
        a single atomic carbon layer, can be isolated. In these atomically thin materials, 
        quantum physics allows electrons to move only in an effective 2-dimensional (2D) space.  
        By stacking these 2D quantum materials, one can also create atomic-scale heterostructures with 
        a wide variety of electronic and optical properties. I will discuss the creation of new heterostructures 
        based on atomically thin materials and emerging new physics with technological implications therein. </p>
        <div><ReactPlayer url='https://youtu.be/RV98E5DyLhs'/></div>
        <p>Dr. Philip Kim is Professor of Physics and Professor Applied Physics at Harvard University. 
        Professor Kim is a world leading scientist in the area of materials research. 
        His research area is experimental condensed matter physics with an emphasis on physical properties 
        and applications of nanoscale low-dimensional materials.  The focus of Prof. Kim’s group research is 
        the mesoscopic investigation of transport phenomena, particularly, electric, thermal and 
        thermoelectrical properties of low dimensional nanoscale materials.</p>
        </div>
    );
  }
  
  