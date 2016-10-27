var data = [
  ["Chipotle", "Delicious, wide, burritos", "http://test.jpg", "http://www.chipotle.com"],
  ["McDonalds", "Mckey Dees", "http://test.jpg", "http://www.mcdonalds.com"]
]

for (var i=0; i < data.length; i++) {
  addSuggestedRestaurant(data[i]);
}

function addSuggestedRestaurant(restaurant) {
  var name = restaurant[0];
  var descriptionText = restaurant[1];
  var image = restaurant[2];
  var url = restaurant[3];

  var h1 = document.createElement("h1");
  h1.innerHTML = name;
  document.body.appendChild(h1);

  var description = document.createElement("p");
  description.innerHTML = descriptionText;
  document.body.appendChild(description);

  var image = document.createElement("image");
  image.src = image;
  document.body.appendChild(image);

  var link = document.createElement("a");
  link.href = url;
  link.innerHTML = "Visit Website";
  document.body.appendChild(link);
}
