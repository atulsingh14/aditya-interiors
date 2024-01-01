import Sidenav from "./components/Sidenav";
import About from "./components/About";
import Main from "./components/Main";
import Services from "./components/services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Sidenav />
      <Main />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
