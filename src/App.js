import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./component/Blog/Blog";
import Home from "./component/Home/Home";
import Header from "./component/Navbar/Navbar.js";
import Services from "./component/Services/Services";

import Notfound from "./component/Notfound/Notfound";
import SignIn from "./component/SignIn/SignIn";
import SignUp from "./component/SignUp/SignUp";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Header />
      <Toaster />
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/Blog" element={<Blog></Blog>} />
        <Route path="/Services" element={<Services></Services>} />
        <Route path="/SignIn" element={<SignIn></SignIn>} />
        <Route path="/SignUp" element={<SignUp></SignUp>} />
        <Route path="*" element={<Notfound></Notfound>} />
      </Routes>
    </>
  );
}

export default App;
