
import { client } from './_app';
import { useQuery, gql } from '@apollo/client';
import GetPricingForm from '../components/GetPricingForm';
import Vendor from '../components/Vendor';

function Pricing({morePost}) {
  return (
  <>
        
    <div id="hero-author-section" className="max-w-6xl mx-auto ">
            <div id="hero-author-wrapper" className="mx-5 mt-3 md:flex md:min-h-[375px]">
                
                <div className="bg-truwinsoftblue-primary rounded text-left px-10 py-12 md:w-1/2 md:h-auto">
                    <p className="text-sm text-truwinblue-900 mb-3">Get Pricing</p>
                    <h3 className="text-truwinblue-900 text-3xl sm:text-5xl font-[Cigars-SemiBold] mt-3">Schedule your hassle-free estimate.</h3>
                    <p className="text-truwinblue-900 text-sm mt-3 font-graphik font-medium">(832) 777-3681   |   Sales@Truwin.com</p>
                </div>
                
                
                <div className="relative mt-4 w-full h-auto md:w-1/2 md:ml-2 md:mt-0 bg-truwinblue-900 p-10">
                    
                {/** */}
                <GetPricingForm />
                {/** */}

                </div>
            </div>
    </div>
       
    {/** */}
    <Vendor />
    {/** */}

    
   
    <div id="pricing-top-content-session" className="lg:max-w-6xl mx-auto">
        <div id="pricing-top-content-wrapper" className="mx-5 mt-10 md:flex md:min-h-[390px]">

            <div className="px-5 py-6 text-truwinblue-900 bg-truwinsoftblue-primary m-2 rounded lg:px-7 md:w-1/2">
                <p className="py-2 font-graphik text-truwinblue-900">Quality and Cost Savings</p>
                <h3 className="font-[Cigars-Semibold] text-3xl py-4">What To Expect From Truwin:</h3>
                <ul className="ml-4">
            
                    <li className="list-disc">A phone call from one of our consultants.</li>
                    <li className="list-disc">An in-person review of your needs and our product offerings including comparisons and product samples.</li>
                    <li className="list-disc">A free cost estimate for your project.</li>
                </ul>
            </div>

            <div className="md:w-1/2 md:max-h-[480px] m-2">
                <img className="w-full rounded md:h-full object-cover" src="/images/why-truwin-intro 1.png" alt="" />
            </div>

        </div>
    </div>
   

    <div id="pricing-bottom-content-session" className="lg:max-w-6xl mx-auto">
        <div id="pricing-bottom-content-wrapper" className="mx-5 mt-10 md:mt-2 md:flex md:min-h-[390px]">

            {/** desktop view */}
            <div className="md:w-1/2 hidden md:block max-h-[480px] m-2">
                <img className="w-full rounded md:h-full object-cover" src="/images/Framestaed-3.jpg" alt="" />
            </div>

            <div className="px-5 py-6 text-truwinblue-900 bg-truwinsoftblue-primary m-2 rounded md:p-10 md:w-1/2  lg:px-7">
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

