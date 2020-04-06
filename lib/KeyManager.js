const ConfigStore = require("configstore");
const packageJson = require("../package.json");

class KeyManager {
  constructor() {
    this.configStore = new ConfigStore(packageJson.name);
  }

  set(key) {
    this.configStore.set("apiKey", key);
    return key;
  }

  get() {
    const key = this.configStore.get("apiKey");
    if (!key) {
      throw new Error("API key not found, Get API key @ https://nomics.com");
    }
    return key;
  }

  delete() {
    const key = this.configStore.get("apiKey");
    if (!key) {
      throw new Error("API key not found, Get API key @ https://nomics.com");
    }
    this.configStore.delete("apiKey");
    return key;
  }
}

module.exports = KeyManager;
