import Header from "./Header";
import Footer from "./Footer"
import Nav from "./Nav";

function Layout({ children }) {
  return (
    <>
      <Header />
      <Nav />
      { children }
      <Footer />
    </>
  )
}

export default Layout