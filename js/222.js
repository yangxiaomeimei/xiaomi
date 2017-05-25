

// 当点击购物车表单内容时 所改变的样式
$('#nav>.nav-bar>.right>form>.yi ').focus(function () {
	$("#nav>.nav-bar>.right>form>span").fadeOut();
	$('#nav>.nav-bar>.right>form>.yi').css('border-color','red');
	$('#nav>.nav-bar>.right>form>.er').css('border-color','red');
	 $('#nav>.nav-bar>.right>form>#daohang').fadeIn();
    $('#nav>.nav-bar>.right>form>#daohang').css('border-color','red');
}).blur(function () {
	$("#nav>.nav-bar>.right>form>span").fadeIn();
$('#nav>.nav-bar>.right>form>.yi').css('border-color','#e0e0e0');
	$('#nav>.nav-bar>.right>form>.er').css('border-color','#e0e0e0');
    $('#nav>.nav-bar>.right>form>#daohang').fadeOut();

});

// 中间部分大的轮播图
var now=0;
var length=$('#content>.main-content>.dian>a').length;
function run() {
	timer=setInterval(function () {
		$('#content>.main-content>img').hide();
		$('#content>.main-content>.dian>a').css('background-color', 'rgb(40,40,40');
		if(now>=length-1){
				now=0;
			}else{
				now++;
			}
			$('#content>.main-content>img:eq('+now+')').fadeIn(1000);
			$('#content>.main-content>.dian>a:eq('+now+')').css('background','rgb(255,255,255');		

	},2000);
}
run();

$('#content>.main-content').mouseover(function () {
	clearInterval(timer);
}).mouseout(function () {
	run();
});

$('#content>.main-content>.dian>a').click(function () {
	clearInterval(timer);
	$('#content>.main-content>img').hide();
	$('#content>.main-content>.dian>a').css('background-color', 'rgb(40,40,40');
	now=$(this).index;
	$('#content>.main-content>img:eq('+now+')').fadeIn(1000);
	$('#content>.main-content>.dian>a:eq('+now+')').css('background','rgb(255,255,255');

})

$('#content>.main-content>.zuo').click(function () {
	now--;
	if (now<0) {
		now=length-1;
	}
	$('#content>.main-content>img').hide();
	$('#content>.main-content>.dian>a').css('background-color', 'rgb(40,40,40');
	$('#content>.main-content>img:eq('+now+')').fadeIn();
	$('#content>.main-content>.dian>a:eq('+now+')').css('background','rgb(255,255,255');



});

$('#content>.main-content>.you').click(function () {
   clearInterval(timer);
	now++;
	if (now>length-1) {
		now=0;
	}
	$('#content>.main-content>img').hide();
	$('#content>.main-content>.dian>a').css('background-color', 'rgb(40,40,40');
	$('#content>.main-content>img:eq('+now+')').fadeIn(1000);
	$('#content>.main-content>.dian>a:eq('+now+')').css('background','rgb(255,255,255');
});



// 小米明星单品的滚动处理
var oUl=document.querySelector('#fifth>.fifth-one>ul');

var oLi=document.querySelectorAll('#fifth>.fifth-one>ul>li');
oUl.style.width=(oLi[0].offsetWidth+15)*oLi.length+'px';
var oNext=$('#forth>.forth-one>.forth-one-right>.next');
var oPre=$('#forth>.forth-one>.forth-one-right>.pre');

var speed=10;
var timer=null;
 oPre.bind('click',function () {
 	clearInterval(timer);
             timer = setInterval(function () {
                          var disLeft =  oUl.offsetLeft+speed;
                          if(disLeft > 0 ){
                              disLeft = 0;
                          }
                          oUl.style.left = disLeft + 'px';
                      },30)
 });

 oNext.bind('click',function () {
 	clearInterval(timer);
             timer = setInterval(function () {
                 var disLeft =  oUl.offsetLeft-speed;
                 if(disLeft <= -((oLi[0].offsetWidth+14)*oLi.length/2)){
                     disLeft = -((oLi[0].offsetWidth+14)*oLi.length/2);
                 }
                 oUl.style.left = disLeft + 'px';
             },30);
 });


// 为你推荐的滚动处理
var aUl=document.querySelector('#eleventh>.eleventh-one>ul');

var aLi=document.querySelectorAll('#eleventh>.eleventh-one>ul>li');

aUl.style.width=(aLi[0].offsetWidth+14)*aLi.length+'px';
var Next=$('#tenth>.tenth-one>.tenth-one-right>.next');
console.log(Next);
var Pre=$('#tenth>.tenth-one>.tenth-one-right>.pre');
var speed1=10;
var timer1=null;
 Pre.bind('click',function () {

 	clearInterval(timer1);
             timer1 = setInterval(function () {
                          var disL=  aUl.offsetLeft+speed1;
                          if(disL > 0 ){
                              disL = 0;
                          }
                          aUl.style.left = disL + 'px';
                      },30)
 });

 Next.bind('click',function () {
 	clearInterval(timer1);
             timer1 = setInterval(function () {
                 var disL =  aUl.offsetLeft-speed;
                 if(disL <= -((aLi[0].offsetWidth+14)*aLi.length/2)){
                     disL = -((aLi[0].offsetWidth+14)*aLi.length/2);
                 }
                 aUl.style.left = disL + 'px';
             },30);
 });


// 搭配 选项卡
$('#eighth>.eighth-one>.one>ul>li').each(function (index) {
	$(this).mouseover(function () {
		$('#eighth>.eighth-one>.one>ul>li').removeClass('co');

		$('#nighth>.nighth-one>.nighth-one-right').removeClass('block');

		$(this).addClass('co');
		$('#nighth>.nighth-one>.nighth-one-right:eq('+index+')').addClass('block');
	});
});
// 配件选项卡
$('#peijian>.peijian-one>.aone>ul>li').each(function () {
	$(this).mouseover(function () {
		$('#peijian>.peijian-one>.aone>ul>li').removeClass('coo');

		$('#pei>.pei-one>.pei-one-right').removeClass('block');
        var a=$(this).index();
		$(this).addClass('coo');
		$('#pei>.pei-one>.pei-one-right:eq('+a+')').addClass('block');
	});
});
 // 周边选项卡
$('#bian>.bian-one>.aone>ul>li').each(function (index) {
	$(this).mouseover(function () {
		$('#bian>.bian-one>.aone>ul>li').removeClass('coo');

		$('#zhou>.zhou-one>.zhou-one-right').removeClass('block');

		$(this).addClass('coo');
		$('#zhou>.zhou-one>.zhou-one-right:eq('+index+')').addClass('block');
	});
});


// 内容 里面 的小轮播图的处理
var now1=0;
var length1=$('.fourtheen>.fourtheen_2>ul>.l2>ul>.dian>a').length;
console.log(length1);
function run1() {
	timer1=setInterval(function () {
		$('.fourtheen>.fourtheen_2>ul>.l2>ul>.li1').hide();
		$('.fourtheen>.fourtheen_2>ul>.l2>ul>.dian>a').css('background-color', 'gray');
		if(now1>=length1-1){
				now1=0;
			}else{
				now1++;
			}
			$('.fourtheen>.fourtheen_2>ul>.l2>ul>.li1:eq('+now1+')').fadeIn(1000);
			$('.fourtheen>.fourtheen_2>ul>.l2>ul>.dian>a:eq('+now1+')').css('background','orange');		

	},2000);
}
run1();

$('.fourtheen>.fourtheen_2>ul>.l2').mouseover(function () {
	clearInterval(timer1);
}).mouseout(function () {
	run1();
});

$('.fourtheen>.fourtheen_2>ul>.l2>ul>.dian>a').click(function () {
	clearInterval(timer1);
	// alert(111);
	$('.fourtheen>.fourtheen_2>ul>.l2>ul>li').hide();
	$('.fourtheen>.fourtheen_2>ul>.l2>ul>.dian>a').css('background-color', 'gray');
	now1=$(this).index;
	$('.fourtheen>.fourtheen_2>ul>.l2>ul>li:eq('+now1+')').fadeIn();
	$('.fourtheen>.fourtheen_2>ul>.l2>ul>.dian>a:eq('+now1+')').css('background','orange');

});

$('.fourtheen>.fourtheen_2>ul>.l2>ul>li>.pre').click(function () {
	now1--;
	if (now1<0) {
		now1=length1-1;
	}
	$('.fourtheen>.fourtheen_2>ul>.l2>ul>li').hide();
	$('.fourtheen>.fourtheen_2>ul>.l2>ul>.dian>a:eq('+now1+')').css('background','gray');
	$('.fourtheen>.fourtheen_2>ul>.l2>ul>li:eq('+now1+')').fadeIn();
	$('.fourtheen>.fourtheen_2>ul>.l2>ul>.dian>a:eq('+now1+')').css('background','orange');



});

$('.fourtheen>.fourtheen_2>ul>.l2>ul>li>.next').click(function () {
   clearInterval(timer1);
	now1++;
	if (now1>length1-1) {
		now1=0;
	}
	$('.fourtheen>.fourtheen_2>ul>.l2>ul>li').hide();
	$('.fourtheen>.fourtheen_2>ul>.l2>ul>li>.dian>a').css('background-color', 'gray');

	$('.fourtheen>.fourtheen_2>ul>.l2>ul>li:eq('+now1+')').fadeIn(1000);
	$('.fourtheen>.fourtheen_2>ul>.l2>ul>li>.dian>a:eq('+now1+')').css('background','orange');

});





var now2=0;
var length2=$('.fourtheen>.fourtheen_2>ul>.l3>ul>.dian>a').length;
console.log(length2);
function run2() {
	timer2=setInterval(function () {
		$('.fourtheen>.fourtheen_2>ul>.l3>ul>li').hide();
		$('.fourtheen>.fourtheen_2>ul>.l3>ul>.dian>a').css('background-color', 'gray');
		if(now2>=length2-1){
				now2=0;
			}else{
				now2++;
			}
			$('.fourtheen>.fourtheen_2>ul>.l3>ul>li:eq('+now2+')').fadeIn(1000);
			$('.fourtheen>.fourtheen_2>ul>.l3>ul>.dian>a:eq('+now2+')').css('background','orange');		

	},4000);
}
run2();

$('.fourtheen>.fourtheen_2>ul>.l3').mouseover(function () {
	clearInterval(timer2);
}).mouseout(function () {
	run2();
});

$('.fourtheen>.fourtheen_2>ul>.l3>ul>.dian>a').click(function () {
	clearInterval(timer2);
	// alert(111);
	$('.fourtheen>.fourtheen_2>ul>.l3>ul>li').hide();
	$('.fourtheen>.fourtheen_2>ul>.l3>ul>.dian>a').css('background-color', 'gray');
	now2=$(this).index;
	$('.fourtheen>.fourtheen_2>ul>.l3>ul>li:eq('+now2+')').fadeIn();
	$('.fourtheen>.fourtheen_2>ul>.l3>ul>.dian>a:eq('+now2+')').css('background','orange');

});

$('.fourtheen>.fourtheen_2>ul>.l3>ul>li>.pre').click(function () {
	now2--;
	if (now2<0) {
		now2=length2-1;
	}
	$('.fourtheen>.fourtheen_2>ul>.l3>ul>li').hide();
	$('.fourtheen>.fourtheen_2>ul>.l3>ul>.dian>a:eq('+now2+')').css('background','gray');
	$('.fourtheen>.fourtheen_2>ul>.l3>ul>li:eq('+now2+')').fadeIn();
	$('.fourtheen>.fourtheen_2>ul>.l3>ul>.dian>a:eq('+now2+')').css('background','orange');



});

$('.fourtheen>.fourtheen_2>ul>.l3>ul>li>.next').click(function () {
   clearInterval(timer2);
	now2++;
	if (now2>length2-1) {
		now2=0;
	}
	$('.fourtheen>.fourtheen_2>ul>.l3>ul>li').hide();
	$('.fourtheen>.fourtheen_2>ul>.l3>ul>li>.dian>a').css('background-color', 'gray');

	$('.fourtheen>.fourtheen_2>ul>.l3>ul>li:eq('+now2+')').fadeIn(1000);
	$('.fourtheen>.fourtheen_2>ul>.l3>ul>li>.dian>a:eq('+now2+')').css('background','orange');

});




var now3=0;
var length3=$('.fourtheen>.fourtheen_2>ul>.l4>ul>.dian>a').length;

function run3() {
	timer3=setInterval(function () {
		$('.fourtheen>.fourtheen_2>ul>.l4>ul>li').hide();
		$('.fourtheen>.fourtheen_2>ul>.l4>ul>.dian>a').css('background-color', 'gray');
		if(now3>=length3-1){
				now3=0;
			}else{
				now3++;
			}
			$('.fourtheen>.fourtheen_2>ul>.l4>ul>li:eq('+now3+')').fadeIn(1000);
			$('.fourtheen>.fourtheen_2>ul>.l4>ul>.dian>a:eq('+now3+')').css('background','orange');		

	},5000);
}
run3();

$('.fourtheen>.fourtheen_2>ul>.l4').mouseover(function () {
	clearInterval(timer3);
}).mouseout(function () {
	run3();
});

$('.fourtheen>.fourtheen_2>ul>.l4>ul>.dian>a').click(function () {
	clearInterval(timer2);
	// alert(111);
	$('.fourtheen>.fourtheen_2>ul>.l4>ul>li').hide();
	$('.fourtheen>.fourtheen_2>ul>.l4>ul>.dian>a').css('background-color', 'gray');
	now3=$(this).index;
	$('.fourtheen>.fourtheen_2>ul>.l4>ul>li:eq('+now3+')').fadeIn();
	$('.fourtheen>.fourtheen_2>ul>.l4>ul>.dian>a:eq('+now3+')').css('background','orange');

});

$('.fourtheen>.fourtheen_2>ul>.l4>ul>li>.pre').click(function () {
	now3--;
	if (now3<0) {
		now3=length3-1;
	}
	$('.fourtheen>.fourtheen_2>ul>.l4>ul>li').hide();
	$('.fourtheen>.fourtheen_2>ul>.l4>ul>.dian>a:eq('+now3+')').css('background','gray');
	$('.fourtheen>.fourtheen_2>ul>.l4>ul>li:eq('+now3+')').fadeIn();
	$('.fourtheen>.fourtheen_2>ul>.l5>ul>.dian>a:eq('+now3+')').css('background','orange');



});

$('.fourtheen>.fourtheen_2>ul>.l4>ul>li>.next').click(function () {
   clearInterval(timer3);
	now3++;
	if (now3>length3-1) {
		now3=0;
	}
	$('.fourtheen>.fourtheen_2>ul>.l4>ul>li').hide();
	$('.fourtheen>.fourtheen_2>ul>.l4>ul>li>.dian>a').css('background-color', 'gray');

	$('.fourtheen>.fourtheen_2>ul>.l4>ul>li:eq('+now3+')').fadeIn(1000);
	$('.fourtheen>.fourtheen_2>ul>.l4>ul>li>.dian>a:eq('+now3+')').css('background','orange');

});



var now4=0;
var length4=$('.fourtheen>.fourtheen_2>ul>.l4>ul>.dian>a').length;

function run4() {
	timer4=setInterval(function () {
		$('.fourtheen>.fourtheen_2>ul>.l5>ul>li').hide();
		$('.fourtheen>.fourtheen_2>ul>.l5>ul>.dian>a').css('background-color', 'gray');
		if(now4>=length4-1){
				now4=0;
			}else{
				now4++;
			}
			$('.fourtheen>.fourtheen_2>ul>.l5>ul>li:eq('+now3+')').fadeIn(1000);
			$('.fourtheen>.fourtheen_2>ul>.l5>ul>.dian>a:eq('+now3+')').css('background','orange');		

	},6000);
}
run4();

$('.fourtheen>.fourtheen_2>ul>.l4').mouseover(function () {
	clearInterval(timer4);
}).mouseout(function () {
	run4();
});

$('.fourtheen>.fourtheen_2>ul>.l5>ul>.dian>a').click(function () {
	clearInterval(timer4);
	// alert(111);
	$('.fourtheen>.fourtheen_2>ul>.l5>ul>li').hide();
	$('.fourtheen>.fourtheen_2>ul>.l5>ul>.dian>a').css('background-color', 'gray');
	now4=$(this).index;
	$('.fourtheen>.fourtheen_2>ul>.l5>ul>li:eq('+now4+')').fadeIn();
	$('.fourtheen>.fourtheen_2>ul>.l5>ul>.dian>a:eq('+now4+')').css('background','orange');

});

$('.fourtheen>.fourtheen_2>ul>.l5>ul>li>.pre').click(function () {
	now4--;
	if (now4<0) {
		now4=length4-1;
	}
	$('.fourtheen>.fourtheen_2>ul>.l5>ul>li').hide();
	$('.fourtheen>.fourtheen_2>ul>.l5>ul>.dian>a:eq('+now4+')').css('background','gray');
	$('.fourtheen>.fourtheen_2>ul>.l5>ul>li:eq('+now4+')').fadeIn();
	$('.fourtheen>.fourtheen_2>ul>.l5>ul>.dian>a:eq('+now4+')').css('background','orange');



});

$('.fourtheen>.fourtheen_2>ul>.l5>ul>li>.next').click(function () {
   clearInterval(timer4);
	now4++;
	if (now4>length4-1) {
		now4=0;
	}
	$('.fourtheen>.fourtheen_2>ul>.l5>ul>li').hide();
	$('.fourtheen>.fourtheen_2>ul>.l5>ul>li>.dian>a').css('background-color', 'gray');

	$('.fourtheen>.fourtheen_2>ul>.l5>ul>li:eq('+now4+')').fadeIn(1000);
	$('.fourtheen>.fourtheen_2>ul>.l4>ul>li>.dian>a:eq('+now4+')').css('background','orange');

});