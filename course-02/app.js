console.table(process.argv);
console.log(process.argv);

const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.on("line", (input) => {
  console.log(`wprowadzono: ${input}\n`);
});

reader.question('jak masz na imie?\n', (answer) => {
    reader.pause();
    console.log(`milo cie poznac ${answer}!\n`);
    reader.close()
})



