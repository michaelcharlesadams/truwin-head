import Header from "./Header";
import Footer from "./Footer"
import Nav from "./Nav";
import Head from "next/head";
import Script from "next/script";

function Layout({ children }) {
  return (
    <>
      <Head>
      {/* <link type="text/css" rel="stylesheet" href="css/lightgallery-bundle.css" /> */}
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