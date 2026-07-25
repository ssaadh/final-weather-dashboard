import { useState } from 'react';

function WeatherDashboard() {
  // STATES
  const [error, setError] = useState('');
  
  const [city, setCity] = useState('');
  const [searchInput, setSearchInput] = useState('');

  // FORM SUBMISSION
  const handleSubmit = (e) => {
    // Prevent refresh
    e.preventDefault();
  };

  return (
    <div>
      
      {/* HEADER TEXT */}
      <h1>Simple Weather Dashboard</h1>

      {/* SEARCH BAR */}
      <form 
        onSubmit={handleSubmit}
      >
        {/* SEARCH FORM */}
        <input 
          type="text" 
          placeholder="Enter a city" 
          value={searchInput}
        />
        <button 
          type="submit" 
        >
          Search
        </button>
      </form>
      

      {/* IF CITY ENTERED THEN RENDER WEATHER AND FORECAST */}
      {city && (
        <div>
        </div>
      )}
    </div>
  );
}

export default WeatherDashboard;