$(function(){
	window.jsel = JSONSelect;
	var uri = localStorage.getItem('uri_goods');//拿到传过来的id
	var situation = localStorage.getItem('equation');//状态
	var dough = localStorage.getItem('cash');//奖励钱
	var title = localStorage.getItem('slogan');//标题
	var small = localStorage.getItem('smallBanks');//人数
	var setOutTime = localStorage.getItem('setOutTime');//任务时间
	var restTime = localStorage.getItem('endingTime');//结束时间
	var startTime = localStorage.getItem('setUptTime');//开始时间
	var myDate = new Date();//获取系统当前时间
	myDate.getYear(); //获取当前年份(2位)
	myDate.getMonth(); //获取当前月份(0-11,0代表1月)
	myDate.getDate(); //获取当前日(1-31)
	myDate.getHours(); //获取当前小时数(0-23)
	myDate.getMinutes(); //获取当前分钟数(0-59)
	myDate.getSeconds(); //获取当前秒数(0-59)
	var Month = myDate.getMonth()+1;
	var date = myDate.getDate();
	var miao = myDate.getHours()*3600 + myDate.getMinutes()*60 + myDate.getSeconds();
	var sMonth = setOutTime.substring(2, 4);//月份
	var sDate = setOutTime.substring(4, 6);//日
	var sHour = setOutTime.substring(6, 8);//小时
	var sMinute = setOutTime.substring(8, 10);//分钟
	var sSecond = setOutTime.substring(10, 12);//秒
	var sMiao = sHour*3600 + sMinute*60 + sSecond*1;
	if(Month!=sMonth && date!=sDate){
		$('.now').html(sMonth+'月'+sDate+'日')
	}else if(miao-Miao<=3600){
		$('.now').html('刚刚')
	}else if(miao-Miao>3600){
		$('.now').html('今天')
	}
	//获取开始时间
    // 开始时间的总秒数
    var startTimetm = "20" + startTime.substring(0, 2) + "/" + startTime.substring(2, 4) + "/" + startTime.substring(4, 6) + " " + startTime.substring(6, 8) + ":" + startTime.substring(8, 10) + ":" + startTime.substring(10, 12);
    var startDate = new Date(startTimetm).getTime();
    
    // 获取结束时间
    // 结束时间的总秒数
    sekillEndTime = "20" + restTime.substring(0, 2) + "/" + restTime.substring(2, 4) + "/" + restTime.substring(4, 6) + " " + restTime.substring(6, 8) + ":" + restTime.substring(8, 10) + ":" + restTime.substring(10, 12);
    var endTDate = new Date(sekillEndTime).getTime();
    
    //获取当前时间
    var currentDate = new Date();
    currentDate = currentDate.getTime();
    //时间段要注意两种情况一种是刚进来就已经开始倒计时，还有就是到页面还没有倒计时，就用结束的时间减去当前的时间
    var totalSecond;
    if (startDate < currentDate  && currentDate <= endTDate) {//已经在倒计时了
        totalSecond = parseInt((endTDate - currentDate) / 1000);
        setTimeout(function () {//已经在倒计时了
            countdown(totalSecond)
           },1000)
    }
	if(situation == 0){
		$('.top_money').html(dough);
		$('.top_title').html(title);
		$('.txt_p').html('已有'+small+'人完成');
		sekillEndTime = "20" + restTime.substring(0, 2) + "-" + restTime.substring(2, 4) + "-" + restTime.substring(4, 6) + " " + restTime.substring(6, 8) + ":" + restTime.substring(8, 10) + ":" + restTime.substring(10, 12);
		$('.expiration_date').html(sekillEndTime);
		$('#task_apply').html('立即申请任务');
		$('#task_apply').click(function(){
			$('#modal_apply').show();
		})
	}
	if(situation == 1){
		$('.top_money').html(dough);
		$('.top_title').html(title);
		$('.txt_p_ti').html('任务剩余时间');
		sekillEndTime = "20" + restTime.substring(0, 2) + "-" + restTime.substring(2, 4) + "-" + restTime.substring(4, 6) + " " + restTime.substring(6, 8) + ":" + restTime.substring(8, 10) + ":" + restTime.substring(10, 12);
		$('.expiration_date').html(sekillEndTime);
		$('#task_apply').html('继续任务');
		
	}
	if(situation == 4){
		$('.top_money').html(dough);
		$('.top_title').html(title);
		$('.txt_p').html('');
		sekillEndTime = "20" + restTime.substring(0, 2) + "-" + restTime.substring(2, 4) + "-" + restTime.substring(4, 6) + " " + restTime.substring(6, 8) + ":" + restTime.substring(8, 10) + ":" + restTime.substring(10, 12);
		$('.expiration_date').html(sekillEndTime);
		$('#task_apply').html('重新任务');
		$('#task_apply').click(function(){
			location.href = 'start_taskFirst.html';
		})
	}
	if(situation == 5){
		$('.top_money').html(dough);
		$('.top_title').html(title);
		$('.txt_p').html('');
		sekillEndTime = "20" + restTime.substring(0, 2) + "-" + restTime.substring(2, 4) + "-" + restTime.substring(4, 6) + " " + restTime.substring(6, 8) + ":" + restTime.substring(8, 10) + ":" + restTime.substring(10, 12);
		$('.expiration_date').html(sekillEndTime);
		$('#task_apply').html('已完成');
		$('#task_apply').attr('disabled',true);
		$('#task_apply').css({'backgoround':'#b4b4b4','color':'#fff'});
	}
	$('#task_help').click(function(){
		$('#modal_help').show();
	})
	$('.close').click(function(){
		$('#modal_help').hide();
		$('#modal_apply').hide();
	})
	//  倒计时方法---已经开始
	function countdown (totalSecond){
	    var that=this;
	    clearInterval(that.interval);
	    that.interval = setInterval(function () {
		    // 总秒数
		    var second = totalSecond;
		    // 天数位
		    var day = Math.floor(second / 3600 / 24);
		    var dayStr = day.toString();
		    if (dayStr.length == 1) dayStr = '0' + dayStr;
		    // 小时位
		    var hr = Math.floor((second - day * 3600 * 24) / 3600);
		    var hrStr = hr.toString();
		    if (hrStr.length == 1) hrStr = '0' + hrStr;
		    // 分钟位
		    var min = Math.floor((second - day * 3600 * 24 - hr * 3600) / 60);
		    var minStr = min.toString();
		    if (minStr.length == 1) minStr = '0' + minStr;
		    // 秒位
		    var sec = second - day * 3600 * 24 - hr * 3600 - min * 60;
		    var secStr = sec.toString();
	        if (secStr.length == 1) secStr = '0' + secStr;
	        //将倒计时赋值到div中
	        document.getElementById("drew").innerHTML = hrStr+':'+minStr+':'+secStr; 
	        totalSecond--; 
	        console.log(totalSecond)
		    if (totalSecond == 0) {
	            setTimeout(function tt(totalSecond){
	                document.getElementById("drew").innerHTML = '00'+':'+'00'+':'+'00';
	                clearInterval(that.interval);
	                $('.txt_p').html('');
					$('#task_apply').html('立即申请任务');
					$('#task_apply').click(function(){
						$('#modal_apply').show();
					})
	            },1000)
	            
	            
		    }else{
		    	$('#task_apply').click(function(){
					location.href = 'start_taskFirst.html';
				})
		    }
	    }.bind(that) ,1000);

	}
	
})

