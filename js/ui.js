$(document).ready( function() {
	/* 
		This file builds on what we learned during the lecture/labs
	*/
	// var variable = "Debugging test";
	// $("title").html("Info: "+variable);
	var selected = 'none';
	var displayProject = false;
	
	/*
	if ($(window).width() > 555) {
	}	
	*/
	
	$("#theSandwichProject").hide();
	$("#uforiaProject").hide();
	
	$("#uforia").click(function(){
		if (displayProject == false) {
			$( "#uforiaProject" ).slideDown();
			displayProject = true;
			selected = 'uforia';
		}else{
			if(selected == 'uforia'){
			}else{
				$('.selectedProject').fadeOut('slow', function(){
					$('#uforiaProject').fadeIn('slow');
				});
				$( '.selectedProject' ).removeClass( ".selectedProject" );
				selected = 'uforia';
				$( '#uforiaProject' ).addClass( "selectedProject" );
			}
		}
	});
	
	$("#theSandwich").click(function(){
		if (displayProject == false) {
			$( "#theSandwichProject" ).slideDown();
			displayProject = true;
			selected = 'sandwich';
		}else{
			if(selected == 'sandwich'){
			
			}else{
				$('.selectedProject').fadeOut('slow', function(){
					$('#theSandwichProject').fadeIn('slow');
				});
				$( '.selectedProject' ).removeClass( ".selectedProject" );
				selected = 'sandwich';
				$( '#theSandwichProject' ).addClass( "selectedProject" );
			}
		}	
	});
	
	
	$(".close").click(function(){
		$(".projectWindow").slideUp();
	});
	
});