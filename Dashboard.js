let xValues = [1,2,3,4,5,6,7,8,9,10,11,12];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      data: [269,251,276,352,270,300,451,403,303,266,301,222],
      borderColor: "red",
      fill: false
    },{
      data: [0,0,131,321,343,408,389,345,325,347,284,287],
      borderColor: "black",
      fill: false
    },{
      data: [119,137,138,126,180,221,211,148,103,124,110,122],
      borderColor: "gray",
      fill: false
    },
    {
      data: [94,104,88,67,61,70,70,126,109,83,99,63],
      borderColor: "darkblue",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});

let locationbar = ["GuttenPlans","EB Public Library","Brunswick Sq Mall","Earle Asphalt"];
let locationvalue = [7001.25,6833.75,3428,1827.25];
let locationcolor = ["red","black","gray","darkblue"];

new Chart("barChart", {
  type: "bar",
  data: {
    labels: locationbar,
    datasets: [{
      backgroundColor: locationcolor,
      data: locationvalue
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Total Revenue of Location"
    }
  }
});



let category = ["Food","Carbonated","Non Carbonated","Water"];
let categoryValue = [0.574,0.221,0.134,0.07];
let categorycolors = [
"#830b1e",
"#f51a37",
"#fe5969",
"#f58482"
];

new Chart("pieChart", {
  type: "pie",
  data: {
    labels: category,
    datasets: [{
      backgroundColor: categorycolors,
      data: categoryValue
    }]
  },
  options: {
    title: {
      display: true,
      text: "Total Transaction by Product Category"
    }
  }
});





let data = [{
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Poland Springs Water",
  "total": "228"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Monster Energy Original",
  "total": "96"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Coca Cola - Zero Sugar",
  "total": "74"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "CheezIt - Original",
  "total": "58"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "SunChips Multigrain - Salsa",
  "total": "54"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Takis - Hot Chilli Pepper \u0026 Lime",
  "total": "52"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Oreo Mini",
  "total": "52"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "SunChips Multigrain - Harvest Cheddar",
  "total": "47"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Snapple Diet Tea - Peach Tea",
  "total": "47"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "S. Pellegrino Sparkling Mineral Water",
  "total": "46"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "KitKat - Crisp Wafers",
  "total": "44"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "SunChips Multigrain - Original",
  "total": "44"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Coca Cola - Regular",
  "total": "42"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Canada Dry - Ginger Ale \u0026 Lemonde",
  "total": "39"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Snapple Tea - Raspberry",
  "total": "36"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Iberia Coconut Water",
  "total": "34"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Snapple Tea - Lemon",
  "total": "28"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Wonderful Pistachios - Variety",
  "total": "25"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Robert Irvine\u0027s - Fit Crunch -  Chocolate Pea",
  "total": "23"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Goldfish Baked - Cheddar",
  "total": "23"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Vitamin Water - Squeezed Lemonade",
  "total": "21"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Takis FUGEO mini",
  "total": "20"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Kinder - Bueno - Crispy Creamy Chocolate",
  "total": "20"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Snapple Diet Tea - Raspberry",
  "total": "19"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Miss Vickie\u0027s Potato Chip - Sea Salt Original",
  "total": "17"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Vitamin Water - XXX Acai BB Pomegranate",
  "total": "17"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Pop Corners - Spicy Queso",
  "total": "17"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Pop Corners - White Cheddar",
  "total": "17"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Good Health Veggie Stix - Sea Salt",
  "total": "16"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Popchips Potato - Sea Salt",
  "total": "16"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Newtons Fig Bar",
  "total": "16"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "BodyArmor LYTE  - Peach Mango",
  "total": "16"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Miss Vickie\u0027s Potato Chip - Sea Salt \u0026 Vinega",
  "total": "15"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Bai Antioxidant - Zambia Bingcherry",
  "total": "15"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Spindrift - Sparkling Water - Pineapple",
  "total": "15"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Canada Dry - Ginger Ale",
  "total": "15"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Red Bull - Energy Drink - Sugar Free",
  "total": "13"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Red Bull - Original",
  "total": "13"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Spindrift - Sparkling Water  Lime",
  "total": "13"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "RXBAR - Protein Bar - Chocolate Sea Salt",
  "total": "13"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Starbucks Refresher - Real Coconut Water",
  "total": "13"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Pop Corners - Sea Salt",
  "total": "13"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Starbucks Doubleshot Energy - Coffee",
  "total": "13"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Bai Antioxidant - Molokai Coconut",
  "total": "12"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Pop Corners - Sweet \u0026 Salty Kettle",
  "total": "12"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Lays Baked - Original",
  "total": "11"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Bai Antioxidant - Kupang strawberry kiwi",
  "total": "11"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Keto Bar - Creamy Peanut Butter Chocolate",
  "total": "10"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Nature\u0027s Garden Trail Mix - Cranberry Healthy",
  "total": "9"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Ritz Bits Peanut Butter",
  "total": "9"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "V8 Vegetable Juice - Original",
  "total": "8"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "CheezIt - White Cheddar",
  "total": "7"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Keto Krisp - Almond Butter",
  "total": "7"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "CheezIt - Double Cheese",
  "total": "7"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Cheetos Baked - Crunchy Cheese",
  "total": "7"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Bai Lemonade - Burundi Blueberry",
  "total": "7"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Snyder\u0027s of Hanover Pretzel Pieces - Honey Mu",
  "total": "7"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Snapple Diet Tea - Lemon",
  "total": "7"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Chum Fruit Bites - Mango/Strawberry",
  "total": "6"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Zevia Zero Calorie Energy - Mango Ginger",
  "total": "6"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Seapoint Farms Dry Roasted Edamame - Wasabi",
  "total": "6"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Vitamin Water - Ice Cool Blue Lavender",
  "total": "6"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "CheezIt - Cheddar Sour Cream and Onion",
  "total": "6"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Belvita Breakfast Biscuit Bites - Blueberry",
  "total": "6"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Mini Chips Ahoy",
  "total": "6"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Bai Antioxidant - Brasilia BB",
  "total": "5"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Bubly - Cherry",
  "total": "5"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "NuGo Dark Chocolate - Pretzel Sea Salt",
  "total": "5"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Autumns Granola Bar - Cinnamon Almond",
  "total": "5"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Bubly - Mango",
  "total": "5"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "BodyArmor LYTE - Strawberry Lemonade",
  "total": "5"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "BodyArmor  LYTE - Blueberry Pomegranate",
  "total": "5"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Oberto Specialty Meats - Original",
  "total": "4"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Cheetos Baked - Flaming Hot",
  "total": "4"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Bubly - Blackberry",
  "total": "4"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "SunChips Multigrain - French Onion",
  "total": "4"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Bubly - Lime",
  "total": "4"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Miss Vickie\u0027s Potato Chip - Smokehouse BBQ",
  "total": "4"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Nature\u0027s Garden Trail Mix - Omega 3",
  "total": "4"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Nature\u0027s Garden Trail Mix - Heart Healthy Mix",
  "total": "4"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Bubly - Grapefruit",
  "total": "3"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Ruffles Baked  - Cheddar \u0026 Sour Cream",
  "total": "3"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Lays Baked - Barbecue",
  "total": "3"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "RXBAR - Protein Bar - Peanut Butter",
  "total": "3"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Belvita Snack Packs - Blueberry",
  "total": "3"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Popchips Potato - Barbeque",
  "total": "3"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Keto Bar - Chocolate Dream",
  "total": "3"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Keep Healthy - Sea Salt Brownie",
  "total": "3"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Lindens - Chocolate Chippers",
  "total": "3"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Spindrift - Sparkling Water Raspberry Lime",
  "total": "2"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Miss Vickie\u0027s Potato Chip - Jalapeno",
  "total": "2"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "KIND Bar - Dark Choc Almond SeaSalt",
  "total": "2"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Snyder\u0027s of Hanover Pretzel - Cheddar Cheese",
  "total": "2"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Miss Vickie\u0027s Potato Chip - Lime \u0026 Cracked Pe",
  "total": "2"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Keep Healthy - Chocolate Coconut",
  "total": "2"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Larabar - Peanut Butter chocolate Chip",
  "total": "1"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Nature\u0027s Valley Crunchy Granola Bar - Oats \u0026",
  "total": "1"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Nature\u0027s Valley Chewy Granola Bar - Fruit \u0026 N",
  "total": "1"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Keto Krisp - Almond/Chocolate",
  "total": "1"
}, {
  "Lokasi": "Brunswick Sq Mall",
  "Produk": "Snyder\u0027s of Hanover Pretzel Pieces - Hot Buff",
  "total": "1"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Coca Cola - Zero Sugar",
  "total": "277"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Poland Springs Water",
  "total": "215"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Starbucks Doubleshot Energy - Mocha",
  "total": "132"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "CheezIt - Original",
  "total": "105"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Goldfish Baked - Cheddar",
  "total": "104"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "SunChips Multigrain - Harvest Cheddar",
  "total": "100"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Starbucks Refresher - Real Coconut Water",
  "total": "98"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "SunChips Multigrain - Salsa",
  "total": "79"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Wonderful Pistachios - Variety",
  "total": "74"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Bai Antioxidant - Tanzania Lemon Super Tea",
  "total": "70"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "SunChips Multigrain - Original",
  "total": "69"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Kinder - Bueno - Crispy Creamy Chocolate",
  "total": "69"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Iberia Coconut Water",
  "total": "63"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Oreo Mini - Go Paks",
  "total": "62"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Miss Vickie\u0027s Potato Chip - Sea Salt Original",
  "total": "54"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "CheezIt - White Cheddar",
  "total": "53"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Lenny \u0026 Larrys - Chocolate Chip",
  "total": "51"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Robert Irvine\u0027s - Fit Crunch -  Chocolate Pea",
  "total": "48"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Lenny \u0026 Larrys - SnickerDoodle",
  "total": "45"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Oreo Mini",
  "total": "44"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Spindrift - Sparkling Water  Lime",
  "total": "41"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Spindrift - Sparkling Water - Pineapple",
  "total": "40"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "CheezIt - Double Cheese",
  "total": "40"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Pringles - Cheddar Cheese",
  "total": "39"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Keto Bar - Creamy Peanut Butter Chocolate",
  "total": "37"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Miss Vickie\u0027s Potato Chip - Sea Salt \u0026 Vinega",
  "total": "36"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Miss Vickie\u0027s Potato Chip - Lime \u0026 Cracked Pe",
  "total": "35"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Pringles - Sour Cream \u0026 Onion",
  "total": "35"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "BodyArmor LYTE - Strawberry Lemonade",
  "total": "32"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Pop Corners - Kettle Corn",
  "total": "30"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "CheezIt - Go Paks",
  "total": "30"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Pop Corners - White Cheddar",
  "total": "29"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Takis - Hot Chilli Pepper \u0026 Lime",
  "total": "29"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "CheezIt - Cheddar Sour Cream and Onion",
  "total": "29"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Genius Keto Bar - Chocolate Dream",
  "total": "28"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Snyder\u0027s of Hanover Pretzel Pieces - Honey Mu",
  "total": "28"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Seapoint Farms Dry Roasted Edamame - Wasabi",
  "total": "27"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "RXBAR - Protein Bar - Peanut Butter",
  "total": "27"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Mini Chips Ahoy - Go Paks",
  "total": "27"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "BodyArmor  LYTE - Blueberry Pomegranate",
  "total": "27"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Snapple Diet Tea - Peach Tea",
  "total": "26"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Snyder\u0027s of Hanover Pretzel Pieces - Hot Buff",
  "total": "26"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Mini Chips Ahoy",
  "total": "26"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "RXBAR - Protein Bar - Chocolate Sea Salt",
  "total": "25"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "KitKat - Crisp Wafers",
  "total": "24"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Ice Breakers Ice Cubes - PepperMint",
  "total": "24"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Snapple Diet Tea - Lemon",
  "total": "23"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Pringles - Original",
  "total": "23"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Belvita Snack Packs - Blueberry",
  "total": "22"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "S. Pellegrino Sparkling Mineral Water",
  "total": "22"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Simply Protein - Peanut Butter Chocolate",
  "total": "22"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "SunChips Multigrain - French Onion",
  "total": "21"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Pop Corners - Sea Salt",
  "total": "20"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "BodyArmor LYTE  - Peach Mango",
  "total": "20"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Teddy Grahams - Go Paks",
  "total": "20"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Oreo Single Server 6 ct",
  "total": "19"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Snyder\u0027s of Hanover Pretzel Pieces - Cheddar",
  "total": "19"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Miss Vickie\u0027s Potato Chip - Jalapeno",
  "total": "17"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Takis FUGEO mini",
  "total": "17"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Miss Vickie\u0027s Potato Chip - Smokehouse BBQ",
  "total": "16"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Simply Protein - Dark Chocolate Sea Salt",
  "total": "15"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Lindens - Chocolate Chippers",
  "total": "14"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Autumns Granola Bar - Cinnamon Almond",
  "total": "13"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "V8 Vegetable Juice - Original",
  "total": "13"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Starbucks Doubleshot Energy - Coffee",
  "total": "12"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Snyder\u0027s of Hanover Pretzel - Cheddar Cheese",
  "total": "12"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Good Health Veggie Stix - Sea Salt",
  "total": "11"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Honest Tea - Berry Hibiscus",
  "total": "10"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Spindrift - Sparkling Water  Grapefruit",
  "total": "10"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Simply Protein - Lemon Coconut",
  "total": "10"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Pop Corners - Sweet \u0026 Salty Kettle",
  "total": "9"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Nutter Butter Bites",
  "total": "9"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Snapple Diet Tea - Raspberry",
  "total": "8"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Red Bull - Energy Drink - Sugar Free",
  "total": "8"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Hungry Buddha - Chocolate Chip",
  "total": "7"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Keep Healthy - Chocolate Fudge",
  "total": "7"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Snapple Tea - Raspberry",
  "total": "7"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "TruBar - Cookie Dough",
  "total": "7"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "TruBar - Daydreaming about Donuts",
  "total": "7"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Orchard Bar - Variety",
  "total": "7"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Ritz Bits Cheese",
  "total": "7"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Good Health Veggie Stix - Zesty Ranch",
  "total": "6"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Hungry Buddha - Coconut Cocoa",
  "total": "6"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Keto Krisp - Almond/Chocolate",
  "total": "6"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Keto Krisp - Almond Butter",
  "total": "6"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Popchips Potato - Barbeque",
  "total": "6"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Popchips Potato - Sour Cream \u0026 Onion",
  "total": "6"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Popchips Potato - Sea Salt",
  "total": "6"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Bai Antioxidant - Kula Watermelon",
  "total": "5"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Belvita Snack Bites - Cinnamon BS Go Paks",
  "total": "5"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Belvita Snack Packs - Chocolate",
  "total": "5"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Pop Corners - Spicy Queso",
  "total": "4"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Zone Perfect - Chocolate Chip Cookie Dough",
  "total": "4"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Nature\u0027s Bakery Fig Bar - Blueberry",
  "total": "4"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Bai Antioxidant - Zambia Bingcherry",
  "total": "3"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Bai Lemonade - Burundi Blueberry",
  "total": "3"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Remedy Kombucha - Ginger Lemon",
  "total": "2"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Skippy Peanut Butter - Go Paks",
  "total": "2"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Bai Antioxidant - Kupang strawberry kiwi",
  "total": "2"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Orchard Bar - Pineapple Coconut \u0026 Macadamia",
  "total": "1"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Orchard Bar - Cranberry Orange \u0026 Walnut",
  "total": "1"
}, {
  "Lokasi": "EB Public Library",
  "Produk": "Nature\u0027s Bakery Fig Bar - Raspberry",
  "total": "1"
}, {
  "Lokasi": "EB Public Library",
  "Produk": null,
  "total": "0"
}, {
  "Lokasi": "Earle Asphalt",
  "Produk": "Robert Irvine\u0027s - Fit Crunch -  Chocolate Pea",
  "total": "102"
}, {
  "Lokasi": "Earle Asphalt",
  "Produk": "Wonderful Pistachios - Variety",
  "total": "93"
}, {
  "Lokasi": "Earle Asphalt",
  "Produk": "SunChips Multigrain - Harvest Cheddar",
  "total": "47"
}, {
  "Lokasi": "Earle Asphalt",
  "Produk": "Pop Corners - Sea Salt",
  "total": "46"
}, {
  "Lokasi": "Earle Asphalt",
  "Produk": "SunChips Multigrain - Salsa",
  "total": "40"
}, {
  "Lokasi": "Earle Asphalt",
  "Produk": "CheezIt - Original",
  "total": "36"
}, {
  "Lokasi": "Earle Asphalt",
  "Produk": "Miss Vickie\u0027s Potato Chip - Smokehouse BBQ",
  "total": "34"
}, {
  "Lokasi": "Earle Asphalt",
  "Produk": "Miss Vickie\u0027s Potato Chip - Jalapeno",
  "total": "31"
}, {
  "Lokasi": "Earle Asphalt",
  "Produk": "Pop Corners - Kettle Corn",
  "total": "31"
}, {
  "Lokasi": "Earle Asphalt",
  "Produk": "Jacks Links Bar Beef Strip",
  "total": "24"
}, {
  "Lokasi": "Earle Asphalt",
  "Produk": "Simply Protein - Lemon Coconut",
  "total": "21"
}, {
  "Lokasi": "Earle Asphalt",
  "Produk": "Snapple Diet Tea - Lemon",
  "total": "20"
}, {
  "Lokasi": "Earle Asphalt",
  "Produk": "Oreo Mini",
  "total": "20"
}, {
  "Lokasi": "Earle Asphalt",
  "Produk": "Keto Bar - Creamy Peanut Butter Chocolate",
  "total": "20"
}, {
  "Lokasi": "Earle Asphalt",
  "Produk": "SunChips Multigrain - Original",
  "total": "20"
}, {
  "Lokasi": "Earle Asphalt",
  "Produk": "Fritos - Original",
  "total": "20"
}, {
  "Lokasi": "Earle Asphalt",
  "Produk": "Pop Corners - Spicy Queso",
  "total": "19"
}, {
  "Lokasi": "Earle Asphalt",
  "Produk": "Goldfish Baked - Cheddar",
  "total": "19"
}, {
  "Lokasi": "Earle Asphalt",
  "Produk": "Coca Cola - Zero Sugar",
  "total": "17"
}, {
  "Lokasi": "Earle Asphalt",
  "Produk": "Miss Vickie\u0027s Potato Chip - Lime \u0026 Cracked Pe",
  "total": "16"
}, {
  "Lokasi": "Earle Asphalt",
  "Produk": "Keto Krisp - Almond Butter",
  "total": "16"
}, {
  "Lokasi": "Earle Asphalt",
  "Produk": "S. Pellegrino Essenza Mineral Water - Blood O",
  "total": "15"
}, {
  "Lokasi": "Earle Asphalt",
  "Produk": "KitKat - Crisp Wafers",
  "total": "14"
}, {
  "Lokasi": "Earle Asphalt",
  "Produk": "Good Health Veggie Stix - Sea Salt",
  "total": "13"
}, {
  "Lokasi": "Earle Asphalt",
  "Produk": "Newtons Fig Bar",
  "total": "13"
}, {
  "Lokasi": "Earle Asphalt",
  "Produk": "Pop Corners - White Cheddar",
  "total": "13"
}, {
  "Lokasi": "Earle Asphalt",
  "Produk": "Kinder - Bueno - Crispy Creamy Chocolate",
  "total": "12"
}, {
  "Lokasi": "Earle Asphalt",
  "Produk": "CheezIt - Cheddar Sour Cream and Onion",
  "total": "12"
}, {
  "Lokasi": "Earle Asphalt",
  "Produk": "Lindens - Chocolate Chippers",
  "total": "12"
}, {
  "Lokasi": "Earle Asphalt",
  "Produk": "CheezIt - White Cheddar",
  "total": "11"
}, {
  "Lokasi": "Earle Asphalt",
  "Produk": "Monster Energy  Zero Ultra",
  "total": "10"
}, {
  "Lokasi": "Earle Asphalt",
  "Produk": "Takis - Hot Chilli Pepper \u0026 Lime",
  "total": "10"
}, {
  "Lokasi": "Earle Asphalt",
  "Produk": "RXBAR - Protein Bar - Peanut Butter",
  "total": "10"
}, {
  "Lokasi": "Earle Asphalt",
  "Produk": "Miss Vickie\u0027s Potato Chip - Sea Salt \u0026 Vinega",
  "total": "10"
}, {
  "Lokasi": "Earle Asphalt",
  "Produk": "Doritos Spicy Nacho",
  "total": "10"
}, {
  "Lokasi": "Earle Asphalt",
  "Produk": "NuGo Dark Chocolate - Choc Chip",
  "total": "9"
}, {
  "Lokasi": "Earle Asphalt",
  "Produk": "Takis FUGEO mini",
  "total": "9"
}, {
  "Lokasi": "Earle Asphalt",
  "Produk": "Keto Krisp - Almond/Chocolate",
  "total": "8"
}, {
  "Lokasi": "Earle Asphalt",
  "Produk": "Snyder\u0027s of Hanover Pretzel - Cheddar Cheese",
  "total": "8"
}, {
  "Lokasi": "Earle Asphalt",
  "Produk": "Nutter Butter Bites",
  "total": "8"
}, {
  "Lokasi": "Earle Asphalt",
  "Produk": "Lays - Classic",
  "total": "8"
}, {
  "Lokasi": "Earle Asphalt",
  "Produk": "V8 Vegetable Juice - Original",
  "total": "7"
}, {
  "Lokasi": "Earle Asphalt",
  "Produk": "Belvita Snack Packs - Blueberry",
  "total": "7"
}, {
  "Lokasi": "Earle Asphalt",
  "Produk": "Snapple Diet Tea - Raspberry",
  "total": "7"
}, {
  "Lokasi": "Earle Asphalt",
  "Produk": "CheezIt - Double Cheese",
  "total": "7"
}, {
  "Lokasi": "Earle Asphalt",
  "Produk": "SunChips Multigrain - French Onion",
  "total": "7"
}, {
  "Lokasi": "Earle Asphalt",
  "Produk": "Popchips Potato - Sour Cream \u0026 Onion",
  "total": "7"
}, {
  "Lokasi": "Earle Asphalt",
  "Produk": "Popchips Potato - Sea Salt",
  "total": "7"
}, {
  "Lokasi": "Earle Asphalt",
  "Produk": "Seapoint Farms Dry Roasted Edamame - Wasabi",
  "total": "6"
}, {
  "Lokasi": "Earle Asphalt",
  "Produk": "Popchips Potato - Barbeque",
  "total": "6"
}, {
  "Lokasi": "Earle Asphalt",
  "Produk": "Hungry Buddha - Chocolate Chip",
  "total": "6"
}, {
  "Lokasi": "Earle Asphalt",
  "Produk": "Oreo Single Server 6 ct",
  "total": "6"
}, {
  "Lokasi": "Earle Asphalt",
  "Produk": "Hersheys Milk Chocolate",
  "total": "6"
}, {
  "Lokasi": "Earle Asphalt",
  "Produk": "BodyArmor LYTE  - Peach Mango",
  "total": "5"
}, {
  "Lokasi": "Earle Asphalt",
  "Produk": "BodyArmor LYTE  - Berry Punch",
  "total": "5"
}, {
  "Lokasi": "Earle Asphalt",
  "Produk": "Vitamin Water - Ice Cool Blue Lavender",
  "total": "4"
}, {
  "Lokasi": "Earle Asphalt",
  "Produk": "Vitamin Water - Squeezed Lemonade",
  "total": "4"
}, {
  "Lokasi": "Earle Asphalt",
  "Produk": "RXBAR - Protein Bar - Chocolate Sea Salt",
  "total": "4"
}, {
  "Lokasi": "Earle Asphalt",
  "Produk": "Made in Nature - Mangoes Sweet \u0026 Tangy",
  "total": "4"
}, {
  "Lokasi": "Earle Asphalt",
  "Produk": "Zevia Organic Tea - Peach",
  "total": "4"
}, {
  "Lokasi": "Earle Asphalt",
  "Produk": "Ritz Bits Peanut Butter",
  "total": "4"
}, {
  "Lokasi": "Earle Asphalt",
  "Produk": "Belvita Breakfast Cookies - Blueberry",
  "total": "3"
}, {
  "Lokasi": "Earle Asphalt",
  "Produk": "Keto Bar - Chocolate Dream",
  "total": "3"
}, {
  "Lokasi": "Earle Asphalt",
  "Produk": "Cheetos Baked - Flaming Hot",
  "total": "2"
}, {
  "Lokasi": "Earle Asphalt",
  "Produk": "Spindrift - Sparkling Water  Lime",
  "total": "2"
}, {
  "Lokasi": "Earle Asphalt",
  "Produk": "Good Health Veggie Stix - Zesty Ranch",
  "total": "2"
}, {
  "Lokasi": "Earle Asphalt",
  "Produk": "Belvita Snack Packs - Cinnamon",
  "total": "2"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Monster Energy Original",
  "total": "420"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Coca Cola - Regular",
  "total": "308"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Sunkist Soda - Orange",
  "total": "290"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Coca Cola - Zero Sugar",
  "total": "280"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Red Bull - Original",
  "total": "225"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "KitKat - Crisp Wafers",
  "total": "184"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Cheetos - Fleming Hot Crunchy",
  "total": "113"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Funyuns - Flaming Hot",
  "total": "103"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Cheetos Flaming Hot Limon Crunchy",
  "total": "97"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Snapple Tea - Raspberry",
  "total": "96"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Nature\u0027s Bakery Fig Bar - Raspberry",
  "total": "90"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Lays - Classic",
  "total": "80"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Snapple Tea - Lemon",
  "total": "75"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Nature\u0027s Bakery Fig Bar - Blueberry",
  "total": "74"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Chesters Fries Flaming hot",
  "total": "71"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Snapple Tea - Peach",
  "total": "68"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Doritos Famin Hot Nacho",
  "total": "64"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Doritos Nacho Cheese",
  "total": "49"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Snapple Diet Tea - Lemon",
  "total": "45"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Snapple Diet Tea - Peach Tea",
  "total": "43"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "SunChips Multigrain - Harvest Cheddar",
  "total": "39"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Cheetos Puffs",
  "total": "39"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Doritos Spicy Nacho",
  "total": "39"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Doritos Cool Ranch",
  "total": "38"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Fritos - Original",
  "total": "37"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Cheetos Cheddar Jalapeno",
  "total": "35"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Takis FUGEO mini",
  "total": "33"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Nutri Grain Apple Cinnamon",
  "total": "32"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Mini Chips Ahoy",
  "total": "30"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Cheetos - Crunchy",
  "total": "29"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Ritz Bits Cheese",
  "total": "28"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Oreo Single Server 6 ct",
  "total": "28"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "SunChips Multigrain - Salsa",
  "total": "25"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Doritos Dinamita Chile Lemon",
  "total": "24"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Cheetos Baked - Crunchy Cheese",
  "total": "24"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Cheetos Baked - Flaming Hot",
  "total": "23"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Oreo Mini",
  "total": "21"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Jack Links Beef Steak Original",
  "total": "21"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Newtons Fig Bar",
  "total": "20"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "SunChips Multigrain - Original",
  "total": "19"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Good Health Veggie Stix - Zesty Ranch",
  "total": "18"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Pure Organic Fruit Bar - Strawberry Banana",
  "total": "17"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Skinny Pop Popcorn",
  "total": "15"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Nutter Butter Bites",
  "total": "15"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Munchies Snack mix Flaming Hot",
  "total": "15"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "SunChips Multigrain - French Onion",
  "total": "15"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Ruffles Baked  - Cheddar \u0026 Sour Cream",
  "total": "15"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Good Health Veggie Stix - Sea Salt",
  "total": "13"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Goldfish Baked - Cheddar",
  "total": "11"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Pop Corners - Spicy Queso",
  "total": "10"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Jacks Links Bar Beef Strip",
  "total": "9"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Pop Corners - Sea Salt",
  "total": "9"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Hersheys Milk Chocolate",
  "total": "9"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Chum Fruit Bites - Mango/Strawberry",
  "total": "8"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Popchips Potato - Barbeque",
  "total": "8"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Snapple Lemonade - black berry",
  "total": "8"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Snapple Lemonade - watermelon",
  "total": "8"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Snapple Lemonade - pineapple",
  "total": "8"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Stretch Island Fruit Leathers Snacks - Variet",
  "total": "7"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Lays - Barbecue",
  "total": "7"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Miss Vickie\u0027s Potato Chip - Jalapeno",
  "total": "6"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "CheezIt - Original",
  "total": "6"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Quaker Caramel Rice Crisps",
  "total": "6"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "CheezIt - Double Cheese",
  "total": "6"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Takis - Hot Chilli Pepper \u0026 Lime",
  "total": "5"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Miss Vickie\u0027s Potato Chip - Smokehouse BBQ",
  "total": "5"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Pure Organic Pineapple Passionfruit",
  "total": "5"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Pop Corners - Kettle Corn",
  "total": "5"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Pure Organic Fruit Bar - Raspberry Lemonade",
  "total": "5"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "CheezIt - White Cheddar",
  "total": "5"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Miss Vickie\u0027s Potato Chip - Lime \u0026 Cracked Pe",
  "total": "4"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Miss Vickie\u0027s Potato Chip - Sea Salt \u0026 Vinega",
  "total": "4"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Quaker Apple Cinnamon Rice Crisps",
  "total": "4"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Quaker ButterMilk Ranch Rice Crisps",
  "total": "4"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Spindrift - Sparkling Water  Lime",
  "total": "3"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Pure Organic Fruit Bar - Pineapple Passion Fr",
  "total": "2"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Pop Corners - White Cheddar",
  "total": "1"
}, {
  "Lokasi": "GuttenPlans",
  "Produk": "Quaker Cheddar Rice Crisps",
  "total": "1"
}];

const rowsPerPage = 10; 
        let currentPage = 1; 
  
  
        function displayTable(page) { 
            const table = document.getElementById("table"); 
            const startIndex = (page - 1) * rowsPerPage; 
            const endIndex = startIndex + rowsPerPage; 
            const slicedData = data.slice(startIndex, endIndex); 
  
            // Clear existing table rows 
            table.innerHTML = ` 
            <tr>
            <th>Lokasi</th>
            <th>Produk</th>
            <th>Total</th>
        </tr>
    `; 
  
            // Add new rows to the table 
            slicedData.forEach(item => { 
                const row = table.insertRow(); 
                const lokasiCell = row.insertCell(0); 
                const produkCell = row.insertCell(1); 
                const totalCell = row.insertCell(2); 
               lokasiCell.innerHTML = item.Lokasi; 
                produkCell.innerHTML = item.Produk; 
                totalCell.innerHTML = item.total; 
                if(row%2) {
                  row.style.backgroundColor = "white";
                } else {
                  row.style.backgroundColor = "lightgrey";
                }
            }); 
  
            // Update pagination 
            updatePagination(page); 
        } 
  
        function updatePagination(currentPage) { 
            const pageCount = Math.ceil(data.length / rowsPerPage); 
            const paginationContainer = document.getElementById("pagination"); 
            paginationContainer.innerHTML = ""; 
  
            for (let i = 1; i <= pageCount; i++) { 
                const pageLink = document.createElement("a"); 
                pageLink.href = "#"; 
                pageLink.innerText = i; 
                pageLink.onclick = function () { 
                    displayTable(i); 
                }; 
                if (i === currentPage) { 
                    pageLink.style.fontWeight = "bold"; 
                } 
                paginationContainer.appendChild(pageLink); 
                paginationContainer.appendChild(document.createTextNode(" ")); 
            } 
        } 
  
        // Initial display 
        displayTable(currentPage); 


        let productbar = document.getElementById( 
          "stackedChartproduct");
          let stackedbarproduct = new Chart(productbar, { 
            type: 'bar', 
            data: { 
                labels: ["AUTUMN", "SPRING", "SUMMER",  
                    "WINTER"], 
                datasets: [{ 
                    label: 'Non Carbonated', 
                    backgroundColor: "green", 
                    data: [853, 925, 1178.5, 405.5]
                }, { 
                    label: 'Carbonated', 
                    backgroundColor: "red", 
                    data: [1034,1200.25, 1452.5, 809.75]
                }, { 
                    label: 'Food', 
                    backgroundColor: "yellow", 
                    data: [2578.25, 2751.25, 3183.75, 1504.75] },
                    {
                    label: 'Water', 
                    backgroundColor: "blue", 
                    data: [254,426.25, 326.25, 207.25]
                }], 
            }, 
            options: { 
                plugins: { 
                    title: { 
                        display: true, 
                        text: 'Product per season' 
                    }, 
                }, 
                scales: { 
                    x: { 
                        stacked: true, 
                    }, 
                    y: { 
                        stacked: true 
                    } 
                } 
            } 
        }); 

        let categorybar = document.getElementById( 
          "stackedChartcategory");
          let stackedbarcategory = new Chart(categorybar, { 
            type: 'bar', 
            data: { 
                labels: ["GuttenPlans","EB Public Library","Brunswick Sq Mall","Earle Asphalt"], 
                datasets: [{ 
                    label: 'Non Carbonated', 
                    backgroundColor: "pink", 
                    data: [9, 21, 25, 7]
                }, { 
                    label: 'Carbonated', 
                    backgroundColor: "lavender", 
                    data: [5,2,7, 2]
                }, { 
                    label: 'Food', 
                    backgroundColor: "deepskyblue", 
                    data: [64, 76, 62, 55] },
                    {
                    label: 'Water', 
                    backgroundColor: "yellow", 
                    data: [0,3, 3, 6]
                }], 
            }, 
            options: { 
                plugins: { 
                    title: { 
                        display: true, 
                        text: 'Product per season' 
                    }, 
                }, 
                scales: { 
                    x: { 
                        stacked: true, 
                    }, 
                    y: { 
                        stacked: true 
                    } 
                } 
            } 
        }); 


       


















