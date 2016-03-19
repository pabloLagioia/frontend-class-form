$(document).ready(function() {

  $("#contact-form #first-name").on("blur", function() {
    validate.firstName();
  });
  $("#contact-form #last-name").on("blur", function() {
    validate.lastName();
  });
  $("#contact-form #email").on("blur", function() {
    validate.email();
  });
  $("#contact-form #message").on("blur", function() {
    validate.message();
  });

  $("#contact-form [type=submit]").on("click", function(event) {

    event.preventDefault();

    if (!validate.all()) {
      return;
    }

    var firstName = $("#first-name");
    var lastName = $("#last-name");
    var email = $("#email");
    var message = $("#message");

    emailjs.send("default_service", "template_1b1vJUt8", {
      from_name: [firstName.val(), lastName.val()].join(" "),
      to_email: email.val(),
      "message_html": message.val()
    });

  });

});

var validate = {
  "firstName": function() {

    var firstName = $("#first-name");
    var formGroupFirstName = firstName.parents(".form-group");

    formGroupFirstName.removeClass("has-error").find(".tooltip-custom").addClass("hidden");

    if (!firstName.val()) {
      formGroupFirstName.addClass("has-error");
      formGroupFirstName.find(".tooltip-custom").removeClass("hidden");
      return false;
    } else {
      formGroupFirstName.addClass("has-success");
    }

    return true;

  },
  "lastName": function() {
    var lastName = $("#last-name");
    var formGroupLastName = lastName.parents(".form-group");
    formGroupLastName.removeClass("has-error").find(".tooltip-custom").addClass("hidden");

    if (!lastName.val()) {
      formGroupLastName.addClass("has-error");
      formGroupLastName.find(".tooltip-custom").removeClass("hidden");
      return false;
    } else {
      formGroupLastName.addClass("has-success");
    }

    return true;
  },
  "email": function() {
    var email = $("#email");
    var formGroupEmail = email.parents(".form-group");
    formGroupEmail.removeClass("has-error").find(".tooltip-custom").addClass("hidden");

    if (!email.val()) {
      formGroupEmail.addClass("has-error");
      formGroupEmail.find(".tooltip-custom[data-type=no-email]").removeClass("hidden");
      return false;
    } else {
      formGroupEmail.addClass("has-success");
    }

    if (!email.val().match(/[\w+\.]+@\w+\.\w+/ig)) {
      formGroupEmail.addClass("has-error");
      formGroupEmail.find(".tooltip-custom[data-type=invalid-email]").removeClass("hidden");
      return false;
    } else {
      formGroupEmail.addClass("has-success");
    }

    return true;

  },
  "message": function() {
    var message = $("#message");
    var formGroupMessage = message.parents(".form-group");
    formGroupMessage.removeClass("has-error").find(".tooltip-custom").addClass("hidden");
  
    if (!message.val()) {
      formGroupMessage.addClass("has-error");
      formGroupMessage.find(".tooltip-custom").removeClass("hidden");
      return false;
    } else {
      formGroupMessage.addClass("has-success");
    }
 
    return true;

  },
  "all": function() {
    return this.firstName() && this.lastName() && this.email() && this.message();
  }
}