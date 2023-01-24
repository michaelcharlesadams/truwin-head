
function Vendor({vendorIcons}) {

  //the original array length
  console.log(vendorIcons);


  //if the array is greater than 4 members, extract the first three
  const firstThree = vendorIcons.vendorIcons.length >= 1 || vendorIcons.vendorIcons.length <= 3 ? vendorIcons.vendorIcons.slice(0, 3): vendorIcons.vendorIcons;
  const fourthImg = vendorIcons.vendorIcons.length > 3 ? vendorIcons.vendorIcons.slice(3, 4): "";
  const moreImg = vendorIcons.vendorIcons.length > 4 ? vendorIcons.vendorIcons.slice(4): "";


  //the modified length if larger than 3
  console.log(firstThree);

  //the modified length
  console.log(fourthImg);

  //the modified length
  console.log(moreImg);


  return (

    <>
    {/** VENDOR LOGOS */}
    <div id="vendor-section" className="lg:max-w-7xl lg:mx-auto">
      <div id="vendor-wrapper" className="flex justify-between mx-5 mt-8 h-6 sx:h-8 overflow-x-auto">


          {/** First three */}
          {firstThree &&
            firstThree.map(photor1 => (
              <img className="w-auto h-auto object-contain pr-8" src={photor1.vendorIcon.sourceUrl}
              width={photor1.vendorIcon.mediaDetails.width}  height={photor1.vendorIcon.mediaDetails.height} alt="vendor icon" />
                )
            )
          }

          {/** Fourth Image */}
          {fourthImg &&
            fourthImg.map(photor2 => (
              <img className="w-auto h-auto object-contain hidden sm:block pr-8" src={photor2.vendorIcon.sourceUrl}  width={photor2.vendorIcon.mediaDetails.width}  height={photor2.vendorIcon.mediaDetails.height} alt="vendor icon" />
                )
            )
          }

           {/** Fourth Image */}
           {moreImg &&
            moreImg.map(photor3 => (
              <img className="w-auto h-auto object-contain hidden sm:block pr-8" src={photor3.vendorIcon.sourceUrl}  width={photor3.vendorIcon.mediaDetails.width}  height={photor3.vendorIcon.mediaDetails.height} alt="vendor icon" />
                )
            )
          }

      </div>
    </div>
    {/** VENDOR LOGOS */}
    </>

  )
}

export default Vendor;