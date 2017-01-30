$(document).ready(function(){

	/* Visibility toggle */
	$(".menu-title ~ .menu-content").hide();
	$(".menu-title").click(function(e){
		$(this).siblings(".menu-content").slideToggle();
		if($(this).attr('href').indexOf('#') > -1){
			e.preventDefault();
		}
	});
});