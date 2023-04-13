$(document).ready(function() {
	$('#cat').click(function() {
		$(this).addClass('rotate');
		setTimeout(function() {
			$('#cat').removeClass('rotate');
		}, 1000);
	});
});