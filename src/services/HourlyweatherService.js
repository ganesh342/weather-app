// weatherUtils.js

const fetchHourlyWeatherData = async (city) => {
    const apiKey = 'dc807139f87fed965e236910994651f7';
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (response.ok) {
        // Extracting the hourly forecast data for the next 8 hours
        const firstEntry = data.list[0];

      // Get the hour from dt_txt or dt
      const initialHour = new Date(firstEntry.dt * 1000).getHours();

        const hourly = data.list.slice(0, 8).map((item) => {
          const tempC = item.main.temp;
          const tempF = (tempC * 9 / 5) + 32; // Convert Celsius to Fahrenheit
          const iconURL = `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`;
          const text = item.weather[0].description;
  
          return {
            tempC,
            tempF: tempF.toFixed(2), // Round to 2 decimal places
            iconURL,
            text,
          };
        });
  
        // Return the hourly data
        return { initialHour , hourly };
      } else {
        throw new Error(data.message || 'Failed to fetch weather data');
      }
    } catch (err) {
      console.error('Error fetching weather data:', err);
      throw new Error(err.message);
    }
  };
  
  export default fetchHourlyWeatherData;
  