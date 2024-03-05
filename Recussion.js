function recussion (n) {
    if (n === 0 || n === 1) {
        return 1;

    } else {
        return n * recursion(n - 1);
    }
}

const num = 5;
console.log(recursion(num));