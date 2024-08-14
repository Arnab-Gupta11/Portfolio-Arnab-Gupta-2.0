import Home from "../components/Home/Home";
import Sidebar from "../components/Sidebar/Sidebar";

const Layout = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-12 px-3 xsm:px-5 sm:px-5 xl:px-0">
      <div className="xl:col-span-4">
        <Sidebar />
      </div>
      <div className="xl:col-span-8">
        <Home />
      </div>
    </div>
  );
};

export default Layout;
