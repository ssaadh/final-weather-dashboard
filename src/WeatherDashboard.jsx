import { useState, useEffect } from 'react';

import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';

function WeatherDashboard() {
  // STATES
  const [error, setError] = useState('');
  
  const [city, setCity] = useState('');
  const [searchInput, setSearchInput] = useState('');

  // Initial one time setting the city from browser storage
  // if available upon mounting/loading
  useEffect(() => {
    const city = localStorage.getItem('lastCity');
    if (city) {
      setCity(city);
      setSearchInput(city);
    }
  }, []);

  // FORM SUBMISSION
  const handleSubmit = (e) => {
    // Prevent refresh
    e.preventDefault();

    // If person does not enter any thing
    if (!searchInput) {
      setError('City field cannot be blank.');
      return;
    }

    // Primary state of the app
    setCity(searchInput);
    // Last city stored in browser storage
    localStorage.setItem('lastCity', searchInput);
  };

  return (
    <div style={{ padding: '20px' }}>
      
      {/* HEADER TEXT */}
      <h1 style={{fontSize: '30px', color: '#1b4e95', marginBottom: '0px'}}>Simple Weather Dashboard</h1>
      <p style={{fontStyle: 'italic', marginTop: '5px'}}>There is a 2 second gap before API is called and results are shown</p>

      {/* SEARCH BAR */}
      <form 
        onSubmit={handleSubmit}
        style={{ marginBottom: '20px' }}
      >
        {/* SEARCH FORM */}
        <input 
          type="text" 
          placeholder="Enter a city" 
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          style={{ fontSize: '16px', marginRight: '10px', padding: '5px' }}
        />
        <button 
          type="submit" 
          style={{ padding: '10px', backgroundColor: 'purple', color: 'white', marginLeft: '10px' }}
        >
          Search
        </button>
      </form>

      {/* ONLY ERRORS no loading in root  */}
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

      {/* IF CITY ENTERED THEN RENDER WEATHER AND FORECAST */}
      {city && (
        <div>
          {/* Current Conditions Layout Card */}
          <CurrentWeather city={city}  />

          {/* 5 Day Forecast Container */}          
          <Forecast city={city} />
        </div>
      )}
    </div>
  );
}

export default WeatherDashboard;