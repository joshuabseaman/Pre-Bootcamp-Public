// Always Hungry
// Create a function that accepts an array and prints "yummy" each time one of the values is equal to "food".  If no array values are "food", then print "I'm hungry" once.

// Ex: Given array [1,4,"food","hello",true,"food"] 
// Output:
// yummy
// yummy
// ---------------------------
// Ex: Given array [2,true,5,"hello",8,"four"]
// Output:
// I'm hungry


function alwaysHungry(arr) {
    var foundFood = false;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "food") {
            foundFood = true;
            console.log("Yummy");
            }
        }
    if (!foundFood) {
        console.log("I'm hungry");
    }
}

alwaysHungry([1,4,"food","hello",true,"food"]);

alwaysHungry([2,true,5,"hello",8,"four"]);