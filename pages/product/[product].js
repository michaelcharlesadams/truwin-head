import { client } from '../_app';
import { useQuery, gql } from '@apollo/client';
import Link from 'next/link';
import Image from 'next/image';
import MorePost from "../../components/MorePost";
import { useRef } from "react";
import ProductVideo from "../../components/ProductVideo";
import Vendor from '../../components/Vendor';
import MoreServices from '../../components/MoreServices';
import Warranty from '../../components/Warrant';
import Banner from '../../components/Banner';
import Comparison from '../../components/Comparison';

export default function Product({post, morePost}) {

  
  const {content, title, slug, uri, rel_productMaterials_con_product, productPage, featuredImage, productPage_2} = post.data.productBy;
  const productMaterials = rel_productMaterials_con_product.associateProductMaterial;
  const heroSection = productPage.productPageHeroSection
  const heroFeaturedImage = featuredImage?.node
  const contentCard = productPage.productProductServicesCard
  const contentCard2 = productPage_2.productProductServicesCard2

  


  return (
    <>

      {/* * HERO ***/}
      <div id="hero-author-section" className="max-w-7xl mx-auto ">
        <div id="hero-author-wrapper" className="mx-5 mt-3 md:flex lg:max-h-[420px] md:min-h-[375px] md:max-h-[580px]">
          <div className="bg-truwinblue-900 rounded text-left px-10 py-8 md:w-6/12 md:h-auto">
              <p className="text-sm text-truwingray-primary mb-3">
              <span className='pr-2'>
                  <Image src="/images/truwin-breadcrumb-icon.png" width={14} height={14} />
              </span>
                / {title}</p>
              <h3 className="text-white text-3xl sm:text-4xl md:text-4xl font-[Cigars-Semibold] mt-6">{heroSection.productPageHeroTitle}</h3>
              <p className="text-white text-sm mt-3 font-graphik font-medium">{heroSection.productPageHeroBlurp}</p>
              <Link href="/pricing">
                <a>
                    <button className="block mt-8 py-5 px-10 bg-truwinblue-700 rounded text-white">
                        Get a free estimate 
                    </button>
                </a>
              </Link>
             
          </div>
            
            
          <div className="relative mt-4 w-full  h-auto md:w-6/12 md:ml-2 md:mt-0 ">
              <img className="w-full max-h-46 md:object-cover md:h-full rounded" src={heroFeaturedImage?.sourceUrl} alt="truwin builder video" />
              
            
            <div className="">
            <img className="absolute bottom-0 right-0 w-[50%] h-auto bg-white p-5 rounded-tl rounded-br " src='/images/energy-star.png'/>
          </div>
                
            </div>
        </div>
      </div>
      {/** END HERO */}

      {/** VENDOR LOGOS    ***/}
      <Vendor />
      {/** VENDOR LOGOS */}

      {/** PRODUCT MATERIALS **/}
      
      <div id="window-material-section" className="max-w-7xl mx-auto">
        <div id="window-material-wrapper" className="mx-5 mt-16">
            
            
            <h3 className="text-3xl sm:text-4xl text-truwinblue-900 font-[Cigars-SemiBold]">We carry the follow {title.toLowerCase()} material types</h3>

            <div id="window-post-wrapper" className="grid sx:grid-cols-2 md:grid-cols-4 gap-4 mt-8 mx-auto">
                
                {productMaterials?.map((material, index) => {
                    
                    return (
                        
                        <div key={index} className="relative w-auto border rounded border-truwinblue-300 px-8 pt-8 mt-4 sm:mt-4 max-w-[400px] min-h-[390px] sx:min-h-[350px] md:min-h-[320px]">
                          <Link href={material.uri}>
                             <a><img src='/images/arrow-circle.png' className='absolute top-8 right-4 w-6 h-6'/></a>
                          </Link>
                         
                            <p className="text-2xl font-graphikSemibold text-truwinblue-900">
                                <Link href={material.uri}><a>{material.title}</a></Link>
                              </p>
                            <p className="text-sm font-[Cigars]  text-truwinblue-900 pt-4">{material.product_Materials.materialBlurp}</p>
                           <div className="w-auto h-auto mx-auto absolute px-5 bottom-[-5px] left-[15%] sx:left-[5%]">
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
      <Banner title={title} />
      {/** END BANNER - ENJOY A BETTER PRODUCT */}

      {/** HERO VIDEO SECTION  **/}
      <ProductVideo slug={slug} />
      {/**  END HERO VIDEO SECTION **/}

      {/**  PRODUCT CONTENT SECTION **/}
      {slug === 'doors'
      ?
        <Warranty />
      :
      
      <div id="card-onethird-session" className="lg:max-w-7xl mx-auto">
      <div id="card-onethrid-wrapper" className="mx-5 mt-10 md:flex md:min-h-[390px]">
          
          <div className="md:w-1/2">
              <img className="w-full rounded-t md:rounded-tl md:rounded-bl md:rounded-tr-none md:h-full object-cover" src={contentCard.productsProductServicesImage?.sourceUrl} alt="" />
          </div>

          <div className="px-5 py-6  text-truwinblue-900 rounded-b md:p-12 md:w-1/2 md:rounded-br md:rounded-tr md:rounded-bl-none md:rounded-tl-none">
              <p className="py-2 font-graphik text-truwingray-primary">{contentCard.productServicesCardHeadline}</p>
              <h3 className="font-[Cigars-SemiBold] text-4xl py-2">{contentCard.productServicesCardTitle}</h3>
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
      }
      {/**  END PRODUCT CONTENT SECTION **/}

      {/**  PRODUCT CONTENT SECTION REVERSE (FOR WINDOWS ONLY) **/}
      {slug === "windows" &&
      <div id="card-onethird-session-r" className="lg:max-w-7xl mx-auto">
        <div id="card-onethrid-wrapper-r" className="mx-5 mt-10 flex flex-col-reverse  md:flex md:flex-row md:min-h-[390px]">
            
            <div className="px-5 py-6  text-truwinblue-900 rounded-b md:p-10 md:w-1/2 md:rounded-br md:rounded-tr md:rounded-bl-none md:rounded-tl-none">
                <p className="py-2 font-graphik text-truwingray-primary">{contentCard2.productServicesCardHeadline2}</p>
                <h3 className="font-[Cigars-Semibold] text-4xl py-2">{contentCard2.productServicesCardTitle2}</h3>
                <p className="py-2 font-graphik">{contentCard2.productServicesCardDescription2}</p>
                {contentCard2.productServicesCardDecriptionList2 && 
                    <>
                      <hr className="mt-4 mb-4" />
                      <ul className="ml-4">
                          
                            {contentCard2.productServicesCardDecriptionList2?.map((item, index) => 
                                {
                                  return(
                                    <li key={index} className="p-2 list-disc">
                                      {item.productDescriptionListItem2}
                                    </li>
                                  )
                                }
                            )}
                        
                      </ul>
                    </>
                }
                
                {}
                {/* <p className="pt-6 font-graphik">Questions about {product_Materials.productMaterialHeroSection.heroSectionTitle}?</p>
                <p className="font-graphikSemibold ">Call (832) 777-3681</p> */}

            </div>

            <div className="md:w-1/2">
                <img className="w-full rounded-t md:rounded-tl md:rounded-bl md:rounded-tr-none md:h-full object-cover" src={contentCard2.productsProductServicesImage2?.sourceUrl} alt="" />
            </div>
        </div>
      </div>
      } 
      {/**  END PRODUCT CONTENT SECTION REVERSE **/}

      {/**  COMPARISON **/}

      {slug !== "doors" &&
      <Comparison />
      }
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

 
  //remove siding from static paths
  const filterPath = get_single_product_paths_query.data.products.nodes.filter(item => item.slug !== "siding");

  //create an array of slugs for static paths
  const paths = filterPath.map((post) => ({
      params: { 
        product: post.slug
      }
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
                    productPage_2 {
                      productProductServicesCard2 {
                        productServicesCardHeadline2
                        productServicesCardTitle2
                        productServicesCardDescription2
                        productsProductServicesImage2 {
                          sourceUrl
                          mediaDetails {
                            height
                            width
                          }
                        }
                        productServicesCardDecriptionList2 {
                          productDescriptionListItem2
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
          },
          revalidate: 10
          
      }
  
  }



