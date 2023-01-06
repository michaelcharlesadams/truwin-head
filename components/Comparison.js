import React from 'react';
import Image from 'next/image';

function Comparison() {
  return (
    <>
     {/**  COMPARISON **/}
     <div id="comparison-session" className="lg:max-w-6xl mx-auto">
        <div id="comparison-wrapper" className="mx-5 my-20 ">

            <h3 className="text-2xl md:text-4xl text-center font-[Cigars-Semibold] text-truwinblue-900">Compare our windows to competitors</h3>
            <div id="comparison-links" className="p-5 justify-around  text-truwinblue-900 max-w-md mx-auto hidden" >
                <small>Link 1</small>
                <small>Link 2</small>
                <small>Link 3</small>
                <small>Link 4</small>
            </div>

            <div id="comparison-container" className="bg-truwinsoftblue-primary py-10 px-10 md:px-14  md:py-20 sm:flex mt-10">
                <div className='max-w-sm'>
                  <Image
                  src="/images/comparison–windows.jpg"
                  width={862}
                  height={608}
                  />
                </div>
                <div id="comparison-content" className="my-5 sm:pl-14 md:pl-20 sm:pr-5 ss:max-w-[430px] md:max-w-lg">
                    <small className='text-truwinblue-900 font-graphikSemibold tracking-wider'>HIGH QUALITY FRAMES</small>
                    <h3 className="text-2xl md:text-3xl pb-2 pt-4 font-[Cigars-SemiBold] text-truwinblue-900">27% more viewing area means more light in your home.</h3>
                    <p className="text-truwinblue-900">Compare our windows to our competitors to really see what you’re getting. Be sure to ask to see this during our in-person consultation.</p>
                </div>
               

            </div>

        </div>
      </div>
      {/**  END  COMPARISON **/}
    </>
  )
}

export default Comparison