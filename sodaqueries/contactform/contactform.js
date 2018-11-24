jQuery(document).ready(function($) {
  "use strict";
      $(function() {
          // Get the form.
          var form = $('#ajax-contact');

          // Get the messages div.
          var formMessages = $('#form-messages');

          // Set up an event listener for the contact form.
      $(form).submit(function(event) {
          // Stop the browser from submitting the form.
          event.preventDefault();

          // Serialize the form data.
          var formData = $(form).serialize();
          $.ajax({
              type: 'POST',
              url: $(form).attr('action'),
              data: formData
          })
            .done(function(response) {
            // Make sure that the formMessages div has the 'success' class.
            $(formMessages).removeClass('error');
            $(formMessages).addClass('success');

            // Set the message text.
            $(formMessages).text(response);

            // Clear the form.
            $('#name').val('');
            $('#email').val('');
            $('#message').val('');
        })
        .fail(function(data) {
              // Make sure that the formMessages div has the 'error' class.
              $(formMessages).removeClass('success');
              $(formMessages).addClass('error');

              // Set the message text.
              if (data.responseText !== '') {
                  $(formMessages).text(data.responseText);
              } else {
                  $(formMessages).text('Oops! An error occured and your message could not be sent.');
              }
          });
      });
});
  // //Contact
  // $('form.contactForm').submit(function(event) {
  //   event.preventDefault();
  //
  //   var f = $(this).find('.form-group'),
  //     ferror = false,
  //     emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;
  //
  //   f.children('input').each(function() { // run all inputs
  //
  //     var i = $(this); // current input
  //     var rule = i.attr('data-rule');
  //
  //     if (rule !== undefined) {
  //       var ierror = false; // error flag for current input
  //       var pos = rule.indexOf(':', 0);
  //       if (pos >= 0) {
  //         var exp = rule.substr(pos + 1, rule.length);
  //         rule = rule.substr(0, pos);
  //       } else {
  //         rule = rule.substr(pos + 1, rule.length);
  //       }
  //
  //       switch (rule) {
  //         case 'required':
  //           if (i.val() === '') {
  //             ferror = ierror = true;
  //           }
  //           break;
  //
  //         case 'minlen':
  //           if (i.val().length < parseInt(exp)) {
  //             ferror = ierror = true;
  //           }
  //           break;
  //
  //         case 'email':
  //           if (!emailExp.test(i.val())) {
  //             ferror = ierror = true;
  //           }
  //           break;
  //
  //         case 'checked':
  //           if (!i.attr('checked')) {
  //             ferror = ierror = true;
  //           }
  //           break;
  //
  //         case 'regexp':
  //           exp = new RegExp(exp);
  //           if (!exp.test(i.val())) {
  //             ferror = ierror = true;
  //           }
  //           break;
  //       }
  //       i.next('.validation').html((ierror ? (i.attr('data-msg') !== undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
  //     }
  //   });
  //   f.children('textarea').each(function() { // run all inputs
  //
  //     var i = $(this); // current input
  //     var rule = i.attr('data-rule');
  //
  //     if (rule !== undefined) {
  //       var ierror = false; // error flag for current input
  //       var pos = rule.indexOf(':', 0);
  //       if (pos >= 0) {
  //         var exp = rule.substr(pos + 1, rule.length);
  //         rule = rule.substr(0, pos);
  //       } else {
  //         rule = rule.substr(pos + 1, rule.length);
  //       }
  //
  //       switch (rule) {
  //         case 'required':
  //           if (i.val() === '') {
  //             ferror = ierror = true;
  //           }
  //           break;
  //
  //         case 'minlen':
  //           if (i.val().length < parseInt(exp)) {
  //             ferror = ierror = true;
  //           }
  //           break;
  //       }
  //       i.next('.validation').html((ierror ? (i.attr('data-msg') != undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
  //     }
  //   });
  //   if (ferror) return false;
  //   else var str = $(this).serialize();
  //   var action = $(this).attr('action');
  //   if( ! action ) {
  //     action = 'http://cors-proxy.htmldriven.com/?url=contactform/mailer.php';
  //   }
  //   $.ajax({
  //     type: "POST",
  //     url: action,
  //     data: str,
  //     success: function(msg) {
  //       // alert(msg);
  //       if (msg == 'OK') {
  //         $("#sendmessage").addClass("show");
  //         $("#errormessage").removeClass("show");
  //         $('.contactForm').find("input, textarea").val("");
  //       } else {
  //         $("#sendmessage").removeClass("show");
  //         $("#errormessage").addClass("show");
  //         $('#errormessage').html(msg);
  //       }
  //
  //     }
  //   });
  //   return false;
  // });

});
