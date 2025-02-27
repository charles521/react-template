import {
  Link,
  Breadcrumbs,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Avatar from "@mui/material/Avatar";
import { useForecastWeather } from "../hooks/useForecastWeather";

// Weather forecast
// https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

function Forecast({ setIsHome }) {
  const { temperatureList, isLoading } = useForecastWeather();
  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          color="inherit"
          href="#"
          onClick={() => setIsHome(true)}
        >
          Home
        </Link>
        <Link underline="hover" color="inherit" href="#">
          Forecast
        </Link>
      </Breadcrumbs>

      {isLoading && <CircularProgress />}
      {!isLoading && (
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {temperatureList.map((weatherForecast) => (
            <ListItem key={weatherForecast.dt}>
              <ListItemAvatar>
                <Avatar>
                  <img
                    width={48}
                    src={`https://openweathermap.org/img/wn/${weatherForecast.weather[0].icon}@2x.png`}
                    alt=""
                  />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={weatherForecast.weather[0].main}
                secondary={weatherForecast.dt_txt}
              />
              <span>
                {Math.floor(weatherForecast.main.temp_min)}&deg;/
                {Math.ceil(weatherForecast.main.temp_max)}
                &deg;
              </span>
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
}
export default Forecast;
