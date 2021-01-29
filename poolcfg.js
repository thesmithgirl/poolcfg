function cfg_summary_m () {
  var m_cfg = "";
  m_cfg += get_mpoolsize();
  m_cfg += "\n";
  m_cfg += get_mcleaner();
  m_cfg += "\n";
  m_cfg += get_mstairs();
  m_cfg += "\n";
  m_cfg += get_mpoolfoil();
  m_cfg += "\n";
  m_cfg += get_mspotlight();
  m_cfg += "\n";
  m_cfg += get_mheating();
  m_cfg += "\n";
  m_cfg += get_mcover();
  m_cfg += "\n";
  m_cfg += get_mdosing();
  m_cfg += "\n";
  m_cfg += get_maccessories();


  $("#m_cfg").text(m_cfg);
}

function get_mpoolsize() {
  var m_length = $("input[name='m_length']:checked").parent('label').text();
  var m_width = $("input[name='m_width']:checked").parent('label').text();
  var m_depth = $("input[name='m_depth']:checked").parent('label').text();
  var m_poolsize = m_length + "x" + m_width + "x" + m_depth;
  return m_poolsize;

}

function get_mcleaner() {
  var m_cleaner = $("input[name='m_cleaner']:checked").parent('label').text();
  return m_cleaner;
}

function get_mstairs() {
  var m_stairs = $("input[name='m_stairs']:checked").parent('label').text();
  return m_stairs;
}

function get_mpoolfoil() {
  var m_poolfoil = $("input[name='m_poolfoil']:checked").parent('label').text();
  return m_poolfoil;
}

function get_mspotlight() {
  var m_spotlight = $("input[name='m_spotlight']:checked").parent('label').text();
  return m_spotlight;
}

function get_mheating() {
  var m_heating = $("input[name='m_heating']:checked").parent('label').text();
  return m_heating;
}

function get_mcover() {
  var m_cover = $("input[name='m_cover']:checked").parent('label').text();
  return m_cover;
}

function get_mdosing() {
  var m_dosing = $("input[name='m_dosing']:checked").parent('label').text();
  return m_dosing;
}

function get_maccessories() {

// https://forum.jquery.com/topic/jquery-get-label-text#14737000000345079

  var m_accessories = $('input:checked + label').map(function() {
  return $(this).text();
  }).get();
  //alert(m_accessories);

  return m_accessories;


}



$(window).on('load', function() {
  cfg_summary_m();
  $(":radio").change(cfg_summary_m);
  $(":checkbox").change(cfg_summary_m);
});



function cfg_summary_l () {
  var l_cfg = "";
  l_cfg += get_lheating();
  l_cfg += "\n";
  l_cfg += get_lpoolsize();
  l_cfg += "\n";
  l_cfg += get_lcover();
  l_cfg += "\n";
  l_cfg += get_ldosing();

$("#l_cfg").text(l_cfg);
}

function get_lpoolsize() {
  var l_poolsize = $("input[name='l_poolsize']:checked").parent('label').text();

  return l_poolsize;

}

function get_lheating() {
  var l_heating = $("input[name='l_heating']:checked").parent('label').text();

  return l_heating;

}

function get_lcover() {
  var l_cover = $("input[name='l_cover']:checked").parent('label').text();

  return l_cover;

}

function get_ldosing() {
  var l_dosing = $("input[name='l_dosing']:checked").parent('label').text();

  return l_dosing;

}


$(window).on('load', function() {
  cfg_summary_l();
  $(":radio").change(cfg_summary_l);
  $(":checkbox").change(cfg_summary_l);
});


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








function price_update_m() {
  var price = 1000;
  price += price_update_m_poolsize();
  price += price_update_m_cleaner();
  price += price_update_m_stairs();
  price += price_update_m_poolfoil();
  price += price_update_m_spotlight();
  price += price_update_m_heating();
  price += price_update_m_cover();
  price += price_update_m_dosing();
  price += price_update_m_accessories();
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

function price_update_m_stairs() {
  var stairs = $('input[name="m_stairs"]:checked').val();
  stairs = parseFloat(stairs);

  return stairs;
}

function price_update_m_poolfoil() {
  var poolfoil = $('input[name="m_poolfoil"]:checked').val();
  poolfoil = parseFloat(poolfoil);

  return poolfoil;
}

function price_update_m_spotlight() {
  var spotlight = $('input[name="m_spotlight"]:checked').val();
  spotlight = parseFloat(spotlight);

  return spotlight;
}

function price_update_m_heating() {
  var heating = $('input[name="m_heating"]:checked').val();
  heating = parseFloat(heating);

  return heating;
}

function price_update_m_cover() {
  var cover = $('input[name="m_cover"]:checked').val();
  cover = parseFloat(cover);

  return cover;
}

function price_update_m_dosing() {
  var dosing = $('input[name="m_dosing"]:checked').val();
  dosing = parseFloat(dosing);

  return dosing;
}


function price_update_m_accessories() {
  var ret = 0;
  $('input[name="m_accessories"]:checked').each(function(i, obj) {
    ret += parseFloat($(obj).val());
  });

  return ret;
}

$(window).on('load', function() {
  price_update_m();
  $(":radio").change(price_update_m);
  $(":checkbox").change(price_update_m);
});



function debug() {
  $(".debug").show();
}
