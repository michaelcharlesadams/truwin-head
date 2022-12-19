import { client } from '../_app';
import { useQuery, gql } from '@apollo/client';
import Link from 'next/link';
import Image from 'next/image';
import MorePost from "../../components/MorePost";
import { useRef } from "react";
import ProductSidingVideo from "../../components/ProductSidingVideo";
import Vendor from '../../components/Vendor';
import MoreServices from '../../components/MoreServices';

export default function Siding({post, morePost}) {

  console.log(post);
  const {content, title, slug, uri, rel_productMaterials_con_product, productPage, featuredImage, productBenefits} = post.data.productBy;
  const productMaterials = rel_productMaterials_con_product.associateProductMaterial;
  const heroSection = productPage.productPageHeroSection;
  const heroFeaturedImage = featuredImage?.node;
  const contentCard = productPage.productProductServicesCard;
  const postBenefits = productBenefits.productBenefits;



  return (
    <>

      {/* * HERO **/}
      <div id="hero-author-section" className="max-w-6xl mx-auto ">
        <div id="hero-author-wrapper" className="mx-5 mt-3 md:flex lg:max-h-[420px] md:min-h-[375px] md:max-h-[580px]">
          <div className="bg-truwinblue-900 rounded text-left px-10 py-10 md:w-5/12 md:h-auto">
              <p className="text-sm text-truwingray-primary mb-3">All {title} / {title}</p>
              <h3 className="text-white text-3xl sm:text-4xl md:text-4xl font-[Cigars-Semibold] mt-3">{heroSection.productPageHeroTitle}</h3>
              <p className="text-white text-sm mt-3 font-graphik font-medium">{heroSection.productPageHeroBlurp}</p>
              <Link href="/pricing">
                <a>
                    <button className="block mt-8 py-5 px-10 bg-truwinblue-500 rounded text-white">
                        Get a free estimate 
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
                
                <p className="pt-6 font-graphik">Questions about Siding?</p>
                <p className="font-graphikSemibold ">Call (832) 777-3681</p>

            </div>
        </div> . 
      </div>
      {/**  END PRODUCT CONTENT SECTION **/}

      {/** HERO VIDEO SECTION  **/}
      <ProductSidingVideo />
      {/**  END HERO VIDEO SECTION **/}

    {/**  MATERIAL BENEFITS   */}
    <div id="onethird-info-section" className="lg:max-w-6xl mx-auto my-28 ">
        <div id="onethird-info-wrapper" className="mx-5 mt-10">
            <div className="text-center" >
                <p className="text-sm text-truwinblue-900">We have partnered with the best</p>
                <h3 className="font-serif text-3xl md:text-5xl py-2 text-truwinblue-900 sm:w-[75%] sm:mx-auto">We are dedicated to bring you the best project results possible.</h3>
                <p className="text-sm text-truwinblue-900"><b>LP Smartsise</b>   |    James Hardie</p>
            </div>
            <div className="grid gap-4 grid-cols-1 sx:grid-cols-2  md:grid-cols-3 mt-14">
                

                {postBenefits.productBenefitsSectionList.map((benefit, index) => (

                    <div key={index} className="p-5 border-[1px] rounded border-[#2B50AF]">
                        <img  src={benefit.productBenefitsListIcon.sourceUrl} className="w-auto pb-2" alt="Transparent Prices icon" />
                        <p className="text-2xl font-serif text-truwinblue-900 py-2">{benefit.productBenefitsListTitle}</p>
                        <p className="text-truwinblue-900">{benefit.productBenefitsListDescription}</p>
                    </div>

                ))}
                    
                
            </div>
        </div>
    </div>
    {/**  END MATERIAL BENEFITS   */}

      {/** BANNER - ENJOY A BETTER PRODUCT */}
      <div id="banner-type-section" className="max-w-6xl mx-auto">
          <div id="banner-type-wrapper" className="mx-5 my-16">
            
            <div id="banner-container" className="bg-truwinblue-900 sm:flex justify-around py-12 px-16">

                  <h3 className="text-white font-[Cigar-Semibold]  py-5 text-3xl sx:text-left sx:text-3xl">It’s time to enjoy better Siding.</h3>
                  <Link href="/pricing">
                    <button className="bg-white rounded-full py-4 px-5 sm:mx-6 min-w-[180px] max-h-20 mx-auto">Get a free estimate</button>
                  </Link>
            </div>

          </div>
      </div>
      {/** END BANNER - ENJOY A BETTER PRODUCT */}

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

//  export async function getStaticPaths() {

// //fetch all posts urls for static pages
// const get_single_product_paths_query = await client.query({
// query: gql`
//     query SingleProductPaths {
//             products {
//             nodes {
//                 slug
//             }
//         }
//     }
//     `,
// });

 

//   //create an array of slugs for static paths
//   const paths = get_single_product_paths_query.data.products.nodes.map((post) => ({
//       params: { product: post.slug }
//   }))
  

//   //return the paths
//   return { paths, fallback: false }


// }

/*********************************************************
 * Get statis props
 * @param  
 * @returns post content by slug
 * 
 * TODO: add revalidate: 1 after the variables 
 ********************************************************/
 export async function getStaticProps() {
  //     //grab the slug
     
       //1.2 Define a query: posts
      const get_single_product_query = await client.query({
          query: gql`
              query SingleProductsQuery{
                  productBy(uri: "siding" ) {
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
                    productBenefits {
                        productBenefits {
                          productBenefitsSectionHeadliner
                          productBenefitsSectionTitle
                          productBenefitsSectionList {
                            productBenefitsListDescription
                            productBenefitsListTitle
                            productBenefitsListIcon {
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



