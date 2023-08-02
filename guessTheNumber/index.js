const readline = require("readline");
const fs = require('fs');
const { areIntervalsOverlappingWithOptions } = require("date-fns/fp");
const rl = readline.createInterface({
    // input:fs.createReadStream('./readme.txt'),
  input: process.stdin,
  output: process.stdout,
});

// rl.on('line', (cmd) => {
//   console.log(`napisane zostało: ${cmd}`);
// });


rl.question('Skąd pochodzisz?', answer => {
    console.log(`super, ja nie jestem z ${answer} ale spoko `)
    rl.close()
})