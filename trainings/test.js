
console.log("Task 1: ");
let a = 1;
let b = 2;
let c = a +b;
console.log(c);

console.log("Task 2: ");
let auto = "Car";
let new_auto = "Test_" + auto;
console.log(new_auto);

console.log("Task 3: ");
let firs_name = "Joe";
let last_name = "Foo";
let age = 20;
let my_data = "Firsname: " + firs_name + ", Lastname: " + last_name + ", Age: " + age;
console.log(my_data);

console.log("Task 4: ");
let given_int = 22;
console.log(given_int > 100);

function try_100(somenum){
     if (somenum > 100){
         console.log("The number is higher than 100")
     }
     if (somenum < 100){
         console.log("The number is less than 100")
     } 
     if (somenum == 100) {
         console.log("The number is 100")
     }
}
try_100(99.99);

console.log("Task 5: ");
let onenum = 9;
let secondnum = 5;
let thirdnum = 8;
console.log(onenum > secondnum && onenum > thirdnum);

console.log("Task 6: ");
let one_num = 40;
let sec_num = 50;
console.log(one_num == 50 || sec_num == 50 || one_num + sec_num == 50);

console.log("Task 7: ");
let new_num = 21;
let multi3 = (new_num % 3) == 0;
let multi7 = (new_num % 7) == 0;
console.log("Number is a multiple of 3: "+ multi3 + "; Number is a multiple of 7: "+ multi7);


let vechicles = ["Volvo", "BMW", "VW", "Skoda"];

try{
    for(let i = 0; i<5; i++){
        if(i > 3){
            throw new Error("Wrong array elem index");
        }
        console.log(`Manufacturer - ${vechicles[i]}`)
    }
}catch (error){
    console.log(`Error was caught`);
    console.log(`Error message was ${error.message}`);
}

vechicles.push("Audi");
vechicles.splice(1, 2, "Maserati");

console.log(vechicles)