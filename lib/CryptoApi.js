const axios = require("axios");
const colors = require("colors");

class CryptoApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://api.nomics.com/v1/currencies/ticker";
  }

  async getPriceData(coinOption, curOption) {
    try {
      const response = await axios.get(
        `${this.baseUrl}?key=${this.apiKey}&ids=${coinOption}&convert=${curOption}`
      );

      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: curOption,
      });

      let output = "";

      response.data.forEach((coin) => {
        const { symbol, name, price, rank } = coin;
        console.log("Price", formatter.format(price));
        output += `Coin: ${symbol.yellow} (${name}) | Price: ${
          formatter.format(price).green
        } | Rank: ${rank.blue}\n`;
      });

      return output;
    } catch (error) {
      console.error(error.message.red);
    }
  }
}

module.exports = CryptoApi;
