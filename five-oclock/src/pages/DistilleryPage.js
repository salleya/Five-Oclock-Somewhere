import React from 'react';
import { Link } from 'react-router-dom';
import DistilleryTable from '../components/DistilleryTable';
import WeatherTable from '../components/WeatherTable';
import { searchResults } from '../components/SaveResults';
import { weatherConditions } from '../components/SaveWeather';


function DistilleryPage(){

    return (
        <div>
            <h1>Distilleries</h1>

            <DistilleryTable distilleries={searchResults}></DistilleryTable>
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

export default DistilleryPage;
