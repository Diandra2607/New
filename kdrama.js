const text = document.getElementById("text");

let kdramalist = [
    {
      "title": "100 Days My Prince",
      "director": "Lee Jong-jae",
      "distributor": "tvN",
      "leadActor": "Do Kyung-soo",
      "leadActress": "Nam Ji-hyun",
      "noepisodes": 16,
      "releasedYear": "2018",
      "countryOfOrigin": "South Korea"
    },
  {
      "title": "Crash Landing on You",
      "director": "Lee Jung-hyo",
      "distributor": "tvN",
      "leadActor": "Hyun Bin",
      "leadActress": "Son Ye-jin",
      "noepisodes": 16,
      "releasedYear": "2019",
      "countryOfOrigin": "South Korea"
    },
   {
      "title": "The Doctors",
      "director": "Oh Choong-hwan",
      "distributor": "SBS TV",
      "leadActor": "Kim Rae-won",
      "leadActress": "Park Shin-hye",
      "noepisodes": 20,
      "releasedYear": "2016",
      "countryOfOrigin": "South Korea"
    },
  ];

  for(let index in kdramalist){
    text.innerHTML += '<div class = "box">' +
    kdramalist[index].title + kdramalist[index].leadActor + '</div>';
  }

  text.innerHTML = kdramalist.map(function(item){
    return item.leadActress;
  }).toString();