import { useEffect, useState } from 'react';

function CurrentWeather( { city }) {
  if (!city) return;
  const API_KEY = "45d70796701c0a4d7d163ef0eb7f65a4";

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  // FULL LIFECYCLE FUNCTION: loading, error, success
  const fetchWeather = async (cityToSet) => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityToSet}&units=imperial&appid=${API_KEY}`
      );
      if (!response.ok) throw new Error('City not found. Please check spelling.');
      const data = await response.json();
      
      setWeather(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  console.log('weather', weather);
  // weather.name
  // weather.sys.country
  // weather.weather[0].icon
  // weather.main.temp
  // weather.weather[0].description
  // weather.main.humidity
  // weather.main.feels_like
  return (
    <div>
    </div>
  );
}

export default CurrentWeather;
          