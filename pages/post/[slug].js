import Image from 'next/image'

export default function Post({post}){
    //deconstruct the posts contents
    console.log(post);
    const {title, date, slug, content } = post;
    const postHeaderImage = post.postsFeaturedImages.postsFeaturedImage.sourceUrl;
    const postAuthor = post.author.node.people.edges[0].node.people_avatar.truwinAvatar.title;
    const postAuthorAvatar = post.author.node.people.edges[0].node.people_avatar.truwinAvatar.sourceUrl
    
    return (
    <>
        
        {/** BLOG FEATURED IMAGE */}
        { post.postsFeaturedImages.postsFeaturedImage.sourceUrl &&  
        <div id="blog-feature-hero-section" className="mx-auto md:max-w-6xl">
            <div id="blog-feature-hero-wrapper" className="mx-5 mt-5 text-white md:max-h-[450px] relative mx-auto">
                <div id="blog-feature-hero-info" className="absolute bottom-10 left-10 w-4/5 md:w-full">
                    <h2 className="font-serif text-2xl md:text-4xl lg:text-center py-2">{title}</h2>
                    <p className="lg:text-center hidden md:block text-md">Learn how we turned this Kingwood house into a modern home.</p>
                </div>
                <img className="object-cover w-full h-[300px] rounded bg-blend-overlay" src={postHeaderImage} alt="blog featured image" />
        
            </div>
        </div>
        }
        {/** END BLOG FEATURED IMAGE */}

        {/** BLOG CONTENT */}
        <style jsx>{`
            #blog-content p {
                padding-top: .5em;
                padding-bottom: .5em;
            }
        `}
        </style>
        <div id="blog-section" className="mx-auto md:max-w-6xl">
            <div id="blog-wrapper" className="px-5 my-8 text-white md:mx-5 rounded">
                <div id="blog-author-wrap" className="flex p-4 mb-2 border-b-[1px] border-truwinblue-50 max-w-[625px] mx-auto ">
                    <div id="blog-author" className="flex">
                        <img src={postAuthorAvatar} alt="author - Jay Chappo" className="max-w-[50px] max-h-[50px] mr-4 rounded-full" />
                        <div id="blog-author-info">
                            <p className="text-truwinblue-900 font-graphikSemibold">{postAuthor}</p>
                            <p className="text-truwinblue-900 text-sm">{date}</p>
                            <p className="text-truwinblue-900 text-sm"></p>
                        </div>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </div>
                </div>
                <div id="blog-content" className="my-10 max-w-[625px] mx-auto text-truwinblue-900 ">
                    <h3 className="text-2xl font-graphikSemibold py-2">{title}</h3>
                    <div dangerouslySetInnerHTML={{__html: content}}></div>
                
                </div>
            </div>
        </div>
        {/** END BLOG CONTENT */}  

    </>
        
    )

}

export async function getStaticPaths() {

    //fetch all posts urls for static pages
    const res = await fetch('http://localhost:8888/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
            query AllPostsPathsQuery {
                posts {
                    nodes {
                        slug 
                    }
                }
            }
        `})
    })

    //turn into JSON
    const json = await res.json();

    //drill down through JSON tree to the post data
    const posts = json.data.posts.nodes;

    //create an array of slugs for static paths
    const paths = posts.map((post) => ({
        params: { slug: post.slug }
    }))
    
    //return the paths
    return { paths, fallback: false }

}

export async function getStaticProps({params}) {
    //grab the slug
    const { slug } = params;
   
    //fetch the post data by the slug
    const res = await fetch('http://localhost:8888/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
                query SinglePostQuery($slug: String){
                    postBy(slug: $slug) {
                      content
                      date
                      slug
                      title
                      uri
                      categories {
                        nodes {
                          name
                        }
                      }
                      author {
                        node {
                          people {
                            edges {
                              node {
                                people_avatar {
                                  jobTitle
                                  truwinAvatar {
                                    
                                    sourceUrl(size: THUMBNAIL)
                                    title
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                      postsFeaturedImages {
                        postsFeaturedImage {
                          sourceUrl
                        }
                      }
                    }
                  }
            `,
            variables: { slug }
        })
    })

    //turn into JSON
    const json = await res.json()

    //return the props to be used
    return {
        props: { post: json.data.postBy }
    }
}

