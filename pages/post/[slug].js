import Image from 'next/image'
import { client } from '../_app';
import { useQuery, gql } from '@apollo/client';
import Date from '../../components/date';
import Link from 'next/link';

export default function Post({post}){
    //deconstruct the posts contents
    
  
    const {title, date, slug, content } = post;
    const postHeaderImage = post.featuredImage.node?.sourceUrl;
    const postAuthor = post.rel_people_con_post.people?.[0].title; 
    const postAuthorAvatar = post.rel_people_con_post.people?.[0].people_avatar.truwinAvatar.sourceUrl
    const postAuthorSocial = post.rel_people_con_post.people?.[0].people_avatar.socialMediaLinks;
    console.log(post);
    console.log(postAuthorSocial);
 
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

        {/** BLOG CONTENT **/}
        <style jsx>{`
                    #blog-content p{
                        padding-top: 8px !important;
                        padding-bottom: 8px !important;
                        line-height: 24px !important; 
                    }  
                `}
            </style>
        <div id="blog-section" className="mx-auto md:max-w-6xl">
            <div id="blog-wrapper" className="px-5 my-8 text-white md:mx-5 rounded">
                <div id="blog-author-wrap" className="flex justify-between p-4 mb-2 border-b-[1px] border-truwinblue-50 max-w-[625px] mx-auto ">
                    <div id="blog-author" className="flex">

                         {/** AUTHOR IMAGE **/}
                        {postAuthorAvatar && <img src={postAuthorAvatar} alt="author - Jay Chappo" className="max-w-[50px] max-h-[50px] mr-4 rounded-full" />}

                        {/** AUTHOR INFO **/}
                        <div id="blog-author-info">
                            <p className="text-truwinblue-900 font-graphikSemibold">{postAuthor}</p>
                            <div className="text-truwinblue-900 text-sm">
                                <Date dateString={date} />
                            </div>
                            
                            <p className="text-truwinblue-900 text-sm"></p>
                        </div>
                    </div>

                    {postAuthorSocial && 
                    <div id="blog-social" className="flex">

                        {postAuthorSocial.map((social,index) => {
                            
                            
                            
                           if(social.personSocialLabel === "Facebook"){

                                return(<Link key={index} href={social.personSocialLink}><a target="__blank">
                                <img className="px-6 py-3 border-[1px] border-[#eaeaea] w-auto h-[45px]" src="/images/facebook.jpg" alt="Facebook" /></a>
                                </Link>)
                           }

                           if(social.personSocialLabel === "Twitter"){

                            return(<Link key={index} href={social.personSocialLink} ><a target="__blank">
                            <img className="px-6 py-3 border-[1px] border-[#eaeaea] w-auto h-[45px]" src="/images/twitter.jpg" alt="Facebook" /></a>
                            </Link>)
                       }
                          
                             

                        })}
                            
                    </div>
                    }           
                </div>
                <div id="blog-container" className="my-10 max-w-[625px] mx-auto text-truwinblue-900 ">
                    <h3 className="text-2xl font-graphikSemibold py-2">{title}</h3>
                    <div id="blog-content" dangerouslySetInnerHTML={
                        {__html: "<style>#blog-content h2, #blog-content p{padding-top: 8px !important;padding-bottom: 8px !important;line-height: 24px !important;} #blog-content a{text-decoration:underline;} #blog-content h2{font-size:22px;}</style>" + content }
                        
                    } 
                        style={ {paddingTop: '8px'} }>
                   
                    </div>

                </div>
               
            </div>
        </div>
        {/** END BLOG CONTENT */}  
       
    </>
        
    )

}


/*********************************************************
 * Get Static paths
 * @returns 
 *******************************************************/
export async function getStaticPaths() {

    //1.2 Define a query: posts
    const get_posts_path_query = await client.query({
        query: gql`
                query AllPostsPathsQuery {
                    posts(first: 100) {
                        nodes {
                            slug 
                        }
                    }
                }
            `,
    });


    //2. create array of paths
    const paths = get_posts_path_query.data.posts.nodes.map((post) => ({
        params: { slug: post.slug }
    }))

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
    //grab the slug
    const { slug } = params;
   
     //1.2 Define a query: posts
    const get_post_slug_query = await client.query({
        query: gql`
            query SinglePostQuery($slug: String){
                postBy(slug: $slug) {
                    date
                    slug
                    title
                    uri
                    content
                    featuredImage {
                      node {
                        sourceUrl
                        mediaDetails {
                          height
                          width
                        }
                      }
                    }
                    categories {
                      nodes {
                        name
                      }
                    }
                    rel_people_con_post {
                      people {
                        ... on Person {
                          id
                          title
                          people_avatar {
                            jobTitle
                            truwinAvatar {
                              sourceUrl
                              mediaDetails {
                                height
                                width
                              }
                            }
                            socialMediaLinks {
                                personSocialLabel
                                personSocialLink
                            }
                          }
                        }
                      }
                    }
                }
            }
        `,
        variables: { slug }
    });

   

    return {
        props: { post: get_post_slug_query.data.postBy },
        revalidate: 10
    }

}

