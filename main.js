var data = [];
function getData(categoryName) {
  $("li").remove();
$.getJSON("http://typeform-get.herokuapp.com/yelp?category=" + categoryName, function(results) {
  data = [];
  for (var key in results) {
    var name = key;
    data.push([key, results[key].snippet, results[key].image_url, results[key].business_url, results[key].location]);
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
  var location = restaurant[4];
  var map_image_url = "https://maps.googleapis.com/maps/api/staticmap?size=250x250&center=" + location.latitude + "," + location.longitude + "&zoom=16&maptype=hybrid&markers=" + location.latitude + "," + location.longitude;

  $( ".Location-List" ).append(
    "<li>" +
    "<img class='Location-Image' src='" + image + "' width= 300px>" +
    "<div class='Location-Description'>" +
    "<h2>" + name + "</h2>" +
    '<p class="Location-Paragraph">' + descriptionText + "</p>" +
    '<a class="Website-Button" href="' + url + '" target="_blank"> Visit Website </a>' +
    '</div>' +
    '<img class="map-image" src="' + map_image_url + '">' + 
    '</li>'
  );
  $("li").on({
      mouseenter: function () {
        $('> .map-image', this).css("width", "300px");
        $(".Location-Description").css("width", "40%");
      },
      mouseleave: function () {
        console.log("mouse left");
      }
  });
}
