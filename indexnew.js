const paragraphs = document.getElementsByClassName("paragraph");
for(const paragraph of paragraphs){
    paragraph.style.color = "blue";
}

let parent = document.querySelector(".parent");
let child = document.querySelector(".child");
alert(child.parentElement.className);

const newButton = document.getElementById("newButton");
newButton.addEventListener( click,() => {
    alert("Hello World!");
});
