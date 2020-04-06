const inquirer = require("inquirer");
require("colors");
const KeyManager = require("../lib/KeyManager");
const { isRequired } = require("../utils/validation");

async function set() {
  const keyManager = new KeyManager();
  const input = await inquirer.prompt([
    {
      type: "input",
      name: "key",
      message: "Enter API key".green + " https://nomic.com",
      validate: isRequired,
    },
  ]);
  const key = keyManager.set(input.key);
  if (key) {
    console.log(`API key had set Successfully ${key}`.blue);
  }
}
function show() {
  try {
    const keyManager = new KeyManager();
    const key = keyManager.get();
    console.log("Current API key: ", key.yellow);
    return key;
  } catch (err) {
    console.error(err.message.red);
  }
}
function remove() {
  try {
    const keyManager = new KeyManager();
    const key = keyManager.delete();
    console.log(" API key deleted".blue);
    return key;
  } catch (err) {
    console.error(err.message.red);
  }
}

module.exports = {
  set,
  show,
  remove,
};
