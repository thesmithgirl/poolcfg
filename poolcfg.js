function price_update_m() {
  var price = 1000;
  price += price_update_m_poolsize();
  price += price_update_m_cleaner();

  price += " €";
  $("#m_price").text(price);
}

function price_update_m_poolsize() {
  var price_sqm = 1000;

  var length = $('input[name="m_length"]:checked').val();
  length = parseFloat(length);

  var width = $('input[name="m_width"]:checked').val();
  width = parseFloat(width);

  var depth = $('input[name="m_depth"]:checked').val();
  depth = parseFloat(depth);

  return price_sqm * length * width * depth;
}


function price_update_m_cleaner() {
  var cleaner = $('input[name="m_cleaner"]:checked').val();
  cleaner = parseFloat(cleaner);

  return cleaner;
}

function debug() {
  $(".debug").show();
}
