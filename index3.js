let num = 5;
if(num >3){
    console.log("Number is greater than 3.");
} else if(num > 1) {
    console.log("Number is greater than 1.");
} else {
    console.log("Number is 1 or less.");
}

let j = 0;
while(j<5){
    alert('The value of j is ' +j);
    j++;
}

const items = [
    {name : "Apple", price : 2},
    {name : "Banana", price : 1},
    {name : "Cherry", price : 3}
];

const doubledPrices = items.map(item => ({name : item.name, doubledprice : item.price * 2}));
console.log(doubledPrices);

