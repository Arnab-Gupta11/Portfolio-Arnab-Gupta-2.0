import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Layout from "./Layout/Layout";
import "./App.css";
function App() {
  return (
    <div className="bg-custom-gradient">
      <div className="max-w-screen-xl mx-auto">
        <Navbar />
        <Layout />
      </div>
    </div>
  );
}

export default App;

//bg-gradient-to-br from-[#19192D] from-20%  via-[#2D0C34] via-45% to-[#030014] to-80%
//w-full min-h-screen bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#19192D] via-[#3D2C3A] to-[#030014]
