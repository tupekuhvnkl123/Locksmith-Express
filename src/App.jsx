import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Service from "./components/Service/Service";
import GoogleMap from "./components/UI/GoogleMap";

function App() {
  return (
    <div>
      <Navbar />
      <Home id="Home" />
      <Service id="Service" />
      <About id="About" />
      <Contact id="Contact" />
      <GoogleMap />
      <Footer />
    </div>
  );
}

export default App;
