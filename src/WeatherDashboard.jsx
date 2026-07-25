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

    // If person does not enter any thing
    if (!searchInput) {
      setError('City field cannot be blank.');
      return;
    }

    // Primary state of the app
    setCity(searchInput);
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
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button 
          type="submit" 
        >
          Search
        </button>
      </form>

      {/* ONLY ERRORS no loading in root  */}
      {error && <p>{error}</p>}

      {/* IF CITY ENTERED THEN RENDER WEATHER AND FORECAST */}
      {city && (
        <div>
        </div>
      )}
    </div>
  );
}

export default WeatherDashboard;