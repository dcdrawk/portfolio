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
			selected = '#uforiaProject';
			$( '#uforiaProject' ).addClass( ".selectedProject" );
		}else{
			if(selected == '#uforiaProject'){
				$( '#uforiaProject' ).removeClass( ".selectedProject" );
				$( "#uforiaProject" ).slideUp();
				selected = 'none';
				displayProject = false;
			}
		}
		if (displayProject == true && selected != '#uforiaProject'){
			$( selected ).fadeOut('slow', function(){
					$('#uforiaProject').fadeIn('slow');
			});
			$( selected ).removeClass( ".selectedProject" );
			selected = "#uforiaProject"
			$( selected ).addClass( ".selectedProject" );
			$("title").html("test "+selected);
		}
	});
	
	$("#theSandwich").click(function(){
		if (displayProject == false) {
			$( "#theSandwichProject" ).slideDown();
			displayProject = true;
			selected = '#theSandwichProject';
			$( '#theSandwichProject' ).addClass( ".selectedProject" );
		}else{
			if(selected == '#theSandwichProject'){
				$( '#theSandwichProject' ).removeClass( ".selectedProject" );
				$( "#theSandwichProject" ).slideUp();
				selected = 'none';
				displayProject = false;
			}
		}
		if (displayProject == true && selected != '#theSandwichProject'){
			$( selected ).fadeOut('slow', function(){
					$('#theSandwichProject').fadeIn('slow');
			});
			$( selected ).removeClass( ".selectedProject" );
			selected = "#theSandwichProject"
			$( selected ).addClass( ".selectedProject" );
			$("title").html("test "+selected);
		}
	});
	
	
	
	
	$(".close").click(function(){
		$( selected ).slideUp();
		$( selected ).removeClass( ".selectedProject" );
		selected = 'none';
		displayProject = false;
	});
	
});