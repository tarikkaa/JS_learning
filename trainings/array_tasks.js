
let cars = ["Volvo", "BMW", "VW", "Skoda"];
let moto = ["Suzuki", "Honda", "Kawasaki"];

// function to get the last element of an array
function last_array_item(){
    cars_last = cars.length - 1;
    console.log(`The last item is ${cars[this.cars_last]}`); 
}
last_array_item()

//program to join all elements of the array into a string
function array_into_string(){
    console.log(`The array string is:\n${cars.join()}`);
}
array_into_string()

//There are two arrays with individual values, write a JavaScript program to compute the sum of each individual
//index value from the given arrays and save them to third array
let cars_sum_ind = 0;
for (let car in cars){
    cars_sum_ind = cars_sum_ind + Number(car);
}
console.log(cars_sum_ind)

let moto_sum_ind = 0;
for (let mot in moto){
    moto_sum_ind = moto_sum_ind + Number(mot);
}
console.log(moto_sum_ind);

let new_vechicles_arr = [cars_sum_ind, moto_sum_ind];
console.log(`The new array is: \[${new_vechicles_arr}\]`);


//Write a JavaScript program to calculate the area and perimeter of a rectangle. Rectangle should be an object with
//properties width and height and methods getArea() and getPerimeter();

let recatgle = {
    "width": 5,
    "height": 3,
};
let getArea = () => console.log(`The rectangle area is: ${recatgle.width * recatgle.height}`);
getArea();
let getPerimeter = () => console.log(`The rectangle perimeter is: ${(recatgle.width + recatgle.height) * 2}`);
getPerimeter();


