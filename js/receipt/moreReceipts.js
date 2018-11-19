
// 调取上传历史
$(function(){
    $.ajax({
        url:  domain_name_url + "/receipts",
        type: "GET",
        dataType: "jsonp", //指定服务器返回的数据类型
        data: {
            method: 'getReceiptsRecord',
            userId:4599,
            receipts_order: '',
            url_type:'receipts'
        },
        success: function(data) {
            var depositsHistory =data.result.rs;
            if(depositsHistory !=''){
                var redundantHtml='';
                for(var i = 0;i<depositsHistory.length;i++){
                    past = depositsHistory[i].receipts_order;//小票号
                        redundantHtml += '<li>';
                        redundantHtml += '<a href="receiptsQuery.html">';
                        redundantHtml += '<div class="record_infor">';
                        redundantHtml += '<p class="infor_title">';
                        redundantHtml += '<span>'+depositsHistory[i].title+'</span>';
                        redundantHtml += '</p>';
                        redundantHtml += '<p class="record_plan">小票号：<em>'+past+'</em> <span class="record_t">消费: <i>'+depositsHistory[i].money +'</i></span></p>';
                        redundantHtml += '</div>';
                        redundantHtml += '<div class="record_img">';
                         if(depositsHistory[i].status == 0){ // 0 未审核
                            redundantHtml += '<span class="yellow">待审核</span>';
                         }else if(depositsHistory[i].status == 1){  //1 已通过
                            redundantHtml += ' <span class="green">奖励'+depositsHistory[i].profit/100+'</span>';
                        } else if(depositsHistory[i].status == 2){ //2 未通过
                            redundantHtml += ' <span class="red">虚假信息</span>';
                        }
                         redundantHtml += ' <img src="../../image/mine/enter.png" />';
                         redundantHtml += ' </div>';
                         redundantHtml += ' </a>';
                         redundantHtml += ' </li>';
                } 
                $('.vacant').css({display: 'none'});
                $('.withdrawal_record ul').html(redundantHtml); 
            }
        }

    })



    $(document).on("click", ".main_qingkong_title_btn", function() {

         // 弹框
         layer.open({
            type: 1,
            content: $('.warm').html(),
            anim: 'up',
            scrollbar: false,
            shadeClose: false,
            style: 'position:fixed;bottom:50%;left: 8%; right:8%;height: auto;border:none;border-radius:6px'
        });

        $(document).on("click", ".warm_login", function(){
            $.ajax({
                url:  domain_name_url + "/receipts",
                type: "GET",
                dataType: "jsonp", //指定服务器返回的数据类型
                data: {
                    method: 'emptyHistory',
                    userId:4599,
                    receipts_order: '',
                    url_type:'receipts'
                },
                success: function(data) {
                    console.log(data,'jk')
                    $('.withdrawal_record ul').remove(); 
                    $('.vacant').css({display: 'block'});
                    layer.closeAll('page'); 
                }
                
            })
        });

        $(document).on("click", ".warm_cancel", function() {
            layer.closeAll('page');
            $('.warm').css({display: 'none'});  
        });	
      
    })
      

})