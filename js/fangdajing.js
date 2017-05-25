
// 设置放大镜的效果
var small=document.querySelector('#wrap>.cont>.small');

var small_pic=document.querySelector('#wrap>.cont>.small>#small_pic');
console.log(small_pic);

var big=document.querySelector('#wrap>.cont>.big');
var cont=document.querySelector('#wrap>.cont');
var big_pic=document.querySelector('#wrap>.cont>.big>#big_pic');
console.log(big_pic);
var move=document.querySelector('#wrap>.cont>.small>#move');
var dian=document.querySelector('#wrap>.cont>#dian');
var lis=document.querySelectorAll('#wrap>.cont>#dian>ul>li');
console.log(lis);

small.onmousemove=function  (ent) {
	move.style.display='block';
	// 兼容事件对 象
	var e=ent||event;
	//获取鼠标在视窗的位置 pageX pageY
	var x=e.pageX;
	var y=e.pageY;
    //在small中移动的位置
    var sl=cont.offsetLeft;
    var st=cont.offsetTop;

    // 给鼠标位置重新赋值
    var x=x-sl;
    var y=y-st;
    //想要鼠标居中 减掉move宽度和高度的一半
    var w=move.offsetWidth/2;
    var h=move.offsetHeight/2;
    // 给鼠标坐标重新赋值
    var x=x-w;
    var y=y-h;

    if (x<=0) {
    	x=0;
    };

    var maxLeft=small.offsetWidth-move.offsetWidth;
    if (x>=maxLeft) {
    	x=maxLeft;
    };
   if (y<=0) {
   	y=0;
   };
    var maxTop=small.offsetHeight-move.offsetHeight;
    if (y>=maxTop) {
    	y=maxTop;
    };
    //给move left top赋值等于鼠标坐标点
    move.style.left=x+'px';
    move.style.top=y+'px';
 //鼠标在小图移动 大图显示
 //
 big.style.display='block';


 var bLeft=big_pic.offsetWidth*(x/small.offsetWidth);
 var bTop=big_pic.offsetHeight*(y/small.offsetHeight);

big_pic.style.left=-bLeft+'px';
big_pic.style.top=-bTop+'px';
big_pic.src=small_pic.src;


}
small.onmouseout=function  () {
	move.style.display='none';
	big.style.display='none';
}

for(var i=0;i<lis.length;i++){
	lis[i].onclick=function  () {
		small_pic.src=this.firstElementChild.src;
	}
}

// 购物表单内容、
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