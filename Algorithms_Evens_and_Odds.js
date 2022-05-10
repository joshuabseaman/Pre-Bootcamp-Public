// WARM UP: Write some code that loops through an array and prints the values out.
// EX: given var arr = [1,5,8,2,6], your console should print out:
// 1
// 5
// 8
// 2
// 6

// Values greater than second
// Given an array, write a function that returns the number of values in the array that are larger than the second value in the array.
// EX: given an array [2,5,19,3,10,9], your second value is 5 and the number of values greater than 5 in the array is 3
// EX: given an array [4,3,10,1,6,9,2], your second value is 3 and the number of values greater than 3 in the array is 4

// Bonus: add a feature that makes sure the array is large enough before running
// EX: if your array only has [2]...we don't have enough values -- in this situation return "Not enough values"


function greaterThan(anything) {
    for(var i = 0; i < anything.length; i++) {
        console.log(anything[i]);
    }
}
greaterThan([1, 5, 8, 2, 6]);


function greaterThanSecond(anything) {
    var count = 0
    if(anything.length > 1){
        for(var i = 0; i < anything.length; i++) {
            if(anything[i] > anything[1]) {
                console.log(anything[i]); //Remove this line if index values are not wanted.
                count ++
            }
        }
        return count
    }
    else console.log("Not enough values");
}
console.log(greaterThanSecond([4, 3, 10, 1, 6, 9, 2]));