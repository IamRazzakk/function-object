const leptop ={
    model: "mx200s",
    color : "black",
    ram : "8GB",
    processor:"i7"
}
const keys = Object.keys(leptop)
console.log(keys)
const value = Object.values(leptop)
// console.log(value);
// console.log(leptop);
for(i = 0;i < keys.length; i++){
    var propertyName = keys[i]
    console.log(propertyName);
    var propertyValue = leptop[propertyName];
    console.log(propertyValue);
}