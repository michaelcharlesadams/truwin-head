import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Vendor from '../components/Vendor';
import FeaturedPost from '../components/FeaturedPost';
import { client } from './_app';
import { useQuery, gql } from '@apollo/client';
import MorePost from '../components/MorePost';
import GetStartForm from '../components/GetStartForm';
import Aos from "aos";
import HomeVideo from '../components/HomeVideo';



export default function Home({posts, featuredPosts, morePost}) {

const {slug, title, uri, frontPageOptions, vendorIcons} = posts;

  return (
  <div>

    {/** HERO - FRONT PAGE */}
    <div id="hero-section" className="max-w-7xl mx-auto " data-aos="fade-up" data-aos-duration="1000">
      <div id="hero-wrapper" className="mx-5 mt-3 md:flex md:min-h-[375px] md:max-h-[420px]">

          <div className="bg-truwinblue-900 rounded text-center px-10 py-12 sm:py-20 md:w-5/12 md:h-auto">
              <div className="w-12 mx-auto">
                <Image
                src="/images/truwin-shield.png"
                width={136}
                height={163}
                alt="Truwin protection shield"
                />
              </div>
              
            
              <h3 className="text-white text-4xl mt-3 w-64 mx-auto md:w-auto md:max-w-[275px] font-[Cigars-Semibold]">Protect your family assets</h3>

              <p className="text-white text-sm mt-3 sx:w-80 sm:w-80 md:w-auto mx-auto lg:w-[305px] font-graphik font-medium">Improve and secure your home with new windows, doors, siding and roofing from the trusted source in exteriors.</p>
          </div>
          
          
          <div className="relative mt-4 w-full h-auto md:w-7/12 md:ml-2 md:mt-0 ">
              <div className="w-full  md:object-cover md:h-full rounded " >

              {/* <img className="w-full max-h-46 md:object-cover md:h-full rounded" 
              src={frontPageOptions.homeHeroImage.sourceUrl} alt="truwin builder video"/> */}

                <HomeVideo 
                    url="https://www.youtube.com/watch?v=eeL_Yi0n3Kw&mute=0&rel=0" 
                    cover={frontPageOptions.homeHeroImage.sourceUrl}
                />
            
             </div>
              
                
              <div className="absolute bottom-8 left-10 w-16 z-1 ">
                  <p className="font-graphikSemibold text-white text-lg sx:text-3xl pb-2 border-b-2  md:w-32 w-20 leading-5 sx:leading-8">The Exterior
                      Experts</p>
              </div>

              
              
          </div>
      </div>
    </div>
    {/** END HERO */}

    {/** VENDOR LOGOS */}
    <Vendor vendorIcons={vendorIcons}/> 
    {/** VENDOR LOGOS */}

    {/** Categories */}
    <div id="post-title-section" className="lg:max-w-7xl mx-auto" >
      <div id="post-title-wrapper" className="mx-5 mt-20">
          <div className="mx-2 mb-11">
              <h2 className="text-[28px] text-center font-[Cigars-Semibold] text-truwinblue-900 pb-4 sm:text-4xl">Add beauty and security to your home</h2>
              <p className="font-graphikLight text-truwinblue-900 text-center">We believe window, door, and siding companies can do better for customers. </p>
          </div>
          <div id="post-title-wrapper-content" className="sm:flex flex-wrap" data-aos="fade-up" data-aos-duration="1000">
            
              <div className="relative my-4 sm:w-1/2 sm:pr-5 md:w-1/4 md:pr-5">
              <Link href="/product/windows">
                  <h3 className="absolute cursor-pointer text-xl t-0 left-0 text-white font-graphikSemibold pl-5 pt-5 z-10">
                  
                    <a>Windows</a>
                  
                  </h3>
                  </Link>
                  <Link href="/product/windows">
                  <img className="w-full cursor-pointer max-h-44 object-cover rounded md:max-h-[370px] z-0" src="/images/tr-windows.png" alt="" />
                  </Link>
                  <Link href="/product/windows">
                  <svg className="absolute bottom-4 left-4 hover:hidden z-10 cursor-pointer" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="25" cy="25" r="25" fill="#2B50AF"/>
                    <path d="M16.8672 24.3972C16.3681 24.3972 15.9636 24.8017 15.9636 25.3008C15.9636 25.7998 16.3681 26.2044 16.8672 26.2044V24.3972ZM33.7712 25.9397C34.1241 25.5868 34.1241 25.0147 33.7712 24.6618L28.0206 18.9113C27.6677 18.5584 27.0956 18.5584 26.7427 18.9113C26.3898 19.2641 26.3898 19.8363 26.7427 20.1892L31.8543 25.3008L26.7427 30.4124C26.3898 30.7653 26.3898 31.3374 26.7427 31.6903C27.0956 32.0432 27.6677 32.0432 28.0206 31.6903L33.7712 25.9397ZM16.8672 26.2044H33.1322V24.3972H16.8672V26.2044Z" fill="#FFFCF6"/>
                    </svg>
                    </Link>
                    <Link href="/product/windows">
                      <svg className="absolute bottom-4 left-4 cursor-pointer" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="25" cy="25" r="25" fill="#FFFCF6"/>
                      <path d="M24.0964 33.4336C24.0964 33.9326 24.5009 34.3372 25 34.3372C25.4991 34.3372 25.9036 33.9326 25.9036 33.4336L24.0964 33.4336ZM25.639 16.5296C25.2861 16.1767 24.7139 16.1767 24.361 16.5296L18.6105 22.2801C18.2576 22.633 18.2576 23.2052 18.6105 23.5581C18.9634 23.9109 19.5355 23.9109 19.8884 23.5581L25 18.4464L30.1116 23.5581C30.4645 23.9109 31.0366 23.9109 31.3895 23.5581C31.7424 23.2052 31.7424 22.633 31.3895 22.2801L25.639 16.5296ZM25.9036 33.4336L25.9036 17.1685L24.0964 17.1685L24.0964 33.4336L25.9036 33.4336Z" fill="#2B50AF"/>
                    </svg>

                  </Link>
              </div>
              
              <div className="relative my-4 sm:w-1/2 md:w-1/4 md:pr-5 md:h-auto">
                <Link href="/product/doors">
                  <h3 className="absolute cursor-pointer text-xl t-0 left-0 text-white font-graphikSemibold pl-5 pt-5 z-10">
                  
                    <a>Doors</a>
      
                  </h3>
                  </Link>
                  <Link href="/product/doors">
                  <img className="w-full cursor-pointer max-h-44 object-cover rounded md:max-h-[370px] z-0" src="/images/tr-doors.png" alt="" />
                  </Link>
                  
                  <Link href="/product/doors">
                  <svg className="absolute bottom-4 left-4 hover:hidden z-10 cursor-pointer" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="25" cy="25" r="25" fill="#2B50AF"/>
                    <path d="M16.8672 24.3972C16.3681 24.3972 15.9636 24.8017 15.9636 25.3008C15.9636 25.7998 16.3681 26.2044 16.8672 26.2044V24.3972ZM33.7712 25.9397C34.1241 25.5868 34.1241 25.0147 33.7712 24.6618L28.0206 18.9113C27.6677 18.5584 27.0956 18.5584 26.7427 18.9113C26.3898 19.2641 26.3898 19.8363 26.7427 20.1892L31.8543 25.3008L26.7427 30.4124C26.3898 30.7653 26.3898 31.3374 26.7427 31.6903C27.0956 32.0432 27.6677 32.0432 28.0206 31.6903L33.7712 25.9397ZM16.8672 26.2044H33.1322V24.3972H16.8672V26.2044Z" fill="#FFFCF6"/>
                    </svg>
                    </Link>
                    <Link href="/product/doors">
                      <svg className="absolute bottom-4 left-4 cursor-pointer" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="25" cy="25" r="25" fill="#FFFCF6"/>
                      <path d="M24.0964 33.4336C24.0964 33.9326 24.5009 34.3372 25 34.3372C25.4991 34.3372 25.9036 33.9326 25.9036 33.4336L24.0964 33.4336ZM25.639 16.5296C25.2861 16.1767 24.7139 16.1767 24.361 16.5296L18.6105 22.2801C18.2576 22.633 18.2576 23.2052 18.6105 23.5581C18.9634 23.9109 19.5355 23.9109 19.8884 23.5581L25 18.4464L30.1116 23.5581C30.4645 23.9109 31.0366 23.9109 31.3895 23.5581C31.7424 23.2052 31.7424 22.633 31.3895 22.2801L25.639 16.5296ZM25.9036 33.4336L25.9036 17.1685L24.0964 17.1685L24.0964 33.4336L25.9036 33.4336Z" fill="#2B50AF"/>
                    </svg>

                  </Link>
              </div>
              <div className="relative my-4 sm:w-1/2 sm:pr-5 md:w-1/4 md:pr-5 md:h-auto " >
              <Link href="/product/siding">
                  <h3 className="absolute cursor-pointer text-xl t-0 left-0 text-white font-graphikSemibold pl-5 pt-5 z-10">
                  
                    <a>Siding</a>
                  </h3></Link>
                  <Link href="/product/siding">
                  <img className="w-full cursor-pointer max-h-44 object-cover rounded md:max-h-[370px] z-0" src="/images/tr-siding.png" alt="" />
                  </Link>
                  
                  <Link href="/product/siding">
                  <svg className="absolute bottom-4 left-4 hover:hidden z-10 cursor-pointer" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="25" cy="25" r="25" fill="#2B50AF"/>
                    <path d="M16.8672 24.3972C16.3681 24.3972 15.9636 24.8017 15.9636 25.3008C15.9636 25.7998 16.3681 26.2044 16.8672 26.2044V24.3972ZM33.7712 25.9397C34.1241 25.5868 34.1241 25.0147 33.7712 24.6618L28.0206 18.9113C27.6677 18.5584 27.0956 18.5584 26.7427 18.9113C26.3898 19.2641 26.3898 19.8363 26.7427 20.1892L31.8543 25.3008L26.7427 30.4124C26.3898 30.7653 26.3898 31.3374 26.7427 31.6903C27.0956 32.0432 27.6677 32.0432 28.0206 31.6903L33.7712 25.9397ZM16.8672 26.2044H33.1322V24.3972H16.8672V26.2044Z" fill="#FFFCF6"/>
                    </svg>
                    </Link>
                    <Link href="/product/siding">
                      <svg className="absolute bottom-4 left-4 cursor-pointer" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="25" cy="25" r="25" fill="#FFFCF6"/>
                      <path d="M24.0964 33.4336C24.0964 33.9326 24.5009 34.3372 25 34.3372C25.4991 34.3372 25.9036 33.9326 25.9036 33.4336L24.0964 33.4336ZM25.639 16.5296C25.2861 16.1767 24.7139 16.1767 24.361 16.5296L18.6105 22.2801C18.2576 22.633 18.2576 23.2052 18.6105 23.5581C18.9634 23.9109 19.5355 23.9109 19.8884 23.5581L25 18.4464L30.1116 23.5581C30.4645 23.9109 31.0366 23.9109 31.3895 23.5581C31.7424 23.2052 31.7424 22.633 31.3895 22.2801L25.639 16.5296ZM25.9036 33.4336L25.9036 17.1685L24.0964 17.1685L24.0964 33.4336L25.9036 33.4336Z" fill="#2B50AF"/>
                    </svg>

                  </Link>
              </div>
              <div className="relative my-4 sm:w-1/2 md:w-1/4 md:pr-5 md:h-auto">
                  <Link href="/product/siding">
                    <h3 className="absolute cursor-pointer z-10 text-xl t-0 left-0 text-white font-graphikSemibold pl-5 pt-5">Roofs</h3>
                  </Link>
                 
                  <Link href="/product/roofing">
                     <img className="w-full cursor-pointer max-h-44 object-cover rounded md:max-h-[370px]  z-0" src="/images/tr-roofs.png" alt="" />
                  </Link>

                  
                  <Link href="/product/roofing">
                  <svg className="absolute bottom-4 left-4 hover:hidden z-10 cursor-pointer" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="25" cy="25" r="25" fill="#2B50AF"/>
                    <path d="M16.8672 24.3972C16.3681 24.3972 15.9636 24.8017 15.9636 25.3008C15.9636 25.7998 16.3681 26.2044 16.8672 26.2044V24.3972ZM33.7712 25.9397C34.1241 25.5868 34.1241 25.0147 33.7712 24.6618L28.0206 18.9113C27.6677 18.5584 27.0956 18.5584 26.7427 18.9113C26.3898 19.2641 26.3898 19.8363 26.7427 20.1892L31.8543 25.3008L26.7427 30.4124C26.3898 30.7653 26.3898 31.3374 26.7427 31.6903C27.0956 32.0432 27.6677 32.0432 28.0206 31.6903L33.7712 25.9397ZM16.8672 26.2044H33.1322V24.3972H16.8672V26.2044Z" fill="#FFFCF6"/>
                    </svg>
                    </Link>
                    <Link href="/product/roofing">
                      <svg className="absolute bottom-4 left-4 cursor-pointer" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="25" cy="25" r="25" fill="#FFFCF6"/>
                      <path d="M24.0964 33.4336C24.0964 33.9326 24.5009 34.3372 25 34.3372C25.4991 34.3372 25.9036 33.9326 25.9036 33.4336L24.0964 33.4336ZM25.639 16.5296C25.2861 16.1767 24.7139 16.1767 24.361 16.5296L18.6105 22.2801C18.2576 22.633 18.2576 23.2052 18.6105 23.5581C18.9634 23.9109 19.5355 23.9109 19.8884 23.5581L25 18.4464L30.1116 23.5581C30.4645 23.9109 31.0366 23.9109 31.3895 23.5581C31.7424 23.2052 31.7424 22.633 31.3895 22.2801L25.639 16.5296ZM25.9036 33.4336L25.9036 17.1685L24.0964 17.1685L24.0964 33.4336L25.9036 33.4336Z" fill="#2B50AF"/>
                    </svg>

                  </Link>
              </div>
            
          </div>
      </div>
    </div>
    {/** Categories */}



    {/** Get Started Form */}
    <GetStartForm />
    {/** END Get Started Form */}

{/** PRODUCT TYPES */}
<div id="window-type-section" className="max-w-7xl mx-auto">
        <div id="window-type-wrapper" className="mx-5 mt-24">
            
            <h3 className="w-[290px] mx-auto pb-4 sx:w-auto  text-3xl text-center sm:text-5xl text-truwinblue-900 font-[Cigars-Semibold]">Find quality windows in any material</h3>
            <p className="text-center text-truwinblue-900 font-graphik">Truwin offers great windows and great prices.  <Link href="/product/windows"><u className="cursor-pointer">View all Windows</u></Link></p><br/>

            <div id="window-type-post-wrapper" className="mt-8 mx-auto sm:mt-8 ">
               
              <div className="grid grid-cols-1 ss:grid-cols-2 md:grid-cols-3 gap-4">
              
                {/** Vinyl */}
                <div className="relative w-auto border rounded border-truwinblue-300 px-8 pt-8 m-3 lg:max-w-[400px] min-h-[270px] max-h-[271px]">
                
                <Link href="/product_material/vinyl-doors">
                  <svg className="absolute top-4 right-4 cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="11.5" stroke="#E1E1E3"/>
                    <path d="M10 7L14.8 11.8L10 16.6" stroke="#2B50AF"/>
                  </svg>
                </Link>

                    <p className="text-2xl font-graphikSemibold text-truwinblue-900">Vinyl</p>
                   
                    <img className="absolute bottom-0 inset-x-0 px-5 w-auto h-auto mx-auto mt-8" src="/images/home-icons/vinyl-n.png" alt="windows and partner " />
                </div>

                {/** Aluminum */}
                <div className="relative w-auto border rounded border-truwinblue-300 px-8 pt-8 m-3 lg:max-w-[400px] min-h-[270px] max-h-[271px]">
                <Link href="/product_material/aluminum">
                  <svg className="absolute top-4 right-4 cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="11.5" stroke="#E1E1E3"/>
                    <path d="M10 7L14.8 11.8L10 16.6" stroke="#2B50AF"/>
                  </svg>
                </Link>
                    <p className="text-2xl text-truwinblue-900 font-graphikSemibold">Aluminum</p>
                    
                    <img className="absolute bottom-0 inset-x-0 px-5 w-auto h-auto mx-auto mt-8" src="/images/home-icons/aluminum-n.jpg"  alt="windows and partner " />
                </div>
                
                {/** Fiberglass */}
                <div className="relative w-auto border rounded border-truwinblue-300 px-8 pt-8 m-3 lg:max-w-[400px] min-h-[270px] max-h-[271px]">
                <Link href="/product_material/fiberglass-windows">
                  <svg className="absolute top-4 right-4 cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="11.5" stroke="#E1E1E3"/>
                    <path d="M10 7L14.8 11.8L10 16.6" stroke="#2B50AF"/>
                  </svg>
                </Link>
                    <p className="text-2xl text-truwinblue-900 font-graphikSemibold">Fiberglass</p>
                  
                    <img className="absolute bottom-0 inset-x-0 px-5 w-auto h-auto mx-auto mt-8" src="/images/home-icons/fiberglass-n.jpg" alt="windows and partner " />
                </div>

                {/** Woodclad */}
                <div className="relative w-auto border rounded border-truwinblue-300 px-8 pt-8 m-3 lg:max-w-[400px] min-h-[270px] max-h-[271px]">
                <Link href="/product_material/wood-clad">
                  <svg className="absolute top-4 right-4 cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="11.5" stroke="#E1E1E3"/>
                    <path d="M10 7L14.8 11.8L10 16.6" stroke="#2B50AF"/>
                  </svg>
                </Link>
                    <p className="text-2xl text-truwinblue-900 font-graphikSemibold">Wood-clad</p>
                  
                    <img className="absolute bottom-0 inset-x-0 px-5 w-auto h-auto mx-auto mt-8" src="/images/home-icons/wood-clad-n.png" alt="windows and partner " />
                </div>

                {/** Metal */}
                <div className="relative w-auto border rounded border-truwinblue-300 px-8 pt-8 m-3 lg:max-w-[400px] min-h-[270px] max-h-[271px]">
                <Link href="/product_material/metal">
                  <svg className="absolute top-4 right-4 cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="11.5" stroke="#E1E1E3"/>
                    <path d="M10 7L14.8 11.8L10 16.6" stroke="#2B50AF"/>
                  </svg>
                </Link>
                    <p className="text-2xl text-truwinblue-900 font-graphikSemibold">Metal</p>
                   
                    <img className="absolute bottom-0 inset-x-0 px-5 w-auto h-auto mx-auto mt-8" src="/images/home-icons/metal.png"  alt="windows and partner " />
                </div>

                {/** All windows */}
                <div className="relative w-auto border rounded border-truwinblue-300 px-8 pt-8 m-3 lg:max-w-[400px] min-h-[270px] max-h-[271px]">
                <Link href="/product/windows">
                  <svg className="absolute top-4 right-4 cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="11.5" stroke="#E1E1E3"/>
                    <path d="M10 7L14.8 11.8L10 16.6" stroke="#2B50AF"/>
                  </svg>
                </Link>
                    <p className="text-2xl text-truwinblue-900 font-graphikSemibold">All Windows</p>
                    
                    <img className="absolute bottom-0 inset-x-0 px-5 w-auto h-auto mx-auto mt-8" src="/images/home-icons/truwin-n.png" alt="windows and partner " />
                </div>
              
                   
              </div>
              

            </div>

        </div>
</div>
{/** END PRODUCT TYPES */}

  {/** PRODUCT MATERIALS **/}
  <div id="window-material-section" className="max-w-7xl mx-auto my-20">
        <div id="window-material-wrapper" className="mx-5 mt-16">
            
            <h3 className="w-[290px] mx-auto pb-4 sx:w-auto  text-3xl text-center sm:text-5xl text-truwinblue-900 font-[Cigars-Semibold]">Keep your home secure with new doors.</h3>
            <p className="text-center text-truwinblue-900 font-graphik ">Increase beauty AND security with new doors in a variety of materials. <Link href="product/doors"><u className='cursor-pointer font-bold'>View all Doors</u></Link></p>

            <div id="window-post-wrapper" className="grid grid-cols-1 sx:grid-cols-2 md:grid-cols-4 gap-4 mt-8 mx-auto">


               {/** Fiberglass */}
               <div className="relative w-auto border rounded border-truwinblue-300 px-8 mt-4 pt-8 sm:mt-4 sm:my-0 max-w-[400px] min-h-[390px] sx:min-h-[350px] md:min-h-[320px]">
                <Link href="/product_material/fiberglass">
                  <svg className="absolute top-4 right-4 cursor-pointer"  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="11.5" stroke="#E1E1E3"/>
                    <path d="M10 7L14.8 11.8L10 16.6" stroke="#2B50AF"/>
                  </svg>
                </Link>
                    <p className="text-2xl text-truwinblue-900 font-graphikSemibold">Fiberglass</p>
                    <p className="text-sm font-[Cigars] pt-4 text-truwinblue-900 ">Get thin frames and great weather insulation with this popular material.</p>
                    <img className="absolute bottom-0 inset-x-0 px-8 w-auto h-auto mx-auto mt-8" src="/images/home-icons/fiberglass-door.jpg" alt="windows and partner " />
                </div>

                {/** Solid Panel - Iron */}
                <div className="relative w-auto border rounded border-truwinblue-300 px-8 pt-8 mt-4 sm:mt-4 sm:my-0 max-w-[400px] min-h-[390px] sx:min-h-[350px] md:min-h-[320px]">
                <Link href="/product_material/solid-panel">
                  <svg className="absolute top-4 right-4 cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="11.5" stroke="#E1E1E3"/>
                    <path d="M10 7L14.8 11.8L10 16.6" stroke="#2B50AF"/>
                  </svg>
                </Link>
                    <p className="text-2xl text-truwinblue-900 font-graphikSemibold">Iron</p>
                    <p className="text-sm font-[Cigars] pt-4 text-truwinblue-900">Get thin frames and great weather insulation with this popular material.</p>
                    <img className="absolute bottom-0 inset-x-0 px-8 w-auto h-auto mx-auto mt-8" src="/images/home-icons/solid-panel.jpg" alt="windows and partner " />
                </div>


                {/** Steel */}
                <div className="relative w-auto border rounded border-truwinblue-300 px-8 pt-8 mt-4 sm:mt-4 sm:my-0 max-w-[400px] min-h-[390px] sx:min-h-[350px] md:min-h-[320px]">
                <Link href="/product_material/forged-iron">
                  <svg className="absolute top-4 right-4 cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="11.5" stroke="#E1E1E3"/>
                    <path d="M10 7L14.8 11.8L10 16.6" stroke="#2B50AF"/>
                  </svg>
                </Link>
                    <p className="text-2xl text-truwinblue-900 font-graphikSemibold">Steel</p>
                    <p className="text-sm font-[Cigars] pt-4 text-truwinblue-900 ">Get thin frames and great weather insulation with this popular material.</p>
                    <img className="absolute bottom-0 inset-x-0 px-8 w-auto h-auto mx-auto mt-8" src="/images/truwin-doors-.jpg" alt="windows and partner " />
                </div>

                {/** Wood */}
                <div className="relative w-auto border rounded border-truwinblue-300 px-8 pt-8 mt-4 sm:mt-4 max-w-[400px] min-h-[390px] sx:min-h-[350px] md:min-h-[320px]">
                <Link href="/product_material/wood">
                  <svg className="absolute top-4 right-4 cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="11.5" stroke="#E1E1E3"/>
                    <path d="M10 7L14.8 11.8L10 16.6" stroke="#2B50AF"/>
                  </svg>
                </Link>
                    <p className="text-2xl font-graphikSemibold text-truwinblue-900">Wood</p>
                    <p className="text-sm font-[Cigars] pt-4 text-truwinblue-900 ">Get thin frames and great weather insulation with this popular material.</p>
                    <img className="absolute bottom-0 inset-x-0 px-8 w-auto h-auto mx-auto mt-8" src="/images/home-icons/wood-door.jpg" alt="windows and partner " />
                </div>

            </div>

        </div>
    </div>
  {/** END PRODUCT MATERIALS */}

    {/** FEATURED POST    */}
    <div id="card-onethird-session-reverse" className="lg:max-w-7xl mx-auto">
        <div id="card-onethrid-wrapper" className="mx-5 mt-24 md:flex md:flex-row-reverse md:min-h-[390px]">
            <div className="relative md:w-2/4 lg:w-3/5">
                <img loading="lazy" className="w-full rounded-t md:rounded-tr md:rounded-br md:rounded-tl-none md:rounded-bl-none  md:h-full object-cover" src="/images/siding-post.png" alt="" />
                <img className="absolute bottom-[35%] left-[35%] w-[30%] h-auto" src='images/lp-build-smart.png' alt='lb build smart'/>
            </div>
            <div className="px-10 py-6 bg-truwinsoftblue-primary text-truwinblue-900 rounded-b md:p-10 md:w-2/4 md:rounded-br-none md:rounded-tr-none md:rounded-bl md:rounded-tl lg:px-10 lg:w-2/5">
                <p className="py-2 font-graphikSemibold">Siding</p>
                <h3 className="font-[Cigars-Semibold] text-4xl py-3">Strong, beautiful siding from LP.</h3>
                <p className="py-2 font-graphik">Siding can transform your home’s curb appeal and make it look brand new again. It’s also an opportunity to properly seal the envelope of your home and protect it from the elements.</p>
                <Link href="/product/siding">
                   <button className="bg-truwinblue-900 text-white py-5 px-6 rounded-full my-4">Learn More</button>
                </Link>
            </div>
        </div>
    </div>

    <div id="card-onethird-session" className="lg:max-w-7xl mx-auto">
        <div id="card-onethrid-wrapper" className="mx-5 mt-10 md:flex md:min-h-[390px]">
            <div className="md:w-2/4 lg:w-3/5">
                <img loading="lazy" className="w-full rounded-t md:rounded-tl md:rounded-bl md:rounded-tr-none md:h-full object-cover" src="/images/Hassel-free.png" alt="" />
            </div>
            <div className="px-10 py-6 bg-truwinblue-900 text-white rounded-b md:p-10 md:w-2/4 md:rounded-br md:rounded-tr md:rounded-bl-none md:rounded-tl-none lg:px-10 lg:w-2/5">
                <p className="py-2 font-graphikSemibold">Roofing</p>
                <h3 className="font-[Cigars-Semibold] text-4xl py-3">Hassel Free Roof Replacement</h3>
                <p className="py-2 font-graphik">Siding can transform your home’s curb appeal and make it look brand new again. It’s also an opportunity to properly seal the envelope of your home and protect it from the elements.</p>
                
                <button className="bg-truwinblue-500 py-5 px-6 rounded-full my-4">Coming Soon</button>
                
               
            </div>
        </div>
    </div>
    {/** END FEATURED  */}

    {/**  WHY TRUWIN   */}
    <div id="onethird-info-section" className="lg:max-w-7xl mx-auto hidden md:block my-28 ">
      <div id="onethird-info-wrapper" className="mx-5 mt-10">
          <div className="text-center" >
              <p className="text-lg text-truwinblue-300 pb-4">The Exteriors Experts™</p>
              <h3 className="font-[Cigars-Semibold] text-5xl py-2 text-truwinblue-900">Why trust Truwin Exteriors?</h3>
          </div>
          <div className="1/3-column-wrap md:flex mt-14">
              <div className="mr-8">
                  <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.30058V52.6996C1.01862 52.8587 1.16693 53.0002 1.35226 53.0002H52.6848C52.8517 53.0002 53 52.8589 53 52.6996V1.30058C52.9814 1.14152 52.8333 1 52.6477 1H1.31502C1.14809 1 1 1.14152 1 1.30058ZM23.4127 46.7234H7.9888C7.82187 46.7234 7.67356 46.5821 7.67356 46.4228V22.4649C7.67356 22.3059 7.82187 22.1644 7.9888 22.1644H23.4127C23.5794 22.1644 23.728 22.3057 23.728 22.4649V46.4228C23.728 46.5819 23.5796 46.7234 23.4127 46.7234ZM46.1034 46.7234H30.6241C30.4572 46.7234 30.3088 46.5821 30.3088 46.4228V22.4649C30.3088 22.3059 30.4572 22.1644 30.6241 22.1644H46.085C46.2517 22.1644 46.4003 22.3057 46.4003 22.4649V46.4228C46.4003 46.5819 46.252 46.7234 46.085 46.7234H46.1034ZM46.2888 15.87H8.04444C7.87751 15.87 7.7292 15.7285 7.7292 15.5694V7.59516C7.7292 7.4361 7.87751 7.29458 8.04444 7.29458H46.2704C46.4373 7.29458 46.5856 7.4361 46.5856 7.59516V15.5694C46.5856 15.7285 46.4373 15.87 46.2704 15.87H46.2888Z" stroke="#2B50AF" stroke-width="1.47953"/>
                  </svg>
                  <p className="text-2xl font-[Cigars-Semibold] text-truwinblue-900 py-2">Transparent Prices</p>
                  <p className="text-truwinblue-900 text-[15px]">At Truwin, we don’t hide our pricing at any point in the process. We want to help you improve your home and will work with budgets of all type to make that possible. </p>
              </div>
              <div className="mx-8">
                  <svg width="46" height="55" viewBox="0 0 46 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="23.0216" cy="20.915" r="19.915" stroke="#2B50AF" stroke-width="1.47953"/>
                    <circle cx="23.0214" cy="20.9143" r="14.3831" stroke="#2B50AF" stroke-width="1.47953"/>
                    <path d="M26.3406 40.8297L32.9789 52.4468L36.2981 45.2553L44.0428 45.8085L37.9577 34.1914" stroke="#2B50AF" stroke-width="1.47953"/>
                    <path d="M19.7023 41.0309L13.0639 53L9.74477 45.5906L2.00004 46.1605L8.08518 34.1914" stroke="#2B50AF" stroke-width="1.47953"/>
                    <path d="M15.6603 14.3595V28.5763C15.6655 28.6203 15.7065 28.6594 15.7578 28.6594H29.9561C30.0023 28.6594 30.0433 28.6203 30.0433 28.5763V14.3595C30.0382 14.3155 29.9972 14.2764 29.9459 14.2764H15.7475C15.7013 14.2764 15.6603 14.3155 15.6603 14.3595ZM21.8596 26.9233H17.5934C17.5472 26.9233 17.5062 26.8842 17.5062 26.8401V20.2135C17.5062 20.1695 17.5472 20.1304 17.5934 20.1304H21.8596C21.9057 20.1304 21.9468 20.1694 21.9468 20.2135V26.8401C21.9468 26.8841 21.9058 26.9233 21.8596 26.9233ZM28.1358 26.9233H23.8542C23.8081 26.9233 23.7671 26.8842 23.7671 26.8401V20.2135C23.7671 20.1695 23.8081 20.1304 23.8542 20.1304H28.1307C28.1768 20.1304 28.2179 20.1694 28.2179 20.2135V26.8401C28.2179 26.8841 28.1769 26.9233 28.1307 26.9233H28.1358ZM28.187 18.3894H17.6088C17.5626 18.3894 17.5216 18.3502 17.5216 18.3062V16.1006C17.5216 16.0566 17.5626 16.0174 17.6088 16.0174H28.1819C28.2281 16.0174 28.2691 16.0566 28.2691 16.1006V18.3062C28.2691 18.3502 28.2281 18.3894 28.1819 18.3894H28.187Z" fill="#2B50AF"/>
                  </svg>

                  <p className="text-2xl font-[Cigars-Semibold] text-truwinblue-900 py-2">Vetted Professionals</p>
                  <p className="text-truwinblue-900 text-[15px]">Having strangers working on your home can be odd. But worry not, we’ve vetted every one of our professionasl on staff with thorough background checks and interviews.</p>
              </div>
              <div className="ml-8">
                  <svg width="46" height="56" viewBox="0 0 46 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.8305 33.1058L17.3053 32.5847L16.7863 33.1078L17.3074 33.6289L17.8305 33.1058ZM17.8305 33.1057L18.3557 33.6267L18.8747 33.1037L18.3536 32.5826L17.8305 33.1057ZM21.1055 36.3808L20.5824 36.9039L21.1055 37.427L21.6286 36.9039L21.1055 36.3808ZM21.1055 36.3807L21.6286 35.8576L21.1055 35.3345L20.5825 35.8576L21.1055 36.3807ZM21.106 36.3811L20.5829 36.9042L21.106 37.4273L21.6291 36.9042L21.106 36.3811ZM24.381 33.1061L24.9041 33.6292L25.4272 33.1061L24.9041 32.583L24.381 33.1061ZM24.3806 33.1057L23.8575 32.5826L23.3344 33.1057L23.8575 33.6288L24.3806 33.1057ZM35.8431 21.6432L36.3662 22.1663L36.8893 21.6432L36.3662 21.1201L35.8431 21.6432ZM32.5681 18.3682L33.0912 17.8451L32.5681 17.322L32.045 17.8451L32.5681 18.3682ZM21.1056 29.8307L20.5825 30.3538L21.1056 30.8769L21.6286 30.3538L21.1056 29.8307ZM17.0122 25.7373L17.5353 25.2142L17.0122 24.6911L16.4891 25.2142L17.0122 25.7373ZM13.7372 29.0124L13.2141 28.4893L12.691 29.0124L13.2141 29.5354L13.7372 29.0124ZM18.3556 33.6268L18.3557 33.6267L17.3054 32.5847L17.3053 32.5847L18.3556 33.6268ZM21.6286 35.8577L18.3536 32.5827L17.3074 33.6289L20.5824 36.9039L21.6286 35.8577ZM20.5825 35.8576L20.5824 35.8577L21.6286 36.9039L21.6286 36.9038L20.5825 35.8576ZM21.6291 35.8581L21.6286 35.8576L20.5825 36.9038L20.5829 36.9042L21.6291 35.8581ZM23.8579 32.583L20.5829 35.8581L21.6291 36.9042L24.9041 33.6292L23.8579 32.583ZM23.8575 33.6288L23.8579 33.6292L24.9041 32.583L24.9037 32.5826L23.8575 33.6288ZM35.32 21.1201L23.8575 32.5826L24.9037 33.6288L36.3662 22.1663L35.32 21.1201ZM32.045 18.8913L35.32 22.1663L36.3662 21.1201L33.0912 17.8451L32.045 18.8913ZM21.6286 30.3538L33.0912 18.8913L32.045 17.8451L20.5825 29.3076L21.6286 30.3538ZM16.4891 26.2604L20.5825 30.3538L21.6286 29.3076L17.5353 25.2142L16.4891 26.2604ZM14.2603 29.5354L17.5353 26.2604L16.4891 25.2142L13.2141 28.4893L14.2603 29.5354ZM18.3536 32.5826L14.2603 28.4893L13.2141 29.5354L17.3074 33.6288L18.3536 32.5826Z" fill="#2B50AF"/>
                    <path d="M1 12.5789L0.655457 11.9243L0.260234 12.1323V12.5789H1ZM23 1L23.3445 0.345368L23 0.164029L22.6555 0.345368L23 1ZM12.2711 46.9223L11.8534 47.5329L12.2711 46.9223ZM23 54.2632L22.5823 54.8737L23 55.1595L23.4177 54.8737L23 54.2632ZM33.7289 46.9223L34.1466 47.5329L33.7289 46.9223ZM45 12.5789H45.7398V12.1323L45.3445 11.9243L45 12.5789ZM1.34454 13.2336L23.3445 1.65463L22.6555 0.345368L0.655457 11.9243L1.34454 13.2336ZM1.73977 25.5537V12.5789H0.260234V25.5537H1.73977ZM12.6889 46.3118C5.83684 41.6236 1.73977 33.856 1.73977 25.5537H0.260234C0.260234 34.3444 4.59831 42.5689 11.8534 47.5329L12.6889 46.3118ZM23.4177 53.6526L12.6889 46.3118L11.8534 47.5329L22.5823 54.8737L23.4177 53.6526ZM23.4177 54.8737L34.1466 47.5329L33.3111 46.3118L22.5823 53.6526L23.4177 54.8737ZM34.1466 47.5329C41.4017 42.5689 45.7398 34.3444 45.7398 25.5537H44.2602C44.2602 33.856 40.1632 41.6236 33.3111 46.3118L34.1466 47.5329ZM45.7398 25.5537V12.5789H44.2602V25.5537H45.7398ZM45.3445 11.9243L23.3445 0.345368L22.6555 1.65463L44.6555 13.2336L45.3445 11.9243Z" fill="#2B50AF"/>
                    <path d="M4.82617 15.1971L4.48163 14.5424L4.08641 14.7504V15.1971H4.82617ZM23.0001 5.63184L23.3446 4.9772L23.0001 4.79586L22.6555 4.9772L23.0001 5.63184ZM15.1312 44.2479L14.7135 44.8584L15.1312 44.2479ZM23.0001 49.6318L22.5824 50.2424L23.0001 50.5282L23.4178 50.2424L23.0001 49.6318ZM30.869 44.2479L31.2867 44.8584L30.869 44.2479ZM41.174 15.1971H41.9138V14.7504L41.5185 14.5424L41.174 15.1971ZM5.17072 15.8517L23.3446 6.28647L22.6555 4.9772L4.48163 14.5424L5.17072 15.8517ZM5.56594 24.7108V15.1971H4.08641V24.7108H5.56594ZM15.5489 43.6373C9.3015 39.3628 5.56594 32.2806 5.56594 24.7108H4.08641C4.08641 32.769 8.06297 40.3081 14.7135 44.8584L15.5489 43.6373ZM23.4178 49.0213L15.5489 43.6373L14.7135 44.8584L22.5824 50.2424L23.4178 49.0213ZM23.4178 50.2424L31.2867 44.8584L30.4512 43.6373L22.5824 49.0213L23.4178 50.2424ZM31.2867 44.8584C37.9372 40.3081 41.9138 32.769 41.9138 24.7108H40.4342C40.4342 32.2806 36.6987 39.3628 30.4512 43.6373L31.2867 44.8584ZM41.9138 24.7108V15.1971H40.4342V24.7108H41.9138ZM41.5185 14.5424L23.3446 4.9772L22.6555 6.28647L40.8295 15.8517L41.5185 14.5424Z" fill="#2B50AF"/>
                  </svg>

                  <p className="text-2xl font-[Cigars-Semibold] text-truwinblue-900 py-2">Amazing Warranties</p>
                  <p className="text-truwinblue-900 text-[15px]">We don’t just help you select the right product and install. We back our work and the products we sell you with industry-leading warranties. That’s just how we do business.</p>
              </div>
          </div>
      </div>
    </div>
    {/**  WHY TRUWIN   */}


    {/**  MORE POSTS   */}
    <MorePost  posts={morePost}/>
    {/**  END MORE POSTS   */}


  </div>
    
  )
}

/**
 * Fetch Data: Images, Feature Posts
 * @returns props
 */ 
export async function getStaticProps(){
  //const dataLayer = process.env.HOST_DATA_LAYER;

  //1.2 Define a query: images
  const front_page_query = await client.query({
  query: gql`
      query frontPageQuery {
        page(id: "home", idType: URI) {
          slug
          title
          uri
          frontPageOptions {
            homeHeroImage {
              sourceUrl
            }
          }
          vendorIcons {
            vendorIcons {
              vendorIcon {
                sourceUrl
                mediaDetails {
                  height
                  width
                }
              }
            }
          }
        }
      }
      `,
  });

  //1.2 Define a query: posts
  const featured_posts_query = await client.query({
    query: gql`
        query featuredPostQuery {
          posts(first: 2) {
            nodes {
              title
              uri
              slug
              excerpt
              id
              featuredImage {
                node {
                  sourceUrl
                  mediaDetails {
                    height
                    width
                  }
                }
              }
              categories {
                nodes {
                  name
                }
              }
            }
          }
        }
        `,
  });

    //1.3 Define a query: posts
    const more_posts_query = await client.query({
      query: gql`
          query morePostQuery {
            posts(first: 10) {
              nodes {
                id
                uri
                title
                slug
                featuredImage {
                  node {
                    sourceUrl
                    mediaDetails {
                      width
                      height
                    }
                  }
                }
                categories {
                  nodes {
                    name
                  }
                }
              }
            }
          }
          `,
    });

    

  //2. return props
  return {
    props: {
        posts: front_page_query.data.page,
        featuredPosts: featured_posts_query.data.posts.nodes,
        morePost: more_posts_query.data.posts.nodes

    },
    revalidate: 1
  }
}




