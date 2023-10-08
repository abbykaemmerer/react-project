import React from 'react'
import { Button } from './Button'
import './HeroSection.css';
import '../App.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src='/videos/video-2.mp4' autoPlay loop muted/>
        <h1>Adventure Awaits</h1>
        <p>What are you waiting for?</p>
        <div className='hero-btns'>
            <Button className='btns' buttonSize='btn--large' buttonStyle='btn--outline'>
                Get Started
            </Button>
            <Button className='btns' buttonSize='btn--large' buttonStyle='btn--primary'>
                Watch trailer <i className='far fa-play-circle'/>
            </Button>
        </div>
    </div>
  );
}

export default HeroSection;