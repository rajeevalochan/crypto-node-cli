const KeyManager = require("../lib/KeyManager");
const CryptoApi = require("../lib/CryptoApi");

async function price({ coin, cur }) {
  try {
    const keyManager = new KeyManager();
    const key = keyManager.get();

    const crytoApi = new CryptoApi(key);
    const priceOutputData = await crytoApi.getPriceData(coin, cur);
    console.log(priceOutputData);
  } catch (error) {
    console.log(error.message.red);
  }
}

module.exports = {
  price,
};
