import Link from "next/link";
import { client } from '../_app';
import { useQuery, gql } from '@apollo/client';
import { useState } from "react";
import GetStartForm from "../../components/GetStartForm";
import MorePost from "../../components/MorePost";
import Image from "next/image";

function LocationList({locations, morePost}) {

  
  return (
    <>
  
  {/** */}
  <div id="hero-company-section" className="max-w-7xl mx-auto ">
      <div id="hero-company-wrapper" className="mx-5 mt-3 md:flex md:min-h-[375px] md:max-h-[400px]">
          <div className="bg-truwinblue-900 rounded text-left px-10 py-12 md:w-6/12 md:h-auto">
              <p className="text-sm text-truwingray-primary mb-3">
              <span className='pr-2'>
                  <Image src="/images/truwin-breadcrumb-icon.png" width={14} height={14} />
              </span>
                / Locations</p>
              <h3 className="text-white text-3xl sm:text-4xl font-[Cigars-SemiBold] mt-3">A Truwin customer is an informed customer.</h3>
              <p className="text-white text-sm mt-3 font-graphik font-medium">The transparent window & door company.™ A Truwin customer is an informed customer.</p>
          </div>
          
          
          {/**  */}
          <div className="relative mt-4 w-full  h-auto md:w-6/12 md:ml-2 md:mt-0 ">
          <img className="w-full md:min-h-[375px] md:max-h-[375px] md:object-cover rounded" src="/images/truwin-locations.jpg" alt="truwin Locations" />
          </div>
          {/**  */}
      </div>
    </div>
  {/** */}

  {/** BLOG POSTS */}
    <div id="location-section" className="lg:max-w-7xl mx-auto">
        <div id="location-wrapper" className="mx-5 mt-20">
            <p className="text-2xl md:text-5xl text-truwinblue-700 py-2 font-[Cigars-SemiBold] text-center">Choose your service area:</p>
            <p className="text-sm text-truwinblue-900 font-graphik text-center pt-2">Need more than just windows? Our team can help with all of it.</p>

            
            <div id="locations-wrapper-content" className="grid sx:grid-cols-2 md:grid-cols-3 gap-6 mt-20 mx-auto">
            
            {locations.nodes.map((post, index) => 

              <div key={index} id="blog-post-card " className="my-4 w-full text-truwinblue-900">

                <Link href={`/location/${post.title.toLowerCase()}`}><a>
                <p className="text-2xl font-[Cigars-SemiBold] border-b-2 border-truwinblue-900 w-full inline">{post.title}</p>
                </a>
                </Link>
                
                <p className="text-sm font-graphik my-4" dangerouslySetInnerHTML={ {__html: post.content} }></p>

                {post.locationProducts.locationServicesSection[0].locationProductsSection &&

                <div key={index} id="location-products" className=""> 

                    {post.locationProducts.locationServicesSection[0].locationProductsSection?.map((locpro, index) => (
                      
                      <Link key={index} href={`/location/${post.title.toLowerCase()}`}><a>
                        <span className="py-2 pr-5 text-truwinblue-900 bottom-5 text-sm underline cursor-pointer">{locpro.locationProduct}</span></a>
                      </Link>
                        
                      

                    ))}

                </div>
                  
                }
               
                    
              </div>

            )}
        
            </div>
        </div>
    </div>
  {/** END BLOG POSTS */} 
    
     {/** Get Started Form */}
     <GetStartForm />
    {/** END Get Started Form */}

    {/** More Post Form */}
    <MorePost  posts={morePost}/>
    {/** More Post Form */}

     <style jsx>{`
        #blog-post-card:nth-child(even) p {
        color: white;
        }
      `}  
     </style>
    </>
  )
}

export default LocationList;


/*********************************************************
 * Get Static paths
 * @returns 
 *******************************************************/
 export async function getStaticProps(){
  
     //1.2 Define a query: posts
    const get_all_locations_query = await client.query({
        query: gql`
        query getAllLocations {
          locations {
            nodes {
              title
              content
              locationProducts {
                locationServicesSection {
                  locationProductsSection {
                    locationProduct
                  }
                }
              }
            }
          }
        }`,
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
          locations: get_all_locations_query.data.locations,
          morePost: more_posts_query.data.posts.nodes
        },
        revalidate: 1
    }

}

