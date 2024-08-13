import "./App.css";
import Navbar from "./components/Navbar/Navbar";
// import Navbar from "./components/Navbar/Navbar2";
import Layout from "./Layout/Layout";
import "./App.css";
import { pdfjs } from "react-pdf";
import ScrollToTopButton from "./components/shared/ScrollToTopButton";

pdfjs.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/build/pdf.worker.min.mjs", import.meta.url).toString();
function App() {
  return (
    <div className="xl:pt-5">
      <div className="max-w-screen-xl 2xl:max-w-[1520px] mx-auto">
        <Navbar />
        <Layout />
        <ScrollToTopButton />
      </div>
    </div>
  );
}

export default App;

//bg-gradient-to-br from-[#19192D] from-20%  via-[#2D0C34] via-45% to-[#030014] to-80%
//w-full min-h-screen bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#19192D] via-[#3D2C3A] to-[#030014]
