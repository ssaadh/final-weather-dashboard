import { useState, useEffect } from 'react';

import IndividualForecast from './IndividualForecast';
import ErrorLoading from './ErrorLoading';

function Forecast( { city }) {
  if (!city) return;
  // Unsecure API included
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const [forecast, setForecast] = useState([]);

  // PROP INTEGRATION
  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  // FULL LIFECYCLE FUNCTION: loading, error, success
  const fetchWeather = async (cityToSet) => {
    setLoading(true);
    setError('');

    // A purposeful gap to see loading in the app's lifecycle
    setTimeout(() => {
      fetchWeatherAPI(cityToSet);
    }, 2000);
  }

    // FETCH DATA
  const fetchWeatherAPI = async (cityToSet) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityToSet}&units=imperial&appid=${API_KEY}`
      );
      const fullForecast = await response.json();
      // This was tricky. The weather api was returning data every 3 hours per day
      // This filter checks for one specific time so only one forecast per day is returned
      const fiveDays = fullForecast.list.filter((single) => single.dt_txt.includes('12:00:00'));

      setForecast(fiveDays);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <h3 style={{ fontSize: '20px', marginBottom: '0', color: '#274b7e' }}>5 Day Extended Forecast</h3>
    <ErrorLoading
      error={error}
      loading={loading}
     />
    {forecast && (
      <div>
        <div style={{ width: '300px', textAlign: 'center', padding: '20px', margin: '0 60px' }}>
          {forecast.map((day, keyid) => (
            <IndividualForecast key={keyid} day={day} />
          ))}
        </div>
      </div>
    )}
    </>    
  );
}

export default Forecast;
