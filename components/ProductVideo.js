import React from 'react';
import { useState, useEffect } from "react";
import Script from 'next/script'
// import LightGallery from 'lightgallery/react';
// import 'lightgallery/css/lightgallery.css';
// import 'lightgallery/css/lg-zoom.css';
// import 'lightgallery/css/lg-thumbnail.css';
// import lgThumbnail from 'lightgallery/plugins/thumbnail';
// import lgZoom from 'lightgallery/plugins/zoom';
// import lgVideo from 'lightgallery/plugins/video';
import Link from "next/link";
import ReactPlayer from 'react-player/youtube'

function ProductVideo() {  

// const onInit = () => {
//     console.log('lightGallery has been initialized');
// };

//toggle video modal
const [display, setDisplay] = useState('none')

const vidStyle = {
    width: '100%',
    height: '640px'
}

  return (
    <>
    
    <div id="hero-video-section" className="mx-auto">
      <div id="hero-video-wrapper" className="mt-20 relative">


        {/* <button id="myBtn" onClick={() => {

            display === 'none' ? setDisplay('block') : setDisplay('none');
            
            return display;
        }}  > */}


        {/* <img className="cursor-pointer" src="/images/video-windows-th.png" alt="truwin windows video showcase" />
        </button> */}

        <div id="video-container" className="" 
            // style={{
            //         display: display,
            //         height : '100%',
            //         width: '100%',
            //         position: 'fixed', /* Stay in place */
            //         zIndex: 10, /* Sit on top */
            //         left: 0,
            //         top: 0,
            //         backgroundColor: 'black', /* Black fallback color */
            //         /* Black w/opacity */
            //         overflowX: 'hidden' /* Disable horizontal scroll */
                    
            // }}
            >
        
        {/* <p id="stop-vid" className="closebtn"  onClick={() => {
            display === 'none' ? setDisplay('block') : setDisplay('none');

            
            return display;} }

            style={{
                position: 'absolute',
                fontSize: '45px', 
                color: 'white', 
                display: 'inline-block',
                top: '20px',
                right: '45px'
                }}>X</p>  */}

         {/*
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
        </div> */}

                    {/* <LightGallery
                        onInit={onInit}
                        speed={500}
                        plugins={[lgZoom, lgVideo]}
                        elementClassNames=""
                    >
                       

                       <a
                            className="gallery-item"
                            data-src="https://www.youtube.com/watch?v=eeL_Yi0n3Kw&mute=0"
                            //https://www.youtube.com/embed/eeL_Yi0n3Kw?enablejsapi=1&html5=1
                            key="4"
                        >
                            <img
                            style={{ maxWidth: '100%' }}
                            className="img-responsive"
                            alt=""
                            src="/images/video-windows-th.png"
                            />
                        </a>
                        {/* <a key="" href="">
                            <img className="w-auto removeMaxImage h-[500px]" alt={photo.productTypeGalleryTitle} src={photo.productTypeGalleryImage.sourceUrl} />
                        </a> 
                        
                    
             </LightGallery> 
        */}
        
        {/*** REACT PLAYER */}
        <div class="">
            <ReactPlayer width='100%' url='https://www.youtube.com/watch?v=eeL_Yi0n3Kw&mute=0&rel=0' />
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