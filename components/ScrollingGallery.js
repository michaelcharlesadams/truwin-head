import { useState } from "react";
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import Link from "next/link";

function ScrollingGallery({postGallery}) {


const onInit = () => {
    console.log('lightGallery has been initialized');
};


  return (
    <>
    {postGallery && 
        <div id="gallery-section" className="mx-auto">
            <div id="gallery-wrapper" className=" mx-auto">

                <h3 className="text-3xl text-center font-cigar text-truwinblue-900 py-6">Gallery of Inspiration</h3>
         
           

            <div id="slider-wrapper" >
                <div id="slider-images" className="">
                  
                    <LightGallery
                        onInit={onInit}
                        speed={500}
                        plugins={[lgThumbnail, lgZoom]}
                        elementClassNames="flex overflow-scroll w-full"
                    >
                        {postGallery?.map((photo) =>

                            <a key={photo?.sourceUrl} href={photo.productTypeGalleryImage.sourceUrl}>
                                <img className="w-auto removeMaxImage h-[500px]" alt={photo.productTypeGalleryTitle} src={photo.productTypeGalleryImage.sourceUrl} />
                            </a>
                        
                        )}
                        
                    </LightGallery>

                </div>
            </div>
                <style jsx>{`
                .removeMaxImage{
                    max-width: none
                }
                `}</style>
            </div>
        </div>
    }
   
    </>
  )
}

export default ScrollingGallery;