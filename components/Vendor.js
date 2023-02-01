import Script from "next/script";

function Vendor({vendorIcons}) {


const sliderNext = (e) => {

//get the next button
let sliderNext = document.querySelector("#slideNext");

//grab next index
let slideNextIndex = sliderNext.getAttribute("data-index");

 //get the wrapper images
let sliderWrapper = document.querySelectorAll("#vendor-wrapper img");

//img length
let sliderLength = sliderWrapper.length;

//increase translate 
let moveBY = 200;

//if there aren't enough photos to carousel, then don't move
//if we've click to many times, rest.
if( sliderLength <= 5 || slideNextIndex > 3){ 
  slideNextIndex = 0;
  sliderNext.dataset.index = -1
}

//increase the translate value by 200
let moveTo = moveBY * slideNextIndex;

//grab each img and update css to translate forward
sliderWrapper.forEach(element => {
  element.style.transform = "translate(" + moveTo + "px)";
});
        
        
  //increase Next Index by 1
  sliderNext.dataset.index++;
  
//END OF NEXT BUTTON FUNCTION
}
  
const sliderPrevious = (e) => {

  //get the previous button
  let sliderPrevious = document.querySelector("#slidePrevious");
  
  //grab previous index
  let slidePreviousIndex = sliderPrevious.getAttribute("data-index");
  
    //get the wrapper images
  let sliderWrapper = document.querySelectorAll("#vendor-wrapper img");
  
  //img length
  let sliderLength = sliderWrapper.length;
  
  //negative translate value to move by
  let moveBY = -200;
  if( sliderLength <= 4 || slidePreviousIndex > 4){ 
    slidePreviousIndex = 0;
    sliderPrevious.dataset.index = -1
  }
  
    //Backwards
    let moveTo = moveBY * slidePreviousIndex;

   //grab each img and update css to translate backwards
    sliderWrapper.forEach(element => {
      element.style.transform = "translate(" + moveTo + "px)";
    });
      
  
    //decrease Index by 1
    slidePrevious.dataset.index++;
    
      
}




  //if the array is greater than 4 members, extract the first three
  const firstThree = vendorIcons.vendorIcons?.length >= 1 || vendorIcons.vendorIcons?.length <= 3 ? vendorIcons.vendorIcons.slice(0, 3): vendorIcons.vendorIcons;
  const fourthImg = vendorIcons.vendorIcons?.length > 3 ? vendorIcons.vendorIcons.slice(3, 4): "";
  const moreImg = vendorIcons.vendorIcons?.length > 4 ? vendorIcons.vendorIcons.slice(4): "";
  const VendorClass = vendorIcons.vendorIcons?.length <= 5? "justify-center" : "justify-between";

  //the modified length if larger than 3
  //console.log(firstThree);

  //the modified length
  //console.log(fourthImg);

  //the modified length
  //console.log(moreImg);

  
 

  return (

    <>
    <style jsx>{`
    #vendor-wrapper::-webkit-scrollbar{
      display:none;
    }
    `}
    </style>
    {/** VENDOR LOGOS */}
    <div id="vendor-section" className="lg:max-w-7xl lg:mx-auto">
      <div id="vendor-wrapper" className={`flex mx-5 mt-12 h-6 sx:h-12 overflow-x-auto translate-x-0 ${VendorClass}`}>


          {/** First three */}
          {firstThree &&
            firstThree.map((photor1, index) => (
              <img key={index} className="w-auto h-auto object-contain pr-10" 
              style={{"transform" : "translate(0px)","transition": "transform 1s"}} src={photor1.vendorIcon.sourceUrl}
              width={photor1.vendorIcon.mediaDetails.width}  height={photor1.vendorIcon.mediaDetails.height} alt="vendor icon" />
                )
            )
          }

          {/** Fourth Image */}
          {fourthImg &&
            fourthImg.map( (photor2, index) => (
              <img key={index} className="w-auto h-auto object-contain hidden sm:block pr-10" 
              style={{"transform" : "translate(0px)","transition": "transform 1s"}} src={photor2.vendorIcon.sourceUrl}  width={photor2.vendorIcon.mediaDetails.width}  height={photor2.vendorIcon.mediaDetails.height} alt="vendor icon" />
                )
            )
          }

           {/** Fourth Image */}
           {moreImg &&
            moreImg.map( (photor3, index) => (
              <img key={index} className="w-auto h-auto object-contain hidden sm:block pr-10" 
              style={{"transform" : "translate(0px)", "transition": "transform 1s"}} src={photor3.vendorIcon.sourceUrl}  width={photor3.vendorIcon.mediaDetails.width}  height={photor3.vendorIcon.mediaDetails.height} alt="vendor icon" />
                )
            )
          }

      </div>
    </div>
    {firstThree &&
    <div className="flex pt-4 justify-around">
      <button id="slidePrevious" onClick={sliderPrevious} data-index="1">&#8592;</button>
      <button id="slideNext" onClick={sliderNext} data-index="1">&#8594;</button>
    </div>
    }   
    {/** VENDOR LOGOS */}
    </>

  )
}

export default Vendor;