const _ = require('lodash')
const SPECIAL_CHARS_SET = '.,/-&?$#@!*<>'
const CHARS_SET = 'abcdefghijklmnopqrstuvwxyz'
const NUMBER_SET = '0123456789'

const isValid = (...params) => {
  const [length, ...other] = params
  if ((length < 8) && (other.reduce((acc, curr) => acc + curr, 0) > length)) {
    throw new Error(`password length can not be less then ${length}`)
  }
  return true
}

const getChars = async (upper = false) => {
  let chars = CHARS_SET.split('')
  let resultChar = chars[Math.floor(Math.random() * chars.length)]
  return (upper) ? resultChar.toUpperCase() : resultChar
}

const getDigits = async () => {
  let numbers = NUMBER_SET.split('')
  return numbers[Math.floor(Math.random() * numbers.length)]
}

const getSpecialChars = async () => {
  let specialChars = SPECIAL_CHARS_SET.split('')
  return specialChars[Math.floor(Math.random() * specialChars.length)]
}

class Password {
  static async genarate (length, uppercase, digits, special) {
    isValid(length, uppercase, digits, special)
    let passChars = []
    const lowerCaseLength = length - (uppercase + digits + special)
    for (let i = 0; i < lowerCaseLength; i++) {
      passChars.push(await getChars())
    }
    for (let i = 0; i < uppercase; i++) {
      passChars.push(await getChars(true))
    }
    for (let i = 0; i < digits; i++) {
      passChars.push(await getDigits())
    }
    for (let i = 0; i < special; i++) {
      passChars.push(await getSpecialChars())
    }

    return _.shuffle(passChars, length).join('')
  }
}

module.exports = Password
