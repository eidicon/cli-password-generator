#!/usr/bin/env node
'use strict'

const program = require('commander')
const Password = require('./src/password')

program
  .version('0.0.1', '-v, --version')
  .option('-l --length <n>', 'Password length', 14)
  .option('-u --uppercase <n>', 'Minimal number of uppercase haracters', 1)
  .option('-d --digits <n>', 'Minimal number of digits', 1)
  .option('-s --special <n>', 'MInimal nimber of special character', 1)
  .action(() => Password.genarate(parseInt(program.length), parseInt(program.uppercase), parseInt(program.digits), parseInt(program.special)).then(pass => console.log(pass)))
  .parse(process.argv)
