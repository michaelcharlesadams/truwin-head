import React from 'react';
import { useState, useEffect } from "react";
import Script from 'next/script'


function ProductVideo() {  
    
//toggle video modal
const [display, setDisplay] = useState('none')

  return (
    <>
    
    <div id="hero-video-section" className="mx-auto">
      <div id="hero-video-wrapper" className="mt-20 relative">


        <button id="myBtn" onClick={() => {

            display === 'none' ? setDisplay('block') : setDisplay('none');
            
            return display;
        }}  >


            <img className="cursor-pointer" src="/images/video-windows-th.png" alt="truwin windows video showcase" />
        </button>

        <div id="video-container" className="" 
            style={{
                    display: display,
                    height : '100%',
                    width: '100%',
                    position: 'fixed', /* Stay in place */
                    zIndex: 10, /* Sit on top */
                    left: 0,
                    top: 0,
                    backgroundColor: 'black', /* Black fallback color */
                    /* Black w/opacity */
                    overflowX: 'hidden' /* Disable horizontal scroll */
                    
            }}
            >
        
        <p id="stop-vid" className="closebtn"  onClick={() => {
            display === 'none' ? setDisplay('block') : setDisplay('none');

            
            return display;} }

            style={{
                position: 'absolute',
                fontSize: '45px', 
                color: 'white', 
                display: 'inline-block',
                top: '20px',
                right: '45px'
                }}>X</p>

        
        <div id="vid-player"
            style={{
                position: 'relative',
                top: '25%',
                width: '300px',
                margin: 'auto'
        }}>
            <iframe  
                src="https://www.youtube.com/embed/eeL_Yi0n3Kw?enablejsapi=1&html5=1" 
                title="Truwin About" 
                allowFullScreen>
            </iframe>
        </div>
        
        </div>
    
      </div>
    </div>
    <style jsx>{`
    .closebtn:hover, .closebtn:focus {
        color: #f1f1f1;
      }
    `}</style>

    </>
  )
}

export default ProductVideo