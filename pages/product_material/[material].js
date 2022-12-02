import Vendor from "../../components/vendor";
import { client } from '../_app';
import { useQuery, gql } from '@apollo/client';
import Link from 'next/link';

export default function Product({post}) {

 
  const {content, title, slug, uri} = post.data.productMaterialBy;
  const postHeaderImage = "http://truwin.flywheelstaging.com/wp-content/uploads/2022/12/window-material-hero.jpg";
  return (
    <>

 {/** BLOG FEATURED IMAGE **/}
 { postHeaderImage &&  
  <div id="blog-feature-hero-section" className="mx-auto md:max-w-6xl">
      <div id="blog-feature-hero-wrapper" className="mx-5 mt-5 text-white md:max-h-[450px] relative mx-auto">
          <div id="blog-feature-hero-info" className="absolute bottom-10 left-10 w-4/5 md:w-full">
              <h2 className="font-serif text-2xl md:text-4xl lg:text-center py-2">{title}</h2>
              <p className="lg:text-center hidden md:block text-md">Learn how we turned this Kingwood house into a modern home.</p>
          </div>
          <div //HEADER IMAGE
                  //className="w-full h-[300px] rounded bg-blend-multiply" 
                  style={{
                      backgroundColor : '#777777', 
                      backgroundBlendMode: 'multiply', 
                      backgroundSize: 'cover', 
                      backgroundImage: 'url("'+ postHeaderImage +'")',
                      height: '300px',
                      borderRadius: '5px'
                      }} >
          </div>
          
          {/* <img className="object-cover w-full h-[300px] rounded bg-blend-overlay" src={postHeaderImage} alt="blog featured image" /> */}
  
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
                  }
              } 
          `,
      });
  
     
  
      return {
          props: { post: get_single_product_material_query}
          //props: { post: page }
      }
  
  }



