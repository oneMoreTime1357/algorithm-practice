var repeatedNTimes = function(A) {
    let N = A.length / 2
    let orderdA = A.sort()
    let count = 1
    let preNum = orderdA[0]
    console.log(orderdA, preNum, N)
    for (let i = 1; i < orderdA.length; i++) {
        if (preNum === orderdA[i]) {
            count++ 
            if (count === N) {
                return orderdA[i]
            }
        } else {
            count = 1
        }
        preNum = A[i]
    }
};

let testArry = [1,2,3,3]
let result = repeatedNTimes(testArry)

console.log(result)