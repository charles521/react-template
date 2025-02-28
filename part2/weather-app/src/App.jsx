import { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "./components/Container";
import Home from "./components/Home";
import Forecast from "./components/Forecast";
import { useGeolocation } from "./hooks/useGEolocation";

function App() {
  const { getCurrentLocation, isLoading, position } = useGeolocation();
  const [isHome, setIsHome] = useState(true);

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <Container>
      {isLoading ? (
        <CircularProgress />
      ) : isHome ? (
        <Home position={position} setIsHome={setIsHome} />
      ) : (
        <Forecast position={position} setIsHome={setIsHome} />
      )}
    </Container>
  );
}

export default App;
