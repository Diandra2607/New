const animedetailElements = document.getElementById("anime-detail");
fetch('https://api.jikan.moe/v4/random/anime')
.then(response => response.json())
.then(data => {
    const titleElement = document.createElement("h1");
    titleElement.innerHTML= data.data.title;
    animedetailElements.appendChild(titleElement);
})
.catch(error => {
    const errorElement = document.createElement("p");
    errorElement.innerHTML= JSON.stringify(error);
    animedetailElements.appendChild(errorElement);
});