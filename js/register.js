
  // 验证信息对与错的显示图案。
$(function  () {
	function message (msg,bool) {
		var info='';
		if (bool) {
          //真显示对的图片
			info='<img src="images/right.png"><span>'+msg+'</span>';

		}else{
            //假的显示错误的图片
				info='<img src="images/error.png"><span>'+msg+'</span>';
		

		}
		return info;
	}


	// 用户失去焦点 验证电话号码 的正确形式
	$('#wrap>.cont>.layout>.frame>.biaoge>.box>.dan2>#phone').blur(function  () {
		var value=$(this).val();
        
		// 声明规则
		var reg=/^[0-9]{11}$/;
		if (reg.test(value)) {
			$(this).next().html(message('电话号码格式正确',true));
		}else{
			//显示用户名不正确
				$(this).next().html(message('电话号码格式不正确',false));
		}
	});
	// 密码输入框失去焦点 
	// $('#cont>.img>.biaodan>.inputcont>#uesrname').blur(function  () {
		
     $('#wrap>.cont>.layout>.frame>.biaoge>.box>.yanzheng>#yan').blur(function  () {
		var value=$(this).val();
        
		// 声明规则
		var reg=/^[a-zA-Z0-9]{4}$/;
		if (reg.test(value)) {
			$(this).parent().next().html(message('验证码格式正确',true));
		}else{
			//显示用户名不正确
				$(this).parent().next().html(message('验证码格式不正确',false));
		}
	});


});