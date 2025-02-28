import CircularProgress from "@mui/material/CircularProgress";
import { Button } from "@mui/material";
import Day from "./Day";
import styles from "./Home.module.css";
import { useCurrentWeather } from "../hooks/useCurrentWeather";

function Home({ setIsHome, position }) {
  const { cityName, temperature, weatherIcon, isLoading } =
    useCurrentWeather(position);
  return (
    <section className={styles.section}>
      {isLoading && <CircularProgress />}
      {!isLoading && (
        <>
          <Day name={cityName} temperature={temperature} icon={weatherIcon} />
          <Button
            variant="contained"
            size="large"
            onClick={() => setIsHome(false)}
          >
            Get Start
          </Button>
        </>
      )}
    </section>
  );
}
export default Home;
