import "../styles/main.scss";
import type { AppProps } from "next/app";
import { Header, Footer } from "../components/";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <div className="container">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}
export default App;
