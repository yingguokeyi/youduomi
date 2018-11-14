

var page;
var urlStatus;
page = 1;
//任务栏

function ask(page,urlStatus){
        var goodListHtml = '';
           
            goodListHtml += ' <li class="main_content_li">';
            goodListHtml += '<span class="main_content_a_left">';
            goodListHtml += '<img class="main_img" src="../../image/makeEveryDay/money.png">';
            goodListHtml += ' </span>';
            goodListHtml += '<span class="main_content_a_right">';
            goodListHtml += '  <span class="m_c_a_r_top">58同城速运丰城四级注册推广，只需完成推广 <i class="just_now">刚刚 </i></span>';
            goodListHtml += ' <span class="m_c_a_r_bottom">';
            goodListHtml += ' <span class="m_c_a_r_bottomleft">已领取    剩余时间：01:20:10</span>';
            goodListHtml += '  </span>';
            goodListHtml += '  </span>';
            goodListHtml += '<a href="#" class="main_content_a">';
            goodListHtml += ' <div class="particulars">详情</div>';
            goodListHtml += ' </a>';
            goodListHtml += ' </li>';
           
            

            goodListHtml += ' <li class="main_content_li">';
            goodListHtml += '<span class="main_content_a_left">';
            goodListHtml += '<img class="main_img" src="../../image/makeEveryDay/money.png">';
            goodListHtml += ' </span>';
            goodListHtml += '<span class="main_content_a_right">';
            goodListHtml += '  <span class="m_c_a_r_top">58同城速运丰城四级注册推广，只需完成推广 <i class="just_now">刚刚 </i></span>';
            goodListHtml += ' <span class="m_c_a_r_bottom">';
            goodListHtml += ' <span class="m_c_a_r_bottomleft">已领取    剩余时间：01:20:10</span>';
            goodListHtml += '  </span>';
            goodListHtml += '  </span>';
            goodListHtml += '<a href="#" class="main_content_a">';
            goodListHtml += ' <div class="particulars">详情</div>';
            goodListHtml += ' </a>';
            goodListHtml += ' </li>';
           
            

            goodListHtml += ' <li class="main_content_li">';
            goodListHtml += '<span class="main_content_a_left">';
            goodListHtml += '<img class="main_img" src="../../image/makeEveryDay/money.png">';
            goodListHtml += ' </span>';
            goodListHtml += '<span class="main_content_a_right">';
            goodListHtml += '  <span class="m_c_a_r_top">58同城速运丰城四级注册推广，只需完成推广 <i class="just_now">刚刚 </i></span>';
            goodListHtml += ' <span class="m_c_a_r_bottom">';
            goodListHtml += ' <span class="m_c_a_r_bottomleft">已领取    剩余时间：01:20:10</span>';
            goodListHtml += '  </span>';
            goodListHtml += '  </span>';
            goodListHtml += '<a href="#" class="main_content_a">';
            goodListHtml += ' <div class="particulars">详情</div>';
            goodListHtml += ' </a>';
            goodListHtml += ' </li>';
           

            goodListHtml += ' <li class="main_content_li">';
            goodListHtml += '<span class="main_content_a_left">';
            goodListHtml += '<img class="main_img" src="../../image/makeEveryDay/money.png">';
            goodListHtml += ' </span>';
            goodListHtml += '<span class="main_content_a_right">';
            goodListHtml += '  <span class="m_c_a_r_top">58同城速运丰城四级注册推广，只需完成推广 <i class="just_now">刚刚 </i></span>';
            goodListHtml += ' <span class="m_c_a_r_bottom">';
            goodListHtml += ' <span class="m_c_a_r_bottomleft">已领取    剩余时间：01:20:10</span>';
            goodListHtml += '  </span>';
            goodListHtml += '  </span>';
            goodListHtml += '<a href="#" class="main_content_a">';
            goodListHtml += ' <div class="particulars">详情</div>';
            goodListHtml += ' </a>';
            goodListHtml += ' </li>';
          

            goodListHtml += ' <li class="main_content_li">';
            goodListHtml += '<span class="main_content_a_left">';
            goodListHtml += '<img class="main_img" src="../../image/makeEveryDay/money.png">';
            goodListHtml += ' </span>';
            goodListHtml += '<span class="main_content_a_right">';
            goodListHtml += '  <span class="m_c_a_r_top">58同城速运丰城四级注册推广，只需完成推广 <i class="just_now">刚刚 </i></span>';
            goodListHtml += ' <span class="m_c_a_r_bottom">';
            goodListHtml += ' <span class="m_c_a_r_bottomleft">已领取    剩余时间：01:20:10</span>';
            goodListHtml += '  </span>';
            goodListHtml += '  </span>';
            goodListHtml += '<a href="#" class="main_content_a">';
            goodListHtml += ' <div class="particulars">详情</div>';
            goodListHtml += ' </a>';
            goodListHtml += ' </li>';
           

            goodListHtml += ' <li class="main_content_li">';
            goodListHtml += '<span class="main_content_a_left">';
            goodListHtml += '<img class="main_img" src="../../image/makeEveryDay/money.png">';
            goodListHtml += ' </span>';
            goodListHtml += '<span class="main_content_a_right">';
            goodListHtml += '  <span class="m_c_a_r_top">58同城速运丰城四级注册推广，只需完成推广 <i class="just_now">刚刚 </i></span>';
            goodListHtml += ' <span class="m_c_a_r_bottom">';
            goodListHtml += ' <span class="m_c_a_r_bottomleft">已领取    剩余时间：01:20:10</span>';
            goodListHtml += '  </span>';
            goodListHtml += '  </span>';
            goodListHtml += '<a href="#" class="main_content_a">';
            goodListHtml += ' <div class="particulars">详情</div>';
            goodListHtml += ' </a>';
            goodListHtml += ' </li>';
            
        if(12*page>12){
            $('#orderContent ul').append(goodListHtml);
        }else{
            $('#orderContent ul').html(goodListHtml);
        }   
	
}






function placard(){
    var menuListHtml = '';
    menuListHtml += '<li>全部任务</li>';
    $('.scroller ul').html(menuListHtml);
    $('.scroller ul').find('li:first-child').addClass('cur');
    ask(1,urlStatus);
    $.fn.navbarscroll = function (options) {
        //各种属性、参数
        var _defaults = {
            className:'cur', //当前选中点击元素的class类名
            clickScrollTime:300, //点击后滑动时间
            duibiScreenWidth:0.4, //单位以rem为准，默认为0.4rem
            scrollerWidth:3, //单位以px为准，默认为3,[仅用于特殊情况：外层宽度因为小数点造成的不精准情况]
            defaultSelect:0, //初始选中第n个，默认第0个
            fingerClick:0, //目标第0或1个选项触发,必须每一项长度一致，方可用此项
            endClickScroll:function(thisObj){}//回调函数
        }
        var _opt = $.extend(_defaults, options);
        this.each(function () {
            //插件实现代码
            var _wrapper = $(this);
            var _win = $(window);
            var _win_width = _win.width(),_wrapper_width = _wrapper.width(),_wrapper_off_left = _wrapper.offset().left;
            var _wrapper_off_right=_win_width-_wrapper_off_left-_wrapper_width;
            var _obj_scroller = _wrapper.children('.scroller');
            var _obj_ul = _obj_scroller.children('ul');
            var _obj_li = _obj_ul.children('li');
            var _scroller_w = 0;
            _obj_li.css({"margin-left":"0","margin-right":"0"});
            for (var i = 0; i < _obj_li.length; i++) {
                _scroller_w += _obj_li[i].offsetWidth;
            }
            _obj_scroller.width(_scroller_w+_opt.scrollerWidth);
            var myScroll = new IScroll('#'+_wrapper.attr('id'), {
                eventPassthrough: true,
                scrollX: true,
                scrollY: false,
                preventDefault: false
            });
            _init(_obj_li.eq(_opt.defaultSelect));
          
            
            //解决PC端谷歌浏览器模拟的手机屏幕出现莫名的卡顿现象，滑动时禁止默认事件（2017-01-11）
            _wrapper[0].addEventListener('touchmove',function (e){e.preventDefault();},false);
            function _init(thiObj){
                var $this_obj=thiObj;
                var duibi=_opt.duibiScreenWidth*_win_width/10,this_index=$this_obj.index(),this_off_left=$this_obj.offset().left,this_pos_left=$this_obj.position().left,this_width=$this_obj.width(),this_prev_width=$this_obj.prev('li').width(),this_next_width=$this_obj.next('li').width();
                var this_off_right=_win_width-this_off_left-this_width;
                if(_scroller_w+2>_wrapper_width){
                    if(_opt.fingerClick==1){
                        if(this_index==1){
                            myScroll.scrollTo(-this_pos_left+this_prev_width,0, _opt.clickScrollTime);
                        }else if(this_index==0){
                            myScroll.scrollTo(-this_pos_left,0, _opt.clickScrollTime);
                        }else if(this_index==_obj_li.length-2){
                            myScroll.scrollBy(this_off_right-_wrapper_off_right-this_width,0, _opt.clickScrollTime);
                        }else if(this_index==_obj_li.length-1){
                            myScroll.scrollBy(this_off_right-_wrapper_off_right,0, _opt.clickScrollTime);
                        }else{
                            if(this_off_left-_wrapper_off_left-(this_width*_opt.fingerClick)<duibi){
                                myScroll.scrollTo(-this_pos_left+this_prev_width+(this_width*_opt.fingerClick),0, _opt.clickScrollTime);
                            }else if(this_off_right-_wrapper_off_right-(this_width*_opt.fingerClick)<duibi){
                                myScroll.scrollBy(this_off_right-this_next_width-_wrapper_off_right-(this_width*_opt.fingerClick),0, _opt.clickScrollTime);
                            }
                        }
                    }else{
                        if(this_index==1){
                            myScroll.scrollTo(-this_pos_left+this_prev_width,0, _opt.clickScrollTime);
                        }else if(this_index==_obj_li.length-1){
                            if(this_off_right-_wrapper_off_right>1||this_off_right-_wrapper_off_right<-1){
                                myScroll.scrollBy(this_off_right-_wrapper_off_right,0, _opt.clickScrollTime);
                            }
                        }else{
                            if(this_off_left-_wrapper_off_left<duibi){
                                myScroll.scrollTo(-this_pos_left+this_prev_width,0, _opt.clickScrollTime);
                            }else if(this_off_right-_wrapper_off_right<duibi){
                                myScroll.scrollBy(this_off_right-this_next_width-_wrapper_off_right,0, _opt.clickScrollTime);
                            }
                        }
                    }
                }
                $this_obj.addClass(_opt.className).siblings('li').removeClass(_opt.className);
                _opt.endClickScroll.call(this,$this_obj);
            }
        });
    };
    $('.wrapper').navbarscroll();
}

placard();


//获取滚动条当前的位置
function getScrollTop() {
    var scrollTop = 0;
    if(document.documentElement && document.documentElement.scrollTop) {
        scrollTop = document.documentElement.scrollTop;
    } else if(document.body) {
        scrollTop = document.body.scrollTop;
    }
    return scrollTop;
}
// 获取当前可视范围的高度
function getClientHeight() {
    var clientHeight = 0;
    if(document.body.clientHeight && document.documentElement.clientHeight) {
        clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight);
    } else {
        clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight);
    }
    return clientHeight;
}
// tips：Math.min是两个值取最小的值，Math.max则相反。
// 获取文档完整的高度
function getScrollHeight() {
    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
}
// 实现下拉刷新
window.onscroll = function(){
	if(getScrollTop() + getClientHeight() == getScrollHeight()) {
		setTimeout(function () {
            page++;
            ask(12*page+1,urlStatus);
		},0)
	}
	var navH = $("#list").offset().top;
	var scroH = $(this).scrollTop();
	if(scroH>=navH){
		$("#list #retr").addClass('active')
	
	}else if(scroH<navH){
		$("#list #retr").removeClass('active');
	}
}
