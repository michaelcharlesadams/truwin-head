import Header from "./Header";
import Footer from "./Footer"
import Nav from "./Nav";
import Head from "next/head";
import Script from "next/script";
import Aos from "aos";

function Layout({ children }) {
  return (
    <>
      <Head>
      
        <style jsx>{`
          .body{
            background-color: white;
          }
        `}
        </style>
      </Head>
      <Header />
      <Nav />
      { children }
      <Footer />
    </>
  )
}

export default Layout