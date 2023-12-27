import Sidenav from "./components/Sidenav";
import About from "./components/About";
import Main from "./components/Main";
import Services from "./components/services";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Sidenav />
      <Main />
      <About />
      <Services />
      <Projects />
    </div>
  );
}
export default App;
