import { useState } from "react";
import Container from "./components/Container";
import Home from "./components/Home";
import Forecast from "./components/Forecast";

function App() {
  const [isHome, setIsHome] = useState(true);

  return (
    <Container>
      {isHome ? (
        <Home setIsHome={setIsHome} />
      ) : (
        <Forecast setIsHome={setIsHome} />
      )}
    </Container>
  );
}

export default App;
