import "./App.css";
import { Hero } from "./component/Hero";
import { Navbar } from "./component/Navbar";

function App() {
  return (
    <div>
      <div className="navcontainer1">
        <div className="navcontainer2">
          <Navbar />
        </div>
      </div>
      <div>
        <div>
          <Hero />
        </div>
      </div>
    </div>
  );
}

export default App;
