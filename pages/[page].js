import { client } from './_app';
import { useQuery, gql } from '@apollo/client';

function Page() {
  return (
    <div>page reached</div>
  )
}

export default Page;


/*****************************************
 * 
 * Static Paths
 ******************************************/
 export async function getStaticPaths() {

    //1.2 Define a query: posts
    const get_page_path_query = await client.query({
        query: gql`
            query GetPagePathQuery {
                pages(first: 100) {
                    nodes {
                        slug
                    }
                }
            }
            `,
    });


      //remove siding from static paths
    const filterPath = get_page_path_query.data.pages.nodes.filter(item => item.slug !== "company");


    // //2. create array of paths
    const paths = filterPath.map((post) => ({
        params: { page: post.slug}
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
//     //grab the slug

 

  const { page } = params;
   
     //1.2 Define a query: posts
    const get_single_page_query = await client.query({
        query: gql`
            query SinglePageQuery{
                pageBy(uri: "${page}" ){
                    title
                    content
                    slug
                    uri
                }
            } 
        `,
    });

    

    return {
        props: { post: get_single_page_query.data.pageBy },
        revalidate: 1
        //props: { post: page }
    }

}