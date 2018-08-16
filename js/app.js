(function(e) {
    e(window.jQuery, window, document);
})(function($, window, document) {

    var app = {

        // ==============================================================================================
        // Call your function here to become a single function
        // * This method make your code more modular and make it easy to toggle your function
        // * If you want to disable a function, just commented on function that you need to disable below
        // ==============================================================================================

        init: function($) {
            app.formValidation();
            app.isEmail(email);
            app.stringGen(len);
        },

        // ======================================================================
        // Your function here
        // * Don't forget to use proper function name to describes your function
        // ======================================================================
        formValidation: function() {
            var statusName = false, statusEmail = false, statusPhoneNo = false, statusPhoneArea = false, statusAddress = false, emailAddress ='';

            var usrName = jQuery('#form-user-name'),
                usrEmail = jQuery('#form-user-email');
                usrPhoneNo = jQuery('#form-user-phone-number'),
                usrPhoneArea = jQuery('#form-user-phone-area'),
                usrAddress = jQuery('#form-user-address');
        
            jQuery('form').on('submit', function(e) {
              e.preventDefault();
        
              // Check the name's character length is more than 5 or not
              var nameLength = usrName.val().length;
              if(nameLength > 4){
                usrName.siblings('small').remove();
                statusName = true;
              }
              else{
                usrName.siblings('small').remove();
                usrName.parent('.form-group').append('<small class="color-red">Minimal 5 characters</small>');
                statusName = false;
              }
        
              // Check the name's character length is more than 0 or not &&
              // Check if the email's format is correct or not
              if(app.isEmail(usrEmail.val()) && usrEmail.val().length > 0) {
                usrEmail.siblings('small').remove();
                statusEmail = true;
                emailAddress = usrEmail.val();
              } else {
                usrEmail.siblings('small').remove();
                usrEmail.parent('.form-group').append('<small class="color-red">Invalid Email</small>');
                statusEmail = false;
              }
        
              // Check if the selected option is not the default value
              if(usrPhoneArea.find('option:selected').val() != '') {
                usrPhoneArea.parents('#form-user-phone').siblings('small').remove();
                statusPhoneArea = true;
              } else {
                usrPhoneArea.parents('#form-user-phone').siblings('small').remove();
                usrPhoneArea.parents('.form-group').append('<small class="color-red">Please Select Area</small>');
                statusPhoneArea = false;
              }
        
              // Check if the length of the phone number is more than 0 or not
              if(usrPhoneNo.val().length > 0) {
                usrPhoneNo.parent('#form-user-phone').siblings('small').remove();
                statusPhoneNo = true;
              } else {
                usrPhoneNo.parent('#form-user-phone').siblings('small').remove();
                usrPhoneNo.parent('.form-group').append('<small class="color-red">Invalid Phone</small>');
                statusPhoneNo = false;
              }
        
              // Check the length of the address is more than 0 and less than 130
              if(usrAddress.val().length >= 0 && usrAddress.val().length <= 130) {
                usrAddress.siblings('small').remove();
                statusAddress = true;
              } else {
                usrAddress.siblings('small').remove();
                usrAddress.parent('.form-group').append('<small class="color-red">Maximal 130 characters</small>');
                statusAddress = false;
              }
        
              // Check if the form is correct and complete
              if(statusName && statusEmail && statusPhoneNo && statusAddress && statusPhoneArea) {
                  jQuery('button').attr('disabled','disabled');
                  jQuery('#personal-data').remove();
                  jQuery('.container').append('<div class="p-5 text-center background-white box-shadow content"><h2 class="mb-0 font-weight-light color-green">Thank You</h2><div class="pt-4 pb-4 mt-4 border-top border-bottom"><p class="mb-3">We just sent ticket to your email: <a href="mailto:'+emailAddress+'">'+emailAddress+'</a></p><p class="mb-0">Invoice No: <span class="color-green">'+app.stringGen(6)+'</span></p></div></div>')
              }
            })
        },

        stringGen: function(len) {
            var text = '';
            var charset = "abcdefghijklmnopqrstuvwxyz0ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
            for (var i = 0; i < len; i++)
              text += charset.charAt(Math.floor(Math.random() * charset.length));
            return text;
        },

        isEmail: function(email) {
            var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return regex.test(email);
        }

    };

    // This code will initialize your whole function in this JS file
    $(function() {
        app.init($);
    });

    $(window).resize(function() {
        // Insert your JS function here that need to triggered when window resize
    });
});
