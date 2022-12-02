import { client } from '../_app';
import { useQuery, gql } from '@apollo/client';
import Link from 'next/link';
import Image from 'next/image';
import MorePost from "../../components/MorePost";
import { useRef } from "react";
import ProductVideo from "../../components/ProductVideo";
import Vendor from '../../components/vendor';

export default function Product({post, morePost}) {

  const {content, title, slug, uri, rel_productMaterials_con_product} = post.data.productBy;
  const productMaterials = rel_productMaterials_con_product.associateProductMaterial;


  return (
    <>

      {/* * HERO **/}
      <div id="hero-author-section" className="max-w-6xl mx-auto ">
        <div id="hero-author-wrapper" className="mx-5 mt-3 md:flex md:min-h-[375px] md:max-h-[420px]">
          <div className="bg-truwinblue-900 rounded text-left px-10 py-10 md:w-5/12 md:h-auto">
              <p className="text-sm text-truwingray-primary mb-3">/ Windows</p>
              <h3 className="text-white text-3xl sm:text-4xl md:text-2xl font-cigarBold mt-3">{title}</h3>
              <p className="text-white text-sm mt-3 font-graphik font-medium">Time to improve your home’s appearance and energy efficiency? Consider Truwin your partner in window replacement. You’ll enjoy quality and service at a competitive price, a true win-win.</p>
              <Link href="">
                <a>
                    <button className="block mt-8 py-5 px-10 bg-truwinblue-500 rounded">
                        <span className="text-white">Get a free estimate</span> 
                    </button>
                </a>
              </Link>
             
          </div>
            
            
          <div className="relative mt-4 w-full  h-auto md:w-7/12 md:ml-2 md:mt-0 ">
              <img className="w-full max-h-46 md:object-cover md:h-full rounded" src="/images/siding-hero.png" alt="truwin builder video" />
              
            
            <div className="absolute bottom-0 left-0 w-16 hidden">
            <p className="font-graphikSemibold text-white text-2xl">The Exterior
                Experts</p>
          </div>
                
            </div>
        </div>
      </div>
      {/** END HERO */}

      {/** VENDOR LOGOS    **/}
      <Vendor />
      {/** VENDOR LOGOS */}

      {/** PRODUCT MATERIALS **/}
      <div id="window-material-section" className="max-w-6xl mx-auto">
        <div id="window-material-wrapper" className="mx-5 mt-16">
            
            
            <h3 className="text-3xl sm:text-4xl text-truwinblue-900 font-cigar">We carry {title.toLowerCase()} materials.</h3>

            <div id="window-post-wrapper" className="grid sx:grid-cols-2 md:grid-cols-4 gap-4 mt-8 mx-auto">
                
                {productMaterials?.map((material) => {
                    
                    return (
                        
                        <div key={material.id.toString()} className="w-auto border rounded border-truwinblue-300 px-8 pt-8 mt-4 sm:mt-4 max-w-[400px]">
                            <p className="text-2xl font-graphikSemibold text-truwinblue-900">
                                <Link href={material.uri}><a>{material.title}  </a></Link>
                              </p>
                            <p className="text-sm font-graphik pt-4">{material.product_Materials.materialBlurp}</p>
                           <div className="w-auto h-auto mx-auto mt-4">
                                <Image 
                                    src={material.product_Materials.materialImage.sourceUrl}
                                    width={material.product_Materials.materialImage.mediaDetails.width}
                                    height={material.product_Materials.materialImage.mediaDetails.height} 
                                />
                           </div>
                                
                            {/* <img  src={material.productsProductMaterialImage.sourceUrl} alt="windows and partner " /> */}

                        </div>
                      
                       
                    )

                })}    

            </div>

        </div>
      </div>
      {/** END PRODUCT MATERIALS */}

      {/**  PRODUCT TYPE **/}
      <div id="window-type-section" className="max-w-6xl mx-auto">
        <div id="window-type-wrapper" className="mx-5 mt-16">
            
            <h3 className="text-3xl sm:text-4xl text-truwinblue-900 font-cigar">Find your window by type:</h3>

            <div id="window-type-post-wrapper" className="mt-8 mx-auto sm:my-0">
               
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    <div className="w-auto border rounded border-truwinblue-300 p-8 mt-4 sm:mt-4 max-w-[300px] lg:max-w-[300px]">
                        <p className="text-2xl font-graphikSemibold text-truwinblue-900">Single-hung</p>
                        
                        <img className="w-auto h-auto pt-8" src="/images/window-type.png" alt="window type" />
                    </div>
                    <div className="w-auto border rounded border-truwinblue-300 p-8 mt-4 sm:mt-4 sm:my-0 max-w-[300px] lg:max-w-[300px]">
                        <p className="text-2xl text-truwinblue-900 font-graphikSemibold">Single-hung</p>
                        
                        <img className="w-auto h-auto pt-8" src="/images/window-type.png" alt="window type" />
                    </div>
                    <div className="w-auto border rounded border-truwinblue-300 p-8 mt-4 sm:mt-4 sm:my-0 max-w-[300px] lg:max-w-[300px]">
                        <p className="text-2xl text-truwinblue-900 font-graphikSemibold">Single-hung</p>
                        
                        <img className="w-auto h-auto pt-8" src="/images/window-type.png" alt="window type" />
                    </div>
                    <div className="w-auto border rounded border-truwinblue-300 p-8 mt-4 sm:mt-4 sm:my-0 max-w-[300px] lg:max-w-[300px]">
                        <p className="text-2xl text-truwinblue-900 font-graphikSemibold">Single-hung</p>
                    
                        <img className="w-auto h-auto pt-8" src="/images/window-type.png" alt="window type" />
                    </div>
               
              
                <div className="w-auto border rounded border-truwinblue-300 p-8 mt-4 sm:mt-4 max-w-[300px] lg:max-w-[300px]">
                    <p className="text-2xl font-graphikSemibold text-truwinblue-900">Single-hung</p>
                   
                    <img className="w-auto h-auto pt-8" src="/images/window-type.png" alt="window type" />
                </div>
                <div className="w-auto border rounded border-truwinblue-300 p-8 pt-8 sm:mt-4 sm:my-0 max-w-[300px] lg:max-w-[300px]">
                    <p className="text-2xl text-truwinblue-900 font-graphikSemibold">Single-hung</p>
                   
                    <img className="w-auto h-auto pt-8" src="/images/window-type.png" alt="window type" />
                </div>
                <div className="w-auto border rounded border-truwinblue-300 p-8 mt-4 sm:mt-4 sm:my-0 max-w-[300px] lg:max-w-[300px]">
                    <p className="text-2xl text-truwinblue-900 font-graphikSemibold">Single-hung</p>
                   
                    <img className="w-auto h-auto pt-8" src="/images/window-type.png" alt="window type" />
                </div>
                <div className="w-auto border rounded border-truwinblue-300 p-8 mt-4 sm:mt-4 sm:my-0 max-w-[300px] lg:max-w-[300px]">
                    <p className="text-2xl text-truwinblue-900 font-graphikSemibold">Single-hung</p>
                    
                    <img className="w-auto h-auto pt-8" src="/images/window-type.png" alt="window type" />
                </div>
              </div>
              

            </div>

        </div>
      </div>
      {/** END OF PRODUCT TYPE */}

      {/** HERO VIDEO SECTION  <ProductVideo /> **/}
     
      {/**  END HERO VIDEO SECTION **/}

      {/**  PRODUCT CONTENT SECTION **/}
      <div id="card-onethird-session" className="lg:max-w-6xl mx-auto">
        <div id="card-onethrid-wrapper" className="mx-5 mt-10 md:flex md:min-h-[390px]">
            <div className="md:w-1/2">
                <img className="w-full rounded-t md:rounded-tl md:rounded-bl md:rounded-tr-none md:h-full object-cover" src="http://truwin.flywheelstaging.com/wp-content/uploads/2018/09/window-installation.jpg" alt="" />
            </div>
            <div className="px-5 py-6 bg-truwinsoftblue-primary text-truwinblue-900 rounded-b md:p-10 md:w-1/2 md:rounded-br md:rounded-tr md:rounded-bl-none md:rounded-tl-none lg:px-7">
                <p className="py-2 font-graphik text-truwingray-primary">High Quality Installations</p>
                <h3 className="font-serif text-4xl py-2">Truwin delivers great installation results.</h3>
                <p className="py-2 font-graphik">With nearly 100 years of combined experience in new construction and remodeling, we make the process simple.</p>
                <hr className="mt-4 mb-4" />
                <ul className="ml-4">
                    <li className="p-2 list-disc">
                          Our installers are able to handle any challenge that may arise during installation, including framing issues.</li>
                    <li className="p-2 list-disc">
                      
                          We use installation materials and best practices that help your windows last longer.</li>
                    <li className="p-2 list-disc">
                        
                          Your windows will look great and have a tighter fit.</li>
                </ul>
            </div>
        </div>
      </div>
      {/**  END PRODUCT CONTENT SECTION **/}

      {/**  MORE POSTS   */}
      <MorePost  posts={morePost}/>
      {/**  END MORE POSTS   */}
    </>
  )
}

/***********************************************************
 * getStatic Paths
 * getStatic Props 
 * ********************************************************/

 export async function getStaticPaths() {

//fetch all posts urls for static pages
const get_single_product_paths_query = await client.query({
query: gql`
    query SingleProductPaths {
            products {
            nodes {
                slug
            }
        }
    }
    `,
});

 

  //create an array of slugs for static paths
  const paths = get_single_product_paths_query.data.products.nodes.map((post) => ({
      params: { product: post.slug }
  }))
  

  //return the paths
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
  //     //grab the slug
  
    const { product } = params;
    
     
       //1.2 Define a query: posts
      const get_single_product_query = await client.query({
          query: gql`
              query SingleProductsQuery{
                  productBy(uri: "${product}" ) {
                    title
                    content
                    slug
                    uri
                    rel_productMaterials_con_product {
                      associateProductMaterial {
                        ... on ProductMaterial {
                          id
                          slug
                          title
                          uri
                          content
                          product_Materials {
                            materialImage {
                              mediaDetails {
                                height
                                width
                              }
                              sourceUrl(size: THUMBNAIL)
                            }
                            materialBlurp
                          }
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
     
      return {
          props: { 
            post: get_single_product_query,
            morePost: more_posts_query.data.posts.nodes
          }
          
      }
  
  }



