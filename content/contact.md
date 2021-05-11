---
title: "Contact"
description: "Change this description"
date: 2020-10-14T18:48:21+02:00
draft: false
weight: 10
---

<section class="main-area-wrapper">
    <div class="contact-section">
        <div class="container">
            <div class="row content">
                <p class="center" style="margin-top:90px;">If you want to listen to our <br>beautiful and inspiring voices:</p>
                <p class="center"><strong>(+34) 916 229 568</strong></p>
            </div>
            <div class="row content">
                <div class="col-xs-12 col-md-6 col-md-offset-3 first">
                    <div class="tag">Contact Us</div>
                    <form id="tmContact" name="tmContact" action="/php/sendmail.php" method="POST" class="">
                        <div class="cell comments form-group">
                            <textarea type="text" id="comments" name="comments" placeholder="Write your message here..."></textarea>
                        </div>
                        <div class="cell data">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Name" name="name" id="name">
                                <input type="email" class="form-control" placeholder="E-mail" name="email" id="email">
                                <input type="tel" class="form-control submit" placeholder="Phone" name="phone" id="phone">
                                <input type="hidden" value="info@bipolar-artist.com" name="direccion">
                                <button type="submit" class="submit">&nbsp;Send Message<i class="icon-right-open"></i></button>
                            </div>
                        </div>						
                    </form>
                    <div class="answer" style="display:none;"><p>Information was sent. Thanks for your message</p></div>
                </div>
            </div>
            <div class="row content">
                <div class="col-xs-12 col-md-6 col-md-offset-3 second">
                    <h1 class="center">This is where we're based</h3>
                    <p><img src="/images/bipo-map.png" style="width:100%; height:auto;"></p>								
                </div>
            </div>
        </div>
    </div>
</section>

<script>

	$('#tmContact').submit(function(event){
  	  	event.preventDefault(); // to prevent default page reloading
		var dataString = $(this).serialize(); // to get the form data
		
		$.ajax({
			type: "POST",
			url: "/php/sendmail.php",
			data: dataString,
			success: function(data){
			    $('#contact form')[0].reset(); // to reset form data
			    setTimeout(function () {
				$('.answer').css('display','block');
				$('answer p').append(''<script>fbq('track', 'Subscribe');<"+ "/script>");
			     }, 500);
			}
		}).done(function(data){
			
		});
  	  	
  	  });
  
</script>