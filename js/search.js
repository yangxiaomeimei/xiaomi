
// 表单信息的处理
$('#header1>.header1-1>.right>form>.yi ').focus(function () {
	$("#header1>.header1-1>.right>form>span").fadeOut();
	$('#header1>.header1-1>.right>form>.yi').css('border-color','red');
	$('#header1>.header1-1>.right>form>.er').css('border-color','red');
	 $('#header1>.header1-1>.right>form>#daohang').fadeIn();
    $('#header1>.header1-1>.right>form>#daohang').css('border-color','red');
}).blur(function () {
	$("#header1>.header1-1>.right>form>span").fadeIn();
$('#header1>.header1-1>.right>form>.yi').css('border-color','#e0e0e0');
	$('#header1>.header1-1>.right>form>.er').css('border-color','#e0e0e0');
    $('#header1>.header1-1>.right>form>#daohang').fadeOut();

});


// 瀑布流里面的数据
$(function  () {
	var data=[
	
	{"id":"9","price":" 1299元","a":"立即购买","pic":"images/searchall9.jpg","dt":"净水器-厨上式","dd":"400加仑大流量，RO反渗透直出纯净水</br> 实时监测TDS水质，健康家庭必备"},
	{"id":"10","price":"1000元","a":"立即购买","pic":"images/searchall10.jpg","dt":"净水器-厨上式","dd":"400加仑大流量，RO反渗透直出纯净水</br> 实时监测TDS水质，健康家庭必备"},
	{"id":"11","price":"2334元 ","a":"立即购买","pic":"images/searchall11.jpg","dt":"净水器-厨上式","dd":"400加仑大流量，RO反渗透直出纯净水</br> 实时监测TDS水质，健康家庭必备"},
	{"id":"12","price":" 55y元 ","a":"立即购买","pic":"images/searchall12.jpg","dt":"净水器-厨上式","dd":"400加仑大流量，RO反渗透直出纯净水</br> 实时监测TDS水质，健康家庭必备"},
	{"id":"13","price":" 4657元 ","a":"立即购买","pic":"images/searchall13.jpg","dt":"净水器-厨上式","dd":"400加仑大流量，RO反渗透直出纯净水</br> 实时监测TDS水质，健康家庭必备"},
	{"id":"14","price":"5767元","a":"立即购买","pic":"images/searchall14.jpg","dt":"净水器-厨上式","dd":"400加仑大流量，RO反渗透直出纯净水</br> 实时监测TDS水质，健康家庭必备"},
	{"id":"15","price":"5465元","a":"立即购买","pic":"images/searchall15.jpg","dt":"净水器-厨上式","dd":"400加仑大流量，RO反渗透直出纯净水</br> 实时监测TDS水质，健康家庭必备"},
	{"id":"16","price":"3546元","a":"立即购买","pic":"images/searchall16.jpg","dt":"净水器-厨上式","dd":"400加仑大流量，RO反渗透直出纯净水</br> 实时监测TDS水质，健康家庭必备"},
	{"id":"17","price":"54657元","a":"立即购买","pic":"images/searchall17.jpg","dt":"净水器-厨上式","dd":"400加仑大流量，RO反渗透直出纯净水</br> 实时监测TDS水质，健康家庭必备"},
	{"id":"18","price":"4656元","a":"立即购买","pic":"images/searchall18.jpg","dt":"净水器-厨上式","dd":"400加仑大流量，RO反渗透直出纯净水</br> 实时监测TDS水质，健康家庭必备"},
	{"id":"19","price":"764元","a":"立即购买","pic":"images/searchall19.jpg","dt":"净水器-厨上式","dd":"400加仑大流量，RO反渗透直出纯净水</br> 实时监测TDS水质，健康家庭必备"},
	{"id":"20","price":"234元","a":"立即购买","pic":"images/searchall20.jpg","dt":"净水器-厨上式","dd":"400加仑大流量，RO反渗透直出纯净水</br> 实时监测TDS水质，健康家庭必备"},
	{"id":"21","price":"123元","a":"立即购买","pic":"images/searchall8.jpg","dt":"净水器-厨上式","dd":"400加仑大流量，RO反渗透直出纯净水</br> 实时监测TDS水质，健康家庭必备"},
	{"id":"22","price":"353元","a":"立即购买","pic":"images/searchall9.jpg","dt":"净水器-厨上式","dd":"400加仑大流量，RO反渗透直出纯净水</br> 实时监测TDS水质，健康家庭必备"},





	]
// 监听滚动事件
	$(document).scroll(function  () {
		
			var a=$(document).height();
			// console.log(a);
       
       if ($(document).scrollTop()>=a/2 && $(document).scrollTop()<a/2+20) {
       	var str='';
       	for(var i in data){
       	str+='<li class="li1">'
         str+='<div class="img-list">';
         str+='<a>';
         str+='<img src="'+data[i]['pic']+'">';
         str+='</a>';
         str+='</div>';
         str+='<div class="wenzi-list">'
         str+='<dl class="dl1">';
         str+='<dt>'+data[i]['dt'];
         str+='<b>'+data[i]['price']+'</b>';         
         str+='</dt>';
         str+='<dd>'+data[i]['dd']+'</dd>';
         str+='</dl>';
         str+='<p class="btn">';
         str+='<a>'+data[i]['a']+'</a>';
         str+='</p>';
         str+='</div>'; 
         str+='</li>';
       	}
       	$('#wrap>.pic1>.ul2').append(str);
       };

      // if ($(document).scrollTop()<=4000) {
      //    $(document).off();
      // }; 
	})
})

 