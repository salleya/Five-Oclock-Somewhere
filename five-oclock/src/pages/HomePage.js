import '../App.css';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { SaveResults } from '../components/SaveResults';
import { SaveWeather } from '../components/SaveWeather';


function HomePage(){

    const [location, setLocation] = useState('');
    const [category, setCategory] = useState('');
    let history = useHistory();
    
    // Function to call services and save data when submit button is clicked
    async function handleSubmit(location, category) {

        // Initialize business and weather results
        let results = [];
        let weather = [];
        
        let city = location;
        city = city.slice(0, -4);
        let weatherUrl = 'http://127.0.0.1:5050/getWeather?city=' + city;
        let businessUrl = 'http://127.0.0.1:5000/results?location=' + location + '&term=' + category;

        // Call Weather service to get current conditions
        await fetch(weatherUrl)
            .then(response => response.json())
            .then(data => weather.push(data))
            .catch(error => console.error(error));
        
        // Message if no weather results
        const errorMessage = "Error 404: Something went wrong. Are you sure you entered a valid city?";
        if (weather[0] === errorMessage){
            weather = [];
            weather.push({'weather': "No results found"});
        }

        SaveWeather(weather);

        // Call business service to get array of business objects
        await fetch(businessUrl)
            .then(response => response.json())
            .then(data => {
                let index = data.length
                for (let i=0; i < index; i++) {
                    results.push(data[i])
                };
            })
            .catch(error => console.error(error));
        
        // Message if no business results
        if (results.length === 0){
            results.push({'business': "No results found"});
        }
        
        SaveResults(results);

        // Navigate to the desired results page
        if (category === "breweries"){
            history.push("/breweries")   
        };
        if (category === "wineries"){
            history.push("/wineries")
        };
        if (category === "distilleries"){
            history.push("/distilleries")
        };
    }


    return (
        <div>
            <h1>Five O'Clock Somewhere</h1>
            
            <form>
                <fieldset required="required">
        
                {/* Get location from user */}
                <label>Where to?  
                    <input class="where" type="text" value={location} size="30" maxlength="100" 
                    placeholder="City, State (e.g. Denver, CO)" required="required"
                    onChange={e => setLocation(e.target.value)}/>
                </label>
      
                    <section>
            
                        <p>What would you like to find? (select one)</p>

                        {/* Images of categories */}
                        <img src="images/beer.jpg" alt="Flight of beer" height="300"></img>
                        <img src="images/wine.jpg" alt="Grapes and glasses of wine" height="300"></img>
                        <img src="images/whiskey.jpg" alt="Bottles of whiskey" height="300"></img>
                    
                        {/* Radio Buttons to select a category */}
                        <label class="selection">Breweries 
                            <input type="radio" value="breweries"
                            onClick={e => {setCategory(e.target.value);
                            }}/>
                        </label>
                        <label class="selection">Wineries 
                            <input type="radio" value="wineries"
                            onClick={e => {setCategory(e.target.value);
                            }}/>
                        </label>
                        <label class="selection">Distilleries
                            <input type="radio" value="distilleries"
                            onClick={e => {setCategory(e.target.value);
                            }}/>
                        </label>

                    </section>

                </fieldset>
                <br></br>

                {/* Submit button */}
                <button onClick={e => {e.preventDefault();
                    handleSubmit(location, category);}}>Submit</button>
            </form> 

            <br></br>
            <a href="https://pixabay.com/">Images from pixabay</a>
        </div>
    );  
}

export default HomePage;
