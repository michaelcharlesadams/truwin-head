import Image from "next/image";
import Link from "next/link";

function Nav() {

    const myNavToggle = (e) => {
       
        let navMobile = document.querySelector('#navMobile');
        //console.log(navMobile);

        let navList = document.querySelector('#navList');
        //console.log(navList);

        let nav = document.querySelector('#navMobile').getAttribute("name");
        //console.log(nav);
        
        let toggle = nav === "menu" ? (navMobile.setAttribute("name", "close") , navList.classList.replace("hidden", "block") ) : ( navMobile.setAttribute("name", "menu") , navList.classList.replace("block", "hidden") );
        //console.log(toggle); 
    }

  return (
    <>
        <div className="md:flex lg:max-w-6xl lg:mx-auto ">
         
         <div className="p-4 border-solid border-2 border-truwinblue-700 rounded-md mx-5 mt-2 flex flex-wrap justify-between md:flex-nowrap md:w-2/3 md:grow">
             {/** LOGO */}
             <div className="w-32 md:pt-[19px] md:max-w-36">
                 <Link href="/">
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
            <div id="hug" className="w-[150px] flex justify-between md:hidden">
                 <div className="">
                     <button><a href="/pricing" className="px-4 py-2 rounded bg-truwinblue-900 text-white font-graphikSemibold">Get Pricing</a></button>
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
                     <li className="font-medium text-truwinblue-900 text-lg pb-7 pt-7 block border-b-[1px] border-truwinblue-900 border-solid md:border-b-0 md:pl-5 md:pr-5 md:pb-4 md:pt-4 hover:bg-slate-100 hover:rounded" >
                     <Link href="/product/windows/"><a>Windows</a></Link>
                      </li>
                     <li className="font-medium text-truwinblue-900 text-lg pb-7 pt-7 block border-b-[1px] border-truwinblue-900 border-solid md:border-b-0 md:pl-5 md:pr-5 md:pb-4 md:pt-4 hover:bg-slate-100 hover:rounded">
                     <Link href="/product/doors"><a >Doors</a></Link>
                       </li>
                     <li className="font-medium text-truwinblue-900 text-lg pb-7 pt-7 block border-b-[1px] border-truwinblue-900 border-solid md:border-b-0 md:pl-5 md:pr-5 md:pb-4 md:pt-4 hover:bg-slate-100 hover:rounded">
                     <Link href="/product/windows"><a >Roofing</a></Link>
                        </li>
                     <li className="font-medium text-truwinblue-900 text-lg pb-7 pt-7 block border-b-[1px] border-truwinblue-900 border-solid md:border-b-0 md:pl-5 md:pr-5 md:pb-4 md:pt-4 hover:bg-slate-100 hover:rounded">
                     <Link href="/product/siding"><a >Siding</a></Link>
                        </li>
                     <li className="font-medium text-truwinblue-900 text-lg pb-7 pt-7 block border-b-[1px] border-truwinblue-900 border-solid md:border-b-0 md:pl-5 md:pr-5 md:hidden hover:bg-slate-100 hover:rounded">
                     <Link href="/product/company"><a >About Us</a></Link>
                        </li>
                     <li className="font-medium text-truwinblue-900 text-lg pb-7 pt-7 block  border-truwinblue-900 border-solid md:border-b-0 md:pl-5 md:pr-5 md:hidden hover:bg-slate-100 hover:rounded">
                     <Link href="/resources"><a >Resources</a></Link>
                    </li>
                 </ul>
             </div>
               {/** END NAV */}
            
         </div>
         <div className="hidden md:flex md:flex-auto mt-2 rounded mr-5 md:w-3/12 bg-truwinblue-900 hover:bg-truwinblue-500 cursor-pointer">
                 <button className="mx-auto">
                    <a href="/pricing" className="text-white font-graphikSemibold">Get Pricing</a>
                 </button>
         </div>
           {/**  */}
         
           {/**  */}
    
        {/**  */}
 
 
        </div>
    </>
    );
}

export default Nav