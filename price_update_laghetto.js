


function price_update_l() {
  var price = 1000;
  price += price_update_l_poolsize();
  price += price_update_l_heating();
  price += price_update_l_cover();
  price += price_update_l_dosing();
  price += " €";
  $("#l_price").text(price);
}

function price_update_l_poolsize() {
  var poolsize = $('input[name="l_poolsize"]:checked').val();
  poolsize = parseFloat(poolsize);

  return poolsize;
}

function price_update_l_heating() {
  var heating = $('input[name="l_heating"]:checked').val();
  heating = parseFloat(heating);

  return heating;
}

function price_update_l_cover() {
  var cover = $('input[name="l_cover"]:checked').val();
  cover = parseFloat(cover);

  return cover;
}

function price_update_l_dosing() {
  var dosing = $('input[name="l_dosing"]:checked').val();
  dosing = parseFloat(dosing);

  return dosing;
}



$(window).on('load', function() {
  price_update_l();
  $(":radio").change(price_update_l);
  $(":checkbox").change(price_update_l);
});
