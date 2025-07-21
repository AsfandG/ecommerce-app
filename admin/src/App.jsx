import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import SideBar from "./components/sidebar";
import Add from "./pages/add";
import List from "./pages/list";
import Orders from "./pages/orders";
import Dashboard from "./pages/dashboard";

const App = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <>
        <Navbar />
        <hr className="border-gray-300" />
        <div className="flex w-full">
          <SideBar />

          <div className="w-2/3 mx-auto ml-[max(5vw, 25px)] my-8 text-gray-600 text-base">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/add" element={<Add />} />
              <Route path="/list" element={<List />} />
              <Route path="/orders" element={<Orders />} />
            </Routes>
          </div>
        </div>
      </>
    </div>
  );
};

export default App;
