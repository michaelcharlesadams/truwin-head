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
        <script key="ga_script" async src="https://www.googletagmanager.com/gtag/js?id=UA-125406422-1"></script>

        <script key="ga_init" dangerouslySetInnerHTML={{__html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-125406422-1');
        `}} />
      </Head>
      <Header />
      <Nav />
      { children }
      <Footer />
    </>
  )
}

export default Layout