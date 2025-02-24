import { useAdvice } from "../hooks/useAdvice";
function Advice() {
  const { advice, isLoading, fetchAdvice } = useAdvice();

  return (
    <>
      <div>{isLoading ? "Loading..." : advice}</div>
      <button onClick={fetchAdvice}>Get Advice</button>
    </>
  );
}

export default Advice;
