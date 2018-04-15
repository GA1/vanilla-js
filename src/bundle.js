var rooms = [
  {
    "type": "luxury",
    "amenities": ["fridge", "tv", "internet"],
    "price": 20,
  },
  {
    "type": "regular",
    "amenities": ["fridge", "internet"],
    "price": 30,
  }
]

var sum = 0

function addSubtractPrice(e) {
  var target = e.target;
  var price = target.value;
  if (target.checked)
    sum += Number(price)
  else
    sum -= Number(price)
  updatePrice()
}

function updatePrice() {
  $("#price").html(sum);
}

$(document).ready(function(){
  $("#welcome-message").html("Choose room(s):");

  function createHtmlRoomRow(r) {
    var price = r['price'];
    var amenities = r['amenities'].join(' ');
    var type = r['type'];
    var result =
      "<tr> " +
          "<td>" + type + "</td> " +
          "<td>" + amenities + "</td>" +
          "<td>" + price + "</td>" +
          '<td><input value="' + price + '"type="checkbox" onclick="addSubtractPrice(event)"></td>' +
      "</tr>";
    return result
  };

  for (var i = 0; i < rooms.length; i++) {
    $("#room-table").append(createHtmlRoomRow(rooms[i]));
  }
});
