
import { client } from './_app';
import { useQuery, gql } from '@apollo/client';
import MorePost from "../components/MorePost";
import MoreServices from '../components/MoreServices';

function Company({morePost}) {
  return (
  <>
        
    <div id="hero-author-section" className="max-w-6xl mx-auto ">
            <div id="hero-author-wrapper" className="mx-5 mt-3 md:flex md:min-h-[375px] md:max-h-[400px]">
                <div className="bg-truwinblue-900 rounded text-left px-10 py-12 md:w-5/12 md:h-auto">
                    <p className="text-sm text-truwingray-primary mb-3">Title Here</p>
                    <h3 className="text-white text-3xl sm:text-4xl font-cigarBold mt-3">We’re changing the  experience of buying windows, doors, and siding.</h3>
                    <p className="text-white text-sm mt-3 font-graphik font-medium">We’re built to serve you. We’re a different kind of company. </p>
                </div>
                
                
                <div className="relative mt-4 w-full  h-auto md:w-7/12 md:ml-2 md:mt-0 ">
                    <img className="w-full max-h-46 md:object-cover md:h-full rounded" src="/images/truwin-jay-chapp.jpg" alt="truwin president" />
                    
    
                      
                    <div className="absolute bottom-0 left-0 w-16 hidden">
                        <p className="font-graphikSemibold text-white text-2xl">The Exterior
                            Experts</p>
                    </div>
                   
                </div>
            </div>
    </div>
       

    <div id="onethird-info-section" className="lg:max-w-6xl mx-auto hidden md:block my-28 ">
        <div id="onethird-info-wrapper" className="mx-5 mt-10">
            <div className="text-center" >
                <p className="text-sm text-truwinblue-900">We’re built to serve you.</p>
                <h3 className="font-serif text-5xl py-2 text-truwinblue-900">We’re a different kind of company.</h3>
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
   
    <div id="card-onethird-session" className="lg:max-w-6xl mx-auto">
        <div id="card-onethrid-wrapper" className="mx-5 mt-10 md:flex md:min-h-[390px]">
            <div className="md:w-1/2">
                <img className="w-full rounded-t md:rounded-tl md:rounded-bl md:rounded-tr-none md:h-full object-cover" src="/images/why-truwin-intro 1.png" alt="" />
            </div>
            <div className="px-5 py-6 text-truwinblue-900 rounded-b md:p-10 md:w-1/2 md:rounded-br md:rounded-tr md:rounded-bl-none md:rounded-tl-none lg:px-7">
                <p className="py-2 font-graphik text-truwinblue-900">Quality and Cost Savings</p>
                <h3 className="font-serif text-4xl py-2">We get it—a lot of people dread working with window, door, and siding companies.</h3>
                <p className="py-2 text-lg font-graphik">So we strive to upend those expectations throughout each step of the job.</p>

                    <p className="py-2 font-graphik">Usually, a salesperson shows up at your door, spends hours in your house talking your ears off, and won’t leave until you hand over your contact information. They’re pushy, overwhelming, and, frankly, annoying. Opaque pricing and sub-par workmanship are more headaches that plague this industry.</p>
               
           
            </div>
        </div>
    </div>
   
   {/** AUTHOR */}
    <div id="card-onethird-session" className="lg:max-w-6xl mx-auto">
        <div id="card-onethrid-wrapper" className=" mx-5 sm:mx-auto mt-10 md:min-h-[390px] max-w-[600px] md:hidden">
            <div className="mt-5 sx:flex sx:min-h-[300px]">
                
                    <img src="/images/Jay Chapp - President.png" className="w-full max-h-[600px] sx:max-h-[300px]" alt="" />
                
                <div className="bg-softblue-primary p-4 mt-2 sx:mt-0">
                    <p className="font-graphikSemibold">Jay Chappell</p>
                    <p className="font-graphikLight">President</p>

                    <p className="mt-4 sx:text-sm">Jay Chappell, our founder and president, believes we’re selling an experience, not just windows. And he believes so strongly in being a transparent company that he likes customers to ask him anything, day or night.</p>
                </div>
            </div>
            
            <div className="mt-5 sx:flex sx:min-h-[300px]">
                
                    <img src="/images/Tom Harrin.png" className="w-full max-h-[600px] sx:w-auto sx:max-h-[300px]"  alt="" />
                
                <div className="bg-softblue-primary p-4 mt-2 sx:mt-0">
                    <p className="font-graphikSemibold">Tom Harrigan</p>
                    <p className="font-graphikLight">Senior Consultant</p>

                    <p className="mt-4 sx:text-sm">Tom, our resident expert, believes that the best thing to ask a customer is what is important to them. He helps lead the team with his decades of window, door and siding experience.</p>
                </div>
                
            </div>

        </div>
    </div>
    {/** END AUTHOR */}

    {/** SERVICE VALUE */}
    <style jsx> {`
        #service-value-wrapper{
            color: rgb(43 80 175)
        }
    `}
        
    </style>
    <div id="service-value-section" className="my-16 bg-softblue-primary">
        <div id="service-value-wrapper" className="mx-auto py-16 px-10 lg:max-w-6xl">

            <div className="grid gap-4 sx:grid-cols-2 md:grid-cols-3 md:grid-rows-3" >
                <div className="md:row-span-3 sx:col-span-2 md:col-span-1">
                    <p className="text-4xl font-cigar sx:max-w-[350px] md:w-auto pb-8">Our service is consistent and based on core values.</p>
                </div>
                <div>
                    <p className="font-semibold">Be Transparent</p>
                    <p className="py-4">We’ll openly identify the nature, location, and ownership of our business, and clearly disclose all policies, guarantees, and procedures that can impact your decision to buy.</p>
                </div>
                <div>
                    <p className="font-semibold">Be Transparent</p>
                    <p className="py-4">We’ll openly identify the nature, location, and ownership of our business, and clearly disclose all policies, guarantees, and procedures that can impact your decision to buy.</p>
                </div>
                <div>
                    <p className="font-semibold">Be Transparent</p>
                    <p className="py-4">We’ll openly identify the nature, location, and ownership of our business, and clearly disclose all policies, guarantees, and procedures that can impact your decision to buy.</p>
                </div>
                <div>
                    <p className="font-semibold">Be Transparent</p>
                    <p className="py-4">We’ll openly identify the nature, location, and ownership of our business, and clearly disclose all policies, guarantees, and procedures that can impact your decision to buy.</p>
                </div>
                <div>
                    <p className="font-semibold">Be Transparent</p>
                    <p className="py-4">We’ll openly identify the nature, location, and ownership of our business, and clearly disclose all policies, guarantees, and procedures that can impact your decision to buy.</p>
                </div>
                <div>
                    <p className="font-semibold">Be Transparent</p>
                    <p className="py-4">We’ll openly identify the nature, location, and ownership of our business, and clearly disclose all policies, guarantees, and procedures that can impact your decision to buy.</p>
                </div>
            </div>


        </div>
    </div>
    {/** END OF SERVICE VALUE */}

    {/**  MORE  WAYS  */}
    <MoreServices />
    {/**  END MORE WAYS   */}

    {/**  MORE POSTS   */}
    <MorePost  posts={morePost}/>
    {/**  END MORE POSTS   */}
    
    {/** END END */}
    </>
    
  )
}

export default Company


/**
 * Fetch Data: Images, Feature Posts
 * @returns props
 */ 
 export async function getStaticProps(){
    //const dataLayer = process.env.HOST_DATA_LAYER;
  
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
          morePost: more_posts_query.data.posts.nodes
      },
    }
  }