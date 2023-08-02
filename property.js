const leptop ={
    model: "mx200s",
    color : "black",
    ram : "8GB",
    processor:"i7"
}


var condition = leptop["ram"];
// console.log(condition);

// For key


var condition2 = Object.keys(leptop)
// console.log(condition2);


// For value 
var condition3 = Object.values(leptop)
// console.log(condition3);
var propertyName = "ram";
var propertyValue = leptop[propertyName]

var ram = parseInt("8GB")
console.log(propertyName, propertyValue, ram);