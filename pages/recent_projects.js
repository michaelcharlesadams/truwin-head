
import { client } from './_app';
import { useQuery, gql } from '@apollo/client';
import Image from 'next/image';
import Head from 'next/head';

function Recent() {

  return (
  <>
     <Head>
        <title>Recent Projects | Truwin | Company</title>
        <meta name="description" content="Why choose Truwin? We're Houston's most transparent Window, Doors, and Siding Company. We pride ourselves in our transparency across the board. 832-777-3681"></meta>
    </Head>     
    <style jsx>{`
            #rwl-output h1.rwlH1Header {
                color: red;
            }
        `}
    </style>
    <div className="lg:max-w-7xl mx-auto px-4 pt-8" id="rwl-output"  ></div>
    
    
    
    {/** END END */}
    </>
    
  )
}

export default Recent
