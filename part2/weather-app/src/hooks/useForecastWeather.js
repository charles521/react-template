import { useEffect, useState } from "react";
import { getForecasttWeather } from "../services/apiWeather";

export function useForecastWeather(position) {
  const [temperatureList, setTemperatureList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function lodeData() {
      setIsLoading(true);
      const forecastWeatherData = await getForecasttWeather(
        position.latitude,
        position.longitude
      );

      setTemperatureList(forecastWeatherData.list);
      setIsLoading(false);
    }

    lodeData();
  }, []);

  return { temperatureList, isLoading };
}
