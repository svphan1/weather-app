import React from 'react';

const Weather = ({
  temperature,
  city,
  country,
  humidity,
  description,
  error
}) => {
  return(
    <div>
      {temperature}
      {city}
      {country}
      {humidity}
      {description}
      {error}
    </div>
  )
};

export default Weather;