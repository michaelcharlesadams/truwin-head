
import { client } from './_app';
import { useQuery, gql } from '@apollo/client';
import GetPricingForm from '../components/GetPricingForm';
import Vendor from '../components/Vendor';
import Image from 'next/image';
import VendorHome from '../components/VendorHome';

function Pricing({morePost}) {
  return (
  <>
        
    <div id="hero-author-section" className="max-w-7xl mx-auto ">
            <div id="hero-author-wrapper" className="mx-5 mt-3 md:flex md:min-h-[375px]">
                
                <div className="relative bg-truwinsoftblue-primary rounded text-left px-10 py-8 md:w-1/2 md:h-auto">
                    <p className="text-sm text-truwinblue-900 mb-3">
                    <span className='pr-2'>
                        <Image src="/images/truwin-breadcrumbs-blue-icon.png" width={14} height={14} />
                    </span>
                        / Get Pricing</p>
                    <h3 className="text-truwinblue-900 text-3xl sm:text-5xl font-[Cigars-SemiBold] mt-6">Schedule your hassle-free estimate.</h3>
                    <p className="text-truwinblue-900 text-lg mt-3 font-[Cigars] font-medium">(832) 777-3681   |   Sales@Truwin.com</p>
                
                <div className="md:absolute sm:w-2/5 w-3/5 text-sm bottom-10 left-10 mt-16">
                    <p className="text-truwinblue-900 font-graphikSemibold ">QUESTIONS?</p>
                    <p className="text-truwinblue-900">Our team is always available to guide you through the process.</p>
                </div>
                </div>
                
                
                <div className="relative mt-4 w-full h-auto md:w-1/2 md:ml-2 md:mt-0 bg-truwinblue-900 p-10">
                    
                {/** */}
                <GetPricingForm />
                {/** */}

                </div>
            </div>
    </div>
       
    {/** */}
    <VendorHome />
    {/** */}

    
   
    <div id="pricing-top-content-session" className="lg:max-w-7xl mx-auto">
        <div id="pricing-top-content-wrapper" className="mx-5 mt-10 md:flex md:min-h-[390px]">

            <div className="p-10 md:p-20 text-truwinblue-900 bg-truwinsoftblue-primary m-2 rounded md:w-1/2">
                <p className="py-2 font-graphik text-truwinblue-900">Quality and Cost Savings</p>
                <h3 className="font-[Cigars-Semibold] text-3xl py-4">What To Expect From Truwin:</h3>
                <ul className="ml-4">
            
                    <li className="list-disc"><span className="font-graphikSemibold">A phone call</span> from one of our consultants.</li>
                    <li className="list-disc"><span className="font-graphikSemibold">An in-person review</span> of your needs and our product offerings including comparisons and product samples.</li>
                    <li className="list-disc"><span className="font-graphikSemibold">A free cost estimate</span> for your project.</li>
                </ul>
            </div>

            <div className="md:w-1/2 md:max-h-[480px] m-2">
                <img className="w-full rounded md:h-full object-cover" src="/images/why-truwin-intro 1.png" alt="" />
            </div>

        </div>
    </div>
   

    <div id="pricing-bottom-content-session" className="lg:max-w-7xl mx-auto">
        <div id="pricing-bottom-content-wrapper" className="mx-5 mt-10 md:mt-2 md:flex md:min-h-[390px]">

            {/** desktop view */}
            <div className="md:w-1/2 hidden md:block max-h-[480px] m-2">
                <img className="w-full rounded md:h-full object-cover" src="/images/Framestaed-3.jpg" alt="" />
            </div>

            <div className="p-10 md:p-20 text-truwinblue-900 bg-truwinsoftblue-primary m-2 rounded md:w-1/2">
                <p className="py-2 text-truwinblue-900 font-bold">Privacy</p>
                <p className="py-2 font-graphik text-truwinblue-900">We take your privacy very seriously. None of your contact info will be shared with a third party for any reason whatsoever nore will we pester you for a sale. Review our core values for more.</p>

                <p className="py-2 text-truwinblue-900 font-bold">Financing Available</p>
                <p className="py-2 font-graphik text-truwinblue-900">We offer multiple, flexible financing options to fit your home improvement needs. If you have questions, be sure to fill out our Get Started form and ask your consultant for details.</p>
            </div>

            {/** mobile view */}
            <div className="md:w-1/2 md:hidden max-h-[480px] m-2">
                <img className="w-full rounded md:h-full object-cover" src="/images/Framestaed-3.jpg" alt="" />
            </div>

           

        </div>
    </div>

    
    {/** END END */}
    </>
    
  )
}

export default Pricing

