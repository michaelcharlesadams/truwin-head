import Link from "next/link";
import { client } from '../_app';
import { useQuery, gql } from '@apollo/client';
import { useState } from "react";
import GetStartForm from "../../components/GetStartForm";
import Image from "next/image";

function PostList({posts}) {

  // console.log(posts);
  // const [category, setCategory] = useState(posts.nodes);
  // const [index, setPost] = useState(0);
  
  // console.log(category);
  // const filtered = category.filter(post => post.categories.nodes[0].name === "Events");
  // //setCategory(["red"]);

  // console.log(filtered);

  return (
    <>
  
  {/** */}
  <div id="hero-company-section" className="max-w-7xl mx-auto ">
      <div id="hero-company-wrapper" className="mx-5 mt-3 md:flex md:min-h-[375px] md:max-h-[400px]">
          <div className="bg-truwinblue-900 rounded text-left px-10 py-8 md:w-5/12 md:h-auto">
              <p className="text-sm text-truwingray-primary mb-3">
              <span className='pr-2'>
                  <Image src="/images/truwin-breadcrumb-icon.png" width={14} height={14} />
              </span>
                / Blog</p>
              <h3 className="text-white text-3xl sm:text-4xl font-[Cigars-SemiBold] mt-6">A Truwin customer is an informed customer.</h3>
              <p className="text-white text-sm mt-3 font-graphik font-medium">The transparent window & door company.™ A Truwin customer is an informed customer.</p>
          </div>
          
          
          {/**  */}
          <div className="relative mt-4 w-full  h-auto md:w-7/12 md:ml-2 md:mt-0 ">
          <img className="cursor-pointer w-full md:min-h-[375px] md:max-h-[375px] md:object-cover rounded" src="/images/Truwin-blog.jpg" alt="truwin president" />
          </div>
          {/**  */}
      </div>
    </div>
  {/** */}

  {/** BLOG POSTS */}
    <div id="blog-posts-section" className="lg:max-w-7xl mx-auto">
        <div id="blog-posts-wrapper" className="mx-5 mt-8">
            <p className="text-2xl text-truwinblue-900 font-graphikSemibold">Recent Blog Posts</p>
            <div id="blog-posts-wrapper-content" className="grid sx:grid-cols-2 md:grid-cols-4 gap-4 mt-4 mx-auto">
            
            {posts.nodes.map((post) => 

              <div key={post.uri.toString()} id="blog-post-card" className="relative my-4 w-full odd:bg-truwinsoftblue-primary even:bg-truwinblue-900  min-h-[370px] rounded"

              style={{
                //backgroundColor : '#777777', 
                backgroundBlendMode: 'multiply', 
                backgroundSize: 'cover', 
                //backgroundImage: 'url("'+ post.featuredImage.node.sourceUrl +'")',
                height: '300px',
                borderRadius: '5px'
                }} 
              
              >


                {/* <p className="absolute text-sm t-0 left-0 odd:text-truwinblue-900 font-graphik pl-5 pt-5 ">{post.categories.nodes.map((cat) => cat[0].name )}</p> */}


                <p className="absolute text-sm t-0 left-0 odd:text-truwinblue-900 font-graphik pl-5 pt-5 ">{post.categories.nodes[0].name.toUpperCase()}</p>
                <p className="absolute text-2xl t-0 left-0 text-truwinblue-900 font-graphikSemibold px-5 pt-20 md:text-2xl">{post.title}</p>
                <Link href={`/post${post.uri}`}><a>
                    <button className="px-5 py-2 bg-truwinblue-700 text-white rounded-full absolute bottom-5 left-5">Read More</button></a>
                </Link>
              </div>

            )}
        
            </div>
        </div>
    </div>
  {/** END BLOG POSTS */} 
    
     {/** Get Started Form */}
     <GetStartForm />
    {/** END Get Started Form */}

     <style jsx>{`
        #blog-post-card:nth-child(even) p {
        color: white;
        }
      `}  
     </style>
    </>
  )
}

export default PostList;


/*********************************************************
 * Get Static paths
 * @returns 
 *******************************************************/
 export async function getStaticProps(){
  
     //1.2 Define a query: posts
    const get_all_posts_query = await client.query({
        query: gql`
          query getAllBlogPosts {
            posts {
              nodes {
                title
                uri
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
          }`,
    });


    return {
        props: { 
          posts: get_all_posts_query.data.posts 
        },
        revalidate: 10
    }

}

