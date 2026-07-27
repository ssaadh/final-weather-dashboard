function IndividualForecast({ day }) {
  if (!day) return null;

  return (
    <div style={{ padding: '10px', border: '3px solid purple', textAlign: 'center', margin: '20px' }}>
      <p style={{ fontWeight: '500', fontSize: '14px', margin: '0', marginBottom: '10px' }}>
        {day.dt_txt}
      </p>
      {day && (
        <>
          <img
            src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
            alt={day.weather[0].description}
          />
          <h5 style={{ fontSize: '20px', margin: '0' }}>{day.main.temp}°F</h5>
          <span style={{ fontSize: '12px', color: 'grey' }}>{day.weather[0].main}</span>
        </>
      )}
    </div>
  );
}

export default IndividualForecast;
