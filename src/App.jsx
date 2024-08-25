import "./App.css";
import Navbar from "./components/Navbar/Navbar";
// import Navbar from "./components/Navbar/Navbar2";
import Layout from "./Layout/Layout";
import "./App.css";
import { pdfjs } from "react-pdf";
import ScrollToTopButton from "./components/shared/ScrollToTopButton";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import StarsCanvas from "./components/StarBackground/StarBackground";

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
      {/* <StarsCanvas /> */}
    </>

  );
}

export default App;

//bg-gradient-to-br from-[#19192D] from-20%  via-[#2D0C34] via-45% to-[#030014] to-80%
//w-full min-h-screen bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#19192D] via-[#3D2C3A] to-[#030014]
