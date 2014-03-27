$(document).ready( function() {

	$(window).scroll(function()	{
		var scrollPos = $(document).scrollTop();
		$("title").html("s = " + scrollPos);
		if(scrollPos > 0){
			$('ul li a').removeClass("activeLink");
			$( ".aboutClass" ).addClass('activeLink');
		}
		if(scrollPos > 450){
			$('ul li a').removeClass("activeLink");
			$( ".projectClass" ).addClass('activeLink');
		}	
		if(scrollPos > 1100){
			$('ul li a').removeClass("activeLink");
			$( ".uforiaClass" ).addClass('activeLink');
		}
		if(scrollPos > 1400){
			$('ul li a').removeClass("activeLink");
			$( ".sandwichClass" ).addClass('activeLink');
		}
		if(scrollPos > 2100){
			$('ul li a').removeClass("activeLink");
			$( ".gestureClass" ).addClass('activeLink');
		}
		if(scrollPos > 2800){
			$('ul li a').removeClass("activeLink");
			$( ".harveyClass" ).addClass('activeLink');
		}
		if(scrollPos > 3600){
			$('ul li a').removeClass("activeLink");
			$( ".qwertClass" ).addClass('activeLink');
		}		
		if(scrollPos > 4400){
			$('ul li a').removeClass("activeLink");
			$( ".amnesiaClass" ).addClass('activeLink');
		}
		if(scrollPos > 5100){
			$('ul li a').removeClass("activeLink");
			$( ".experienceClass" ).addClass('activeLink');
		}
		if(scrollPos > 5800){
			$('ul li a').removeClass("activeLink");
			$( ".contactClass" ).addClass('activeLink');
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
            'scrollTop': $target.offset().top-15
        }, 600, 'swing', function () {
            
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