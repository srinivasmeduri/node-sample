const eventEmitter = require("events");
const eventEmitter = new eventEmitter();
eventEmitter.on("tutorial",(num1, num2) =>{
    console.log(num1 + num2);
});

eventEmitter.emit("tutorial", 1,2);
class person extends eventEmitter {
    constructor(name){
        super();
        this._name = name
    }

    get name(){
        return this.-this.name;
    }
}

let pedro = new person("pedro");
let christina = new person("christina");
christina.on("name",()=>{
    console.log("my name is " + christina.name);
});
pedro.on("name", () => {
    console.log("my name is " + pedro.name);
});
