
import { client } from './_app';
import { useQuery, gql } from '@apollo/client';
import MorePost from "../components/MorePost";
import MoreServices from '../components/MoreServices';
import HeroVideo from '../components/HeroVideo';
import Image from 'next/image';
import Head from 'next/head';

function Company({morePost, companyPost}) {

    console.log(companyPost);

    const heroSection = companyPost.companyHeroSection;
    const threeColumn = companyPost.companyThreeColumnSection;
    const twoColumn = companyPost.companyTwoColumnSection;
    const sixColumn = companyPost.companySixArticleSection;

  return (
  <>
     <Head>
        <title>Truwin | About Us | Company</title>
        <meta name="description" content="Why choose Truwin? We're Houston's most transparent Window, Doors, and Siding Company. We pride ourselves in our transparency across the board. 832-777-3681"></meta>
    </Head>      
    <div id="hero-company-section" className="max-w-7xl mx-auto ">
            <div id="hero-company-wrapper" className="mx-5 mt-3 md:flex md:min-h-[375px] md:max-h-[420px]">
                <div className="bg-truwinblue-900 rounded text-left px-10 py-8 md:w-5/12 md:h-auto">
                
                    <p className="text-sm text-truwingray-primary mb-3">
                    <span className='pr-2'>
                        <Image src="/images/truwin-breadcrumb-icon.png" width={14} height={14} />
                    </span>
                     / Company</p>
                    <h3 className="text-white text-3xl sm:text-4xl font-[Cigars-SemiBold] mt-6">{heroSection.companyHeroSectionTitle}</h3>
                    <p className="text-white text-sm mt-3 font-graphik font-medium">{heroSection.companyHeroSectionDescription}</p>
                </div>
                
                
                {/**  */}
                <HeroVideo url="https://www.youtube.com/watch?v=eeL_Yi0n3Kw&mute=0&rel=0" cover="/images/truwin-jay-chapp.jpg"/>
                {/**  */}
            </div>
    </div>
       

    <div id="onethird-info-section" className="lg:max-w-7xl mx-auto md:block my-28 ">
        <div id="onethird-info-wrapper" className="mx-5 mt-10">
            <div className="text-center" >
                <p className="text-lg text-truwinblue-300 pb-4">{threeColumn.companyThreeColumnSectionHeadline}
</p>
                <h3 className="font-[Cigars-SemiBold] text-5xl py-2 text-truwinblue-900">{threeColumn.companyThreeColumnSectionTitle}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 mt-14 md:gap-4 gap-6">
              
              <div className="mx-8">
                  <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.30058V52.6996C1.01862 52.8587 1.16693 53.0002 1.35226 53.0002H52.6848C52.8517 53.0002 53 52.8589 53 52.6996V1.30058C52.9814 1.14152 52.8333 1 52.6477 1H1.31502C1.14809 1 1 1.14152 1 1.30058ZM23.4127 46.7234H7.9888C7.82187 46.7234 7.67356 46.5821 7.67356 46.4228V22.4649C7.67356 22.3059 7.82187 22.1644 7.9888 22.1644H23.4127C23.5794 22.1644 23.728 22.3057 23.728 22.4649V46.4228C23.728 46.5819 23.5796 46.7234 23.4127 46.7234ZM46.1034 46.7234H30.6241C30.4572 46.7234 30.3088 46.5821 30.3088 46.4228V22.4649C30.3088 22.3059 30.4572 22.1644 30.6241 22.1644H46.085C46.2517 22.1644 46.4003 22.3057 46.4003 22.4649V46.4228C46.4003 46.5819 46.252 46.7234 46.085 46.7234H46.1034ZM46.2888 15.87H8.04444C7.87751 15.87 7.7292 15.7285 7.7292 15.5694V7.59516C7.7292 7.4361 7.87751 7.29458 8.04444 7.29458H46.2704C46.4373 7.29458 46.5856 7.4361 46.5856 7.59516V15.5694C46.5856 15.7285 46.4373 15.87 46.2704 15.87H46.2888Z" stroke="#2B50AF" stroke-width="1.47953"/>
                  </svg>
                  <p className="text-2xl font-[Cigars-Semibold] text-truwinblue-900 py-2">
                    {threeColumn.companyThreeColumnSectionArticles[0].companyThreeColumnArticlesTitle}
                  </p>
                  <p className="text-truwinblue-900 text-[15px]">{threeColumn.companyThreeColumnSectionArticles[0].companyThreeColumnArticlesDescription}</p>
              </div>
              <div className="mx-8">
                  <svg width="46" height="55" viewBox="0 0 46 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="23.0216" cy="20.915" r="19.915" stroke="#2B50AF" stroke-width="1.47953"/>
                    <circle cx="23.0214" cy="20.9143" r="14.3831" stroke="#2B50AF" stroke-width="1.47953"/>
                    <path d="M26.3406 40.8297L32.9789 52.4468L36.2981 45.2553L44.0428 45.8085L37.9577 34.1914" stroke="#2B50AF" stroke-width="1.47953"/>
                    <path d="M19.7023 41.0309L13.0639 53L9.74477 45.5906L2.00004 46.1605L8.08518 34.1914" stroke="#2B50AF" stroke-width="1.47953"/>
                    <path d="M15.6603 14.3595V28.5763C15.6655 28.6203 15.7065 28.6594 15.7578 28.6594H29.9561C30.0023 28.6594 30.0433 28.6203 30.0433 28.5763V14.3595C30.0382 14.3155 29.9972 14.2764 29.9459 14.2764H15.7475C15.7013 14.2764 15.6603 14.3155 15.6603 14.3595ZM21.8596 26.9233H17.5934C17.5472 26.9233 17.5062 26.8842 17.5062 26.8401V20.2135C17.5062 20.1695 17.5472 20.1304 17.5934 20.1304H21.8596C21.9057 20.1304 21.9468 20.1694 21.9468 20.2135V26.8401C21.9468 26.8841 21.9058 26.9233 21.8596 26.9233ZM28.1358 26.9233H23.8542C23.8081 26.9233 23.7671 26.8842 23.7671 26.8401V20.2135C23.7671 20.1695 23.8081 20.1304 23.8542 20.1304H28.1307C28.1768 20.1304 28.2179 20.1694 28.2179 20.2135V26.8401C28.2179 26.8841 28.1769 26.9233 28.1307 26.9233H28.1358ZM28.187 18.3894H17.6088C17.5626 18.3894 17.5216 18.3502 17.5216 18.3062V16.1006C17.5216 16.0566 17.5626 16.0174 17.6088 16.0174H28.1819C28.2281 16.0174 28.2691 16.0566 28.2691 16.1006V18.3062C28.2691 18.3502 28.2281 18.3894 28.1819 18.3894H28.187Z" fill="#2B50AF"/>
                  </svg>

                  <p className="text-2xl font-[Cigars-Semibold] text-truwinblue-900 py-2">
                    {threeColumn.companyThreeColumnSectionArticles[1].companyThreeColumnArticlesTitle}
                  </p>
                  <p className="text-truwinblue-900 text-[15px]">{threeColumn.companyThreeColumnSectionArticles[1].companyThreeColumnArticlesDescription}</p>
              </div>
              <div className="mx-8">
                  <svg width="46" height="56" viewBox="0 0 46 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.8305 33.1058L17.3053 32.5847L16.7863 33.1078L17.3074 33.6289L17.8305 33.1058ZM17.8305 33.1057L18.3557 33.6267L18.8747 33.1037L18.3536 32.5826L17.8305 33.1057ZM21.1055 36.3808L20.5824 36.9039L21.1055 37.427L21.6286 36.9039L21.1055 36.3808ZM21.1055 36.3807L21.6286 35.8576L21.1055 35.3345L20.5825 35.8576L21.1055 36.3807ZM21.106 36.3811L20.5829 36.9042L21.106 37.4273L21.6291 36.9042L21.106 36.3811ZM24.381 33.1061L24.9041 33.6292L25.4272 33.1061L24.9041 32.583L24.381 33.1061ZM24.3806 33.1057L23.8575 32.5826L23.3344 33.1057L23.8575 33.6288L24.3806 33.1057ZM35.8431 21.6432L36.3662 22.1663L36.8893 21.6432L36.3662 21.1201L35.8431 21.6432ZM32.5681 18.3682L33.0912 17.8451L32.5681 17.322L32.045 17.8451L32.5681 18.3682ZM21.1056 29.8307L20.5825 30.3538L21.1056 30.8769L21.6286 30.3538L21.1056 29.8307ZM17.0122 25.7373L17.5353 25.2142L17.0122 24.6911L16.4891 25.2142L17.0122 25.7373ZM13.7372 29.0124L13.2141 28.4893L12.691 29.0124L13.2141 29.5354L13.7372 29.0124ZM18.3556 33.6268L18.3557 33.6267L17.3054 32.5847L17.3053 32.5847L18.3556 33.6268ZM21.6286 35.8577L18.3536 32.5827L17.3074 33.6289L20.5824 36.9039L21.6286 35.8577ZM20.5825 35.8576L20.5824 35.8577L21.6286 36.9039L21.6286 36.9038L20.5825 35.8576ZM21.6291 35.8581L21.6286 35.8576L20.5825 36.9038L20.5829 36.9042L21.6291 35.8581ZM23.8579 32.583L20.5829 35.8581L21.6291 36.9042L24.9041 33.6292L23.8579 32.583ZM23.8575 33.6288L23.8579 33.6292L24.9041 32.583L24.9037 32.5826L23.8575 33.6288ZM35.32 21.1201L23.8575 32.5826L24.9037 33.6288L36.3662 22.1663L35.32 21.1201ZM32.045 18.8913L35.32 22.1663L36.3662 21.1201L33.0912 17.8451L32.045 18.8913ZM21.6286 30.3538L33.0912 18.8913L32.045 17.8451L20.5825 29.3076L21.6286 30.3538ZM16.4891 26.2604L20.5825 30.3538L21.6286 29.3076L17.5353 25.2142L16.4891 26.2604ZM14.2603 29.5354L17.5353 26.2604L16.4891 25.2142L13.2141 28.4893L14.2603 29.5354ZM18.3536 32.5826L14.2603 28.4893L13.2141 29.5354L17.3074 33.6288L18.3536 32.5826Z" fill="#2B50AF"/>
                    <path d="M1 12.5789L0.655457 11.9243L0.260234 12.1323V12.5789H1ZM23 1L23.3445 0.345368L23 0.164029L22.6555 0.345368L23 1ZM12.2711 46.9223L11.8534 47.5329L12.2711 46.9223ZM23 54.2632L22.5823 54.8737L23 55.1595L23.4177 54.8737L23 54.2632ZM33.7289 46.9223L34.1466 47.5329L33.7289 46.9223ZM45 12.5789H45.7398V12.1323L45.3445 11.9243L45 12.5789ZM1.34454 13.2336L23.3445 1.65463L22.6555 0.345368L0.655457 11.9243L1.34454 13.2336ZM1.73977 25.5537V12.5789H0.260234V25.5537H1.73977ZM12.6889 46.3118C5.83684 41.6236 1.73977 33.856 1.73977 25.5537H0.260234C0.260234 34.3444 4.59831 42.5689 11.8534 47.5329L12.6889 46.3118ZM23.4177 53.6526L12.6889 46.3118L11.8534 47.5329L22.5823 54.8737L23.4177 53.6526ZM23.4177 54.8737L34.1466 47.5329L33.3111 46.3118L22.5823 53.6526L23.4177 54.8737ZM34.1466 47.5329C41.4017 42.5689 45.7398 34.3444 45.7398 25.5537H44.2602C44.2602 33.856 40.1632 41.6236 33.3111 46.3118L34.1466 47.5329ZM45.7398 25.5537V12.5789H44.2602V25.5537H45.7398ZM45.3445 11.9243L23.3445 0.345368L22.6555 1.65463L44.6555 13.2336L45.3445 11.9243Z" fill="#2B50AF"/>
                    <path d="M4.82617 15.1971L4.48163 14.5424L4.08641 14.7504V15.1971H4.82617ZM23.0001 5.63184L23.3446 4.9772L23.0001 4.79586L22.6555 4.9772L23.0001 5.63184ZM15.1312 44.2479L14.7135 44.8584L15.1312 44.2479ZM23.0001 49.6318L22.5824 50.2424L23.0001 50.5282L23.4178 50.2424L23.0001 49.6318ZM30.869 44.2479L31.2867 44.8584L30.869 44.2479ZM41.174 15.1971H41.9138V14.7504L41.5185 14.5424L41.174 15.1971ZM5.17072 15.8517L23.3446 6.28647L22.6555 4.9772L4.48163 14.5424L5.17072 15.8517ZM5.56594 24.7108V15.1971H4.08641V24.7108H5.56594ZM15.5489 43.6373C9.3015 39.3628 5.56594 32.2806 5.56594 24.7108H4.08641C4.08641 32.769 8.06297 40.3081 14.7135 44.8584L15.5489 43.6373ZM23.4178 49.0213L15.5489 43.6373L14.7135 44.8584L22.5824 50.2424L23.4178 49.0213ZM23.4178 50.2424L31.2867 44.8584L30.4512 43.6373L22.5824 49.0213L23.4178 50.2424ZM31.2867 44.8584C37.9372 40.3081 41.9138 32.769 41.9138 24.7108H40.4342C40.4342 32.2806 36.6987 39.3628 30.4512 43.6373L31.2867 44.8584ZM41.9138 24.7108V15.1971H40.4342V24.7108H41.9138ZM41.5185 14.5424L23.3446 4.9772L22.6555 6.28647L40.8295 15.8517L41.5185 14.5424Z" fill="#2B50AF"/>
                  </svg>

                  <p className="text-2xl font-[Cigars-Semibold] text-truwinblue-900 py-2">
                    {threeColumn.companyThreeColumnSectionArticles[2].companyThreeColumnArticlesTitle}
                  </p>
                  <p className="text-truwinblue-900 text-[15px]">{threeColumn.companyThreeColumnSectionArticles[2].companyThreeColumnArticlesDescription}</p>
              </div>

          </div>
        </div>
    </div>
   
    <div id="card-onethird-session" className="lg:max-w-7xl mx-auto">
        <div id="card-onethrid-wrapper" className="mx-5 mt-10 md:flex md:min-h-[390px]">
            <div className="md:w-1/2">
                <img className="w-full rounded-t md:rounded-tl md:rounded-bl md:rounded-tr-none md:h-full object-cover" src={twoColumn.companyTwoColumnSectionImage.sourceUrl} alt="" />
            </div>
            <div className="px-5 py-6 text-truwinblue-900 rounded-b md:p-10 md:w-1/2 md:rounded-br md:rounded-tr md:rounded-bl-none md:rounded-tl-none lg:px-7">
                <p className="py-2 font-graphik text-truwinblue-900">Quality and Cost Savings</p>
                <h3 className="font-[Cigars-SemiBold] text-4xl py-2">{twoColumn.companyTwoColumnSectionHeadline}</h3>
                <p className="py-2 text-lg font-graphik">{twoColumn.companyTwoColumnSectionTitle}</p>
                <p className="py-2 font-graphik">{twoColumn.companyTwoColumnSectionDescription}</p>
               
           
            </div>
        </div>
    </div>
   
   {/** AUTHOR */}
    <div id="card-onethird-session" className="lg:max-w-7xl mx-auto">
        <div id="card-onethrid-wrapper" className="mx-10 my-20 text-truwinblue-900">

    <p className="text-2xl font-graphikSemibold">True, transparent leadership.</p>

    <div className="grid sm:grid-cols-2 gap-8">
      {/* Person 1 */}
      <div className="my-10">
          
          {/* Author section */}
          <div className="my-5 flex">
              
              <div className="w-20 h-20 flex">
                <img src="/images/Jay Chapp - President.png" className="w-full h-auto object-cover" alt="" />
              </div>
              
              <div className="mx-4">
                  <p className="font-graphikSemibold">Jay Chappell</p>
                  <p className="font-graphikLight">President</p>
              </div>

          </div>

          {/* Author description */}
            <div className="">
                <p className="">Jay Chappell, our founder and president, believes we’re selling an experience, not just windows. And he believes so strongly in being a transparent company that he likes customers to ask him anything, day or night.</p>
            </div>

      </div>

      {/* Person 2 */}
      <div className="my-10">
          
          {/* Author section */}
          <div className="my-5 flex">
              
              <div className="w-20 h-20 flex">
                <img src="/images/Tom Harrin.png" className="w-full h-auto object-cover" alt="" />
              </div>
              
              <div className="mx-4">
                    <p className="font-graphikSemibold">Tom Harrigan</p>
                    <p className="font-graphikLight">Senior Consultant</p>
              </div>

          </div>

          {/* Author description */}
            <div className="">
                <p className="">Tom, our resident expert, believes that the best thing to ask a customer is what is important to them. He helps lead the team with his decades of window, door and siding experience.</p>
            </div>

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
                    <p className="text-4xl font-[Cigars-SemiBold] sx:max-w-[350px] md:w-auto pb-8">
                        {sixColumn.companySixArticleSectionTitle}
                    </p>
                </div>

                {sixColumn.companySixArticleSectionContents?.map((post, index) => (
                <div key={index}>
                    <p className="font-semibold text-lg">{post.sixArticleSectionContentsTitle}</p>
                    <p className="py-4">{post.sixArticleSectionContentsDescription}</p>
                </div>
                ))}
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
  
      //2 company page info
      const company_page_query = await client.query({
        query: gql `
        query companyPageQuery {
            pageBy(uri: "company") {
              id
              page_companypage {
                companyHeroSection {
                  companyHeroSectionTitle
                  companyHeroSectionDescription
                }
                companyThreeColumnSection {
                  companyThreeColumnSectionHeadline
                  companyThreeColumnSectionTitle
                  companyThreeColumnSectionArticles {
                    companyThreeColumnArticlesImage {
                      sourceUrl
                    }
                    companyThreeColumnArticlesTitle
                    companyThreeColumnArticlesDescription
                  }
                }
                companyTwoColumnSection {
                  companyTwoColumnSectionHeadline
                  companyTwoColumnSectionTitle
                  companyTwoColumnSectionDescription
                  companyTwoColumnSectionImage {
                    sourceUrl
                  }
                }
                companySixArticleSection {
                  companySixArticleSectionTitle
                  companySixArticleSectionContents {
                    sixArticleSectionContentsTitle
                    sixArticleSectionContentsDescription
                  }
                }
              }
            }
          }
        `
      })
  
    //2. return props
    return {
      props: {
          morePost: more_posts_query.data.posts.nodes,
          companyPost: company_page_query.data.pageBy.page_companypage
      },
      revalidate: 1
    }
  }