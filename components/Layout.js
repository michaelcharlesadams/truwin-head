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
        <title>Truwin Windows, Doors, & Siding</title>
        <link rel="icon" href="/truwin-favicon-blue.png" />
        <meta name="description" content="We are the transparent windows, doors, and siding company. Offering better windows and doors throughout the Houston and surrounding metropolitan area."></meta>
      </Head>
      <Header />
      <Nav />
      { children }
      <Footer />
    </>
  )
}

export default Layout