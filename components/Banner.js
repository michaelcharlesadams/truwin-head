import React from 'react'
import Link from 'next/link'

function Banner({title}) {

    const titleLower = title.toLowerCase();

  return (
    <>
     {/** BANNER - ENJOY A BETTER PRODUCT */}
     <div id="banner-type-section" className="max-w-6xl mx-auto">
          <div id="banner-type-wrapper" className="mx-5 my-16">
            
            <div id="banner-container" className="bg-truwinblue-900 sm:flex justify-between py-12 px-16">

                  <h3 className="text-white font-[Cigars-Semibold] py-5 text-3xl sx:text-left sx:text-3xl">It’s time to enjoy better {titleLower}.</h3>
                  <Link href="/pricing">
                    <button className="bg-white text-truwinblue-900 rounded-full py-4 px-8 sm:mx-6 min-w-[180px] max-h-20 mx-auto">Get a free estimate</button>
                  </Link>
            </div>

          </div>
      </div>
      {/** END BANNER - ENJOY A BETTER PRODUCT */}
    </>
  )
}

export default Banner