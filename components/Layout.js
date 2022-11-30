import Header from "./Header";
import Footer from "./Footer"
import Nav from "./Nav";
import Head from "next/head";

function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
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