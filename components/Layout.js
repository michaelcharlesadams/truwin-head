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
        <link rel="stylesheet" href="https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css" media="screen" />
        <meta name="description" content="We are the transparent windows, doors, and siding company. Offering better windows and doors throughout the Houston and surrounding metropolitan area."></meta>
        <script key="ga_script" async src="https://www.googletagmanager.com/gtag/js?id=UA-125406422-1"></script>

        <script key="ga_init" dangerouslySetInnerHTML={{__html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-W31V2ZX08W');
        `}} />
        <script src="https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_dialog_snippet.js" clienthub_id="a561e1fc-17f2-4b15-93c1-b91578a9eabb" form_url="https://clienthub.getjobber.com/client_hubs/a561e1fc-17f2-4b15-93c1-b91578a9eabb/public/work_request/embedded_dialog_work_request_form"></script>

        <script type="text/javascript" dangerouslySetInnerHTML={{__html: `
          (function(){
             var d = document, t = 'script',
                 o = d.createElement(t),
                 s = d.getElementsByTagName(t)[0];
                 o.src = 'https://app.realworklabs.com/static/plugin/loader.js?v=' + new Date().getTime();
                 window.addEventListener('rwlPluginReady', function () {
                     window.rwlPlugin.init('https://app.realworklabs.com', 'mSuBtadYjiA31B0g');
                }, false);
                s.parentNode.insertBefore(o, s);

        }());  `}} ></script>

      </Head>
      <Header />
      <Nav />
      { children }
      <Footer />
    </>
  )
}

export default Layout