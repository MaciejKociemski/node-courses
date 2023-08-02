const readline = require('readline');
const fs = require("fs").promises;

const { program } = require("commander");
const { min } = require("lodash");
require("colors");

program.option(
  "-f,--file [type]",
  "nazwa pliku do zapisania wyniku",
  "base.txt"
);

program.parse(process.argv);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
const logFile = program.opts().file;
const mind = Math.floor(Math.random() * 10) + 1;


const isValid = (value) => {
    if (isNaN(value)){
        console.log('wprowadź liczbę '.red)
        return false
    }
    if (value < 1 || value > 10) {
        console.log('zly zakres liczb'.red.bgBlue)
        return false
    }
    return true
}

const log = async (data) => {
    try {
        await fs.appendFile(logFile, `${data}/n`)
        console.log(`Resultat zapisany w pliku ${logFile}`)
        
    } catch {
        console.log('cos poszlo nie tak')
        
    }
}
console.log(mind);

const game = () => {
    rl.question(
        'wprowadz liczbe od 1 do 10 '.yellow,
        async (value) => {
            const number = Number.parseInt(value, 10)

            if (!isValid(number)) {
                console.log('niepoprawna wartosc, dawaj jeszcze raz'.red);
                game();
                return;
            }
            count += 1
            // console.log(value);
            // console.log(mind);

            if (number === mind) {
                console.log(`gratulacje odgadles liczbe za ${count} razem`.green.bgCyan)
               await log(
                  `${new Date().toLocaleDateString()}: Gratulacje. Odgadłeś liczbę za ${count} razem`
                );
                rl.close();
                return
            }
            console.log('nie zgadles, sprobuj jeszcze raz')
            game()
        } 
    )
}

game();
