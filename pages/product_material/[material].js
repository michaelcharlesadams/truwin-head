import { client } from '../_app';
import { useQuery, gql } from '@apollo/client';
import Link from 'next/link';
import Vendor from '../../components/Vendor';
import GetStartForm from '../../components/GetStartForm';
import ScrollingGallery from '../../components/ScrollingGallery';
import MoreServices from '../../components/MoreServices';

export default function Product({post}) {

  console.log(post);

  const {content, title, slug, uri, product_Materials} = post.data.productMaterialBy;
  const postHeaderImage = post.data.productMaterialBy.featuredImage.node.sourceUrl;
  const postMaterialTypes = product_Materials.materialProductTypes;
  const postGallery = product_Materials.productTypeGallery

  return (
    <>

 {/** FEATURED IMAGE **/}
 { postHeaderImage &&  
        
      <div id="hero-author-section" className="max-w-6xl mx-auto ">
        <div id="hero-author-wrapper" className="mx-5 mt-3 md:flex md:min-h-[375px] md:max-h-[420px]">
          <div className="bg-truwinblue-900 rounded text-left px-10 py-10 md:w-5/12 md:h-auto">
              <p className="text-sm text-truwingray-primary mb-3">{title}</p>
              <h3 className="text-white text-3xl sm:text-4xl md:text-2xl font-cigarBold mt-3">{product_Materials.productMaterialHeroSection.heroSectionTitle}</h3>
              <p className="text-white text-sm mt-3 font-graphik font-medium">{product_Materials.productMaterialHeroSection.heroSectionBlurp}</p>
              <Link href="">
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
  <Vendor />
  {/** VENDOR LOGOS */}



  {/**  PRODUCT TYPE **/}
  <div id="window-type-section" className="max-w-6xl mx-auto">
    <div id="window-type-wrapper" className="mx-5 mt-16">
        
        {postMaterialTypes && 
        <>

          <h3 className="text-3xl sm:text-4xl text-truwinblue-900 font-cigar">Find your window by type:</h3>

          <div id="window-type-post-wrapper" className="mt-8 mx-auto sm:my-0">
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">

                {postMaterialTypes?.map( (postType) =>  (
                
                <div key={postType.materialProductTypeImage.id} className="w-auto border rounded border-truwinblue-300 p-8 sm:mt-4 max-w-[300px] lg:max-w-[300px]">
                  <p className="text-2xl font-graphikSemibold text-truwinblue-900">{postType.materialProductTypeTitle}</p>
                  
                  <img 
                    className="w-auto h-auto pt-8" 
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
 <div id="card-onethird-session" className="lg:max-w-6xl mx-auto">
        <div id="card-onethrid-wrapper" className="mx-5 mt-10 md:flex md:min-h-[390px]">
            <div className="md:w-1/2">
                <img className="w-full rounded-t md:rounded-tl md:rounded-bl md:rounded-tr-none md:h-full object-cover" src="/images/window-material-type.jpg" alt="" />
            </div>
            <div className="px-5 py-6 text-truwinblue-900 rounded-b md:p-10 md:w-1/2 md:rounded-br md:rounded-tr md:rounded-bl-none md:rounded-tl-none lg:px-7">
                <p className="py-2 font-graphik text-truwinblue-900">Quality and Cost Savings</p>
                <h3 className="font-serif text-4xl py-2">Energy Efficient Single-Hung Windows</h3>
                <p className="py-2 font-graphik">Single-hung windows incorporate two sashes, one fixed and one that slides up and down. Although most homeowners prefer double-hung windows with two operating sashes, single hung windows are an attractive, more practical choice for some homes. </p>

                    <p className="py-2 font-graphik"> SoftLite’s single-hung windows are ideal for homeowners who are more budget conscious or prefer this operating style, because they improve your home’s appearance and are still built to provide decades of thermal efficiency, security, durability, and easy operation, like all SoftLite vinyl windows.</p>
               
           
            </div>
        </div>
    </div>
  {/** END MATERIAL INFO SECTION  */}

  {/** Get Started Form */}
  <GetStartForm />
  {/** END Get Started Form */}

  {/**  MATERIAL BENEFITS   */}
  <div id="onethird-info-section" className="lg:max-w-6xl mx-auto my-28 ">
    <div id="onethird-info-wrapper" className="mx-5 mt-10">
        <div className="text-center" >
            <p className="text-sm text-truwinblue-900">Truwin, the window and door experts of Houston.</p>
            <h3 className="font-serif text-5xl py-2 text-truwinblue-900">Benefits of a Vinyl Window</h3>
        </div>
        <div className="grid gap-4 grid-cols-1 sx:grid-cols-2  md:grid-cols-3 mt-14">
            <div className="mt-5">
                <img src="/images/truwin-prices.png" className="w-auto pb-2" alt="Transparent Prices icon" />
                <p className="text-2xl font-serif text-truwinblue-900 py-2">Diverse Materials</p>
                <p className="text-truwinblue-900">At Truwin, we don’t hide our pricing at any point in the process. We want to help you improve your home and will work with budgets of all type to make that possible. </p>
            </div>
            <div className="mt-5">
                <img src="/images/truwin-vetted.png" className="w-auto pb-2 " alt="Vetted Professionals icon" />
                <p className="text-2xl font-serif text-truwinblue-900 py-2">Ultra-Slim Frame</p>
                <p className="text-truwinblue-900">Having strangers working on your home can be odd. But worry not, we’ve vetted every one of our professionasl on staff with thorough background checks and interviews.</p>
            </div>
            <div className="mt-5">
                <img src="/images/truwin-warranties.png" className="w-auto pb-2 " alt="Amazing Warranties icon" />
                <p className="text-2xl font-serif text-truwinblue-900 py-2">Foam-Filled Frame</p>
                <p className="text-truwinblue-900">We don’t just help you select the right product and install. We back our work and the products we sell you with industry-leading warranties. That’s just how we do business.</p>
            </div>
            <div className="mt-5">
                <img src="/images/truwin-warranties.png" className="w-auto pb-2 " alt="Amazing Warranties icon" />
                <p className="text-2xl font-serif text-truwinblue-900 py-2">3x Weather Stripping</p>
                <p className="text-truwinblue-900">We don’t just help you select the right product and install. We back our work and the products we sell you with industry-leading warranties. That’s just how we do business.</p>
            </div>
            <div className="mt-5">
                <img src="/images/truwin-warranties.png" className="w-auto pb-2 " alt="Amazing Warranties icon" />
                <p className="text-2xl font-serif text-truwinblue-900 py-2">Pre-Sealed Impact Glass</p>
                <p className="text-truwinblue-900">We don’t just help you select the right product and install. We back our work and the products we sell you with industry-leading warranties. That’s just how we do business.</p>
            </div>
            <div className="mt-5">
                <img src="/images/truwin-warranties.png" className="w-auto pb-2 " alt="Amazing Warranties icon" />
                <p className="text-2xl font-serif text-truwinblue-900 py-2">Embedded Locks</p>
                <p className="text-truwinblue-900">We don’t just help you select the right product and install. We back our work and the products we sell you with industry-leading warranties. That’s just how we do business.</p>
            </div>
        </div>
    </div>
  </div>
  {/**  END MATERIAL BENEFITS   */}

  {/** SCROLLING GALLERY SECTION */}
      <ScrollingGallery postGallery={postGallery} />
  {/** END SCROLLING GALLERY SECTION */}
 
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
          props: { post: get_single_product_material_query}
          //props: { post: page }
      }
  
  }



