$(document).ready(function(e){});

$('.butsub').click(function(e){
	e.preventDefault();
	var email = $(this).parent('form').find('.email').val()
	var passcode = $(this).parent('form').find('.passcode').val()
	alert(email+passcode)
});