module.exports = function reverse (n) {
    return +n.toString().split("").reverse().filter(i => i !== '-').join("")
}
