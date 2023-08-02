function bringSingara(money){
    var singaraPrice=10;
    var quantity = money / singaraPrice;
    return quantity;
}
console.log(bringSingara(210))

function getAvrge (assainment1, assainment2, assainment3){
    const total =assainment1 + assainment2 + assainment3;
    const avrge = total / 3;
    return avrge
}
console.log(getAvrge(60,60,58));