	/* 
		This file builds on what we learned during the lecture/labs
		It is meant to add a drop-down menu functionality for smart phones or small screens
	*/
	
//the function to hide the div, code is from: http://stackoverflow.com/questions/5277872/hide-a-div-if-screen-is-narrower-than-1024px */

// At first I was having problems on mobile, the menu would collapse automatically on tapping after opening the menu, solved this by adding a boolean and changing how the menu opens and closes, this fixed the issue. Source: intuition
var navShow = false;

function hideDiv(){
    if ($(window).width() > 555) { //width is slightly off for some reason, causes some problems across browsers
		$("#menuBtn").hide();
		$("#navBar").show();
		$('#navBar').css('display', 'inline');
    }else{
		$("#menuBtn").show();
		if(navShow == false){
			$("#navBar").hide();
		}else{
		$("#navBar").show();
		}
    }

}
$(document).ready( function() {
	
	$("#menuBtn").hide(); 	//hides the initial menu button, even though it's display is already set to none, allows us to show it again
							//so if javascript is enabled, this button will show
	
    //on load
    hideDiv();

    //on resize
    $(window).resize(function(){
        hideDiv();

	});
	$("#menuBtn").click(function(){
		$("#navBar").slideToggle();
		if(navShow == false){
			navShow = true;
		}else{
			navShow = false;
		}
	});
	
});

