const axios = require("axios");
  async function getWeather() {
    try {
      const response = await axios.get('https://api.weatherapi.com/v1/current.json?q=Egypt&key=649c885c2f824b039be123944231507');
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  module.exports = { getWeather };