import { useEffect, useState } from "react";
import "./App.css";

// https://api.adviceslip.com/advice
function App() {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    async function fetchAdvice() {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();

      console.log(data.slip);
      setAdvice(data.slip.advice);
    }

    fetchAdvice();
  }, [setAdvice]);

  return (
    <>
      <h1>Advice</h1>
      <div>{advice}</div>
    </>
  );
}

export default App;
