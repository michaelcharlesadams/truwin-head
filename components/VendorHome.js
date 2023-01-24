
function VendorHome() {

  const yimages = [
    {0: "/images/smartside_logo.png"},
    {0: "/images/smartside_logo.png"},
    {0: "/images/smartside_logo.png"},
    {0: "/images/softlite.png"},
    {0: "/images/marvin_windows_doors.png"},
    {0: "/images/marvin_windows_doors.png"},
    {0: "/images/marvin_windows_doors.png"},
    {0: "/images/marvin_windows_doors.png"},
    {0: "/images/marvin_windows_doors.png"},
  ]

  //if the array is greater than 4 members, extract the first three
  const firstThree = yimages.length > 3 ? yimages.slice(0, 3): "Less than 3";
  const fourthImg = yimages.length > 3 ? yimages.slice(3, 4): "Less than 3";
  const moreImg = yimages.length > 4 ? yimages.slice(4): "Less than 4";
  
  
  //the original array length
  console.log(yimages);

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
      <div id="vendor-wrapper" className="flex justify-between mx-5 mt-8 h-6 sx:h-8">
          <img className="max-w-[105px] sm:w-auto h-auto object-contain" src="/images/smartside_logo.png" alt="smartside_logo" />
          <img className="max-w-[80px] md:max-w-[127px] h-auto object-contain" src="/images/Jeldwen.png" alt="Jeldwen" />
          <img className="w-auto h-auto object-contain" src="/images/softlite.png" alt="softlite" />
          <img className="w-auto h-auto object-contain hidden sm:block"  src="/images/anderson-windows.png" alt="anderson-windows" />
          <img className="w-auto h-auto object-contain hidden md:block" src="/images/marvin_windows_doors.png" alt="marvin_windows_doors" />
          <img className="w-auto h-auto object-contain hidden md:block" src="/images/earthwise.png" alt="earthwise" />
      </div>
    </div>
    {/** VENDOR LOGOS */} 
    </>

  )
}

export default VendorHome;