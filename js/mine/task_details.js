
window.jsel = JSONSelect;
var uri = localStorage.getItem('uri_goods');//拿到传过来的id
var situation = localStorage.getItem('equation');//状态
var dough = localStorage.getItem('cash');//奖励钱
var title = localStorage.getItem('slogan');//标题
var small = localStorage.getItem('smallBanks');//人数
var restTime = localStorage.getItem('endingTime');//时间

console.log(uri,situation,dough,title,small,restTime,'lk')

$(function(){
	$('#task_help').click(function(){
		$('#modal_help').show();
	})
	$('.close').click(function(){
		$('#modal_help').hide();
		$('#modal_apply').hide();
	})
	$('#task_apply').click(function(){
		$('#modal_apply').show();
	})
})