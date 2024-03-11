import Image from "next/image";
import Link from "next/link";

function Nav() {

    const myNavToggle = (e) => {
       
        let navMobile = document.querySelector('#navMobile');
      

        let navList = document.querySelector('#navList');
      

        let nav = document.querySelector('#navMobile').getAttribute("name");
        
        
        let toggle = nav === "menu" ? 
            (navMobile.setAttribute("name", "close") , 
            navList.classList.replace("hidden", "block") ) 
            : 
            ( navMobile.setAttribute("name", "menu") , 
            navList.classList.replace("block", "hidden") );
       
    }

  return (
    <>
        <nav className="md:flex lg:max-w-7xl lg:mx-auto mt-2 mb-3">
         
         <div className="p-3 border-solid border-[1px] border-truwinblue-700 rounded-md mx-5 mt-2 flex flex-wrap justify-between md:flex-nowrap md:w-2/3 md:grow">
             {/** LOGO */}
             <div className="w-32 md:pt-[16px] md:min-w-[140px] pt-2" >
                 <Link href="/" >
                    <a >
                        <Image src="/images/truwin.png"
                        width={361}
                        height={68}
                        alt="Truwin logo"
                        />
                    </a> 
                 </Link>
                 
             </div>
            {/** END LOGO */}

             {/** Button */}
            <div id="hug" className="w-[150px] flex justify-between md:hidden ">
                 <div className="px-4 py-2 rounded bg-truwinblue-900">
                    
                     <Link href="/pricing">
                        <button>
                            <a  className=" text-white font-graphikSemibold">Get Pricing</a>
                        </button>
                    </Link>
                        
                 </div>
                 <div id="navMobile" className="cursor-pointer" name="menu" onClick={myNavToggle}>
                     <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-truwinblue-300">
                         {/**<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />*/}
                         <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                     </svg>
                     </span>  
                 </div>
             </div>
               {/** End Button */}
 
               {/** NAV  */}
             <div id="navList" className="w-full pt-3 md:pt-0 md:flex md:justify-end hidden transition ease-in-out duration-500">
                 <ul className="md:flex ">
                     <li className="font-medium text-truwinblue-900 text-lg pb-7 pt-7 block border-b-[1px] border-truwinblue-900 border-solid md:border-b-0 md:pl-4 md:pr-4 md:pb-4 md:pt-4 hover:bg-slate-100 hover:rounded" onClick={()=> myNavToggle()} >
                     <Link href="/product/windows/" ><a>Windows</a></Link>
                      </li>
                     <li className="font-medium text-truwinblue-900 text-lg pb-7 pt-7 block border-b-[1px] border-truwinblue-900 border-solid md:border-b-0 md:pl-4 md:pr-4 md:pb-4 md:pt-4 hover:bg-slate-100 hover:rounded" onClick={()=> myNavToggle()}>
                     <Link href="/product/doors/"  ><a >Doors</a></Link>
                       </li>

                     <li className="font-medium text-truwinblue-900 text-lg pb-7 pt-7 block border-b-[1px] border-truwinblue-900 border-solid md:border-b-0 md:pl-4 md:pr-4 md:pb-4 md:pt-4 hover:bg-slate-100 hover:rounded" onClick={()=> myNavToggle()} >
                     <Link href="/product/siding/"  ><a >Siding</a></Link>
                        </li>
                    <li className="font-medium text-truwinblue-900 text-lg pb-7 pt-7 block border-b-[1px] border-truwinblue-900 border-solid md:border-b-0 md:pl-4 md:pr-4 md:pb-4 md:pt-4 hover:bg-slate-100 hover:rounded" onClick={()=> myNavToggle()} >
                     <Link href="/company"><a >About</a></Link>
                        </li>
                    <li className="font-medium text-truwinblue-900 text-lg pb-7 pt-7 block border-b-[1px] border-truwinblue-900 border-solid md:border-b-0 md:pl-4 md:pr-4  md:hidden hover:bg-slate-100 hover:rounded" onClick={()=> myNavToggle()} >
                     <Link href="/recent_projects"><a >Projects</a></Link>
                    </li>
                     <li className="font-medium text-truwinblue-900 text-lg pb-7 pt-7 block  border-truwinblue-900 border-solid md:border-b-0 md:pl-4 md:pr-4 md:hidden hover:bg-slate-100 hover:rounded" onClick={()=> myNavToggle()} >
                     <Link href="/blog"><a >Blog</a></Link>
                    </li>
                 </ul>
             </div>
               {/** END NAV */}
            
         </div>
         <Link href="/pricing" >
            <div className="hidden md:flex md:flex-auto mt-2 rounded mr-5 md:w-3/12 bg-truwinblue-900 hover:bg-truwinblue-500 cursor-pointer">
                    
                    
                    <button  id="work-request-button-a561e1fc-17f2-4b15-93c1-b91578a9eabb" className="mx-auto">
                        <span className="text-white font-graphikSemibold">Get Pricing </span>
                    </button>
                    
                    
         </div>
         </Link>
        
           {/**  */}
         
           {/**  */}
    
        {/**  */}
 
 
        </nav>
    </>
    );
}

export default Nav