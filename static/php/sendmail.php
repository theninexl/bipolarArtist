<?php

	$mail_to = 'info@bipolar-artist.com'; // specify your email here

	// Assigning data from the $_POST array to variables
	$name = $_POST['name'];
	$mail_from = $_POST['email'];
	$phone = $_POST['phone'];
	$message = $_POST['comments'];

	define("CLAVE_SECRETA", "6LcB39wUAAAAAPA_uNFT6gS4CLKfagWAqEQRoEyg");
	


	    // Construct email subject
	    $subject = 'Contacto desde Bipolar Artist';

	    // Construct email body
	    $body_message = 'Contacto desde Bipolar Artist: ' . "\r\n";
	    $body_message = 'Nombre: ' . $name . "\r\n";
	    $body_message .= 'E-mail: ' . $mail_from . "\r\n";
	    $body_message .= 'Teléfono: ' . $phone . "\r\n";
	    $body_message .= 'Message: ' . $message. "\r\n";

	    // Construct email headers
	    $headers = 'From: ' . $mail_from . "\r\n";
		$headers .= 'Reply-To: ' . $mail_from . "\r\n";
		
		$mail_sent = mail($mail_to, $subject, $body_message, $headers);

	    if ($mail_sent == true){ ?>
	        <script language="javascript" type="text/javascript">
	        	
	        alert('Informatino was sent. Thanks for your message.');
	        window.location = '../index.html';
	        </script>
	    <?php } else { ?>
	    <script language="javascript" type="text/javascript">
	        alert('There was an error. Please try again later.');
	        window.location = '../index.html';
		</script>
		<?php
	    }


	    

	