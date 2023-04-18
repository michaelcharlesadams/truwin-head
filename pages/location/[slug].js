import Image from 'next/image'
import { client } from '../_app';
import { useQuery, gql } from '@apollo/client';
import Date from '../../components/date';
import GetLocationForm from '../../components/GetLocationForm';
import ProductVideo from '../../components/ProductVideo';
import Comparison from '../../components/Comparison';
import Link from 'next/link';
import MoreServices from '../../components/MoreServices';
import MorePost from '../../components/MorePost';
import VendorHome from '../../components/VendorHome';
import Head from 'next/head';

export default function Post({post, morePost}){
    //deconstruct the posts contents
    
  
    const {title, slug, content, singleLocationProduct} = post;
    const contentCard = singleLocationProduct.locationProductServicesCard;
    const heroCard = singleLocationProduct.locationHeroSection;
 
    return (
    <>
       <Head>
        <title>{title} TX Replacement Windows | Windows {title} TX | Truwin </title>
        <meta name="description" content={`For all your ${title}, TX replacement window needs, call (832) 777-3681 today! Call Truwin for a free consultation.`}></meta>
        </Head>
        {/** LOCATION HEADER **/}
        <div id="hero-author-section" className="max-w-7xl mx-auto ">
            <div id="hero-author-wrapper" className="mx-5 mt-3 md:flex md:min-h-[375px]">
                
                <div className="relative text-truwinblue-900 bg-truwinsoftblue-primary rounded text-left px-10 py-8 md:w-1/2 md:h-auto">
                    <p className="text-sm  mb-3">
                    <span className='pr-2'>
                        <Image src="/images/truwin-breadcrumbs-blue-icon.png" width={14} height={14} />
                    </span>
                        / Location / {title}</p>
                    <h3 className=" text-2xl sm:text-5xl font-[Cigars-SemiBold] mt-6">{heroCard.locationHeroSectionTitle}</h3>
                    <p className=" text-lg mt-3 font-[Cigars] font-medium">{heroCard.locationHeroSectionDescription}</p>
                
                </div>
                
                
                <div className="relative mt-4 w-full h-auto md:w-1/2 md:ml-2 md:mt-0 bg-truwinblue-900 p-10">
                    
                {/** */}
                <GetLocationForm />
                {/** */}

                </div>
            </div>
        </div>
        {/** END LOCATION HEADER */}

        <VendorHome />

        {/** LOCATION MESSAGE **/}
        <div id="card-onethird-session" className="lg:max-w-7xl mx-auto">
        <div id="card-onethrid-wrapper" className="mx-5 mt-10 md:flex md:min-h-[390px]">
          
          <div className="md:w-1/2">
              <img className="w-full rounded-t md:rounded-tl md:rounded-bl md:rounded-tr-none md:h-full object-cover" src={contentCard.locProductsProductServicesImage?.sourceUrl} alt="" />
          </div>

          <div className="px-5 py-6  text-truwinblue-900 rounded-b md:p-12 md:w-1/2 md:rounded-br md:rounded-tr md:rounded-bl-none md:rounded-tl-none">
              <p className="py-2 font-graphik text-truwingray-primary">{contentCard.locProductServicesCardHeadline}</p>
              <h3 className="font-[Cigars-SemiBold] text-4xl py-2">{contentCard.locProductServicesCardTitle}</h3>
              <p id="location-content" className="py-2 font-graphik" 
              
              dangerouslySetInnerHTML={
                {__html: "<style>#location-content p{padding-top: 8px !important;padding-bottom: 8px !important;line-height: 25px !important; font-family: 'Graphik';}</style>" + contentCard.locProductServicesCardDescription }}
              >
                
            
                
                </p>

              {contentCard.locProductServicesCardDecriptionList && 
                  <>
                    <hr className="mt-4 mb-4" />
                    <ul className="ml-4">
                        
                          {contentCard.locProductServicesCardDecriptionList?.map((item, index) => 
                              {
                                return(
                                  <li key={index} className="p-2 list-disc">
                                    {item.locProductDescriptionListItem}
                                  </li>
                                )
                              }
                          )}
                      
                    </ul>
                  </>
              }
               

              {slug === "windows" &&
              <>
              <hr className="mt-4 mb-2" />
               <p className="pt-4 font-graphik text-[#8598C4]">Questions about single hung windows?</p>
               <p className="font-graphikSemibold">Call (832) 777-3681</p>
              </>
              }
             

          </div>
      </div>
        </div>
        {/** END LOCATION MESSAGE */}

        {/** Product Video */}
        <ProductVideo />
        {/** End Product Video */}

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
                            <Link href="/product_material/vinyl-doors">
                            <img className="absolute bottom-0 inset-x-0 px-5 w-auto h-auto mx-auto mt-8" src="/images/home-icons/vinyl-n.png" alt="windows and partner " />
                            </Link>
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
                            <Link href="/product_material/aluminum">
                            <img className="absolute bottom-0 inset-x-0 px-5 w-auto h-auto mx-auto mt-8" src="/images/home-icons/aluminum-n.jpg"  alt="windows and partner " />
                            </Link>
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
                        
                            <Link href="/product_material/fiberglass-windows">
                            <img className="absolute bottom-0 inset-x-0 px-5 w-auto h-auto mx-auto mt-8" src="/images/home-icons/fiberglass-n.jpg" alt="windows and partner " />
                            </Link>
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
                        
                            <Link href="/product_material/wood-clad">
                            <img className="absolute bottom-0 inset-x-0 px-5 w-auto h-auto mx-auto mt-8" src="/images/home-icons/wood-clad-n.png" alt="windows and partner " />
                            </Link>
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
                            <Link href="/product_material/metal">
                            <img className="absolute bottom-0 inset-x-0 px-5 w-auto h-auto mx-auto mt-8" src="/images/home-icons/metal.png"  alt="windows and partner " />
                            </Link>
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
                            <Link href="/product/windows">
                            <img className="absolute bottom-0 inset-x-0 px-5 w-auto h-auto mx-auto mt-8" src="/images/home-icons/truwin-n.png" alt="windows and partner " />
                            </Link>
                        </div>
                    
                        
                    </div>
                    

                    </div>

                </div>
        </div>
        {/** END PRODUCT TYPES */}
       
       <Comparison />

        {/**  MORE  WAYS  */}
        <MoreServices />
        {/**  END MORE WAYS   */}

        {/**  MORE POSTS   */}
        <MorePost  posts={morePost}/>
        {/**  END MORE POSTS   */}
    </>
        
    )

}


/*********************************************************
 * Get Static paths
 * @returns 
 *******************************************************/
export async function getStaticPaths() {

    //1.2 Define a query: posts
    const get_location_path_query = await client.query({
        query: gql`
                query AllLocatioPathsQuery {
                    locations(first: 100) {
                        nodes {
                            slug
                        }
                    }
                }
            `,
    });


    //2. create array of paths
    const paths = get_location_path_query.data.locations.nodes.map((post) => ({
        params: { slug: post.slug }
    }))

    return { paths, fallback: false }
    

}


/*********************************************************
 * Get statis props
 * @param  
 * @returns post content by slug
 * 
 * TODO: add revalidate: 1 after the variables 
 ********************************************************/
export async function getStaticProps({params}) {
    //grab the slug
    const { slug } = params;
   
     //1.2 Define a query: posts
    const get_location_slug_query = await client.query({
        query: gql`
        query SingleLocationQuery($slug: String) {
            locationBy(slug: $slug) {
                content
                slug
                title
                singleLocationProduct {
                    locationHeroSection {
                        locationHeroSectionTitle
                        locationHeroSectionDescription
                    }
                    locationProductServicesCard {
                        locProductServicesCardHeadline
                        locProductServicesCardTitle
                        locProductServicesCardDescription
                        locProductsProductServicesImage {
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
        variables: { slug }
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

    return {
        props: { 
            post: get_location_slug_query.data.locationBy,
            morePost: more_posts_query.data.posts.nodes,
        },
        revalidate: 1
    }

}

