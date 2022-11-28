import Link from "next/link";

function FeaturedPost({ posts }) {

    console.log(posts);

const title_0 = posts[0].title;
const uri_0 = posts[0].uri;
const excerpt_0 = posts[0].excerpt;
const image_0 = posts[0].postsFeaturedImages.postsFeaturedImage.sourceUrl;
const cat_0 = posts[0].categories.nodes[0].name;

const title_1 = posts[1].title;
const uri_1 = posts[1].uri;
const excerpt_1 = posts[1].excerpt;
const cat_1 = posts[1].categories.nodes[0].name;
const image_1 = posts[1].postsFeaturedImages.postsFeaturedImage.sourceUrl;



  return (    
    <>
    <div id="card-onethird-session-reverse" className="lg:max-w-6xl mx-auto">
        <div id="card-onethrid-wrapper" className="mx-5 mt-10 md:flex md:flex-row-reverse md:min-h-[390px]">
            <div className="md:w-2/4 lg:w-3/5">
                <img loading="lazy" className="w-full rounded-t md:rounded-tl md:rounded-bl md:rounded-tr-none md:h-full object-cover" src={image_0} alt=""/> 
            </div>
            <div className="px-5 py-6 bg-truwinsoftblue-primary text-truwinblue-900 rounded-b md:p-10 md:w-2/4 md:rounded-br md:rounded-tr md:rounded-bl-none md:rounded-tl-none lg:px-7 lg:w-2/5">
                <p className="py-2 font-graphikSemibold">{cat_0}</p>
                <h3 className="font-serif text-3xl py-2">{title_0}</h3>
                <div className="py-2 font-graphik" dangerouslySetInnerHTML={{ __html: excerpt_0 }}></div>
                <Link href={`/post${uri_0}`}> 
                    <button className="bg-truwinblue-900 py-4 px-6 rounded-full my-2 text-white">Learn More</button>
                </Link>
            </div>
        </div>
    </div>
  
    <div id="card-onethird-session" className="lg:max-w-6xl mx-auto">
        <div id="card-onethrid-wrapper" className="mx-5 mt-10 md:flex md:min-h-[390px]">
            <div className="md:w-2/4 lg:w-3/5">
                <img loading="lazy" className="w-full rounded-t md:rounded-tl md:rounded-bl md:rounded-tr-none md:h-full object-cover" src={image_1} alt="" />
            </div>
            <div className="px-5 py-6 bg-truwinblue-900 text-white rounded-b md:p-10 md:w-2/4 md:rounded-br md:rounded-tr md:rounded-bl-none md:rounded-tl-none lg:px-7 lg:w-2/5">
            <p className="py-2 font-graphikSemibold">{cat_1}</p>
                <h3 className="font-serif text-3xl py-2">{title_1}</h3>
                <div className="py-2 font-graphik" dangerouslySetInnerHTML={{ __html: excerpt_1 }}></div>
                <Link href={`/post${uri_1}`}> 
                    <button className="bg-truwinblue-500 py-4 px-6 rounded-full my-2">Learn More</button>
                </Link>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default FeaturedPost


/*********
 * Get 2 featured post
 * dangerouslySetInnerHTML={{ __html: excerpt_0 }}
 * dangerouslySetInnerHTML={{ __html: excerpt_1 }}
 */
export async function getStaticProps(){

    const res = await fetch('http://localhost:8888/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
            query featuredPostQuery {
                posts(first: 2) {
                  nodes {
                    title
                    uri
                    slug
                    postsFeaturedImages {
                      postsFeaturedImage {
                        sourceUrl
                      }
                    }
                    excerpt
                    categories {
                      nodes {
                        name
                      }
                    }
                  }
                }
              }
            `,
        })
    })
    const json = await res.json();

    return {
      props: {
          posts: json.data.posts,
      },
    }
  
  }