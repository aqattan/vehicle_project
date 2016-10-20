// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
function validateForm() {
            var i = document.forms["myForm"]["firstname"].value;
            if (i == null || i == "") {
            alert("Enter your First name");
            return false;
            }
            var x = document.forms["myForm"]["lastname"].value;
            if (x == null || x == "") {
            alert("Enter your Last name");
            return false;
            }
            var y = document.forms["myForm"]["email_address"].value;
            var atpos = y.indexOf("@");
            var dotpos = y.lastIndexOf(".");
            if (atpos<1 || dotpos<atpos+2 || dotpos+2>=y.length) {
            alert("Enter a valid e-mail address");
            return false;
            }
}