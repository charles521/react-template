import { useEffect, useState } from "react";
import { useGeolocation } from "../hooks/useGEolocation";
import { getForecasttWeather } from "../services/apiWeather";

export function useForecastWeather() {
  const { getCurrentLocation } = useGeolocation();
  const [temperatureList, setTemperatureList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function lodeData() {
      setIsLoading(true);
      const position = await getCurrentLocation();
      const forecastWeatherData = await getForecasttWeather(
        position.latitude,
        position.longitude
      );

      setTemperatureList(forecastWeatherData.list);
      setIsLoading(false);
      console.log(forecastWeatherData, "forecastWeatherData");
    }

    lodeData();
  }, []);

  return { temperatureList, isLoading };
}
