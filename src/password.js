const SPECIAL_CHARS_SET='.,/-&?$#@!*<>'
const DEFAILT_LENGTH=14

const isValid = (...params) => {
  let [length, ...other] = params
  console.log(length)
  console.log(other)
  if (length) {
    throw new Error(`password length can not be less then ${length}`)
  }
  if (other.reduce((acc, curr) => acc + curr, 0) > length) {
    throw new Error(`password length can not be less then ${length}`)
  }
}

class Password {
  static genarate (length, uppercase, digits, special) {
    isValid(length, uppercase, digits, special)
    //return `i'm password`
    return new Error(`pooop`)
  }
}

module.exports = Password
