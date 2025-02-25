const API_KEY = "1172d833e6e0a77eb25ac843127daa9a";

export async function getWeatherData(lat, lon) {
  try {
    const res = await fetch(
      ` https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );

    return await res.json();
  } catch (error) {
    throw new Error(error.message);
  }
}
