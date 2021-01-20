function price_update() {
  var price = $("#price").text();
  price *= 1;
  price += 1000;
  $("#price").text(price);
}

function debug() {
  $(".debug").show();
}
