import "./App.css";
import React from "react";
import CarouselEffect from "./Components/Carousel/CarouselEffect";
import Header from "./Components/Header/Header";
import Category from "./Components/Category/Category";

function App() {
  return (
    <div>
      <Header />
      <CarouselEffect />
      <Category />
    </div>
  );
}

export default App;
