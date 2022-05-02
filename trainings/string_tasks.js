
let str = "Today is the most beautiful day in the year!";


// Slice string 
let str_slice = str.slice(-26, -17);
console.log(str_slice);

//Includes (Check if given string includes given symbol.)
let newstr = str.includes("s");
console.log(newstr);

//Trim (Check whether a string is blank
//or not (string with spaces should be also blank))
let str1 = "   ";
let trimmed_string = str1.trim();
let empty_string = trimmed_string === ""
console.log(`The string is empty: ${empty_string}`);