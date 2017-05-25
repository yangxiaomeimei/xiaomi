

// 表单失去焦点：用户名必须是6-20字母数字下划线组合
// 				正确显示正确的信息和图片
// 				错误显示错误的信息和图片
// 				
// 				
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


	// 用户失去焦点
	$('#cont>.img>.biaodan>.one>.inputcont>#uesrname').blur(function  () {
		var value=$(this).val();
        
		// 声明规则
		var reg=/^[\w]{6,20}$/;
		if (reg.test(value)) {
			$(this).next().next().html(message('用户名格式正确',true));
		}else{
			//显示用户名不正确
				$(this).next().next().html(message('用户名格式不正确',false));
		}
	});
	// 密码输入框失去焦点
	// $('#cont>.img>.biaodan>.inputcont>#uesrname').blur(function  () {
		
     $('#cont>.img>.biaodan>.one>.inputcont>#password').blur(function  () {
		var value=$(this).val();
        
		// 声明规则
		var reg=/^[a-zA-Z0-9]{6,20}$/;
		if (reg.test(value)) {
			$(this).next().next().html(message('密码格式正确',true));
		}else{
			//显示用户名不正确
				$(this).next().html(message('密码格式不正确',false));
		}
	});


});

// 设置帐号登录与扫码登录的转换、
// 帐号登录
// var yi=$('#cont>.img>.biaodan>.nav>.nav-bar>.yi');
 $('#cont>.img>.biaodan>.nav>.nav-bar>.yi').click(function  () {
 	$('#cont>.img>.biaodan>.one').css("display","block");
	$('#cont>.img>.biaodan>.two').css("display","none");
	$('#cont>.img>.biaodan>.nav>.nav-bar>.er').css("color","black");
    $('#cont>.img>.biaodan>.nav>.nav-bar>.yi').css("color","#f56600");
 });
 // 扫码登录、
 $('#cont>.img>.biaodan>.nav>.nav-bar>.er').click(function  () {
 	// alert(111);
 	$('#cont>.img>.biaodan>.two').css("display","block");
	$('#cont>.img>.biaodan>.one').css("display","none");
	$('#cont>.img>.biaodan>.nav>.nav-bar>.yi').css("color","black");
    $('#cont>.img>.biaodan>.nav>.nav-bar>.er').css("color","#f56600");

 });