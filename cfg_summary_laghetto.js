

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
