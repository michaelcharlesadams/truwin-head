import { client } from '../_app';
import { useQuery, gql } from '@apollo/client';
import Link from 'next/link';
import Image from 'next/image';
import MorePost from "../../components/MorePost";
import { useRef } from "react";
import ProductVideo from "../../components/ProductVideo";
import Vendor from '../../components/Vendor';
import MoreServices from '../../components/MoreServices';

export default function Product({post, morePost}) {

  console.log(post);
  const {content, title, slug, uri, rel_productMaterials_con_product, productPage, featuredImage} = post.data.productBy;
  const productMaterials = rel_productMaterials_con_product.associateProductMaterial;
  const heroSection = productPage.productPageHeroSection
  const heroFeaturedImage = featuredImage?.node
  const contentCard = productPage.productProductServicesCard



  return (
    <>

      {/* * HERO **/}
      <div id="hero-author-section" className="max-w-6xl mx-auto ">
        <div id="hero-author-wrapper" className="mx-5 mt-3 md:flex md:min-h-[375px] md:max-h-[420px]">
          <div className="bg-truwinblue-900 rounded text-left px-10 py-10 md:w-5/12 md:h-auto">
              <p className="text-sm text-truwingray-primary mb-3">All {title} / {title}</p>
              <h3 className="text-white text-3xl sm:text-4xl md:text-2xl font-cigarBold mt-3">{heroSection.productPageHeroTitle}</h3>
              <p className="text-white text-sm mt-3 font-graphik font-medium">{heroSection.productPageHeroBlurp}</p>
              <Link href="">
                <a>
                    <button className="block mt-8 py-5 px-10 bg-truwinblue-500 rounded">
                        <span className="text-white">Get a free estimate</span> 
                    </button>
                </a>
              </Link>
             
          </div>
            
            
          <div className="relative mt-4 w-full  h-auto md:w-7/12 md:ml-2 md:mt-0 ">
              <img className="w-full max-h-46 md:object-cover md:h-full rounded" src={heroFeaturedImage?.sourceUrl} alt="truwin builder video" />
              
            
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
                           <div className="w-auto h-auto mx-auto mt-4 relative top-[6px]">
                                <Image 
                                    src={material.product_Materials.materialImage.sourceUrl}
                                    width={material.product_Materials.materialImage.mediaDetails.width}
                                  
                                    height={material.product_Materials.materialImage.mediaDetails.height} 
                                   
                                />
                           </div>
                                
                            {/* <img  src={material.product_Materials.materialImage.sourceUrl} alt="windows and partner " /> */}

                        </div>
                      
                       
                    )

                })}    

            </div>

        </div>
      </div>
      {/** END PRODUCT MATERIALS */}

    

      {/** BANNER - ENJOY A BETTER PRODUCT */}
      <div id="banner-type-section" className="max-w-6xl mx-auto">
          <div id="banner-type-wrapper" className="mx-5 my-16">
            
            <div id="banner-container" className="bg-truwinblue-900 sm:flex justify-around py-12 px-16">

                  <h3 className="text-white font-serif  py-5 text-3xl sx:text-left sx:text-3xl">It’s time to enjoy better windows.</h3>
                  <Link href="/">
                    <button className="bg-white rounded-full py-4 px-5 sm:mx-6 min-w-[180px] max-h-20 mx-auto">Get a free estimate</button>
                  </Link>
            </div>

          </div>
      </div>
      {/** END BANNER - ENJOY A BETTER PRODUCT */}

      {/** HERO VIDEO SECTION  **/}
      <ProductVideo />
      {/**  END HERO VIDEO SECTION **/}

      {/**  PRODUCT CONTENT SECTION **/}
      <div id="card-onethird-session" className="lg:max-w-6xl mx-auto">
        <div id="card-onethrid-wrapper" className="mx-5 mt-10 md:flex md:min-h-[390px]">
            <div className="md:w-1/2">
                <img className="w-full rounded-t md:rounded-tl md:rounded-bl md:rounded-tr-none md:h-full object-cover" src={contentCard.productsProductServicesImage?.sourceUrl} alt="" />
            </div>
            <div className="px-5 py-6 bg-truwinsoftblue-primary text-truwinblue-900 rounded-b md:p-10 md:w-1/2 md:rounded-br md:rounded-tr md:rounded-bl-none md:rounded-tl-none lg:px-7">
                <p className="py-2 font-graphik text-truwingray-primary">{contentCard.productServicesCardHeadline}</p>
                <h3 className="font-serif text-4xl py-2">{contentCard.productServicesCardTitle}</h3>
                <p className="py-2 font-graphik">{contentCard.productServicesCardDescription}</p>
                {contentCard.productServicesCardDecriptionList && 
                    <>
                      <hr className="mt-4 mb-4" />
                      <ul className="ml-4">
                          
                            {contentCard.productServicesCardDecriptionList?.map((item, index) => 
                                {
                                  return(
                                    <li key={index} className="p-2 list-disc">
                                      {item.productDescriptionListItem}
                                    </li>
                                  )
                                }
                            )}
                        
                      </ul>
                    </>
                }
                
            </div>
        </div> . 
      </div>
      {/**  END PRODUCT CONTENT SECTION **/}

      {/**  COMPARISON **/}
      <div id="comparison-session" className="lg:max-w-6xl mx-auto">
        <div id="comparison-wrapper" className="mx-5 my-20 ">

            <h3 className="text-2xl text-center font-serif text-truwinblue-900">Compare our windows to competitors</h3>
            <div id="comparison-links" className="p-5 justify-around  text-truwinblue-900 max-w-md mx-auto hidden" >
                <small>Link 1</small>
                <small>Link 2</small>
                <small>Link 3</small>
                <small>Link 4</small>
            </div>

            <div id="comparison-container" className="bg-truwinsoftblue-primary py-10 px-10 md:px-14  md:py-20 sm:flex mt-10">
                <div className='max-w-sm'>
                  <Image
                  src="/images/comparison–windows.jpg"
                  width={862}
                  height={608}
                  />
                </div>
                <div id="comparison-content" className="my-5 sm:pl-14 md:pl-20 sm:pr-5 ss:max-w-[430px] md:max-w-lg">
                    <small className='text-truwinblue-900'>Higher Quality Frames</small>
                    <h3 className="text-2xl md:text-3xl py-2 font-cigar text-truwinblue-900">27% more viewing area means more light in your home.</h3>
                    <p className="text-truwinblue-900">Compare our windows to our competitors to really see what you’re getting. Be sure to ask to see this during our in-person consultation.</p>
                </div>
               

            </div>

        </div>
      </div>
      {/**  END  COMPARISON **/}

      {/**  MORE  WAYS  */}
      <MoreServices />
      {/**  END MORE WAYS   */}

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
                              sourceUrl
                            }
                            materialBlurp
                          }
                        }
                      }
                    }
                    featuredImage {
                      node {
                        sourceUrl
                        mediaDetails {
                          height
                          width
                        }
                      }
                    }
                    productPage {
                      productPageHeroSection {
                        productPageHeroTitle
                        productPageHeroBlurp
                      }
                      productProductServicesCard {
                         productServicesCardDecriptionList {
                          productDescriptionListItem
                        }
                        productServicesCardDescription
                        productServicesCardHeadline
                        productServicesCardTitle
                        productsProductServicesImage {
                          mediaDetails {
                            height
                            width
                          }
                          sourceUrl
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



