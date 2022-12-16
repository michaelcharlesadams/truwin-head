import Link from "next/link";

Link

function Quote() {
    return (
  
      <>
      <div id="quote-section" className="lg:max-w-6xl mx-auto">
        <div id="quote-wrapper" className="mx-5 mt-10 md:flex md:min-h-[390px]">

            <div className="px-8 py-14 mb-5 bg-truwinblue-700 text-white rounded">
                
                <p className="py-2 font-graphik text-center">Truwin Replacement</p>
                <h3 className="font-[Cigars-SemiBold] text-5xl py-2 text-center">Built to last.</h3>
                <div className="py-2 font-graphik text-center text-sm sm:px-20 md:px-40">
                    <p>For a fresh, open view from your home, Sunrise’s casement windows offer a unique blend of charm and elegance. Two continuous seals of weather-strip around the window’s perimeter stop drafts from entering your home and provide you with the ultimate in comfort. Custom design enhancements offer the style and versatility you desire.</p>
                </div>
                <div className="">
                    <img loading="lazy"  src="../images/truwin-w-logo.png" className="w-[110px] mx-auto pt-10" />
                </div>

                
            </div>
            
        </div>
    </div>
      </>
  
    )
  }
  
  export default Quote;