import Home from "../components/Home/Home";
import Sidebar from "../components/Sidebar/Sidebar";

const Layout = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 px-5 lg:px-0">
      <div className="lg:col-span-4">
        <Sidebar />
      </div>
      <div className="lg:col-span-8">
        <Home />
      </div>
    </div>
  );
};

export default Layout;
