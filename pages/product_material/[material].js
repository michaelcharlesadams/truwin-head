import { client } from '../_app';
import { useQuery, gql } from '@apollo/client';
import Link from 'next/link';
import Vendor from '../../components/Vendor';
import GetStartForm from '../../components/GetStartForm';
import ScrollingGallery from '../../components/ScrollingGallery';
import MoreServices from '../../components/MoreServices';
import Quote from '../../components/Quote';
import Image from 'next/image';
import Head from 'next/head';

export default function Product({post}) {

  
  const {content, title, slug, uri, product_Materials} = post.data.productMaterialBy;
  const postHeaderImage = post.data.productMaterialBy.featuredImage.node.sourceUrl;
  const postMaterialTypes = product_Materials.materialProductTypes;
  const postGallery = product_Materials.productTypeGallery;
  const postGeneral = product_Materials.productMaterialGeneralInformation;
  const postBenefits = product_Materials.productMaterialBenefits;


  return (
    <>
      <Head>
      <title>{product_Materials.productMaterialHeroSection.heroSectionTitle} | Truwin Replacement Windows & Doors</title>
        <meta name="description" 
        content={postGeneral.productMaterialGeneralTitle}
        ></meta>
      </Head>

 {/** FEATURED IMAGE **/}
 { postHeaderImage &&  
        
      <div id="hero-author-section" className="max-w-7xl mx-auto ">
        <div id="hero-author-wrapper" className="mx-5 mt-3 md:flex md:min-h-[375px] md:max-h-[420px]">
          <div className="bg-truwinblue-900 rounded text-left px-10 py-8 md:w-5/12 md:h-auto">
              <p className="text-sm text-truwingray-primary mb-3">
              <span className='pr-2'>
                <Image src="/images/truwin-breadcrumb-icon.png" width={14} height={14}  alt="Truwin brand mark" />
              </span>
                / {title}</p>
              <h1 className="text-white text-3xl sm:text-4xl md:text-4xl font-[Cigars-SemiBold] mt-6">{product_Materials.productMaterialHeroSection.heroSectionTitle}</h1>
              <p className="text-white text-sm mt-3 font-graphik font-medium">{product_Materials.productMaterialHeroSection.heroSectionBlurp}</p>
              <Link href="/pricing">
                <a>
                    <button className="block mt-8 py-5 px-10 bg-truwinblue-500 rounded">
                        <span className="text-white">Get a free estimate</span> 
                    </button>
                </a>
              </Link>
             
          </div>
            
            
          <div className="relative mt-4 w-full  h-auto md:w-7/12 md:ml-2 md:mt-0 ">
              <img className="w-full max-h-46 md:object-cover md:h-full rounded" src={postHeaderImage} alt="truwin builder video" />
              
            
            <div className="absolute bottom-0 left-0 w-16 hidden">
            <p className="font-graphikSemibold text-white text-2xl">The Exterior
                Experts</p>
          </div>
                
            </div>
        </div>
      </div>
  }
  {/** END BLOG FEATURED IMAGE */}

  {/** VENDOR LOGOS  <Vendor />  **/}
  
  {/** VENDOR LOGOS */}

  {/**  PRODUCT TYPE **/}
  <div id="window-type-section" className="max-w-7xl mx-auto">
    <div id="window-type-wrapper" className="mx-5 mt-16">
        
        {postMaterialTypes && 
        <>

          <h3 className="text-3xl sm:text-4xl text-truwinblue-900 font-cigar">Types to choose from:</h3>

          <div id="window-type-post-wrapper" className="mt-8 mx-auto sm:my-0">
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">

                {postMaterialTypes?.map( (postType, index) =>  (
                
                <div key={index} className="w-auto border rounded border-truwinblue-300 p-8 sm:mt-4 max-w-[300px] lg:max-w-[300px] relative h-52">
                  <p className="text-xl sx:text-2xl font-graphikSemibold text-truwinblue-900">{postType.materialProductTypeTitle}</p>
                  
                  <img 
                    className="w-auto h-auto pt-8 absolute left-7 bottom-4" 
                    src={postType.materialProductTypeImage.sourceUrl} 
                    alt="window type" />
                </div>
                  )
                )}
               
          </div>
        

      </div>
        
        </>
       
        
        }
        

    </div>
  </div>
  {/** END OF PRODUCT TYPE */}

 {/**  MATERIAL INFO SECTION  */}
 <div id="card-onethird-session" className="lg:max-w-7xl mx-auto">
        <div id="card-onethrid-wrapper" className="mx-5 mt-10 md:flex md:min-h-[390px]">
            <div className="md:w-1/2">
                <img className="w-full rounded-t md:rounded-tl md:rounded-bl md:rounded-tr-none md:max-h-[575px] object-contain" src={postGeneral.productMaterialGeneralImage.sourceUrl} alt="Truwin materials - wood, iron, fiberglass" />
            </div>
            <div className="px-5 py-6 text-truwinblue-900 rounded-b md:p-10 md:w-1/2 md:rounded-br md:rounded-tr md:rounded-bl-none md:rounded-tl-none lg:px-7">
                <p className="py-2 font-graphik text-truwinblue-900">{postGeneral.productMaterialGeneralHeadline}</p>
                <h3 className="font-serif text-4xl py-2">{postGeneral.productMaterialGeneralTitle}</h3>
                <div className="py-2 font-graphik prod_p" dangerouslySetInnerHTML={{__html: postGeneral.productMaterialGeneralDescription}}></div>
               
                <p className="pt-6 font-graphik">Questions about {product_Materials.productMaterialHeroSection.heroSectionTitle}?</p>
                <p className="font-graphikSemibold ">Call <a href="tel:832-777-3681">(832) 777-3681</a></p>

            <style jsx>{`
            .prod_p p{
              padding-bottom: 5px;
            }
            `}
              
            </style>
            </div>
        </div>
 </div>
  {/** END MATERIAL INFO SECTION  */}

  {/** Get Started Form */}
  <GetStartForm />
  {/** END Get Started Form */}

  {/**  MATERIAL BENEFITS   */}
  {postBenefits.productMaterialBenefitsSectionList &&
  <div id="onethird-info-section" className="lg:max-w-7xl mx-auto my-28 ">
    <div id="onethird-info-wrapper" className="mx-5 mt-10">
        <div className="text-center" >
            <p className="text-lg text-truwinblue-300 pb-4">{postBenefits.productMaterialBenefitsSectionHeadliner}</p>
            <h3 className="font-serif text-5xl py-2 text-truwinblue-900">{postBenefits.productMaterialBenefitsSectionTitle}</h3>
        </div>
        <div className="grid gap-4 grid-cols-1 sx:grid-cols-2  md:grid-cols-3 mt-14">
            

               {postBenefits.productMaterialBenefitsSectionList.map((benefit, index) => (

                <div key={index} className="mt-5">
                  <img  src={benefit.productMaterialBenefitsListIcon.sourceUrl} className="w-auto pb-2" alt="Transparent Prices icon" />
                  <p className="text-2xl font-serif text-truwinblue-900 py-2">{benefit.productMaterialBenefitsListTitle}</p>
                  <p className="text-truwinblue-900 text-[15px]">{benefit.productMaterialBenefitsListDescription}</p>
                </div>

              ))}
                
            
        </div>
    </div>
  </div>
  }
  {/**  END MATERIAL BENEFITS   */}

  {/** SCROLLING GALLERY SECTION */}
    <ScrollingGallery postGallery={postGallery} />
  {/** END SCROLLING GALLERY SECTION */}
 
{/** QUOTE SECTION */}
{slug === 'vinyl-doors' || slug === 'wood' &&

  <Quote />

 } 
{/** QUOTE */}

    {/**  MORE  WAYS  */}
    <MoreServices />
    {/**  END MORE WAYS   */}
    </>
  )
}

 /***********************************************************
 * getStatic Paths
 * getStatic Props 
 * ********************************************************/
  export async function getStaticPaths() {

    //fetch all posts urls for static pages
    const get_single_product_material_paths_query = await client.query({
    query: gql`
        query SingleProductMaterialPaths {
            productsMaterials {
                nodes {
                  slug
                }
              }
            }
            `,
    });
    
    
      //create an array of slugs for static paths
      const paths = get_single_product_material_paths_query.data.productsMaterials.nodes.map((post) => ({
          params: { material: post.slug }
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
  
    
  
    const { material } = params;
     
       //1.2 Define a query: posts
      const get_single_product_material_query = await client.query({
          query: gql`
              query SingleProductMaterialQuery{
                    productMaterialBy(uri: "${material}"){
                      content
                      title
                      uri
                      slug
                      product_Materials {
                        materialProductTypes {
                          materialProductTypeTitle
                          materialProductTypeImage {
                            id
                            sourceUrl
                          }
                        }
                        productTypeGallery {
                          productTypeGalleryImage {
                            sourceUrl
                            mediaDetails {
                              width
                              height
                            }
                          }
                          productTypeGalleryTitle
                        }
                        materialBlurp
                        productMaterialHeroSection {
                          heroSectionBlurp
                          heroSectionTitle
                        }
                        productMaterialGeneralInformation {
                          productMaterialGeneralHeadline
                          productMaterialGeneralTitle
                          productMaterialGeneralDescription
                          productMaterialGeneralImage {
                            sourceUrl
                            mediaDetails {
                              height
                              width
                            }
                          }
                        }
                        productMaterialBenefits {
                          productMaterialBenefitsSectionHeadliner
                          productMaterialBenefitsSectionTitle
                          productMaterialBenefitsSectionList {
                            productMaterialBenefitsListTitle
                            productMaterialBenefitsListDescription
                            productMaterialBenefitsListIcon {
                              sourceUrl
                              mediaDetails {
                                height
                                width
                              }
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
                  }
              }
             
          `,
      });
  
     
  
      return {
          props: { post: get_single_product_material_query},
          revalidate: 1
          //props: { post: page }
      }
  
  }



