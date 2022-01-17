import { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import CurrentWeather from '../components/CurrentWeather';
import WeatherTable from '../components/WeatherTable';

export default function WeatherPage() {
  const [apiResponse, setApiResponse] = useState();

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    fetch('https://api.openweathermap.org/data/2.5/onecall?lat=40.730610&lon=-73.935242&units=imperial&exclude=alerts,minutely,hourly&appid={apiId}')
      .then(response => response.json())
      .then(data => setApiResponse(data))
  }, []);


  return (
    <Container>
      {apiResponse ? <CurrentWeather data={apiResponse['current']} /> : null}
      {apiResponse ? <WeatherTable rows={apiResponse['daily'].slice(1, 5)} /> : null}
    </Container>
  )
}

