//animates navigation slow scroll 

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });


// jQuery for flickity 
  $('.carousel').flickity({
  	// options
	  cellAlign: 'left',
	  contain: true
	});
});



// validates email
function validateEmail($email) {
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return emailReg.test( $email );
}

if( !validateEmail(emailaddress)) { 
	alert('Please enter valid address');
	}
	else{
	alert('thanks for subscribing!');
	}
};

// $('#submit').click(function(){
//           var email = $('#email').val();
//           var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//           if re.test(email) {
//           		prompt ('Thanks for subscribing');
//           } else {
//           		alert ('Please enter valid email address!')          		
//           }
//       };
// });


 








