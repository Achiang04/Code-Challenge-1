function warnTheSheep(queue) {
    // your code here
    let counter = 0;
    let tampungan = [];
    for (let i = queue.length - 1; i >= 0 ; i--){
        tampungan.push(queue[i]);
    }
    // console.log(tampungan)

    for (let i = 0; i < tampungan.length; i++){
        if (tampungan[i] === "wolf"){
            counter += i
            // console.log(counter)
        }
    }

    if (counter === 0){
       return "Pls go away and stop eating my sheep"
    } else {
        return `Oi! Sheep number ${counter}! You are about to be eaten by a wolf!`
    }

}


// Test Function do not edit
function Test(fun, result) {
    console.log(fun === result)
}


// Test assertions
Test(warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"]), "Oi! Sheep number 1! You are about to be eaten by a wolf!");
Test(warnTheSheep(["sheep", "sheep", "wolf"]), "Pls go away and stop eating my sheep");
Test(warnTheSheep(["sheep", "wolf", "sheep"]), "Oi! Sheep number 1! You are about to be eaten by a wolf!");
Test(warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]), "Oi! Sheep number 6! You are about to be eaten by a wolf!");