$(function () {
	$('#signUp_form').hide();

	$('.decoding').each(function () {
		$(this).html($(this).text());
	});
	$('.goto').hover(
		function () {
			$(this).text("Go to "+ $(this).text());
			// $(this).
		},
		function () {
			$(this).text($(this).text().split('Go to ')[1]);
		}
	);

	$('.animation').hover(
		function () {
			$('.animation').css({
				'font-size':'15px',
				'color':'lightgreen'	
			});
		},
		function () {
			$('.animation').css({
				'font-size':'14px',
				'color':'white'	
			});
		}
	);
});

function switchTable (num) {
	switch(num)
		{
		case 1:
			$('#signUp_form').hide();
			$('#signIn_form').show();
			break;
		case 2:
			$('#signIn_form').hide();
			$('#signUp_form').show();
		  	break;
		default:
			 break;
		}
}
