import { useEffect, useState } from "react";
import { getWeatherData } from "../services/apiWeather";

export function useCurrentWeather(position) {
  const [temperature, setTemperature] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [weatherIcon, setWeatherIcon] = useState("");
  const [cityName, setCityName] = useState("");

  useEffect(() => {
    async function lodeData() {
      setIsLoading(true);
      const weatherData = await getWeatherData(
        position.latitude,
        position.longitude
      );
      console.log(weatherData, "weatherData");
      setTemperature({
        max: weatherData.main.temp_max,
        min: weatherData.main.temp_min,
      });
      setWeatherIcon(weatherData.weather[0].icon);
      setCityName(weatherData.name);
      setIsLoading(false);
    }

    lodeData();
  }, []);

  return { cityName, temperature, weatherIcon, isLoading };
}
