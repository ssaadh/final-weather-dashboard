import { useEffect, useState } from 'react';

function CurrentWeather( { city }) {
  if (!city) return;

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
      // GET DATA
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  console.log('weather', weather);

  return (
    <div>
    </div>
  );
}

export default CurrentWeather;
          