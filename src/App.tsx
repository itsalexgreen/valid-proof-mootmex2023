import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/elements/Footer";
import Header from "./components/elements/Header";
import Home from "./pages/Home";

function App() {
  var r = document.querySelector(":root");

  (r as any).style.setProperty(
    "--primary-bg-color",
    (window as any).env.PRIMARY_COLOR
      ? (window as any).env.PRIMARY_COLOR
      : "#FC9401"
  );

  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
