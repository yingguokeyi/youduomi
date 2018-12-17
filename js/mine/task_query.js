$(function(){
	$('#cl_sel').click(function(){
		$('#year_sel').toggle();
	})
	$('#year_sel ul li').click(function(){
		$('.year').html($(this).html());
		$('#year_sel').hide();
	})
	$('#cli_sel').click(function(){
		$('#mont_sel').toggle();
	})
	$('#mont_sel ul li').click(function(){
		$('.month').html($(this).html());
		$('#mont_sel').hide();
	})
	
})