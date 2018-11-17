
// 小票查询
$(function(){
     // 页面进来还没有查询信息的时候要根据里一个接口里面进行判断
    // 点击查询获得小票的内容
    $(document).on("click", "#query", function() {
         // 获得小票的内容
        var inputValue = document.getElementById("demo1").value;
        $.ajax({
            url:  domain_name_url + "/wallet",
            type: "GET",
            dataType: "jsonp", //指定服务器返回的数据类型
            data: {
                method: 'getReceiptsInfo',
                receipts_order: inputValue,
                url_type:'wallet'
            },
            success: function(data) {
                console.log(data,'kk')
                var rsList = data.result.rs; 
                console.log(rsList) 
                var withoutHtml='';
                var existHtml ='';
                for(var i = 0;i<rsList.lenght;i++){
                     if(rsList !==''){
                        existHtml='<div class="discountgoods_title">';
                        existHtml='<div class="kong"></div>';
                        existHtml='<ul>';
                        existHtml='<li class="synthesize">';
                        existHtml='<img class="synthesize_img" src="../../image/receipt/flashback.png"/>';
                        existHtml='</li>';
                        existHtml=' <li class="sales">上传历史</li>';
                        existHtml='<li class="price">';
                        existHtml='<a href="moreReceipts.html">  更多';
                        existHtml=' <span class="p_ret"></span> ';
                        existHtml='</a>';
                        existHtml=' </li>';
                        existHtml='</ul>';
                        existHtml='</div>';

                        existHtml='<div class="withdrawal_record">';
                        existHtml='<ul>';

                        existHtml='<li>';
                        existHtml='<div class="record_infor">';
                        existHtml='<p class="infor_title">';
                        existHtml='<span>北京永辉超市有限公司</span>';
                        existHtml=' </p>';
                        existHtml=' <p class="record_plan">小票号：<em>15365478216485</em> <span class="record_t">消费: <i>0.50</i></span>  </p>';
                        existHtml='</div>';
                        existHtml='<div class="record_img">';
                        existHtml=' <span class="green">奖励0.5元</span>';
                        existHtml=' <img src="../../image/mine/enter.png" />';
                        existHtml=' </div>';
                        existHtml=' </li>';

                        existHtml='<li>';
                        existHtml='<div class="record_infor">';
                        existHtml='<p class="infor_title">';
                        existHtml='<span>北京永辉超市有限公司</span>';
                        existHtml=' </p>';
                        existHtml=' <p class="record_plan">小票号：<em>15365478216485</em> <span class="record_t">消费: <i>0.50</i></span>  </p>';
                        existHtml='</div>';
                        existHtml='<div class="record_img">';
                        existHtml='<span class="yellow">待审核</span>';
                        existHtml=' <img src="../../image/mine/enter.png" />';
                        existHtml=' </div>';
                        existHtml=' </li>';

                        existHtml='<li>';
                        existHtml='<div class="record_infor">';
                        existHtml='<p class="infor_title">';
                        existHtml='<span>北京永辉超市有限公司</span>';
                        existHtml=' </p>';
                        existHtml=' <p class="record_plan">小票号：<em>15365478216485</em> <span class="record_t">消费: <i>0.50</i></span>  </p>';
                        existHtml='</div>';
                        existHtml='<div class="record_img">';
                        existHtml=' <span class="red">虚假信息</span>';
                        existHtml=' <img src="../../image/mine/enter.png" />';
                        existHtml=' </div>';
                        existHtml=' </li>';

                        existHtml='</ul>';
                        existHtml=' </div>';
                    }

                }  
                // $('.without').html(withoutHtml);   
                $('.exist').html(existHtml);  
               
            }
        })	
       
    })
   

})