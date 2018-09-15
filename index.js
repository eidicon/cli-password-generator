#!/usr/bin/env node
'use strict'

const program = require('commander')
const Password = require('./src/password')

program
  .version('0.0.1', '-v, --version')
  .option('-l --length <n>', 'Password length', 14, parseInt)
  .option('-u --uppercase <n>', 'Minimal number of uppercase characters', 1, parseInt)
  .option('-d --digits <n>', 'Minimal number of digits', 1, parseInt)
  .option('-s --special <n>', 'MInimal nimber of special character', 1, parseInt)
  .action(() => console.log(Password.genarate(program.length, program.uppercase, program.digits, program.special)))
  .parse(process.argv)
