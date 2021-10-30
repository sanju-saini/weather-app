import React, { useState, useEffect } from 'react'
import weatherApi from './FetchWeather';
import WeatherCard from './WeatherCard';

function App() {
    const [cityName, setCityName] = useState('')
    const [weather, setWeather] = useState({})

    useEffect(() => {
        let data = localStorage.getItem('weatherInfo')
        if(data) {
            let localData = JSON.parse(data)
            setWeather(localData)
        }
    }, [])

    const handleSearch = async (e) => {
        e.preventDefault()
        const data = await weatherApi(cityName)
        console.log(data)
        if(data) {
            setWeather(data)
            localStorage.setItem('weatherInfo', JSON.stringify(data))
            setCityName('')
        }
    }
    return (
        <div className='container d-flex justify-content-center'>
            <div className='mt-5 ms-5 text-center' style={{width: '300px'}}>
            <h2 className='text-white'>Weather App</h2>
            <form onSubmit={handleSearch} className='my-3 d-flex' >
            <input type='text' className='me-2 form-control' placeholder='search city ...' value={cityName} onChange={(e) => setCityName(e.target.value)}/>
            <button type='button' className='btn btn-warning btn-sm' onClick={handleSearch}>Search</button>
            </form>
            
            {weather.main && (
                <WeatherCard weatherData={weather}/>
            )}
            </div>

        </div>
    )
}

export default App
