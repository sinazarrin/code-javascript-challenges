const firstNonConsecutive = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] + 1 !== arr[i + 1]) {
            return arr[i] + 1
        }
    }
}

firstNonConsecutive([1,2,3,4,5,7,8,9])