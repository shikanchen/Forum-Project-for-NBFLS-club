$(function () {
	//define copyright
	var copyright = '<b>Version 3.2.0<br/><br/> Copyright 2016 Jerry Chen</b>';
	$('body').append('<nav class="navbar navbar-default navbar-fixed-bottom"><div class="container copyright">'+copyright+'</div></nav>');

	//define logout
	$('.logout').click(function () {
		$('.logoutForm').submit();

	});
  //default unable void()
  $('.yetUnabled').click(function () {
    alert('This function is not available!');
    window.location.reload();
  });

  	function searchCheckup() {
        if ($('[name="searchKey"]').val()=="") {
          	return false;
        };
   	}
  //tmp js
});
