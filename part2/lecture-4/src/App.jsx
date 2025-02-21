import Time from "./components/Time";
import Advice from "./components/Advice";
import "./App.css";

// https://api.adviceslip.com/advice
function App() {
  return (
    <>
      <h1>Advice</h1>
      <Time />
      <Advice />
    </>
  );
}

export default App;
