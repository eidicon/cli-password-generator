const _ = require('lodash')
const SPECIAL_CHARS_SET = '.,/-&?$#@!*<>'
const CHARS_SET = 'abcdefghijklmnopqrstuvwxyz'
const NUMBER_SET = '0123456789'

const isValid = async (...params) => {
  const [length, uppercase, digits, special] = params
  if (isNaN(length)) throw new Error(`Parameter length is invalid. Expected int, got ${length}`)
  if (isNaN(uppercase)) throw new Error(`Parameter uppercase is invalid. Expected int, got ${uppercase}`)
  if (isNaN(digits)) throw new Error(`Parameter digits is invalid. Expected int, got ${digits}`)
  if (isNaN(special)) throw new Error(`Parameter special is invalid. Expected int, got ${special}`)

  if ((length < 8) && ([uppercase, digits, special].reduce((acc, curr) => acc + curr, 0) > length)) {
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
    await isValid(length, uppercase, digits, special)
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
