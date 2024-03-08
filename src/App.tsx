import "./App.css";
import LogoBar from "./LogoBar";
import Sponsor from "./Sponsor";
import Navbar from "./navbar";
function App() {
  return (
    <>
      <LogoBar />
      <Navbar />
      <h1>
        STACK TOO
        <br /> DEEP
      </h1>
      <p id="date">STARTING FROM: DD/MM/YYYY</p>
      <button onClick={() => {}}>Register Now</button>
      <p id="sponsors">
        Sponsored by:
        <Sponsor />
        <Sponsor />
      </p>
    </>
  );
}

export default App;
