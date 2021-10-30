import React, { useState } from 'react'

function WeatherCard(props) {
    const {weatherData} = props
    return (
        <div className="border rounded-2 shadow my-4 p-2 bg-white">
                   <h2 className="card-title text-center">
                        <span>{weatherData.name}</span>
                        <sup style={{fontSize: '16px'}}>{weatherData.sys.country}</sup>
                    </h2>
                    <div className="text-center">
                        {Math.round(weatherData.main.temp)}
                        <sup>&deg;C</sup>
                    </div>
                    <div className="text-center">
                        <img className="city-icon" src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt={weatherData.weather[0].description} />
                        <p>{weatherData.weather[0].description}</p>
                    </div>
                </div>
    )
}

export default WeatherCard
