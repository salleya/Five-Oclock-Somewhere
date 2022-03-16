function WeatherTable({weather}) {

    return (
        <table>
            <thead>
                <tr>
                    <th>Current weather conditions:</th>
                </tr>
            </thead>

            <tbody>            
                <tr>{weather.weather}</tr>
                <tr>Temperature: {weather.temp}</tr>
                <tr>Humidity: {weather.humidity}%</tr>
                <tr>Wind: {weather.wind_speed} mph</tr>

            </tbody>
        </table>
    );
}

export default WeatherTable;
