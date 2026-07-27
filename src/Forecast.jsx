import { useState, useEffect } from 'react';

import ErrorLoading from './ErrorLoading';

function Forecast( { city }) {
  if (!city) return;
  // Unsecure API included
  const API_KEY = "45d70796701c0a4d7d163ef0eb7f65a4";

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const [forecast, setForecast] = useState([]);

  // PROP INTEGRATION
  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  // FULL LIFECYCLE FUNCTION: loading, error, success
  const fetchWeather = async (setCity) => {
    setLoading(true);
    setError('');

    // FETCH DATA
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${setCity}&units=imperial&appid=${API_KEY}`
      );
      const fullForecast = await response.json();
      console.log('fullForecast', fullForecast);

      setForecast(fullForecast.list);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  console.log('forecast', forecast);
  return (
    <>
    <h3>5 Day Extended Forecast</h3>
    <ErrorLoading
      error={error}
      loading={loading}
     />
    {forecast && (
      <div>
      </div>
    )}
    </>    
  );
}

export default Forecast;
