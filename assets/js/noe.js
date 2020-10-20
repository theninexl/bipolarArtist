


(function ( $ ) {
	$.fn.propimg = function(){
		return this.each(function(){
			var height = $(this).height();
			var width = $(this).width();
			var prop = width >= height ? 'img-hrz' : 'img-vert';
			$(this).addClass(prop);
		});
	}
}( jQuery ));


(function ( $ ) {
	$.fn.resizeVideo = function(){
		return this.each(function(){

			var video = $(this);
			var aspectRatio = 1.78;
			var videoHeight = video.outerHeight();
			var videoWidth = video.outerWidth();
			var newWidth = videoHeight*aspectRatio;
			var newHeight = videoWidth/aspectRatio;
			var halfNewWidth = newWidth/2;
			//$(this).css({"width":newWidth+"px","left":"50%","margin-left":"-"+halfNewWidth+"px"});
			$(this).css({"height":newHeight+"px"});
			//console.log("el width es: "+videoWidth+" y la nueva height es: "+newHeight);
		});
	}
}( jQuery ));

(function ( $ ) {
	$.fn.imgCover = function(options){
		return this.each(function() {

			var container = $(this),
			imageAspect = 1/1,
			containerH = 0,
			containerW = 0,
			defaults = {
				target: 'img'
			},
			settings = $.extend({},defaults,options);

			var $img = container.find(settings.target);
			$img.css('position','absolute');

			var img = container.find(settings.target)
			var nomimg = img.attr('src');

			//console.log("entroenImgCover");

			//aÃ±adir la clase cargando
			container.addClass('is-loading');


			//sacamos el tamaño del container
			containerH += $(this).outerHeight();
			containerW += $(this).outerWidth();


			//esperamos a que haya cargado la imagen y luego la encajamos
			container.imagesLoaded().done(function(img){
				imageAspect = $img.width() / $img.height();
				container.removeClass('is-loading');
				encaja();

				
			});

			function encaja(){
				containerH = 0;
				containerW = 0;				

				container.each(function(){
					imageAspect = $(this).find(settings.target).width() / $(this).find(settings.target).height();
					var containerH = $(this).height(), containerW = $(this).width();
					//console.log("cH:"+containerH+" / cW:"+containerW);
					containerAspect = containerW/containerH;

				
					if(containerAspect < imageAspect){
						//imagen mas alta que el contenedor
						$(this).find(settings.target).css({
							width : 'auto',
							height: containerH
						});
						$(this).find(settings.target).css({
							top: 0,
							left: -($(this).find(settings.target).width() - containerW)/2
						});
					}else{
						//imagen mas ancha que contenedor
						$(this).find(settings.target).css({							
							width: containerW,
							height: 'auto'
						});
						$(this).find(settings.target).css({							
							top: -(containerW/imageAspect - containerH)/2,
							left: 0
						});
					}
				})
			}

			
		});
	}
}( jQuery ));

(function ( $ ) {
	$.fn.imgEncaja = function(options){
		return this.each(function() {

			var container = $(this),
			imageAspect = 1/1,
			containerH = 0,
			containerW = 0,
			defaults = {
				target: 'img'
			},
			settings = $.extend({},defaults,options);

			var $img = container.find(settings.target);
			$img.css('position','absolute');

			var img = container.find(settings.target)
			var nomimg = img.attr('src');

			//console.log("entroenImgEncaja");

			//aÃ±adir la clase cargando
			container.addClass('is-loading');


			//sacamos el tamaño del container
			containerH += $(this).outerHeight();
			containerW += $(this).outerWidth();


			//esperamos a que haya cargado la imagen y luego la encajamos
			container.imagesLoaded().done(function(img){
				imageAspect = $img.width() / $img.height();
				container.removeClass('is-loading');
				encaja();

				
			});

			function encaja(){
				containerH = 0;
				containerW = 0;				

				container.each(function(){
					imageAspect = $(this).find(settings.target).width() / $(this).find(settings.target).height();
					var containerH = $(this).height(), containerW = $(this).width();
					$(this).find(settings.target).css({
						width: '100%',
						height: 'auto'
					});
					//console.log("Imagen: "+nomimg);
					//console.log("cH:"+containerH+" / cW:"+containerW);
					containerAspect = containerW/containerH;
					//console.log("imageAspect: "+imageAspect);

				
					if(containerAspect > imageAspect){
						//imagen mas alta que el contenedor
						/*console.log("Encaja Alto");
						console.log("Imagenh: "+$(this).find(settings.target).height() );
						console.log("Imagenw: "+$(this).find(settings.target).width() );*/
						$(this).find(settings.target).css({
							width : 'auto',
							height: containerH/1.2
						});
						/*console.log("Imagenh: "+$(this).find(settings.target).height() );
						console.log("Imagenw: "+$(this).find(settings.target).width() );*/

					}else{
						//imagen mas ancha que contenedor
						//console.log("Encaja Ancho");						
						$(this).find(settings.target).css({							
							width: containerW/1.8,
							height: 'auto'
						});
						/*console.log("Imagenh: "+$(this).find(settings.target).height() );
						console.log("Imagenw: "+$(this).find(settings.target).width() );*/
					}

					$(this).find(settings.target).css({							
						top: (containerH - $(this).find(settings.target).height())/2,
						left: (containerW - $(this).find(settings.target).width())/2
					});
				})
			}

			
		});
	}
}( jQuery ));

function adjustVideo(){
	//console.log("entro en adjust video");
	var $container = $('.ba-c-video-reel__video-wrapper'),
	imageAspect = 1/1,
	containerH = 0, containerW = 0,
	containerAspect = containerW/containerH,
	$video = $('.video-wrapper__sources'),
	videoimg = $('.video-wrapper img'),
	$targetImg = $('.video-wrapper img'),
	videoAspect = 0,
	vH = 0, vW = 0;

	

	//esperamos a que haya cargado la imagen y luego la encajamos
	$video.imagesLoaded().done(function(videoimg){
		vH = $targetImg.height();
		console.log(vH+" ha cargado");
		encaja();		
	});

	function encaja(){
		vH = $targetImg.height(),
		vW = $targetImg.width(),
		videoAspect = vW/vH;
		containerH = $container.outerHeight(),
		containerW = $container.outerWidth(),
		containerAspect = containerW/containerH;

		console.log("vCh"+containerH+" / vCw:"+containerW);
		console.log("vVh"+vH+" / vVw:"+vW);
		console.log("containerAspect:"+containerAspect);
		console.log("videoaspect"+videoAspect);

		if (containerAspect < videoAspect) {
			//video más ancho que contenedor	
			console.log("video más ancho que contenedor");
			$targetImg.css({
				"height":"100%",
				"width":"auto"
			});
			vW = $targetImg.width();
			console.log("nueva vVw:"+vW);
			$video.css({
				"height":"100%",
				"width":"auto",
				"margin-left":(containerW - vW)/2,
				"margin-top":0,
				"margin-bottom":"9999px"
			});
			
	
		}else {		
			//video más alto que contenedor
			console.log("video más alto que contenedor");
			$targetImg.css({
				"height":"auto",
				"width":"100%"
			});
			vH = $targetImg.height();
			console.log("nueva vVH:"+vH);
			$video.css({
				"height":"auto",
				"width":"100%",
				"margin-top":(containerH - vH)/2,
				"margin-left":0,
				"margin-bottom":"9999px"
			});
		}
	}
}

function hamburgerMenu(){

	var toggle =$(".navbar-toggle");
	var menuEle = $("nav.navbar");

	 toggle.on("click",function(e){
	 	//console.log("click");
	 	e.preventDefault();
	 	$(this).hasClass("is-active") === true ? $(this).removeClass("is-active") : $(this).addClass("is-active");
	 	menuEle.toggleClass("is-active");
	 });	
}

var list1 = ["creating", "embracing","inspiring"];
var list2 = ["change", "emotions"];
var list3 =[
	"Sparking real change means being at the top of our creative game.",
	"Every time we start a project we ask ourselves, how do we want people to feel?",
	"The early days were all about print projects like brochures, flyers and posters.",
    "It all started in our childhood. Our families shared their passions with us and they stuck.",
    "Change can start with an idea, a sketch, a conversation or a brainstorm in a coffee shop.",
    "We want to inspire a range of emotions in people so they don’t just go “oh” but “aw” as well."
	]

var l1l = list1.length, l2l = list2.length, rn1 = Math.floor(Math.random()*l1l), rn2 = Math.floor(Math.random()*l2l),  $slotImg1 = $("#slotImg1"), $slotImg2 = $("#slotImg2"), $slotText1 = $("#slotText1"), $slotText2 = $("#slotText2"), slotImg1 = null, slotImg2 = null, slotActive1 = null, slotActive2 = null;

function machineBuilder(){

	for (a=0; a<list1.length; a++) {
		$slotImg1.append('<div><img src="images/slot/'+list1[a]+'.jpg"></div>');
		$slotText1.append('<div><h1>'+list1[a]+'</h1></div>');
	}

	for (a=0; a<list2.length; a++){
		$slotImg2.append('<div><img src="images/slot/'+list2[a]+'.jpg"></div>');
		$slotText2.append('<div><h1>'+''+list2[a]+'</h1></div>');
	}

	$('img').propimg();	
};

function pinta2(hr){
	hr = hr;
	newImage = slotActive1+"-"+slotActive2;

	$('#reload #hr').fadeOut('fast',function(){
		$(this).html(list3[hr]).fadeIn('slow');
		$('#view-story-button').attr('href',newImage);

	});
	//console.log("new image:"+newImage);
	/*$('#view-story-button').attr('href',newImage+'.html');	

	$('#view-story-button').fadeOut('fast',function(){
		$('#view-story-button').attr('href',newImage+'.html').fadeIn('slow');
	});*/
}

function eyesToggle(){
	$('#view-story-button .opened-eye').toggle();
 	$('#view-story-button .closed-eye').toggle();
}

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox({
                alwaysShowClose: true,
                wrapping: false
            });
});

$(document).ready(function(){
	var $window = $(window), 
	$body = $('body'), 
	screenwidth = $window.width(), 
	mquerylg = 1200,
	delta = 0;

	$('.video iframe').resizeVideo();

	$("div.carousel").on("touchstart", function(event){
		var xClick = event.originalEvent.touches[0].pageX;
		$(this).one("touchmove", function(event){
			var xMove = event.originalEvent.touches[0].pageX;
			if( Math.floor(xClick - xMove) > 5 ){
				$(this).carousel('next');
			}
			else if( Math.floor(xClick - xMove) < -5 ){
				$(this).carousel('prev');
			}
		});
		$("div.carousel").on("touchend", function(){
			$(this).off("touchmove");
		});
	});

	if ($('.page-template-full-home')) {
		machineBuilder();

		var slotImg1 = $('#slotImg1').slotMachine({ 
			spins:1, delay:400, randomize() {
				return (rn1)
			}, onComplete(){ 
				slotActive1 = list1[slotImg1.active]; 
			}, direction:"down", transition:"ease-out"});

		var slotImg2 = $('#slotImg2').slotMachine({ 
			spins:1,  delay:400, randomize() { 
				return (rn2)
			}, onComplete(){ 
				slotActive2 = list2[slotImg2.active]; 
			}, direction:"up", transition:"ease-out"});

		var slotText1 = $('#slotText1').slotMachine({ 
			spins:1,  delay:400,  randomize() {
				return (rn1)
			}, onComplete(){}, direction:"down", transition:"ease-out"});

		var slotText2 = $('#slotText2').slotMachine({ 
			spins:1,  delay:400, randomize() { 
				return (rn2)
			}, onComplete(){}, direction:"up", transition:"ease-out"});
	} else { //console.log("no no estoy en la home");
			}

	

	

	function resize(){
		console.log("resize");
		$('img').propimg();
		$('.imgCover').imgCover();
		$('.ba-l-full-bg__img').imgCover();
		$('.imgEncaja').imgEncaja();
		$('.video iframe').resizeVideo();
		var screenwidth = $window.width();

		if(screenwidth <= 768){
			$body.removeClass().addClass('mobile');
		} else if(screenwidth> 768 && screenwidth < 1200){
			$body.removeClass().addClass('tablet');
		} else if(screenwidth >= 1200){
			$body.removeClass().addClass('desktop');
		}
		
		if ($('.ba-c-video-reel')){
			//console.log("entro en sheet");
			//ficha de pelicula, así que llamamos al ajuste del video
			var figure = $(".ba-c-video-reel").hover( hoverVideo, hideVideo );	
			adjustVideo();
	
			function hoverVideo(e) { 
				e.preventDefault();
				//console.log("hovervideo"); 
				$('video', this).get(0).play(); 
			}
			
			function hideVideo(e) {
				e.preventDefault();
				//console.log("hidevideo");
				$('video', this).get(0).pause(); 
			}
		}

		if($('.ba-c-hoGa')){
			$('.ba-c-hoGa').flickity({
				watchCSS: true,
				draggable: true,
				pageDots: false,
				cellAlign: 'left',
				contain: true,
				autoPlay: false,
				wrapAround: true
			});
		}
	}
	
	function startSlot(){
		rn1 = Math.floor(Math.random()*l1l), rn2 = Math.floor(Math.random()*l2l);
		slotActive1 = list1[rn1];
		slotActive2 = list2[rn2];
		stepsHR = l2l*rn1;
		hr = rn2+stepsHR;	
		
		slotImg1.shuffle(rn1);
		slotImg2.shuffle(rn2);
		slotText1.shuffle(rn1);
		slotText2.shuffle(rn2);
		pinta2(hr);
	}

	$('#reload-button').on("click",function(e){	 	
	 	e.preventDefault();
	 	delta +=180;
	 	$("#reload-img").rotate({ animateTo:delta});
	 	eyesToggle();
	 	setTimeout(eyesToggle,500);	
	 	startSlot(); 	
	 });

	
	
	hamburgerMenu();


	function startLayers(){

		//$('nav.navbar .navbar-toggle').hide();

		$('#layer1').animate({height:'101%',opacity:1},1000, 'easeOutQuad', function(){
		$('#text1').animate({marginTop:'0%', opacity:1},2500, 'easeOutQuad');
		$('#text2').animate({marginTop:'0%', opacity:1},2500, 'easeOutQuad', function(){
					$('#chooseButton').animate({marginTop:'0%', opacity:1},1500, 'easeOutQuad');
				});
			
			/*$('#text1').animate({marginTop:'0%', opacity:1},2000, 'easeOutQuad', function(){
				$('#text2').animate({marginTop:'0%', opacity:1},1000, 'easeOutQuad', function(){
					$('#chooseButton').animate({marginTop:'0%', opacity:1},2000, 'easeOutQuad');
				});
			});*/
			

			$('#chooseButton').click(function(e){
				e.preventDefault();
				$('#layer1').css('top',0);
				$('#layer1').animate({height:'0%'},1000,'easeOutQuint');
				$('#layer1').animate({'border-bottom':0},100,'easeOutQuint');					
				$('#layer2').animate({height:'100%'},1000,'easeOutQuint', function(){
					console.log("click");
					startSlot();
					$('nav.navbar .navbar-toggle').show();
				});
			});
		});
	}

	function load(){
		if ($('#layersIntro')){
			$('#layer0').fadeOut();
			startLayers();
		}
		
	}

	


	/*$window
		.load(load)
	        	.resize(resize)
	        	//.scroll(scroll)
				.trigger('resize');*/
				

	/*$(window).on("load",function(){
		console.log("onload");
		load();
	});*/

	//window.onload = load;

	$(window).on('load', function(){ 	
		load();

	});

	$window.resize(resize);
	$window.trigger('resize');

});