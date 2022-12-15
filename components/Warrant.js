import Link from "next/link";

Link

function Warranty() {
    return (
  
      <>
      <div id="warranty-section" className="lg:max-w-6xl mx-auto">
        <div id="warranty-wrapper" className="mx-5 mt-10 md:flex md:min-h-[390px]">

            <div className="px-5 py-5 mb-5 md:mr-5 md:mb-0 bg-truwinsoftblue-primary text-truwinblue-900 rounded-b md:p-20  md:rounded-br md:rounded-tr md:rounded-bl-none md:rounded-tl-none md:w-3/5">
                
                <p className="py-2 font-graphik text-center">Warranties</p>
                <h3 className="font-serif text-5xl py-2 text-center">Better doors have better warranties.</h3>
                <div className="py-2 font-serif text-center">
                    <p>We stand behind our doors because we know they’ll perform for the long term—with no sagging, warping, cracking, or rotting. That’s why Truwin’s doors come with the most inclusive warranties in the industry. In fact, our fiberglass and steel doors have lifetime warranties.</p>
                </div>
                <div className="text-center">
                <Link href="/company"> 
                    <button className="bg-truwinblue-900 py-4 px-6 rounded-full my-2 text-white">Contact Us</button>
                </Link>
                </div>

                
            </div>

            <div className="md:w-2/5 bg-truwingold-700 text-white p-16">
                <p className="py-2 font-graphik">Testimonials</p>
                <div className="py-2 font-graphik text-2xl ">
                    <p>“I have had Truwin at my house for two years now, just got my mom to get your service at her place. I have yet to have a bad customer experience. Truwin goes above and beyond.”</p>
                </div>
                <p className="py-2 font-graphik">Stephen t</p>
                
            </div>
            
        </div>
    </div>
      </>
  
    )
  }
  
  export default Warranty;