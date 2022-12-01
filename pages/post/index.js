import Link from "next/link";
import { client } from '../_app';
import { useQuery, gql } from '@apollo/client';

function PostList({posts}) {

  console.log(posts);
  
  return (
    <>
  
  {/** MORE POSTS */}
    <div id="blog-posts-section" className="lg:max-w-6xl mx-auto">
        <div id="blog-posts-wrapper" className="mx-5 mt-8">
            <p className="text-2xl text-truwinblue-900 font-graphik">Recent Blog Posts</p>
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


                <p className="absolute text-sm t-0 left-0 odd:text-truwinblue-900 font-graphik pl-5 pt-5 ">{post.categories.nodes[0].name}</p>
                <p className="absolute text-2xl t-0 left-0 text-truwinblue-900 font-graphik px-5 pt-20 md:text-lg">{post.title}</p>
                <Link href={`/post${post.uri}`}><a>
                    <button className="px-5 py-2 bg-truwinblue-700 text-white rounded-full absolute bottom-5 left-5">Read More</button></a>
                </Link>
              </div>

            )}
        
            </div>
        </div>
    </div>
  {/** END MORE POSTS */} 
    
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
        }
    }

}

