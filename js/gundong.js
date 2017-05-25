 

  // 设置顶部导航栏在给不同位置的切换  还有全屏滚动的设置、
 var aBody=document.getElementsByTagName('body')[0];
 // console.log(aBody);
 var oHTML=document.querySelector('html');

 var leader=0,target=0,num=0,y=0;
 var aLi=document.querySelectorAll('#cont>.cont1>ul>li');

 var aimg=document.querySelectorAll('#cont>div>img');
 var header1=document.querySelector('#header2>.header2-1');
window.onscroll=function  () {
    y=document.body.scrollTop||document.documentElement.scrollTop||window.pageYOffset;
    // console.log(y)
   if (y>=100) {
        header1.style.position='fixed';
        header1.style.top=0+'px';
        
      }else if(y<100){
        header1.style.position='static';
      }

}

for(var i=0;i<aLi.length;i++){
    aLi[i].index=i;
    
    aLi[i].onclick=function  () {
   
        showcolor(this.index)
        showSlider(aimg[this.index]);
        num=this.index;
        ;
    }
} 
 // 全屏滚动
 function showSlider (obj) {
    clearInterval(obj.timer);
    target=obj.offsetTop;
    obj.timer=setInterval(function  () {
        leader=leader+(target-leader)/10;
        if (Math.abs(target-leader)<=8) {
            leader=target;
            clearInterval(obj.timer);
        }
        window.scrollTo(0,leader);
    },30)
 }
   // 页码颜色

   function showcolor(index){
   for(var i=0;i<aLi.length;i++){
        aLi[i].className=''
      }
     aLi[index].className='ee';
   }
oHTML.onmousewheel=autoSlider;
if (oHTML.addEventListener) {
    oHTML.addEventListener('DOMMouseScroll',autoSlider,false);
};

function autoSlider (ev) {
    var ev=ev||event;
     var b = true;
        if (ev.wheelDelta) {
            b = ev.wheelDelta > 0 ? true : false;
        } else {
            b = ev.detail < 0 ? true : false;
        }

        //alert(b);

        if ( b ) {
            showSlider(aimg[num]);
            showcolor(num)

          
    
               if(aimg[num].offsetTop==y){num--;};
             
            if(num < 0){
                num  =  0;
            }

        } else {
            showSlider(aimg[num]);
           showcolor(num)

                   if(aimg[num].offsetTop==y){num++;};
            
         
          
            if(num > aimg.length - 1){
                num  =  aimg.length - 1;
            }
        }

        if (ev.preventDefault) {
            ev.preventDefault();
        }

        return false;

    }


