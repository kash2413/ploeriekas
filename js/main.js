"use strict";
var translate = function() {
    $(".circles_left").css("transform", "translateY(" + .68 * $(window).scrollTop() + "px)"), $(".circles_right").css("transform", "translateY(" + .08 * $(window).scrollTop() + "px)")
};

function alwaysSquare(a) {
    var o = $(a).width();
    $(a).css("height", o)
}

function sameHeight(a, o) {
    var t = $(a).outerHeight();
    $(o).css("min-height", t)
}

function adjustCollapseView() {
    992 <= $(document).width() ? ($(".mapmenu-dropdown-list").collapse("show"), $(".spot-info").collapse("hide")) : $(".mapmenu-dropdown-list").collapse("hide")
}

function stopToggling() {
    $(document).width() >= "992" ? $(".mapmenu-dropdown-mainbtn[data-toggle]").attr("data-toggle", "") : $(".mapmenu-dropdown-mainbtn[data-toggle]").attr("data-toggle", "collapse")
}
$(window).resize(function() {
    stopToggling(), alwaysSquare(".flavors-item"), alwaysSquare(".fbsection-item"), sameHeight(".flavors-container", ".flavors"), adjustCollapseView(), $(".navbar-collapse").css({
        maxHeight: $(window).height() - $(".navbar-header").height() + "px"
    })
}), $(document).ready(function() {
    
    function killHover(){
        if ( $('#sort-alphabetic').parent().hasClass('active') == true ) {
            $('#sort-form-clear').removeClass('sort-form-clear-hover');
        } else $('#sort-form-clear').addClass('sort-form-clear-hover');
    }

    setTimeout(killHover, 500);

	$(".sort-form-checkboxes").on('show.bs.dropdown', function () {
	 	$(".mapmenu-dropdown-list").collapse("show")
	 	$('.mapmenu-dropdown-mainbtn').removeClass("collapsed");
	}), 
	$(".sort-form-checkboxes").on('hide.bs.dropdown', function () {
	 	$('#sort-form-open').addClass("collapsed");	 
        
	}),
    $(".sort-form-checkboxes").on('hidden.bs.dropdown', function () {
	 	$('#sort-form-open').addClass("collapsed");	 
        setTimeout(killHover, 200);
	}),


    $('.spot-info').on('hidden.bs.collapse	', function () {
        var toElement = $(".panel-group").find(".mapmenu-dropdown-item.active");
        $('.mapmenu-dropdown').scrollTo(toElement, 500);
    }),	
        
        
    $(function(){
        if ( $(window).width() <= 991 ){  
            $('.spot-info').on('shown.bs.collapse', function () {
                var toElement = $('#scrollHere').offset().top - 100 ;
                $(window).scrollTop( toElement );                
                                
                $('.mapmenu-dropdown').scrollTo( this, 500 )
            })	
        }
    }),
    


	$(function(){
        
		var options = {
		  valueNames: [ 
		  'mapmenu-dropdown-title', 
		  'hidden-from-timestamp',
		  'hidden-to-timestamp'              
		  ]
		};
		var pointsList = new List('sortableList', options);
        
		function defaultState(){
			pointsList.sort('mapmenu-dropdown-title', { alphabet: "aąbcćdeęfghijklłmnńoóprsśtuwyzźż" });
		}
			
		$('#sort-form-clear').click(function(){
			defaultState();
			$('#sort-alphabetic').parent().button('toggle');            
            $('.sort-form-checkboxes').removeClass('open');
            $('#sort-form-open').addClass('collapsed');
            $('#sort-form-open').attr("aria-expanded","false");
            setTimeout(killHover, 200);
		});	        
        
        $('#sort-alphabetic').parent().click(function(){
			defaultState();
			$('this').button('toggle');
            $('#sort-form-open').dropdown('toggle');
		});	
        
        $('#sort-from').parent().click(function(){
			pointsList.sort('hidden-from-timestamp', { order: "asc" });
			$('this').button('toggle');
            $('#sort-form-open').dropdown('toggle');
		});	
        
        $('#sort-to').parent().click(function(){
			pointsList.sort('hidden-to-timestamp', { order: "desc" });
			$('this').button('toggle');
            $('#sort-form-open').dropdown('toggle');
		});	

	});
	


    stopToggling(), alwaysSquare(".flavors-item"), alwaysSquare(".fbsection-item"), sameHeight(".flavors-container", ".flavors"), $(".collapsed").click(function() {
        $(this).hasClass("collapsed") ? $(this).removeClass("collapsed") : $(this).addClass("collapsed")
    }),  
    $(".navbar-toggle").click(function() {
        var a = $(this).parent(),
            o = $(this).next().find(".navbar-logo");
        $(".navbar-collapse").hasClass("in") ? (a.removeClass("hA"), o.removeClass("logo-toggle")) : (a.addClass("hA"), o.addClass("logo-toggle"))
    }), jQuery("img.svg").each(function() {
        var a = jQuery(this),
            o = a.attr("id"),
            t = a.attr("class"),
            e = a.attr("src");
        jQuery.get(e, function(e) {
            var s = jQuery(e).find("svg");
            void 0 !== o && (s = s.attr("id", o)), void 0 !== t && (s = s.attr("class", t + " replaced-svg")), s = s.removeAttr("xmlns:a"), a.replaceWith(s)
        }, "xml")
    }), $(".main-slider").slick({
        infinite: !1,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !0,
        dots: !0,
        autoplay: !0,
        autoplaySpeed: 5e3,
        nextArrow: '<svg class="slider-arrow-right" xmlns="http://www.w3.org/2000/svg" width="38" height="63" viewBox="0 0 38 63"><path d="M5 63c-0.6 0-1.3-0.1-1.9-0.3 -0.6-0.2-1.1-0.6-1.6-1C0.5 60.7 0 59.4 0 58.1c0-1.3 0.5-2.6 1.5-3.5L25.8 31.3 1.9 8.4C0.9 7.5 0.4 6.2 0.4 4.9c0-1.3 0.5-2.6 1.5-3.5C2.8 0.5 4 0 5.4 0c1.3 0 2.6 0.5 3.5 1.4l27.6 26.4c1 0.9 1.5 2.2 1.5 3.5 0 1.3-0.5 2.6-1.5 3.5L8.5 61.6c-0.5 0.5-1.1 0.8-1.7 1.1C6.2 62.9 5.6 63 5 63z"/></svg>',
        prevArrow: '<svg class="slider-arrow-left" xmlns="http://www.w3.org/2000/svg" width="38" height="63" viewBox="0 0 38 63"><path d="M32.6 63c-1.3 0-2.5-0.5-3.5-1.4L1.5 35.2C0.5 34.3 0 33 0 31.7c0-1.3 0.5-2.6 1.5-3.5L29.5 1.4c0.5-0.5 1.1-0.8 1.7-1.1 1.2-0.5 2.5-0.4 3.6 0 0.6 0.2 1.1 0.6 1.6 1C37.5 2.3 38 3.6 38 4.9s-0.5 2.6-1.5 3.5L12.2 31.7 36.1 54.6c1 0.9 1.5 2.2 1.5 3.5 0 1.3-0.5 2.6-1.5 3.5C35.2 62.5 34 63 32.6 63z"/></svg>'
    }), $(".mapmenu-dropdown-item").click(function() {
        $(".mapmenu-dropdown-item").removeClass("active"), $(this).addClass("active")
    }), $(".spot-info").on("show.bs.collapse", function() {
        $(".mapmenu-dropdown-list").collapse("hide")
    }), $(".spot-info").on("hide.bs.collapse", function() {
        $(".mapmenu-dropdown-list").collapse("show")
    }), $(".mapmenu-dropdown-mainbtn").on("click", function() {
        $(".spot-info").collapse("hide")
    }), $(window).on("hashchange", function(a) {
        history.replaceState("", document.title, a.originalEvent.oldURL)
    }), $(document).on("click", 'a[href^="#"]', function(a) {
        a.preventDefault(), $("html, body").animate({
            scrollTop: $($.attr(this, "href")).offset().top
        }, 500)
    }), AOS.init(), $(".navbar-collapse").css({
        maxHeight: $(window).height() - $(".navbar-header").height() + "px"
    }), $(document).on("click", ".navbar-collapse.in a", function(a) {
        $(a.target).is("a") && $(".navbar-collapse.in").collapse("hide"), $(".navbar-logo").removeClass("logo-toggle"), $(".site-header .navbar-toggle").addClass("collapsed")
    }), $(".navbar-brand").click(function(a) {
        $("nav.navbar").hasClass("affix") && (a.preventDefault(), $("body,html").animate({
            scrollTop: 0
        }, 500))
    }), jQuery.fn.scrollTo = function(a, o) {
        return $(this).animate({
            scrollTop: $(this).scrollTop() - $(this).offset().top + $(a).offset().top
        }, null == o ? 1e3 : o), this
    }
}), $(window).on("load", function() {
    sameHeight(".flavors-container", ".flavors"), adjustCollapseView()
}), $(window).on("scroll", function() {
    window.requestAnimationFrame(translate)
});