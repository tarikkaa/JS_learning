
    
/*
Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 1000)),
]).then((results) => {
console.log(results[0]);
console.log(results[1]);
console.log(results[2]);
});
*/


// Function that uses Promise, then

let myData = (data)=> {
    return new Promise((res, rej)=> {
        if (typeof data !== "number"){
            rej(new Error("Data is not a number"))
        } else if (data % 2 !== 0) {
        setTimeout(()=> {console.log("ODD")
        res()
    }, 1000)} else if (data % 2 == 0) {
        setTimeout(() => {console.log("EVEN")
        res()
        }, 2000)}
    }).then(() => {
        console.log(`Your number is ${data}`)
    }).catch((err) => {
        console.log(`Error: ${err.message}`)
    })
}



// Async function

let myAsync = async (data) => {
    try{
        await new Promise ((res, rej) => {
            if (typeof data !== "number") {
                rej(new Error("Data is not a number"))      
            }
            else if (data % 2 !== 0){
                setTimeout(()=>{
                    console.log("ODD")
                    res()
                }, 1000)
                
            }
            else if (data % 2 == 0){
                setTimeout(()=> {
                    console.log("EVEN")
                    res()
                }, 2000)
            } 
        })
        console.log(`The number is ${data}`)
    }catch(err){
        console.log(`Error: ${err.message}`)
    }
}

