$(document).ready(function() {
  $("#contact").submit(function(event) {
    var name = $("#name").val();
    var address = $("#address").val();
    var email = $("#email").val();


    var string = "Your Name: " + name + ", Your Address: " + address + ", Your Email: " + email + ".";

    $("#addressBook").text(string);




    $("#addressBook").show();

    event.preventDefault();
  });
});
