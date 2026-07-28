import { useState } from 'react';

import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';

function WeatherDashboard() {
  // STATES
  const [error, setError] = useState('');
  
  const [city, setCity] = useState('');
  const [searchInput, setSearchInput] = useState('');

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
  };

  return (
    <div style={{ padding: '20px' }}>
      
      {/* HEADER TEXT */}
      <h1 style={{ fontSize: '30px' }}>Simple Weather Dashboard</h1>

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
          style={{ fontSize: '16px' }}
        />
        <button 
          type="submit" 
          style={{ padding: '10px', backgroundColor: 'purple', color: 'white' }}
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