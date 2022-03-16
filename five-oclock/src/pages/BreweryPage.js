import React from 'react';
import { Link } from 'react-router-dom';
import BreweryTable from '../components/BreweryTable';
import WeatherTable from '../components/WeatherTable';
import { searchResults } from '../components/SaveResults';
import { weatherConditions } from '../components/SaveWeather';


function BreweryPage(){

    return (
        <div>
            <h1>Breweries</h1>
            
            <BreweryTable results={searchResults}></BreweryTable>
            <br></br>

            <h2>The weather at your location</h2>

            <WeatherTable weather={weatherConditions[0]}></WeatherTable>
            
            <br></br>
            <p>Enjoy your visit!</p>
            
            <nav>
                <Link to='/'>Return Home</Link>
            </nav>
        </div>
    );  
}

export default BreweryPage;
