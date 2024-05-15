console.log('Halo Maur');

let test;
test = 100;
console.log(test);

const sum = (a,b)=> {
    return a+b
};
alert(sum(1,2));
const myname = 'Rara';

const resultmessage = `Hasil Penjumlahan 1 tambah 2 adalah ${sum(1,2)} dan nama saya ${myname}`;
alert(resultmessage);

const numbers = [1,2,3,4,5,6,7,8,9,10];
const[one,two,,four,,,seven]=numbers;
alert(`one : ${one}, two : ${two}, four : ${four},seven : ${seven}`);
let person = {
    name : 'Syifa',
    age : 21,
    job : "student",
    gender : "f"
}
const{gender, name} = person;
alert(`name : ${name}, gender : ${gender}`);