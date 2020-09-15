$(document).ready(function(){
  $("#taskSearchInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#taskTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
