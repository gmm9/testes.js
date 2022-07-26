// MAP()

// const numbers = [1,4,5,9,14,23];

// const doubledNumbers = numbers.map(function (elem){
//     return elem * 2;
// })

// console.log(doubledNumbers)

// ############################
// // filter();

// const yetAnotherArray = [2,3,4,5,4,12,19,7,2,5];

// const uniqueArray = yetAnotherArray.filter((elem, index, arr) => arr.indexOf(elem) === index)
// ############################

const rockets = [
    {country: "Russia",launches: 32},
    {country: "US",launches: 23},
    {country: "China",launches: 16},
    {country: "Europe",launches: 7},
    {country: "India",launches: 4},
    {country: "Japan",launches: 3},
]

const totalLaunches = rockets.reduce(function(prevVal,elem){
    let prevVal = 0;
    prevVal + elem.launches
    // console.log(prevVal)
})

console.log(totalLaunches)
