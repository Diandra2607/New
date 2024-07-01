const text = document.getElementById('text');

// text.innerHTML = 'Hi';

let pets = ['cat', 'dog', 'chicken', 'turtle', 'rabbit'];

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
text.innerHTML = numbers.length;

let person = {
    name: 'Alif',
    age: 21,
    isStudent: true,
    university: 'Univ A'
}

let revouStudent = [
    { name: 'Alif', age: 21, grade: 100 },    
    { name: 'Maur', age: 20, grade: 100 },
    { name: 'Nabiila', age: 21, grade: 100 },
    { name: 'Rizki', age: 20, grade: 100 },
    { name: 'Diandra', age: 21, grade: 100 }
];
text.innerHTML =  "nama: " + revouStudent[2].name+ ", score: "+revouStudent[2].grade;

// for (let index in pets){
//     text.innerHTML += pets[index] + '<br>';
// }
const text = document.getElementById('text');

const btnMe = document.getElementById('btn-me');

btnMe.addEventListener('mouseout', function () {
  const randomTop = Math.floor(Math.random() * window.innerHeight);
  const randomLeft = Math.floor(Math.random() * window.innerWidth);

  btnMe.style.top = randomTop + 'px';
  btnMe.style.left = randomLeft + 'px';
  btnMe.style.color = 'red';
  btnMe.style.position = 'absolute';
});


const inputMessage = document.getElementById('message');
inputMessage.addEventListener('keypress', function (event) {
  text.innerHTML = 'key = ' + event.key + ', code = ' + event.code;
})


//1. interaksi untuk kalo diklik dia nambah
let number = 1;
const btnAdd = document.getElementById('btn-add');
btnAdd.addEventListener('click', function () {
  let newParagraph = document.createElement('p');
  newParagraph.innerHTML = "Apa ya " + number;
  number++;
  document.body.appendChild(newParagraph);
})
