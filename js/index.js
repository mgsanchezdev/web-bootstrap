$(function () {
  $('[data-toggle= "tooltip"]').tooltip();
});

$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh');
});
