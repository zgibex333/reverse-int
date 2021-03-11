module.exports = function reverse (n) {
    return parseInt(parseInt(n.toString().split('').reverse().join('')));
}
