const narcissistic = (value) => {
    let array = value.toString().split('')
    let sum = array.reduce((acc, curr) => acc += Math.pow(curr, array.length), 0) === value
    return sum
}