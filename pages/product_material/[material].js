//import Vendor from "../../components/vendor"
import { client } from '../_app';
import { useQuery, gql } from '@apollo/client';
import Link from 'next/link';

export default function Product({post}) {

  console.log(post);
  const {content, title, slug, uri} = post.data.productMaterialBy;

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

      {/** VENDOR LOGOS  <Vendor />  **/}
     
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
  
    console.log(params);
  
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
  
      console.log(get_single_product_material_query);
  
      return {
          props: { post: get_single_product_material_query}
          //props: { post: page }
      }
  
  }



