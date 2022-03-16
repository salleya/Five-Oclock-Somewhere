from flask import Flask, request, jsonify
import routes
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
api_key = "9883b365613721589e7b2fdd7c38d0fb"


@app.route('/getWeather', methods=["GET"])
def get_weather():
    city = request.args.get("city")
    response = routes.weather(city)
    return jsonify(response)


if __name__ == '__main__':
    app.run(port=5050)
