import Image from "next/image";
import Link from "next/link";


function Footer() {
    return (
       <>
       <div id="footer-section" className="mx-auto">    
        
            <style jsx> {`
                #footer-content p {
                    padding-bottom: 8px;
                }
            `}
               
            </style>
            <div id="sub-footer-wrapper" className="p-10 mt-20 bg-truwinsoftblue-primary">

                <div className="grid grid-cols-1 sx:grid-cols-2 md:grid-cols-4 ">


                    <Link href="https://www.bbb.org/us/tx/humble/profile/windows/truwin-enterprises-llc-0915-90051142">
                        <a target="_blank">
                            <img className="m-3 mx-auto" src="/images/bbb.png" width='100px' height='100%' />
                        </a>
                    </Link>
                   
                    
                    <Link  href="https://web.lakehouston.org/list/member/truwin-windows-doors-15750">
                        <a target="_blank">
                            <img className="m-4 mx-auto" src="/images/lake-houston-chamber.jpg" width='165px' height='59px' />
                        </a>
                    </Link>
                    

                    <Link href="https://www.houzz.com/pro/truwin/truwin-windows-doors">
                        <a target="_blank">
                            <img className="m-4 mx-auto" src="/images/houzz.jpg" width='165px' height='44px'/>
                        </a>
                    </Link>
                    
                    <Link href="https://g.page/r/CWA1WqW6HKBlEBM/review">
                        <a target="_blank">
                            <img className="m-4 mx-auto"  src="/images/google.jpg" width='131px' height='58px' />
                        </a>
                    </Link>
                   
                </div>
               
            </div>
            
            <div id="footer-wrapper" className="px-5 bg-truwinblue-900 text-white lg:flex lg:flex-wrap">
                <div id="footer-header" className="text-center w-36 mx-auto py-16 lg:w-2/5">
                    <img src="/images/truwin-w-logo.png" className="lg:mx-auto py-2" alt="Truwin logo" />
                    <p className="text-[11px] lg:text-lg lg:pt-1">THE EXTERIOR EXPERTS</p>
                    <div id="social-footer" className="flex w-auto mx-auto justify-evenly mt-10 lg:hidden">
                        <span className="w-6"><Image 
                        width={46}
                        height={46}
                        src="/images/Facebook - truwin.png" 
                        alt="Facebook logp" />
                        </span>

                        <span className="w-6"><Image
                        width={46}
                        height={46} 
                        src="/images/twitter - truwin.png" 
                        alt="Twitter Log" />
                        </span>

                        <span className="w-6"><Image 
                        className="w-6" 
                        width={46}
                        height={46}
                        src="/images/instagram - truwin.png" 
                        alt="Instagram Logo" /></span>
                    </div>
                </div>
    
            <div id="footer-content" className="flex flex-wrap mx-auto text-sm w-11/12 pl-[10%] sm:flex-nowrap sm:pl-0 lg:w-3/5 lg:pt-12">
                <div id="footer-col-1" className="w-2/4 mb-12 lg:mb-5">
                    <h4 className="font-graphikSemibold text-truwinblue-300 pb-4">Services</h4>
                    <p>
                    <Link href="/product/windows"><a >Windows</a></Link>
                    </p>
                    <p>
                    <Link href="/product/doors"><a >Doors</a></Link>
                    </p>
                    <p>
                    <Link href="/product/siding"><a >Siding</a></Link>
                    </p>
                    <p><Link href="/product/roofing"><a >Roofing</a></Link></p>
                </div>
                <div id="footer-col-2" className="w-2/4 mb-12 lg:mb-5">
                    <h4 className="font-graphikSemibold text-truwinblue-300  pb-4">About Truwin</h4>     
                    <p><Link href="/company"><a >Company</a></Link></p>
                    <p><Link href="/post"><a >Blog</a></Link></p>
                </div>
                <div id="footer-col-3" className="w-2/4 mb-12 lg:mb-5">
                    <h4 className="font-graphikSemibold text-truwinblue-300  pb-4">Service Areas</h4>
                    <p><Link href="/location/houston"><a className="cursor-pointer" >Houston</a></Link></p>
                    <p><Link href="/location/kingwood"><a className="cursor-pointer" >Kingwood</a></Link></p>
                    <p><Link href="/location/bryan"><a className="cursor-pointer">Bryan</a></Link></p>
                    <p><Link href="/location/college-station"><a className="cursor-pointer">College Station</a></Link></p>
                    <p><Link href="/location"><a className="cursor-pointer">All Areas</a></Link></p>
                    
                    
                    
                    
                
                    
                </div>
                <div id="footer-col-4" className="w-2/4 mb-12 lg:mb-5">
                    <h4 className="font-graphikSemibold text-truwinblue-300  pb-4">Contact Us</h4>
                    <div>
                        <p><a href="tel:832-777-3681">(832) 777-3681</a></p>
                        <p><a href="mailto:info@truwin.com">info@truwin.com</a></p>
                    </div>
                    <div>
                        <p><a href=""></a></p>
                        <p>3706 Acorn Ln.
                        <br/>Porter, TX 77365</p>
                            

                    </div>
                    
                </div>
            </div>
                
    
                <div id="footer-bottom" className="mx-auto text-xs w-11/12 pb-14 lg:w-full lg:pl-[40%] flex">
                    <p>© Truwin, Windows, Doors, and Siding • All Rights Reserved • Site by AC</p>
                    <div id="social-footer" className="w-2/5 mx-auto justify-evenly hidden lg:flex">
                    

                    <span className="w-6">
                        <a href="https://www.facebook.com/truwinwindowsanddoors" target="_blank">
                        <Image 
                        width={46}
                        height={46}
                        src="/images/Facebook - truwin.png" 
                        alt="Facebook logp" />
                        </a>
                        </span>

                        <span className="w-6">
                        <a href="https://twitter.com/TruwinWindows" target="_blank">
                        <Image
                        width={46}
                        height={46} 
                        src="/images/twitter - truwin.png" 
                        alt="Twitter Log" />
                        </a>
                        </span>

                        <span className="w-6">
                        <a href="https://www.instagram.com/truwinwindows" target="_blank">
                        <Image 
                        className="w-6" 
                        width={46}
                        height={46}
                        src="/images/instagram - truwin.png" 
                        alt="Instagram Logo" />
                        </a>
                        </span>
                        </div>
                    </div>
            </div>
            
        </div>
        {/**  START OF SCRIPTS */}
       
    
         {/**  END OF SCRIPTS */}
       </>
    )
  }
  
  export default Footer;