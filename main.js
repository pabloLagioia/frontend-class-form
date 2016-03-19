$(document).ready(function() {

  $("#contact-form [type=submit]").on("click", function(event) {

    event.preventDefault();

    var firstName = $("#first-name").val();
    var lastName = $("#last-name").val();
    var email = $("#email").val();
    var message = $("#message").val();

    if (!firstName) {
      $("#first-name").parents(".form-group").addClass("has-error");
      return;
    }
    if (!lastName) {
      alert("Debe escribir un apellido");
      return;
    }
    if (!email || !email.match(/[\w+\.]+@\w+\.\w+/ig)) {
      alert("Debe escribir un email");
      return;
    }
    if (!message) {
      alert("Debe escribir un mensaje");
      return;
    }

    //Aca va el codigo para mandar el mail
    throw new Error("Not implemented yet");

  });

});