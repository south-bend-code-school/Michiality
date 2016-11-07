
var data = [];
function getData(categoryName) {
  $("li").remove();
$.getJSON("http://typeform-get.herokuapp.com/yelp?category=" + categoryName, function(results) {
  data = [];
  for (var key in results) {
    var name = key;
    data.push([key, results[key].snippet, results[key].image_url, results[key].business_url]);
  }
  for (var i=0; i < data.length; i++) {
    addSuggestedRestaurant(data[i]);
  }
})
}

$(".dropdown-content a").click(function() {
  var category = $(this).html();
  category = category.split("(")[1].split(")")[0];
  console.log(category);

  getData(category);
})

function addSuggestedRestaurant(restaurant) {
  var name = restaurant[0];
  var descriptionText = restaurant[1];
  var image = restaurant[2];
  var url = restaurant[3];

  $( ".Location-List" ).append(
    "<li>" +
    "<img class='Location-Image' src='" + image + "' width= 300px>" +
    "<div class='Location-Description'>" +
    "<h2>" + name + "</h2>" +
    '<p class="Location-Paragraph">' + descriptionText + "</p>" +
    '<a class="Website-Button" href="' + url + '" target="_blank"> Visit Website </a>' +
    '</div>' +
    '</li>'
  );
}
