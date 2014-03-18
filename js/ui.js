$(document).ready( function() {
	/* 
		This file builds on what we learned during the lecture/labs
	*/
	// var variable = "Debugging test";
	// $("title").html("Info: "+variable);

	/*
	$("a[href$='.html']").click( function(clickEvent) {
		
		clickEvent.preventDefault();
		
		var file = $(this).attr("href");
		// $("title").html("Info: "+file);
		
		$("section#main").load(file+" #content");
	});
	*/

	$("#vesselSpecs").hide();
	$("#reviews").hide();
	$("#addReview").hide();
	
	$("#noJS").hide();
	$("#yesJS").hide();
	$("#added").hide();
	
	$("#yesJS").show();
	
	$("#toCheckout").hide();
	
	$("#yesJS").click(function(){
		$("#yesJS").hide();
		$("#added").show();
		$("#toCheckout").show();
	});
	
	$("#toggleSpecs").click(function(){
		$("#vesselSpecs").slideToggle();
	});
	
	$("#toggleReviews").click(function(){
		$("#reviews").slideToggle();
	});
	
	$("#toggleAddReview").click(function(){
		$("#addReview").slideToggle();
	});
	
	/* This hides the 'submit' button, replacing it with a 'submitted!' button */
	$("#submitComment").click(function(){
		$("#submitComment").hide();
		$("#submitted").show();
	});
});