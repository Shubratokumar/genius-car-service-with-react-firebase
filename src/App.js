import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home/Home";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import ServiceDetail from "./Pages/ServiceDetail/ServiceDetail";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import Checkout from "./Pages/Checkout/Checkout";
import "bootstrap/dist/css/bootstrap.min.css";
import { Toaster } from "react-hot-toast";
import AddServices from "./Pages/AddServices/AddServices";
import ManageServices from "./Pages/ManageServices/ManageServices";
import Order from "./Pages/Order/Order";

function App() {
  return (
    <div>
      <Header></Header>
      <Toaster></Toaster>
      <Routes>
        <Route
          path="/"
          element={
            <>
            <Home></Home>
            {/* <RequireAuth>
              <Home></Home>
            </RequireAuth> */}
            </>
            
          }
        ></Route>
        <Route
          path="/home"
          element={
            <>
            <Home></Home>
            {/* <RequireAuth>
              <Home></Home>
            </RequireAuth> */}
            </>            
          }
        ></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/orders" element={<Order/>}></Route>
        <Route
          path="/service/:serviceId"
          element={<ServiceDetail></ServiceDetail>}
        ></Route>
        <Route
          path="/checkout/:serviceId"
          element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/addservice"
          element={
            <RequireAuth>
              <AddServices></AddServices>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manage"
          element={
            <RequireAuth>
              <ManageServices></ManageServices>
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
