$(document).ready(function(){
	$(".slicking-content").slick({
		swipe: true,
		prevArrow: $(".left-arrow"),
		nextArrow: $(".right-arrow")
	});
	
	$('.three-steps').each(function(){
			$(this).click(function(){
					$('.three-steps').parent().removeClass('active');
					$(this).parent().addClass('active');
					$(".tab-with-glasses, .tab-second-content, .tab-third-content").removeClass("active-tab");
					if ($(this).data("tab") == "tab1") {
						$(".tab-with-glasses").addClass("active-tab");
					}
					else if ($(this).data("tab") == "tab2") {
						$(".tab-second-content").addClass("active-tab");
					}
					else {
						$(".tab-third-content").addClass("active-tab");
					};
				});
		});
});