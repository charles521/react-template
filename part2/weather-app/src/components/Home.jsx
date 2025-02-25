import { useEffect } from "react";
import { Button } from "@mui/material";
import Day from "./Day";
import styles from "./Home.module.css";
import { useGeolocation } from "../hooks/useGEolocation";
import { getWeatherData } from "../services/apiWeather";

function Home() {
  const { getCurrentLocation } = useGeolocation();

  useEffect(() => {
    async function lodeData() {
      const position = await getCurrentLocation();
      console.log(position, "position");

      const weatherData = await getWeatherData(
        position.latitude,
        position.longitude
      );

      console.log(weatherData, "weatherData");
    }

    lodeData();
  }, []);

  return (
    <section className={styles.section}>
      <Day />
      <Button variant="contained" size="large">
        Get Start
      </Button>
    </section>
  );
}
export default Home;
