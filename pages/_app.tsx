import "../styles/main.scss";
import type { AppProps } from "next/app";
import { Header, Footer } from "../components/";
import Script from "next/script";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        id="ga"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload" id="ga2">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>

      <Header />
      <div className="container">
        <Component {...pageProps} />
      </div>

      <Script
        id="umami"
        defer
        src="https://analytics.jamestarpey.com/script.js"
        data-website-id="c14e0804-4bb4-474a-9038-6785bc01d929"
      ></Script>

      <Footer />
    </>
  );
}
export default App;
