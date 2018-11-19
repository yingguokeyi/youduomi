
// 小票查询
$(function(){
     // 页面进来还没有查询信息的时候要根据里一个接口里面进行判断
    // 点击查询获得小票的内容
    var receipts='';//查询一条小票的信息
    var past ='';//历史记录
    // 历史记录
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
                      // 0 未审核
                         redundantHtml += '<li>';
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
                            redundantHtml += ' <span class="green">'+depositsHistory[i].profit+'</span>';
                        } else if(depositsHistory[i].status == 2){ //2 未通过
                            redundantHtml += ' <span class="red">虚假信息</span>';
                        }
                         redundantHtml += ' <img src="../../image/mine/enter.png" />';
                         redundantHtml += ' </div>';
                         redundantHtml += ' </li>';
                }
                $('.without').css({display: 'none'});  
                $('.discountgoods_title').css({display: 'block'}); 
                $('.withdrawal_record ul').html(redundantHtml); 
            }else{
                $('.without').css({display: 'block'});  
                $('.discountgoods_title').css({display: 'none'}); 
            }

        }

    })

    //点击查询的时候调
    $(document).on("click", "#query", function() {
         // 获得小票的内容
        var inputValue = document.getElementById("demo1").value;
        $.ajax({
            url:  domain_name_url + "/receipts",
            type: "GET",
            dataType: "jsonp", //指定服务器返回的数据类型
            data: {
                method: 'getReceiptsRecord',
                userId:4599,
                receipts_order: inputValue,
                url_type:'receipts'
            },
            success: function(data) {
                var rsList = data.result.rs; 
                if( rsList !=''){
                    var existHtml ='';
                    for(var i = 0;i<rsList.length;i++){
                        receipts = rsList[i].receipts_order;//小票号
                                existHtml += '<li>';
                                existHtml += '<div class="record_infor">';
                                existHtml += '<p class="infor_title">';
                                existHtml += '<span>'+rsList[i].title+'</span>';
                                existHtml += '</p>';
                                existHtml += '<p class="record_plan">小票号：<em>'+receipts+'</em> <span class="record_t">消费: <i>'+rsList[i].money +'</i></span></p>';
                                existHtml += '</div>';
                                existHtml += '<div class="record_img">';
                                if(rsList[i].status == 0){  // 0 未审核
                                    existHtml += '<span class="yellow">待审核</span>';
                                } else if(rsList[i].status == 1){  //1 已通过
                                    existHtml += ' <span class="green">'+rsList[i].profit+'</span>';
                                }else if(rsList[i].status == 2){ //2 未通过
                                    existHtml += ' <span class="red">虚假信息</span>';
                                }
                                existHtml += ' <img src="../../image/mine/enter.png" />';
                                existHtml += ' </div>';
                                existHtml += ' </li>';
                                 
                    }
                     $('.without').css({display: 'none'});
                    $('.discountgoods_title').css({display: 'block'}); 
                    $('.withdrawal_record ul').html(existHtml);  

                } else{  
                    $('.warm').css({display: 'block'}); 
                    $('.exist').css({display: 'none'}); 
                    $('.discountgoods_title').css({display: 'none'});
                    $('.without').css({display: 'none'});
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
                        window.location.href = 'toUploadReceipts.html';
                    });
                    $(document).on("click", ".warm_cancel", function() {
                        layer.closeAll('page');
                        $('.warm').css({display: 'none'});  
                    });	
                }
              
               
            }
        })

        
       
    })

     
})
 
