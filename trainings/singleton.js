
let Singletone = (function(){
    let instance;

    function createInstance(){
        let object = new Object("I am the instance");
        return object;
    }

    return {
        getInstance: function(){
            if (!instance){
                instance = createInstance();
            }
            return instance;
        }
    }
})();

function run(){
let instance1 = Singletone.getInstance();
let instance2 = Singletone.getInstance();
console.log("The same instance?: " + (instance1 === instance2));
}

run();