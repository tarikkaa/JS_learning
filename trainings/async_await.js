let writeTimeout = (number) => console.log(`Timeout ${number} msec.`);

let pageTimeout = (sec) => setTimeout(writeTimeout, sec, sec);


    

console.log("step 1");
console.log("step 2");
new Promise((resolve, reject) => setTimeout(() => {
    console.log("step 3");
    resolve();
}, 3000)).then(() => {
    console.log("step 4");
});








