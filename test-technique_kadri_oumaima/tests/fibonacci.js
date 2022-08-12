function fibonacci(nmax) {
    let n1 = 0, n2 = 1, nextTerm;
    for (let i = 1; i <= nmax - 1; i++) {
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    return nextTerm;
}

module.exports = fibonacci;
