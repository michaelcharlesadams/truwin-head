import '../styles/globals.css';
import '../styles/output.css';
import Layout from '../components/Layout';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://localhost:10003/graphql',
  cache: new InMemoryCache(),
});


function MyApp({ Component, pageProps }) {
  return  (<>
          <ApolloProvider client={client}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ApolloProvider>  
          </>)

}

export default MyApp
