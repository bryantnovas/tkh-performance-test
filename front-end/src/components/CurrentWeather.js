import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import WeatherIcon from './WeatherIcon';


export default function CurrentWeather({ data }) {
  const colors = ['#6A1B9A', '#AD1457', '#C62828', '#4527A0', '#283593', '#1565C0', '#0277BD', '#00838F', '#00695C', '#2E7D32', '#558B2F', '#9E9D24', '#F9A825', '#FF8F00', '#EF6C00', '#D84315', '#4E342E', '#424242', '#37474F'];
  const bgStyle = {
    backgroundColor: colors[Math.round(colors.length * Math.random())],
    color: 'white',
    justifyContent: 'center'
  };
  return (
    <Box sx={{ width: '100%' }} style={bgStyle} flex>
      <Grid container rowSpacing={1} >
        <Grid item xs={6}>
          <WeatherIcon code={data.weather[0].icon} size='10em' />
          <p style={{ fontSize: '3em', margin: 0, paddingLeft: 20 }}>{Math.round(data.temp)}°F</p>

        </Grid>
        <Grid
          item xs={6}
          align="right"
          alignSelf='flex-end'
          style={{ paddingRight: 20 }}
        >
          <h2>{new Date().toString().split(' ', 3).join(' ')}</h2>
          <h3>New York</h3>
          <p style={{ margin: 0, paddingLeft: 20 }}> {data.weather[0].description}</p>
          <p>Humidity: {data.humidity}%</p>
          <p>Wind: {Math.round(data.wind_speed)} mph</p>
        </Grid>
      </Grid>
    </Box>
  );
}