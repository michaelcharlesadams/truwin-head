import React from 'react';
import { useState, useEffect } from "react";
import ReactPlayer from 'react-player/youtube'

function HeroVideo({url, cover}) {  

    console.log(url);
    console.log(cover);


//toggle video modal
const [display, setDisplay] = useState('none');
const [playing, setPlaying] = useState(false);

const vidStyle = {
    width: '100%',
    height: '640px'
}

  return (
    <>
    
    <div className="relative mt-4 w-full  h-auto md:w-7/12 md:ml-2 md:mt-0 ">
                    

        <button id="myBtn" onClick={() => {
            display === 'none' ? setDisplay('block') : setDisplay('none');
            //start video
            playing === false ? setPlaying(true) : setPlaying(false);
        }}  >

            {/** PLACE HOLDER IMAGE */}
            <img className="cursor-pointer w-full md:min-h-[420px] max-h-[480px] md:object-cover rounded" src={cover} alt="truwin president" />
        </button>
       
        {/** VIDEO CONTAINER */}
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
        
         {/** STOP BUTTON */}
        <p id="stop-vid" className="closebtn cursor-pointer"  onClick={() => {
            display === 'none' ? setDisplay('block') : setDisplay('none');
            //stop video
            playing === true ? setPlaying(false) : setPlaying(true);

            
        
        }}

            style={{
                position: 'absolute',
                fontSize: '25px', 
                color: 'white', 
                display: 'inline-block',
                top: '10px',
                right: '35px'
                }}>X</p> 
        
        
        {/*** REACT PLAYER */}
        <div className="player-wrapper ">
            <ReactPlayer 
                className='react-player'
                playing={playing} 
                url={url}
                width='100%'
                height='300px'
                controls='false'
            />
        </div>
       

        </div>
        
     
    </div>
    <style jsx>{`
    .closebtn:hover, .closebtn:focus {
        color: #f1f1f1;
      }
      .player-wrapper {
        position: relative;
        margin-top: 15.25% 
    }
    
    .react-player {
        position: absolute;
        top: 0;
        left: 0;
    }
    `}</style>
    </>
  )
}

export default HeroVideo