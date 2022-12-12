import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./hompage/Homepage";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import PageNotFound from "./pageNotFound/PageNotFound";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  return (
    <div className="app">
      <NavigationBar />
      <AnimatedRoutes />
      <Footer />
    </div>
  );
}

export default App;
