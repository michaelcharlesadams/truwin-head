
import Link from "next/link";

function MoreServices() {
    
  return (
    <>
    
<div id="more-posts-section" className="lg:max-w-6xl mx-auto">
        <div id="more-posts-wrapper" className="mx-5 mt-20">

             <h3 className="w-[290px] mx-auto pb-2 sx:w-auto  text-3xl text-center sm:text-4xl text-truwinblue-900 font-[Cigars-Semibold]">More ways to improve your exterior:</h3>
            <p className="text-center text-truwinblue-900 font-graphik">Need more than just windows? Our team can help with all of it.</p><br/>
            <div id="more-posts-wrapper-content" className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 mx-auto">

              

                <div id="blog-post-card" 
                        className="relative my-4 w-full min-h-[280px] rounded"

                style={{
                    backgroundColor : '#cccccc', 
                    backgroundBlendMode: 'multiply', 
                    backgroundSize: 'cover', 
                    backgroundImage: 'url("/images/tr-doors.png")',
                    height: '300px',
                    borderRadius: '5px'
                    }} 
                
                >
                    <p className="absolute text-3xl t-0 left-0 text-truwinsoftblue-primary font-semibold pl-5 pt-5 ">Durable Doors</p>
                    <p className="absolute text-2xl t-0 left-0 text-truwinsoftblue-primary  font-graphik px-5 pt-20 md:text-lg"></p>
                    <Link href='/product/doors'> 
                    <a>
                        <button className="px-4 py-2 bg-truwinblue-700 text-white rounded-full absolute bottom-5 left-5">&#8594;</button>
                    </a>
                    </Link>
                    
                </div>

                <div id="blog-post-card" 
                        className="relative my-4 w-full min-h-[280px] rounded"

                style={{
                    backgroundColor : '#cccccc', 
                    backgroundBlendMode: 'multiply', 
                    backgroundSize: 'cover', 
                    backgroundImage: 'url("/images/tr-siding.png")',
                    height: '300px',
                    borderRadius: '5px'
                    }} 
                
                >
                    <p className="absolute text-3xl t-0 left-0 text-truwinsoftblue-primary font-semibold pl-5 pt-5 ">Stronger Siding</p>
                    <p className="absolute text-2xl t-0 left-0 text-truwinsoftblue-primary  font-graphik px-5 pt-20 md:text-lg"></p>
                    <Link href='/product/siding'> 
                    <a>
                        <button className="px-4 py-2 bg-truwinblue-700 text-white rounded-full absolute bottom-5 left-5">&#8594;</button>
                    </a>
                    </Link>
                    
                </div>

                <div id="blog-post-card" 
                        className="relative my-4 w-full min-h-[280px] rounded"

                style={{
                    backgroundColor : '#cccccc', 
                    backgroundBlendMode: 'multiply', 
                    backgroundSize: 'cover', 
                    backgroundImage: 'url("/images/tr-roofing.jpg")',
                    height: '300px',
                    borderRadius: '5px'
                    }} 
                
                >
                    <p className="absolute text-3xl t-0 left-0 text-truwinsoftblue-primary font-semibold pl-5 pt-5 ">Replace Roofing</p>
                    <p className="absolute text-2xl t-0 left-0 text-truwinsoftblue-primary  font-graphik px-5 pt-20 md:text-lg"></p>
                    <Link href='/product/roofing'> 
                    <a>
                        <button className="px-4 py-2 bg-truwinblue-700 text-white rounded-full absolute bottom-5 left-5">&#8594;</button>
                    </a>
                    </Link>
                    
                </div>

               
                
                    
            
               

            </div>
        </div>
    </div>



     <style jsx>{`
      #blog-post-card:nth-child(even) p {
        color: white;
    }
    `}
     </style>    
    
    
    </>
  )
}

export default MoreServices