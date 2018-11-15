//下面用于图片上传预览功能
function setImagePreview1(avalue) {
    //input
    var docObj1 = document.getElementById("doc1");
    //img
    var imgObjPreview1 = document.getElementById("preview1");
    //div
    var divs1 = document.getElementById("localImag1");
    var add1 = document.getElementById("add1");
        if (docObj1.files && docObj1.files[0]) {
            //火狐下，直接设img属性
            imgObjPreview1.style.display = 'block';
            imgObjPreview1.style.width = '100%';
            imgObjPreview1.style.height = '100%';
            //imgObjPreview.src = docObj.files[0].getAsDataURL();
            //火狐7以上版本不能用上面的getAsDataURL()方式获取，需要一下方式
            imgObjPreview1.src = window.URL.createObjectURL(docObj1.files[0]);
            add1.style.display="none";
            $('.upolad_txt').hide();
            $("#sub_task").removeAttr("disabled");
			$('#sub_task').css({'background':'#333','color':'#fff'});
        } else {
            //IE下，使用滤镜
            docObj1.select();
            var imgSrc = document.selection.createRange().text;
            var localImagId1= document.getElementById("localImag1");
            //必须设置初始大小
            localImagId1.style.width = "100%";
            localImagId1.style.height = "100%";
            //图片异常的捕捉，防止用户修改后缀来伪造图片
            try {
                localImagId1.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
                localImagId1.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc;
                add1.style.display="none";
                $('.upolad_txt').hide();
                $("#sub_task").removeAttr("disabled");
				$('#sub_task').css({'background':'#333','color':'#fff'});
            } catch(e) {
                alert("您上传的图片格式不正确，请重新选择!");
                return false;
            }
            imgObjPreview1.style.display = 'none';
            document.selection.empty();
        }
    return true;
}
function setImagePreview2(avalue) {
    //input
    var docObj2 = document.getElementById("doc2");
    //img
    var imgObjPreview2 = document.getElementById("preview2");
    //div
    var divs2 = document.getElementById("localImag2");
    var add2 = document.getElementById("add2");
        if (docObj2.files && docObj2.files[0]) {
            //火狐下，直接设img属性
            imgObjPreview2.style.display = 'block';
            imgObjPreview2.style.width = '100%';
            imgObjPreview2.style.height = '100%';
            //imgObjPreview.src = docObj.files[0].getAsDataURL();
            //火狐7以上版本不能用上面的getAsDataURL()方式获取，需要一下方式
            imgObjPreview2.src = window.URL.createObjectURL(docObj2.files[0]);
            add2.style.display="none";
            $('.upolad_txt').hide();
            $("#sub_task").removeAttr("disabled");
			$('#sub_task').css({'background':'#333','color':'#fff'});
        } else {
            //IE下，使用滤镜
            docObj2.select();
            var imgSrc = document.selection.createRange().text;
            var localImagId2= document.getElementById("localImag2");
            //必须设置初始大小
            localImagId2.style.width = "100%";
            localImagId2.style.height = "100%";
            //图片异常的捕捉，防止用户修改后缀来伪造图片
            try {
                localImagId2.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
                localImagId2.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc;
                add2.style.display="none";
                $('.upolad_txt').hide();
                $("#sub_task").removeAttr("disabled");
				$('#sub_task').css({'background':'#333','color':'#fff'});
            } catch(e) {
                alert("您上传的图片格式不正确，请重新选择!");
                return false;
            }
            imgObjPreview2.style.display = 'none';
            document.selection.empty();
        }
    return true;
}
function setImagePreview3(avalue) {
    //input
    var docObj3 = document.getElementById("doc3");
    //img
    var imgObjPreview3 = document.getElementById("preview3");
    //div
    var divs3 = document.getElementById("localImag3");
    var add3 = document.getElementById("add3");
        if (docObj3.files && docObj3.files[0]) {
            //火狐下，直接设img属性
            imgObjPreview3.style.display = 'block';
            imgObjPreview3.style.width = '100%';
            imgObjPreview3.style.height = '100%';
            //imgObjPreview.src = docObj.files[0].getAsDataURL();
            //火狐7以上版本不能用上面的getAsDataURL()方式获取，需要一下方式
            imgObjPreview3.src = window.URL.createObjectURL(docObj3.files[0]);
            add3.style.display="none";
            $('.upolad_txt').hide();
            $("#sub_task").removeAttr("disabled");
			$('#sub_task').css({'background':'#333','color':'#fff'});
        } else {
            //IE下，使用滤镜
            docObj3.select();
            var imgSrc = document.selection.createRange().text;
            var localImagId3= document.getElementById("localImag3");
            //必须设置初始大小
            localImagId3.style.width = "100%";
            localImagId3.style.height = "100%";
            //图片异常的捕捉，防止用户修改后缀来伪造图片
            try {
                localImagId3.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
                localImagId3.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc;
                add3.style.display="none";
                $('.upolad_txt').hide();
                $("#sub_task").removeAttr("disabled");
				$('#sub_task').css({'background':'#333','color':'#fff'});
            } catch(e) {
                alert("您上传的图片格式不正确，请重新选择!");
                return false;
            }
            imgObjPreview3.style.display = 'none';
            document.selection.empty();
        }
    return true;
}
$('#sub_task').click(function(){
	$('#modal_start').show();
	$('.close').click(function(){
		$('#modal_start').hide();
	})
})