const isPangram = (string) => {
    const letter = 'abcdefghijklmnopqrstuvwxyz'
    return letter.split('').every(item => string.toLowerCase().includes(item))
}