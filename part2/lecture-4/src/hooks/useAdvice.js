import { useState, useEffect } from "react";

export function useAdvice() {
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

  return { advice, isLoading, fetchAdvice };
}
