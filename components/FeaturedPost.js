import Link from "next/link";
import Image from "next/image";

function FeaturedPost({ posts }) {

const title_0 = posts[0].title;
const uri_0 = posts[0].uri;
const excerpt_0 = posts[0].excerpt;
const image_0 = posts[0].featuredImage.node.sourceUrl
const image_details_0 = posts[0].featuredImage.node.mediaDetails;
const cat_0 = posts[0].categories.nodes[0].name;

const title_1 = posts[1].title;
const uri_1 = posts[1].uri;
const excerpt_1 = posts[1].excerpt;
const cat_1 = posts[1].categories.nodes[0].name;
const image_details_1 = posts[1].featuredImage.node.mediaDetails;
const image_1 = posts[1].featuredImage.node.sourceUrl



  return (    
    <>
    <div id="card-onethird-session-reverse" className="lg:max-w-6xl mx-auto">
        <div id="card-onethrid-wrapper" className="mx-5 mt-10 md:flex md:flex-row-reverse md:min-h-[390px]">
            <div className="md:w-2/4 lg:w-3/5">
                <img loading="lazy" className="w-full rounded-t md:rounded-tr  md:rounded-br md:rounded-tl-none md:h-full object-cover" src={image_0} alt=""/> 
            </div>
            <div className="px-5 py-6 bg-truwinsoftblue-primary text-truwinblue-900 rounded-b md:p-10 md:w-2/4 md:rounded-br md:rounded-tr md:rounded-bl-none md:rounded-tl-none lg:px-7 lg:w-2/5">
                <p className="py-2 font-graphikSemibold">{cat_0}</p>
                <h3 className="font-[Cigars-Semibold] text-3xl py-2">{title_0}</h3>
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
                <h3 className="font-[Cigars-Semibold] text-3xl py-2">{title_1}</h3>
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
