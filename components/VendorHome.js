import Script from "next/script";

function VendorHome() {

  
  return (
    
    <>  
  
    {/** VENDOR LOGOS */}
    <div id="vendor-section" className="lg:max-w-7xl lg:mx-auto">
      <div id="vendor-wrapper" className="flex justify-between mx-5 mt-8 h-6 sx:h-8 translate-x-0">
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