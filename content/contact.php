
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
								<form>
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
									<?
								$subject = "Contacto desde Bipolar-Artist";

								$nombre = $_REQUEST["name"];
								$email = $_REQUEST["email"];
								$telefono = $_REQUEST["phone"];
								$comments = $_REQUEST["comments"];
								$direccion = $_REQUEST["direccion"];



								$mensaje = "Nombre: $name<br>Email: $email <br>Telefono: $pho0ne<br>Comentarios: $comments";

								$encabezados = "From: $email\nReply-To: $email\nSubject: Contacto desde Bipolar-Artist;\nContent-Type: text/html; charset=iso-8859-1"; 


								if(mail($direccion, $subject, $mensaje, $encabezados))
								{
									
									echo "<h1 class='center'>Information sent<p>";

								}						



								?>
								</form>
							</div>
						</div>
						<div class="row content">
							<div class="col-xs-12 col-md-6 col-md-offset-3 second">
								<h1 class="center">This is where we're based</h3>
								<p><img src="assets/img/bipo-map.png" style="width:100%; height:auto;"></p>
								
							</div>
						</div>
					</div>
				</div>
			</section>

			