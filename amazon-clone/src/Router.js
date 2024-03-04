import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import SignIn from "./Pages/Auth/SignUp";
import Payment from "./Pages/Payment/Payment";
import Orders from ".//Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import Result from "./Pages/Results/Result";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<SignIn />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/category/:categoryName" element={<Result />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing;
