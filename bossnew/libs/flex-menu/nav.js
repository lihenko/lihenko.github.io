$('document').ready(function(){
	$('body').on('click' , '#inv-nav-main-btn' , function(){
		if($('#inv-nav-main-btn').hasClass('is-active')){
			$('#inv-nav-main-btn').removeClass('is-active');
			$('#inv-menu').removeClass('menu-show');
		} else {
			$('#inv-nav-main-btn').addClass('is-active');
			$('#inv-menu').addClass('menu-show');
		}
	});
	
	$('body').on('click' , '#inv-menu a' , function(){
		$('#inv-nav-main-btn').removeClass('is-active');
		$('#inv-menu').removeClass('menu-show');
	});
	
});

