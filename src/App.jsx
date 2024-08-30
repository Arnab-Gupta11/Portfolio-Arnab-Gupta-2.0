import "./App.css";
import Navbar from "./components/Navbar/Navbar";
// import Navbar from "./components/Navbar/Navbar2";
import Layout from "./Layout/Layout";
import "./App.css";
import { pdfjs } from "react-pdf";
import ScrollToTopButton from "./components/shared/ScrollToTopButton";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";

pdfjs.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/build/pdf.worker.min.mjs", import.meta.url).toString();
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // 2 seconds loading time
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {
        loading
          ?
          <div className="h-screen flex justify-center items-center bg-black"><Loader /></div>
          :
          <div className="xl:pt-5">
            <div className="max-w-screen-xl 2xl:max-w-[1520px] mx-auto">
              <Navbar />
              <Layout />
              <ScrollToTopButton />
            </div>

          </div>
      }
    </>

  );
}

export default App;
