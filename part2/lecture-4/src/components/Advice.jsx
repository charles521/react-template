import { useEffect, useState } from "react";

function Advice() {
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
      <div>{isLoading ? "Loading..." : advice}</div>
      <button onClick={fetchAdvice}>Get Advice</button>
    </>
  );
}

export default Advice;
