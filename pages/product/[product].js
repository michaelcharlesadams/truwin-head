import Vendor from "../../components/vendor"


export default function Product() {
  return (
    <>

      {/** HERO */}
      <div id="hero-author-section" class="max-w-6xl mx-auto ">
        <div id="hero-author-wrapper" class="mx-5 mt-3 md:flex md:min-h-[375px] md:max-h-[420px]">
          <div class="bg-truwinblue-900 rounded text-left px-10 py-10 md:w-5/12 md:h-auto">
              <p class="text-sm text-truwingray-primary mb-3">/ Windows</p>
              <h3 class="text-white text-3xl sm:text-4xl md:text-2xl font-cigarBold mt-3">We offer replacement and new construction windows of all types.</h3>
              <p class="text-white text-sm mt-3 font-graphik font-medium">Time to improve your home’s appearance and energy efficiency? Consider Truwin your partner in window replacement. You’ll enjoy quality and service at a competitive price, a true win-win.</p>
              <a href="">
                  <button class="block mt-8 py-5 px-10 bg-truwinblue-500 rounded">
                      <span class="text-white">Get a free estimate</span> 
                  </button>
              </a>
          </div>
            
            
          <div class="relative mt-4 w-full  h-auto md:w-7/12 md:ml-2 md:mt-0 ">
              <img class="w-full max-h-46 md:object-cover md:h-full rounded" src="/images/siding-hero.png" alt="truwin builder video" />
              
            
            <div class="absolute bottom-0 left-0 w-16 hidden">
            <p class="font-graphikSemibold text-white text-2xl">The Exterior
                Experts</p>
          </div>
                
            </div>
        </div>
      </div>
      {/** END HERO */}

      {/** VENDOR LOGOS */}
      <Vendor />  
      {/** VENDOR LOGOS */}

      {/** PRODUCT MATERIALS */}
      <div id="window-material-section" class="max-w-6xl mx-auto">
        <div id="window-material-wrapper" class="mx-5 mt-16">
            
            <h3 class="text-3xl sm:text-4xl text-truwinblue-900 font-cigar">We carry all window materials.</h3>

            <div id="window-post-wrapper" class="grid sx:grid-cols-2 md:grid-cols-4 gap-4 mt-8 mx-auto">
                <div class="w-auto border rounded border-truwinblue-300 px-8 pt-8 mt-4 sm:mt-4 max-w-[400px]">
                    <p class="text-2xl font-graphikSemibold text-truwinblue-900">Vinyl</p>
                    <p class="text-sm font-graphik pt-4">Get thin frames and great weather insulation with this popular material.</p>
                    <img class="w-auto h-auto mx-auto mt-4" src="/images/window-double-hung.png" alt="windows and partner " />
                </div>
                <div class="w-auto border rounded border-truwinblue-300 px-8 mt-4 pt-8 sm:mt-4 sm:my-0 max-w-[400px] ">
                    <p class="text-2xl text-truwinblue-900 font-graphikSemibold">Vinyl</p>
                    <p class="text-sm font-graphik pt-4">Get thin frames and great weather insulation with this popular material.</p>
                    <img class="w-auto h-auto mx-auto mt-4" src="/images/window-double-hung.png" alt="windows and partner " />
                </div>
                <div class="w-auto border rounded border-truwinblue-300 px-8 pt-8 mt-4 sm:mt-4 sm:my-0 max-w-[400px] ">
                    <p class="text-2xl text-truwinblue-900 font-graphikSemibold">Vinyl</p>
                    <p class="text-sm font-graphik pt-4">Get thin frames and great weather insulation with this popular material.</p>
                    <img class="w-auto h-auto mx-auto mt-4" src="/images/window-double-hung.png" alt="windows and partner " />
                </div>
                <div class="w-auto border rounded border-truwinblue-300 px-8 pt-8 mt-4 sm:mt-4 sm:my-0 max-w-[400px]">
                    <p class="text-2xl text-truwinblue-900 font-graphikSemibold">Vinyl</p>
                    <p class="text-sm font-graphik pt-4">Get thin frames and great weather insulation with this popular material.</p>
                    <img class="w-auto h-auto mx-auto mt-4" src="/images/window-double-hung.png" alt="windows and partner " />
                </div>
            </div>

        </div>
      </div>
      {/** END PRODUCT MATERIALS */}

      {/**  PRODUCT TYPE */}
      <div id="window-type-section" class="max-w-6xl mx-auto">
        <div id="window-type-wrapper" class="mx-5 mt-16">
            
            <h3 class="text-3xl sm:text-4xl text-truwinblue-900 font-cigar">Find your window by type:</h3>

            <div id="window-type-post-wrapper" class="mt-8 mx-auto sm:my-0">
               
                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    <div class="w-auto border rounded border-truwinblue-300 p-8 mt-4 sm:mt-4 max-w-[300px] lg:max-w-[300px]">
                        <p class="text-2xl font-graphikSemibold text-truwinblue-900">Single-hung</p>
                        
                        <img class="w-auto h-auto pt-8" src="/images/window-type.png" alt="window type" />
                    </div>
                    <div class="w-auto border rounded border-truwinblue-300 p-8 mt-4 sm:mt-4 sm:my-0 max-w-[300px] lg:max-w-[300px]">
                        <p class="text-2xl text-truwinblue-900 font-graphikSemibold">Single-hung</p>
                        
                        <img class="w-auto h-auto pt-8" src="/images/window-type.png" alt="window type" />
                    </div>
                    <div class="w-auto border rounded border-truwinblue-300 p-8 mt-4 sm:mt-4 sm:my-0 max-w-[300px] lg:max-w-[300px]">
                        <p class="text-2xl text-truwinblue-900 font-graphikSemibold">Single-hung</p>
                        
                        <img class="w-auto h-auto pt-8" src="/images/window-type.png" alt="window type" />
                    </div>
                    <div class="w-auto border rounded border-truwinblue-300 p-8 mt-4 sm:mt-4 sm:my-0 max-w-[300px] lg:max-w-[300px]">
                        <p class="text-2xl text-truwinblue-900 font-graphikSemibold">Single-hung</p>
                    
                        <img class="w-auto h-auto pt-8" src="/images/window-type.png" alt="window type" />
                    </div>
               
              
                <div class="w-auto border rounded border-truwinblue-300 p-8 mt-4 sm:mt-4 max-w-[300px] lg:max-w-[300px]">
                    <p class="text-2xl font-graphikSemibold text-truwinblue-900">Single-hung</p>
                   
                    <img class="w-auto h-auto pt-8" src="/images/window-type.png" alt="window type" />
                </div>
                <div class="w-auto border rounded border-truwinblue-300 p-8 pt-8 sm:mt-4 sm:my-0 max-w-[300px] lg:max-w-[300px]">
                    <p class="text-2xl text-truwinblue-900 font-graphikSemibold">Single-hung</p>
                   
                    <img class="w-auto h-auto pt-8" src="/images/window-type.png" alt="window type" />
                </div>
                <div class="w-auto border rounded border-truwinblue-300 p-8 mt-4 sm:mt-4 sm:my-0 max-w-[300px] lg:max-w-[300px]">
                    <p class="text-2xl text-truwinblue-900 font-graphikSemibold">Single-hung</p>
                   
                    <img class="w-auto h-auto pt-8" src="/images/window-type.png" alt="window type" />
                </div>
                <div class="w-auto border rounded border-truwinblue-300 p-8 mt-4 sm:mt-4 sm:my-0 max-w-[300px] lg:max-w-[300px]">
                    <p class="text-2xl text-truwinblue-900 font-graphikSemibold">Single-hung</p>
                    
                    <img class="w-auto h-auto pt-8" src="/images/window-type.png" alt="window type" />
                </div>
              </div>
              

            </div>

        </div>
      </div>
      {/** END OF PRODUCT TYPE */}

    </>
  )
}

/**
 * 
 * getStatic Props 
 */
 export async function getStaticProps({params}) {
  //grab the slug
  const { slug } = params;
  console.log(params);
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



