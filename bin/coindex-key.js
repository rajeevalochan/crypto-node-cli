const program = require("commander");
const { show, remove, set } = require("../commands/key-command");

program
  .command("set")
  .description("Set API key for https://nomics.com")
  .action(set);

program.command("remove").description("Remove API key").action(remove);

program.command("show").description("Show API key").action(show);

program.parse(process.argv);
