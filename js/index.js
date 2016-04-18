$(function(){
    var flag=true;
    var imgs=getClass("imgbox")[0].getElementsByTagName("a");
    // console.log(imgs)
    var btns=getClass("btnbox")[0].getElementsByTagName("li");
    var index=0;  //初始时间
    var t=setInterval(move,2000);
    function move(){
        if(!flag){
            return;
        }
        flag=false;
        index++;
        if(index>imgs.length-1){
            index=0;
        }
        for (var i = 0; i < imgs.length; i++) {
            //imgs[i].style.zIndex="0";
            animate(imgs[i],{opacity:0});
            btns[i].style.background="";
        };
        //imgs[index].style.zIndex="10";
        btns[index].style.background="#fff";
        animate(imgs[index],{opacity:1},function(){
            flag=true;
        });
    }
    

    //鼠标移上和移开事件
    var banner=getClass("banner")[0];
    banner.onmouseover=function(){
        clearInterval(t);
    }
    banner.onmouseout=function(){
        t=setInterval(move,2000);
    }

    //左右按钮单击事件
    var leftbtn=getClass("btnleft")[0];
    leftbtn.onclick=function(){
        if(!flag){
            return;
        }
        flag=false;
        index--;
        if(index<0){
            index=imgs.length-1;
        }
        for (var i = 0; i < imgs.length; i++) {
            animate(imgs[i],{opacity:0});
            btns[i].style.background="";
        };
        animate(imgs[index],{opacity:1},function(){
            flag=true;
        })
        btns[index].style.background="#fff";
    }
    var rightbtn=getClass("btnright")[0];
    rightbtn.onclick=function(){
        move();
    }

    //小按钮事件
    for (var i = 0; i < btns.length; i++) {
        btns[i].index=i;
        btns[i].onclick=function(){
            for (var j = 0; j < btns.length; j++) {
                btns[j].style.background="";
                animate(imgs[j],{opacity:0});
            };
            this.style.background="#fff";
            animate(imgs[this.index],{opacity:1})
            index=this.index;
        }
        btns[i].onmouseover=function(){
            for (var j = 0; j < btns.length; j++) {
                btns[j].style.background="";              
            };
            this.style.background="#fff";
            
        }

    };

    // 搭配选项卡
    var atops=getClass("dapei-topright");
    var dapeibox=getClass("dapei-bmright");
    //console.log(dapeibox);
    var tops,dapei;
    for (var i = 0; i < atops.length; i++) {
        tops=atops[i].getElementsByTagName("a");
        //console.log(tops)
        dapei=dapeibox[i].getElementsByTagName("li");
        tab(tops,dapei);
    };   
    function tab(as,lis){
        for (var i = 0; i < as.length; i++) {
           as[i].index=i;
           as[i].onmouseover=function(){
               for (var j = 0; j < as.length; j++) {
                    as[j].style.color="";
                    as[j].style["border-bottom"]="0";
                    lis[j].style.zIndex="0";
               };
                this.style.color="#FF6700";
                this.style["border-bottom"]="2px solid #FF6700";
                lis[this.index].style.zIndex="10";
           }
       };
    }

    //小米明星单品
    var starWheel=getClass("star-wheel")[0];
    var starli=starWheel.getElementsByTagName("li");
    var starW=parseInt(getStyle(starli[0],"width"));
    starWheel.style.width=starW*starli.length+"px";
    var lbtn=getClass("jiantou-left")[0];
    var rbtn=getClass("jiantou-right")[0];
    var jiantou=getClass("jiantou")[0].getElementsByTagName("a");
    console.log(jiantou)
    var wTime=0;
    var st=setInterval(wheel,5000);
    function wheel(){
        if(!flag){
            return;
        }
        flag=false;
        wTime++;
        if(wTime==starli.length){
            wTime=0;
        }
        animate(starWheel,{marginLeft:-wTime*starW},function(){
            flag=true;
        });
        for (var i = 0; i < jiantou.length; i++) {
            jiantou[i].style.color="#b0b0b0";
        };
        jiantou[wTime].style.color="#e0e0e0";
    }
    rbtn.onclick=function(){
        if(!flag){
            return;
        }
        flag=false;
        wTime++;
        if(wTime==starli.length){
            wTime=starli.length-1;
        }    
        animate(starWheel,{marginLeft:-wTime*starW},function(){
            flag=true;
        });
        for (var i = 0; i < jiantou.length; i++) {
            jiantou[i].style.color="#b0b0b0";
        };
        jiantou[wTime].style.color="#e0e0e0";
        
    }
    lbtn.onclick=function(){
        if(!flag){
            return;
        }
        flag=false;
        wTime--;
        if(wTime<0){
            wTime=0;
        }
        animate(starWheel,{marginLeft:-wTime*starW},function(){
            flag=true;
        });
        for (var i = 0; i < jiantou.length; i++) {
            jiantou[i].style.color="#b0b0b0";
        };
        jiantou[wTime].style.color="#e0e0e0";
    }

    
    //为你推荐
    var starWheel2=getClass("star-wheel2")[0];
    var starli2=starWheel2.getElementsByTagName("li");
    //alert(starli2.length)
    var starT=parseInt(getStyle(starli2[0],"width"));
    var rightbt=getClass("rightbt")[0];
    var leftbt=getClass("leftbt")[0];
    //alert(leftbt);
    // alert(starT);
    starWheel2.style.width=starT*starli2.length+"px";
    var indexT=0;
    rightbt.onclick=function(){
        if(!flag){
            return;
        }
        flag=false;
        indexT++;
        if(indexT>starli2.length-1){
            indexT=starli2.length-1;
        }
        animate(starWheel2,{marginLeft:-indexT*starT},function(){
            flag=true;
        });
    }
    leftbt.onclick=function(){
        if(!flag){
            return;
        }
        flag=false;
        indexT--;
        if(indexT<0){
            indexT=0;           
        }
        animate(starWheel2,{marginLeft:-indexT*starT},function(){
            flag=true;
        });
    }

   
   //图书的封装函数
    var shuBox=$(".shu-box");
    var shuWheel=$(".shu-wheel");
    var rlbtn=$(".rlbtn");
    var ydS=$(".yuandian");
    var shuS,shuW,lbtn,rbtn,yuans;
    for (var i = 0; i < shuBox.length; i++) {
        shuS=$(".title-bottom",shuBox[i]);
        shuW=parseInt(getStyle(shuS[0],"width"));
        shuWheel[i].style.width=shuW*shuS.length+"px";
        lbtn=$(".btn-left",rlbtn[i])[0];
        rbtn=$(".btn-right",rlbtn[i])[0];
        yuans=$("li",ydS[i]);
        shuWh(shuW,shuWheel[i],lbtn,rbtn,yuans);     
    };
    function shuWh(k,wheelk,left,right,yd){
        var imgT=0;
        right.onclick=function(){
            if(!flag){
                return;
            }
            flag=false;
            imgT++;
            if(imgT==shuS.length){
                imgT=shuS.length-1;
            }
            animate(wheelk,{marginLeft:-imgT*k},function(){
                flag=true;
            });
            for (var i = 0; i < yd.length; i++) {
                yd[i].className="";
            };           
            yd[imgT].className="dot2";


        }
        left.onclick=function(){
            if(!flag){
                return;
            }
            flag=false;
            imgT--;
            if(imgT<0){
                imgT=0;           
            }
            animate(wheelk,{marginLeft:-imgT*k},function(){
                flag=true;
            });
            for (var i = 0; i < yd.length; i++) {
                yd[i].className="";
            };           
            yd[imgT].className="dot2";
        }
        for (var i = 0; i < yd.length; i++) {
            yd[i].indexYd=i;
            yd[i].onclick=function(){
                for (var j = 0; j < yd.length; j++) {
                    yd[j].className="";
                };
                yd[this.indexYd].className="dot2";
                animate(wheelk,{marginLeft:-this.indexYd*k});
                imgT=this.indexYd;
            }
        };
    }

    
    // 按需加载
    var floors=$(".floor1");  //将所有的楼层都获取到
    // console.log(floors);
    // [40, 140, 614, 810, 1366, 2052, 2738, 3424, 4110, 4483, 4970, 5462, 6079]
    var offtop=[];  //将每一个楼层的高度获取到赋给一个数组
    for (var i = 0; i < floors.length; i++) {
        offtop.push(floors[i].offsetTop);
    };
    // console.log(offtop)
    var clientH=document.documentElement.clientHeight;  //获取去浏览器的高度
    window.onscroll=function(){
        var stop=document.body.scrollTop||document.documentElement.scrollTop;  //根据浏览器的不同获取滚动条的位置
        for (var i = 0; i < offtop.length; i++) {
             if(offtop[i]<stop+clientH){
                 imgsbox(i); 
             }
        };
    }   
    function imgsbox(i){
           var imgAS=$("img",floors[i]);   //遍历出每一个楼层，通过楼层获取图片的集合
           for (var j = 0; j < imgAS.length;j++) {  //通过遍历所有的图片
                imgAS[j].src=imgAS[j].getAttribute("asrc");  //将获取到的自定义属性赋值给图片的src属性
           };
    }
    window.onscroll();


    
     
}) 