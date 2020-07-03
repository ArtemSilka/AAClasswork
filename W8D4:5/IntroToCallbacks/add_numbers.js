const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback){

    if (numsLeft <= 0) {
        completionCallback(sum);
    } else {
        reader.question("Give me number: ", function(num1){
            const number1 = parseInt(num1);
            sum += number1;
            addNumbers(sum, numsLeft - 1, completionCallback)
        });
    }      
}

addNumbers(0, 3, sum => { 
    console.log(`Total Sum: ${sum}`); 
    reader.close();
    });
