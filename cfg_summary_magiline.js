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
