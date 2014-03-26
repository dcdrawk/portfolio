$(document).ready( function() {

	$(window).scroll(function()	{
		var scrollPos = $(document).scrollTop();
		$("title").html("s = " + scrollPos);
		if(scrollPos > 0){
			$('ul li a').removeClass("active");
			$( ".uforiaClass" ).addClass('active');
		}
		if(scrollPos > 200){
			$('ul li a').removeClass("active");
			$( ".sandwichClass" ).addClass('active');
		}
		
		if(scrollPos > 1000){
			$('ul li a').removeClass("active");
			$( ".gestureClass" ).addClass('active');
		}
		
		if(scrollPos > 1800){
			$('ul li a').removeClass("active");
			$( ".harveyClass" ).addClass('active');
		}
		
		if(scrollPos > 2600){
			$('ul li a').removeClass("active");
			$( ".qwertClass" ).addClass('active');
		}
		if(scrollPos > 3400){
			$('ul li a').removeClass("active");
			$( ".amnesiaClass" ).addClass('active');
		}
		
	});
	
	/* 
		original code taken from:http://jsfiddle.net/gUWdJ/3/
		
	$(document).ready(function () {
		$(document).on("scroll", onScroll);
		
		//smoothscroll
		$('a[href^="#"]').on('click', function (e) {
			e.preventDefault();
			$(document).off("scroll");
			
			$('a').each(function () {
				$(this).removeClass('active');
			})
			$(this).addClass('active');
		  
			var target = this.hash,
				menu = target;
			$target = $(target);
			$('html, body').stop().animate({
				'scrollTop': $target.offset().top+2
			}, 500, 'swing', function () {
				window.location.hash = target;
				$(document).on("scroll", onScroll);
			});
		});
	});

	function onScroll(event){
		var scrollPos = $(document).scrollTop();
		$('#menu-center a').each(function () {
			var currLink = $(this);
			var refElement = $(currLink.attr("href"));
			if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
				$('#menu-center ul li a').removeClass("active");
				currLink.addClass("active");
			}
			else{
				currLink.removeClass("active");
			}
		});
	}
	*/
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        $( ".projectLink" ).removeClass('active');
        $('a').each(function () {
            $(this).removeClass('active');
        })
		$( 	window.location.hash ).removeClass('active');
        $(this).addClass('active');
		
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-70
        }, 400, 'swing', function () {
            
            $(document).on("scroll", onScroll);
        });
		
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#div a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#menu-center ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
		
    });
	
}