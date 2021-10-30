import axios from 'axios'

// const URL = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}'
const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'bb75ec54f44ef507c7e1aeb4bb964c23';
export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY
        }
    });

    return data;
} 

export default fetchWeather;