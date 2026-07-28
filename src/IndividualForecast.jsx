function IndividualForecast({ day }) {
  if (!day) return null;

  // This was tricky. Had a string date and time that looked bad to humans
  // Grabbing the same dt_txt date string and converting it to a day
  const weekday = new Date(day.dt_txt).toLocaleDateString('en-US', {
    weekday: 'long'
  });

  const temp = day.main.temp;
  let tempColor = '#2563eb';

  if (temp > 80) {
    tempColor = '#f59e0b';
  } else if (temp >= 50) {
    tempColor = '#16a34a';
  }

  return (
    <div style={{ padding: '10px', border: '3px solid purple', textAlign: 'center', margin: '20px' }}>
      <p style={{ fontWeight: '500', fontSize: '14px', margin: '0', marginBottom: '10px' }}>
        {weekday}
      </p>
      {day && (
        <>
          <img
            src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
            alt={day.weather[0].description}
          />
          <h5 style={{ fontSize: '20px', margin: '0', color: tempColor }}>{Math.round(temp)}°F</h5>
          <span style={{ fontSize: '12px', color: 'grey' }}>{day.weather[0].main}</span>
        </>
      )}
    </div>
  );
}

export default IndividualForecast;
