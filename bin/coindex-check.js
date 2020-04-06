const program = require("commander");
const { price } = require("../commands/check-command");

program
  .command("price")
  .description("Check price of the Crypto")
  .option("--coin <type>", "Add specific coin types", "BTC, ETH, XRP")
  .option("--cur <currency>", "Change the currency", "USD")
  .action((cmd) => price(cmd));

program.parse(process.argv);

// a9cc61844d21e62ca72f696e1ab99f2d
