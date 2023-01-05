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

const {slug, title, uri, frontPageOptions} = posts;

  return (
  <div>

    {/** HERO - FRONT PAGE */}
    <div id="hero-section" className="max-w-6xl mx-auto " data-aos="fade-up" data-aos-duration="1000">
      <div id="hero-wrapper" className="mx-5 mt-3 md:flex md:min-h-[375px]">
          <div className="bg-truwinblue-900 rounded text-center px-10 py-12 sm:py-20 md:min-w-5/12 md:h-auto">
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
          
          
          <div className="relative mt-4 w-full h-auto md:min-w-7/12 md:ml-2 md:mt-0 ">
              <div className="w-full max-h-46 md:object-cover md:h-full rounded " >

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
    <Vendor />
    {/** VENDOR LOGOS */}

    {/** Categories */}
    <div id="post-title-section" className="lg:max-w-6xl mx-auto" >
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

                  <svg className="absolute bottom-4 left-4 hover:hidden z-10 cursor-pointer" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="25" cy="25" r="25" fill="#2B50AF"/>
                    <path d="M16.8672 24.3972C16.3681 24.3972 15.9636 24.8017 15.9636 25.3008C15.9636 25.7998 16.3681 26.2044 16.8672 26.2044V24.3972ZM33.7712 25.9397C34.1241 25.5868 34.1241 25.0147 33.7712 24.6618L28.0206 18.9113C27.6677 18.5584 27.0956 18.5584 26.7427 18.9113C26.3898 19.2641 26.3898 19.8363 26.7427 20.1892L31.8543 25.3008L26.7427 30.4124C26.3898 30.7653 26.3898 31.3374 26.7427 31.6903C27.0956 32.0432 27.6677 32.0432 28.0206 31.6903L33.7712 25.9397ZM16.8672 26.2044H33.1322V24.3972H16.8672V26.2044Z" fill="#FFFCF6"/>
                    </svg>
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
                  
                  <svg className="absolute bottom-4 left-4 hover:hidden z-10 cursor-pointer" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="25" cy="25" r="25" fill="#2B50AF"/>
                    <path d="M16.8672 24.3972C16.3681 24.3972 15.9636 24.8017 15.9636 25.3008C15.9636 25.7998 16.3681 26.2044 16.8672 26.2044V24.3972ZM33.7712 25.9397C34.1241 25.5868 34.1241 25.0147 33.7712 24.6618L28.0206 18.9113C27.6677 18.5584 27.0956 18.5584 26.7427 18.9113C26.3898 19.2641 26.3898 19.8363 26.7427 20.1892L31.8543 25.3008L26.7427 30.4124C26.3898 30.7653 26.3898 31.3374 26.7427 31.6903C27.0956 32.0432 27.6677 32.0432 28.0206 31.6903L33.7712 25.9397ZM16.8672 26.2044H33.1322V24.3972H16.8672V26.2044Z" fill="#FFFCF6"/>
                    </svg>
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
                  
                  <svg className="absolute bottom-4 left-4 hover:hidden z-10 cursor-pointer" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="25" cy="25" r="25" fill="#2B50AF"/>
                    <path d="M16.8672 24.3972C16.3681 24.3972 15.9636 24.8017 15.9636 25.3008C15.9636 25.7998 16.3681 26.2044 16.8672 26.2044V24.3972ZM33.7712 25.9397C34.1241 25.5868 34.1241 25.0147 33.7712 24.6618L28.0206 18.9113C27.6677 18.5584 27.0956 18.5584 26.7427 18.9113C26.3898 19.2641 26.3898 19.8363 26.7427 20.1892L31.8543 25.3008L26.7427 30.4124C26.3898 30.7653 26.3898 31.3374 26.7427 31.6903C27.0956 32.0432 27.6677 32.0432 28.0206 31.6903L33.7712 25.9397ZM16.8672 26.2044H33.1322V24.3972H16.8672V26.2044Z" fill="#FFFCF6"/>
                    </svg>
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

                  
                  <svg className="absolute bottom-4 left-4 hover:hidden z-10 cursor-pointer" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="25" cy="25" r="25" fill="#2B50AF"/>
                    <path d="M16.8672 24.3972C16.3681 24.3972 15.9636 24.8017 15.9636 25.3008C15.9636 25.7998 16.3681 26.2044 16.8672 26.2044V24.3972ZM33.7712 25.9397C34.1241 25.5868 34.1241 25.0147 33.7712 24.6618L28.0206 18.9113C27.6677 18.5584 27.0956 18.5584 26.7427 18.9113C26.3898 19.2641 26.3898 19.8363 26.7427 20.1892L31.8543 25.3008L26.7427 30.4124C26.3898 30.7653 26.3898 31.3374 26.7427 31.6903C27.0956 32.0432 27.6677 32.0432 28.0206 31.6903L33.7712 25.9397ZM16.8672 26.2044H33.1322V24.3972H16.8672V26.2044Z" fill="#FFFCF6"/>
                    </svg>
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
<div id="window-type-section" className="max-w-6xl mx-auto">
        <div id="window-type-wrapper" className="mx-5 mt-24">
            
            <h3 className="w-[290px] mx-auto pb-4 sx:w-auto  text-3xl text-center sm:text-5xl text-truwinblue-900 font-[Cigars-Semibold]">Find quality windows in any material</h3>
            <p className="text-center text-truwinblue-900 font-graphik">Truwin offers great windows and great prices.  <Link href="/product/windows"><u className="cursor-pointer">View all Windows</u></Link></p><br/>

            <div id="window-type-post-wrapper" className="mt-8 mx-auto sm:mt-8 ">
               
              <div className="grid grid-cols-1 ss:grid-cols-2 md:grid-cols-3 gap-4">
              
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
  <div id="window-material-section" className="max-w-6xl mx-auto my-20">
        <div id="window-material-wrapper" className="mx-5 mt-16">
            
            <h3 className="w-[290px] mx-auto pb-4 sx:w-auto  text-3xl text-center sm:text-5xl text-truwinblue-900 font-[Cigars-Semibold]">Keep your home secure with new doors.</h3>
            <p className="text-center text-truwinblue-900 font-graphik ">Increase beauty AND security with new doors in a variety of materials. <Link href="product/doors"><u className='cursor-pointer font-bold'>View all Doors</u></Link></p>

            <div id="window-post-wrapper" className="grid grid-cols-1 sx:grid-cols-2 md:grid-cols-4 gap-4 mt-8 mx-auto">

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
                <div className="relative w-auto border rounded border-truwinblue-300 px-8 pt-8 mt-4 sm:mt-4 sm:my-0 max-w-[400px] min-h-[390px] sx:min-h-[350px] md:min-h-[320px]">
                <Link href="/product_material/solid-panel">
                  <svg className="absolute top-4 right-4 cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="11.5" stroke="#E1E1E3"/>
                    <path d="M10 7L14.8 11.8L10 16.6" stroke="#2B50AF"/>
                  </svg>
                </Link>
                    <p className="text-2xl text-truwinblue-900 font-graphikSemibold">Solid Panel</p>
                    <p className="text-sm font-[Cigars] pt-4 text-truwinblue-900">Get thin frames and great weather insulation with this popular material.</p>
                    <img className="absolute bottom-0 inset-x-0 px-8 w-auto h-auto mx-auto mt-8" src="/images/home-icons/solid-panel.jpg" alt="windows and partner " />
                </div>
            </div>

        </div>
    </div>
  {/** END PRODUCT MATERIALS */}

    {/** FEATURED POST    */}
    <div id="card-onethird-session-reverse" className="lg:max-w-6xl mx-auto">
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

    <div id="card-onethird-session" className="lg:max-w-6xl mx-auto">
        <div id="card-onethrid-wrapper" className="mx-5 mt-10 md:flex md:min-h-[390px]">
            <div className="md:w-2/4 lg:w-3/5">
                <img loading="lazy" className="w-full rounded-t md:rounded-tl md:rounded-bl md:rounded-tr-none md:h-full object-cover" src="/images/Hassel-free.png" alt="" />
            </div>
            <div className="px-10 py-6 bg-truwinblue-900 text-white rounded-b md:p-10 md:w-2/4 md:rounded-br md:rounded-tr md:rounded-bl-none md:rounded-tl-none lg:px-10 lg:w-2/5">
                <p className="py-2 font-graphikSemibold">Roofing</p>
                <h3 className="font-[Cigars-Semibold] text-4xl py-3">Hassel Free Roof Replacement</h3>
                <p className="py-2 font-graphik">Siding can transform your home’s curb appeal and make it look brand new again. It’s also an opportunity to properly seal the envelope of your home and protect it from the elements.</p>
                <Link href="#">
                   <button className="bg-truwinblue-500 py-5 px-6 rounded-full my-4">Learn More</button>
                </Link>
               
            </div>
        </div>
    </div>
    {/** END FEATURED  */}

    {/**  WHY TRUWIN   */}
    <div id="onethird-info-section" className="lg:max-w-6xl mx-auto hidden md:block my-28 ">
      <div id="onethird-info-wrapper" className="mx-5 mt-10">
          <div className="text-center" >
              <p className="text-sm text-truwinblue-900">The Exteriors Experts™</p>
              <h3 className="font-[Cigars-Semibold] text-5xl py-2 text-truwinblue-900">Why trust Truwin Exteriors?</h3>
          </div>
          <div className="1/3-column-wrap md:flex mt-14">
              <div className="mr-8">
                  <img src="/images/truwin-prices.png" className="w-auto pb-2" alt="Transparent Prices icon" />
                  <p className="text-2xl font-[Cigars-Semibold] text-truwinblue-900 py-2">Transparent Prices</p>
                  <p className="text-truwinblue-900">At Truwin, we don’t hide our pricing at any point in the process. We want to help you improve your home and will work with budgets of all type to make that possible. </p>
              </div>
              <div className="mx-8">
                  <img src="/images/truwin-vetted.png" className="w-auto pb-2 " alt="Vetted Professionals icon" />
                  <p className="text-2xl font-[Cigars-Semibold] text-truwinblue-900 py-2">Vetted Professionals</p>
                  <p className="text-truwinblue-900">Having strangers working on your home can be odd. But worry not, we’ve vetted every one of our professionasl on staff with thorough background checks and interviews.</p>
              </div>
              <div className="ml-8">
                  <img src="/images/truwin-warranties.png" className="w-auto pb-2 " alt="Amazing Warranties icon" />
                  <p className="text-2xl font-[Cigars-Semibold] text-truwinblue-900 py-2">Amazing Warranties</p>
                  <p className="text-truwinblue-900">We don’t just help you select the right product and install. We back our work and the products we sell you with industry-leading warranties. That’s just how we do business.</p>
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
    revalidate: 10
  }
}




