import { useEffect, useState } from 'react';

import ErrorLoading from './ErrorLoading';

function CurrentWeather( { city }) {
  if (!city) return;
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [weather, setWeather] = useState(null);

  // PROP INTEGRATION
  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  // FULL LIFECYCLE FUNCTION: loading, error, success
  const fetchWeather = async (cityToSet) => {
    setLoading(true);
    setError('');

    // FETCH DATA
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
  
  return (
    <div>
      <ErrorLoading
        error={error}
        loading={loading}
      />
      {weather && (
      <div style={{ padding: '20px', border: '5px solid purple', textAlign: 'center' }}>
        <h2 style={{ fontSize: '25px', margin: '0' }}>{weather.name}, {weather.sys.country}</h2>
        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
        <h4 style={{ fontSize: '40px', margin: '0' }}>{Math.round(weather.main.temp)}°F</h4>
        <span>{weather.weather[0].description}</span>
        <div style={{ color: 'gray', paddingTop: '16px' }}>
          <span style={{ padding: '20px'}}>Humidity: {weather.main.humidity}%</span>
          <span style={{ padding: '20px'}}>Feels like: {weather.main.feels_like} °F</span>
        </div>
      </div>
      )}
    </div>
  );
}

export default CurrentWeather;
          