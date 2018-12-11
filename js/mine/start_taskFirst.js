$(function(){
	var uri = localStorage.getItem('uri_goods');//拿到传过来的id
	var state = localStorage.getItem('state');//状态
	var money = localStorage.getItem('money');//奖励钱
	var stime = localStorage.getItem('stime');//开始时间
	var etime = localStorage.getItem('etime');//结束时间
	$.ajax({
        url: domain_name_url + "/task",
        type: "GET",
        dataType: "jsonp", //指定服务器返回的数据类型
        data: {
            method: 'startTask',
            userId: 4599,
            taskId:uri,
            status:state,
            url_type:"task"
        },
        success: function(data) {
        	if(data.success==1){
        		var smoney = (money/100).toFixed(2);
        		$('.quest_rewards i').html(smoney+'元');
        	}
        }
    })    
})