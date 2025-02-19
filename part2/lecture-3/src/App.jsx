import { useEffect, useState } from "react";
import "./App.css";

// https://api.adviceslip.com/advice
function App() {
  const [advice, setAdvice] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function fetchAdvice() {
    setIsLoading(true);
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setIsLoading(false);
    setAdvice(data.slip.advice);
  }

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <>
      <h1>Advice</h1>
      <div>{isLoading ? "Loading..." : advice}</div>
      <button onClick={fetchAdvice}>Get Advice</button>
    </>
  );
}

export default App;
