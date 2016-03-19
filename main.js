$(document).ready(function() {

  $("#contact-form [type=submit]").on("click", function(event) {

    event.preventDefault();

    var firstName = $("#first-name");
    var lastName = $("#last-name");
    var email = $("#email");
    var message = $("#message");

    var formGroupFirstName = firstName.parents(".form-group");
    var formGroupLastName = lastName.parents(".form-group");
    var formGroupEmail = email.parents(".form-group");
    var formGroupMessage = message.parents(".form-group");

    formGroupFirstName.removeClass("has-error").find(".tooltip-custom").addClass("hidden");
    formGroupLastName.removeClass("has-error").find(".tooltip-custom").addClass("hidden");
    formGroupEmail.removeClass("has-error").find(".tooltip-custom").addClass("hidden");
    formGroupMessage.removeClass("has-error").find(".tooltip-custom").addClass("hidden");

    if (!firstName.val()) {
      formGroupFirstName.addClass("has-error");
      formGroupFirstName.find(".tooltip-custom").removeClass("hidden");
      return;
    } else {
      formGroupFirstName.addClass("has-success");
    }
    if (!lastName.val()) {
      formGroupLastName.addClass("has-error");
      formGroupLastName.find(".tooltip-custom").removeClass("hidden");
      return;
    } else {
      formGroupLastName.addClass("has-success");
    }

    if (!email.val()) {
      formGroupEmail.addClass("has-error");
      formGroupEmail.find(".tooltip-custom[data-type=no-email]").removeClass("hidden");
      return;
    } else {
      formGroupEmail.addClass("has-success");
    }
    
    if (!email.val().match(/[\w+\.]+@\w+\.\w+/ig)) {
      formGroupEmail.addClass("has-error");
      formGroupEmail.find(".tooltip-custom[data-type=invalid-email]").removeClass("hidden");
      return;
    } else {
      formGroupEmail.addClass("has-success");
    }

    if (!message.val()) {
      formGroupMessage.addClass("has-error");
      formGroupMessage.find(".tooltip-custom").removeClass("hidden");
      return;
    } else {
      formGroupMessage.addClass("has-success");
    }

    //Aca va el codigo para mandar el mail
    throw new Error("Not implemented yet");

  });

});