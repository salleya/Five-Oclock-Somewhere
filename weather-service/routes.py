import requests


def weather(city):
    api_request = "http://api.openweathermap.org/data/2.5/weather?q=" + str(city) +"&units=imperial" + "&appid=9883b365613721589e7b2fdd7c38d0fb"
    response = requests.get(api_request)
    if response.status_code != 200:
        return "Error " + str(response.status_code) + ": Something went wrong. Are you sure you entered a valid city?"
    json = response.json()
    conditions = json["weather"][0]["description"]
    temp = json["main"]["temp"]
    humidity = json["main"]["humidity"]
    wind_speed = json["wind"]["speed"]
    weather_dict = {
        "weather": conditions,
        "temp": str(temp) + " degrees Fahrenheit",
        "humidity": humidity,
        "wind_speed": wind_speed
    }
    return weather_dict

