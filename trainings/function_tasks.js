//Functions examples
/*
function sum(a, b){
    let c = a + b;
    return c;
}

let sum2 = (a, b) => {
    let c = a + b;
    return c;
} 

let sum3 = (a, b) => (a + b);

let s = sum3(12, 3);
console.log(`Sum = ${s}`);
*/

let str = "Today is the most beautiful day in the year!";

//Task 1: (Check if given string includes given symbol.)
let newstr = (any_char) => console.log(`This string includes "${any_char}": ${str.includes(any_char)}`);
newstr("o");

//Task 2: (Check whether a string is blank or not (string with spaces should be also blank))
let empty_string = (some_str) => {
    let trimmed_string = some_str.trim();
    let checked_string = trimmed_string.length;
    if (checked_string === 0){
        console.log(`The string "${some_str}" is empty`);
    }
    else{
        console.log(`The string "${some_str}" is NOT empty`);
    } 
}
empty_string(" .  ")

//convert a string in abbreviated form. console.log(abbrev (“Name Surname")) – should be “N.S.”
// (should convert lower case names to upper)
let abbreviation = (some_str) => {
    some_str = some_str.toUpperCase();
    some_str = some_str.split(" ");
    let first_name = some_str[0];
    let last_name = some_str[1];
    let abbriv = first_name[0].concat(".", last_name[0], ".");
    console.log(`"${abbriv}"`);
    
}
abbreviation("tar andr")

//Function that accept two integers and display the larger
let display_larger = (num1, num2) => {
    if (num1 > num2){
        console.log(`Number ${num1} is larger`)
    }
    else if (num2 > num1){
        console.log(`Number ${num2} is larger`)
    }
    else {
        console.log(`Number ${num1} = Number ${num2}`)
    }
}
display_larger(5.1, 5.2)

//function with conditional statement to sort three numbers
let sort_three_numbers = (a, b, c) => {
    if (a<b && b<c){
        console.log(`${a}, ${b}, ${c}`)
    }
    else if (b<a && a<c){
        console.log(`${b}, ${a}, ${c}`)
    }
    else if (c<a && a<b){
        console.log(`${c}, ${a}, ${b}`)
    }
    else if (a<c && c<b){
        console.log(`${a}, ${c}, ${b}`)
    }
    else if (b<c && c<a){
        console.log(`${b}, ${c}, ${a}`)
    }
    else if (c<b && b<a){
        console.log(`${c}, ${b}, ${a}`)
    }
    else{
        console.log("There are two equal numbers")
    }
}
sort_three_numbers(8, 7, 9)