import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import Vendor from '../components/vendor';
import FeaturedPost from '../components/FeaturedPost';
import { client } from './_app';
import { useQuery, gql } from '@apollo/client';
import MorePost from '../components/MorePost';

export default function Home({posts, featuredPosts, morePost}) {

const {slug, title, uri, frontPageOptions} = posts;

  return (
  <div>

    {/** HERO - FRONT PAGE */}
    <div id="hero-section" className="max-w-6xl mx-auto " data-aos="fade-up" data-aos-duration="1000">
      <div id="hero-wrapper" className="mx-5 mt-3 md:flex md:min-h-[375px]">
          <div className="bg-truwinblue-900 rounded text-center px-10 py-12 sm:py-20 md:w-5/12 md:h-auto">
              <div className="w-12 mx-auto">
                <Image
                src="/images/truwin-shield.png"
                width={136}
                height={163}
                alt="Truwin protection shield"
                />
              </div>
              
            
              <h3 className="text-white text-4xl font-cigarBold mt-3 w-64 mx-auto md:w-auto md:max-w-[275px] font-semibold">Protect your family assets</h3>

              <p className="text-white text-sm mt-3 sx:w-80 sm:w-80 md:w-auto mx-auto lg:w-[305px] font-graphik font-medium">Improve and secure your home with new windows, doors, siding and roofing from the trusted source in exteriors.</p>
          </div>
          
          
          <div className="relative mt-4 w-full  h-auto md:w-7/12 md:ml-2 md:mt-0 ">
              <div className="w-full max-h-46 md:object-cover md:h-full rounded" >

              <img className="w-full max-h-46 md:object-cover md:h-full rounded" 
              src={frontPageOptions.homeHeroImage.sourceUrl} alt="truwin builder video"/>
              </div>
              
                
              <div className="absolute bottom-0 left-0 w-16 hidden">
                  <p className="font-graphikSemibold text-white text-2xl">The Exterior
                      Experts</p>
              </div>
              
          </div>
      </div>
    </div>
    {/** END HERO */}

    {/** VENDOR LOGOS */}
    <Vendor />
    {/** VENDOR LOGOS */}

    {/** Categories */}
    <div id="post-title-section" className="lg:max-w-6xl mx-auto" >
      <div id="post-title-wrapper" className="mx-5 mt-20">
          <div className="mx-2 mb-11">
              <h2 className="text-[28px] text-center text-truwinblue-900 font-serif pb-4 sm:text-4xl">Add beauty and security to your home</h2>
              <p className="font-graphikLight text-truwinblue-900 text-center">We believe window, door, and siding companies can do better for customers. </p>
          </div>
          <div id="post-title-wrapper-content" className="sm:flex flex-wrap" data-aos="fade-up" data-aos-duration="1000">
            
              <div className="relative my-4 sm:w-1/2 sm:pr-5 md:w-1/4 md:pr-5 group">
                  <h3 className="absolute text-xl t-0 left-0 text-white font-graphikSemibold pl-5 pt-5 md:group-hover:-translate-y-6 md:group-hover:duration-500 md:group-hover:ease-in-out z-10">
                  <Link href="/product/windows">
                    <a>Windows</a>
                  </Link>
                  </h3>
                  <img className="w-full max-h-44 object-cover rounded md:max-h-[370px] md:group-hover:-translate-y-6 md:group-hover:duration-500 md:group-hover:ease-in-out z-0" src="/images/tr-windows.png" alt="" />
              </div>
              
              <div className="relative my-4 sm:w-1/2 md:w-1/4 md:pr-5 md:h-auto group">
                  <h3 className="absolute text-xl t-0 left-0 text-white font-graphikSemibold pl-5 pt-5 group-hover:-translate-y-6 group-hover:duration-500 group-hover:ease-in-out z-10">
                  <Link href="/product/doors">
                    <a>Doors</a>
                  </Link>
                  </h3>
                  <img className="w-full max-h-44 object-cover rounded md:max-h-[370px] group-hover:-translate-y-6 group-hover:duration-500 group-hover:ease-in-out z-0" src="/images/tr-doors.png" alt="" />
              </div>
              <div className="relative my-4 sm:w-1/2 sm:pr-5 md:w-1/4 md:pr-5 md:h-auto group" >
                  <h3 className="absolute text-xl t-0 left-0 text-white font-graphikSemibold pl-5 pt-5 group-hover:-translate-y-6 group-hover:duration-500 group-hover:ease-in-out z-10">Siding</h3>
                  <img className="w-full max-h-44 object-cover rounded md:max-h-[370px] group-hover:-translate-y-6 group-hover:duration-500 group-hover:ease-in-out z-0" src="/images/tr-siding.png" alt="" />
              </div>
              <div className="relative my-4 sm:w-1/2 md:w-1/4 md:pr-5 md:h-auto group">
                  <h3 className="absolute z-10 text-xl t-0 left-0 text-white font-graphikSemibold pl-5 pt-5 group-hover:-translate-y-6 group-hover:duration-500 group-hover:ease-in-out">Roofs</h3>
                  <img className="w-full max-h-44 object-cover rounded md:max-h-[370px]  group-hover:-translate-y-6 group-hover:duration-500 group-hover:ease-in-out z-0" src="/images/tr-roofs.png" alt="" />
              </div>
            
          </div>
      </div>
    </div>
    {/** Categories */}

    {/** Get Started Form */}
    <div id="form-section" className="mx-auto md:max-w-6xl">
      <div id="form-getstarted-wrapper" className="px-5 py-10 mt-20 bg-truwinblue-900 text-white md:flex md:flex-wrap md:mx-5 rounded">

        <h2 className="font-serif text-2xl md:hidden">Get started on your free exteriors estimate.</h2>

        <div id="form-getstarted-info" className="max-w-[50%] hidden md:block pl-5" >
              <h2 className="font-serif text-2xl md:pr-4 md:w-full lg:text-3xl">Get started on your free exteriors estimate.</h2>
              <div className="flex mt-8 lg:mt-20">
                  <div className="align-middle">
                      <img src="/images/truwin-shield.png" alt="" className="w-8 md:w-auto" />
                  </div>
                  <div className="px-8">
                      <p className="text-sm lg:text-lg"> <strong>Schedule a free in-house consultation.</strong>We’ll walk through window offerings and help you pick a window that fits your home and budget.</p>
                  </div>
              </div>
        </div>
          
        <div id="form-getstarted" >
            <form action="/api/get-started-form.js" className="grid gap-2 grid-cols-2 my-10 md:my-0">
                <input name="yname" placeholder="Your Name" type="text" className="rounded col-span-2 p-2 text-truwinblue-500 text-sm placeholder:text-truwinblue-300" />
                <input name="email" placeholder="Email Address" type="text" className="rounded p-2 text-truwinblue-500 text-sm placeholder:text-truwinblue-300" />
                <input name="projecttype" placeholder="Project Type" type="text" className="rounded p-2 text-truwinblue-500 text-sm placeholder:text-truwinblue-300" />
                <input name="phone" placeholder="Phone Number" type="text" className="rounded p-2 text-truwinblue-500 text-sm placeholder:text-truwinblue-300" />
                <input name="zip" placeholder="Zip Code" type="text" className="rounded p-2 text-truwinblue-500 text-sm placeholder:text-truwinblue-300" />
                <button type="submit" className="bg-truwinblue-300 px-8 py-5 col-span-2 rounded">Request Free Consultation</button>
            </form>
        </div>

          <div id="form-getstarted-info" className="flex sx:max-w-[435px] sx:mx-auto md:hidden" >
              <div className="w-1/6">
                  <img src="/images/truwin-shield.png" alt="" className="w-10 align-middle py-3" />
              </div>
              <div className="w-5/6">
                  <p className="text-sm"> <strong>Schedule a free in-house consultation.</strong>We’ll walk through window offerings and help you pick a window that fits your home and budget.</p>
              </div>
        </div>

      </div>
    </div>
    {/** END Get Started Form */}

    {/** FEATURED POST    */}
    <FeaturedPost posts={featuredPosts} />
    {/** END FEATURED  */}

    {/**  WHY TRUWIN   */}
    <div id="onethird-info-section" className="lg:max-w-6xl mx-auto hidden md:block my-28 ">
      <div id="onethird-info-wrapper" className="mx-5 mt-10">
          <div className="text-center" >
              <p className="text-sm text-truwinblue-900">The Exteriors Experts™</p>
              <h3 className="font-serif text-5xl py-2 text-truwinblue-900">Why trust Truwin Exteriors?</h3>
          </div>
          <div className="1/3-column-wrap md:flex mt-14">
              <div className="mr-8">
                  <img src="/images/truwin-prices.png" className="w-auto pb-2" alt="Transparent Prices icon" />
                  <p className="text-2xl font-serif text-truwinblue-900 py-2">Transparent Prices</p>
                  <p className="text-truwinblue-900">At Truwin, we don’t hide our pricing at any point in the process. We want to help you improve your home and will work with budgets of all type to make that possible. </p>
              </div>
              <div className="mx-8">
                  <img src="/images/truwin-vetted.png" className="w-auto pb-2 " alt="Vetted Professionals icon" />
                  <p className="text-2xl font-serif text-truwinblue-900 py-2">Vetted Professionals</p>
                  <p className="text-truwinblue-900">Having strangers working on your home can be odd. But worry not, we’ve vetted every one of our professionasl on staff with thorough background checks and interviews.</p>
              </div>
              <div className="ml-8">
                  <img src="/images/truwin-warranties.png" className="w-auto pb-2 " alt="Amazing Warranties icon" />
                  <p className="text-2xl font-serif text-truwinblue-900 py-2">Amazing Warranties</p>
                  <p className="text-truwinblue-900">We don’t just help you select the right product and install. We back our work and the products we sell you with industry-leading warranties. That’s just how we do business.</p>
              </div>
          </div>
      </div>
    </div>
    {/**  WHY TRUWIN   */}


    {/**  MORE POSTS   */}
    <MorePost  posts={morePost}/>
    {/**  END MORE POSTS   */}

  </div>
    
  )
}

/**
 * Fetch Data: Images, Feature Posts
 * @returns props
 */ 
export async function getStaticProps(){
  //const dataLayer = process.env.HOST_DATA_LAYER;

  //1.2 Define a query: images
  const front_page_query = await client.query({
  query: gql`
      query frontPageQuery {
        page(id: "home", idType: URI) {
          slug
          title
          uri
          frontPageOptions {
            homeHeroImage {
              sourceUrl
            }
          }
        }
      }
      `,
  });

  //1.2 Define a query: posts
  const featured_posts_query = await client.query({
    query: gql`
        query featuredPostQuery {
          posts(first: 2) {
            nodes {
              title
              uri
              slug
              excerpt
              id
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
            }
          }
        }
        `,
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

    

  //2. return props
  return {
    props: {
        posts: front_page_query.data.page,
        featuredPosts: featured_posts_query.data.posts.nodes,
        morePost: more_posts_query.data.posts.nodes

    },
  }
}




