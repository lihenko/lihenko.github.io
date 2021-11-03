$(document).ready(function(){
	var button = $('.roadmap-control .btn');

	button.click(function(event) {
		event.preventDefault();
		button.removeClass('active');
		$(this).addClass('active');
		$('[class^="stage-"]').fadeOut();
		var row = '.' + $(this).data('stage');
		$(row).fadeIn();
	});
})

$(document).ready(function(){
	var number = $('.number-input input');
	var less = $('.less');
	var more = $('.more');

	
	less.click(function(event) {
		var value = parseInt(number.val());
		if (value > 1) {
			number.val(value - 1);
		} else {
			return;
		}
	});
	more.click(function(event) {
		var value = parseInt(number.val());
		number.val(value + 1);
	});
})