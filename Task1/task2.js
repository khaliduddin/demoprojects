//var A = [5, 6, 19, 2]

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    let mimimumFiltersRequired = 0
    let totalPollution = 0

    A.sort(function(a, b){return b - a})
    console.log(A)
    
    totalPollution = getTotalPollution(A);

    let tempArr = A

    for(let i=0; i< A.length; i++) {
        console.log(totalPollution)
        if(totalPollution > totalPollution/2) {
            tempArr[i] = addOneFilter(A[i])
            //result = addOneFilter(A[0])
            mimimumFiltersRequired += 1
            totalPollution = getTotalPollution(tempArr)
        }
        //total = total + A[i]
    }

    console.log(tempArr)
}

function addOneFilter(pollution) {    
    //reduces the pollution by half
    return pollution/2;
}

function getTotalPollution (pollutionArr) {
    let total = 0
    for(let i=0; i< pollutionArr.length; i++) {
        total = total + pollutionArr[i]
    }

    return total
}