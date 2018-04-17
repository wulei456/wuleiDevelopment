document.oncontextmenu = function(e) {
 //或者return false;
 e.preventDefault();
};


$(function(){
    function dro(){
        $('.dro').animate({
            top:'100%'
        },4000)
    }
    dro(); 
})
$(function(){
               //开始游戏
            $('.start').on('click',function(){
            if($('#page').css('display','none')) {
                    countDown(); 
                    startGame();
                $('#center').show(); 
              };
            })
            //游戏引导
            $('.guide').on('click',function(){
                $('#guideView').show();

                var viewSwiper = new Swiper('.swiper-container', {
                            // 如果需要分页器
                    pagination: '.swiper-pagination',
                            
                });
                $("#closeGuide").bind("click",function(){
                    $(this).parents("#guideView").hide();
                })   
            })
})
                //控制器左
                timeLeft = '';
                $('#left_a').on('touchstart',function(event){
                    //console.log('11')
                    var new_width = $(document).width();
                    var cot = $('#dog').css('left');
                    var l = 1; 
                    timesLeft = setInterval(function(){
                        l--;
                        $('#dog').css({'left':parseInt(cot) + parseInt(l)+ 'px'})
                        if (parseInt($('#dog').css('left'))<1) {
                                clearInterval(timesLeft );
                        };
                      },10)
                })
                 $('#left_a').on('touchend',function(event){
                    clearInterval(timesLeft);
                 })
                //控制器右
                timeRight = '';
                $('#right_a').on('touchstart',function(event){
                    var cot = $('#dog').css('left');
                    var l = 1;
                    var rightDistance = $(document).width() - $('#dog').width();
                    timeRight = setInterval(function(){
                            var dogDistance = parseInt($('#dog').css('left'));
                            l--;
                            $('#dog').css({'left':parseInt(cot) - parseInt(l) + 'px'});
                            if(dogDistance>rightDistance){
                                clearInterval(timeRight);
                            }
                        },10);
                })
                $('#right_a').on('touchend',function(event){
                    clearInterval(timeRight);
                 })
function countDown(){
    $('#page-music').attr('src','./music/start.mp3');
    $('#page-music')[0].play();
    clearInterval(timer); //清除计时器  
    var that = $('#img');
    that.css({'display':'block','disabled':true});
    var count = 3;
    var timer = setInterval(function(){
      if(count>0){
        count--;
        that.attr('src',"./img/a"+ count +".png");
      }else{
        console.log(resData)
        customsPass(resData);       //运行第一关
        that.css({'display':'none','disabled':false});
        clearInterval(timer); //清除计时器        
      }
    },1000);

} 
//首页动画
//升级
 function upgrade1(){
    $('.layer1').css('display','block');
    $('.layer1').on('click',function(){
        $('.layer1').css('display','none'); 
        
    })
 }
function upgrade2(){
    $('.layer2').css('display','block');
    $('.layer2').on('click',function(){
        $('.layer2').css('display','none'); 
    })
 }
function upgrade3(){
    $('.layer3').css('display','block');
    $('.layer3').on('click',function(){
        $('.layer3').css('display','none'); 
    })
 }
function upgrade4(){
    $('.layer4').css('display','block');
    $('.layer4').on('click',function(){
        $('.layer4').css('display','none'); 
    })
 }
function upgrade5(){
    $('.layer5').css('display','block');
    $('.layer5').on('click',function(){
        $('.layer5').css('display','none'); 
    })
 }
function upgrade6(){
    $('.layer6').css('display','block');
    $('.layer6').on('click',function(){
        $('.layer6').css('display','none'); 
    })
 }
function upgrade7(){
    $('.layer7').css('display','block');
    $('.layer7').on('click',function(){
        $('.layer7').css('display','none'); 
    })
 }
function upgrade8(){
    $('.layer8').css('display','block');
    $('.layer8').on('click',function(){
        $('.layer8').css('display','none'); 
    })
 }
function upgrade9(){
    $('.layer9').css('display','block');
    $('.layer9').on('click',function(){
        $('.layer9').css('display','none'); 
    })
 }
 //分数
 //加分
 function plus2(){
    $('.plus2').show();
    $('.plus2').hide(800);
 }
 function plus3(){
    $('.plus3').show();
    $('.plus3').hide(800);
 }
 
function plus4(){
    $('.plus4').show();
    $('.plus4').hide(800);
 }
 function plus5(){
    $('.plus5').show();
    $('.plus5').hide(800);
 }
 function plus8(){
    $('.plus8').show();
    $('.plus8').hide(800);
 }
 function plus10(){
    $('.plus10').show();
    $('.plus10').hide(800);
 }
 
function plus15(){
    $('.plus15').show();
    $('.plus15').hide(800);
 }
 function plus20(){
    $('.plus20').show();
    $('.plus20').hide(800);
 }
 function plus25(){
    $('.plus25').show();
    $('.plus25').hide(800);
 }
 function plus30(){
    $('.plus30').show();
    $('.plus30').hide(800);
 }
 
function plus40(){
    $('.plus40').show();
    $('.plus40').hide(800);
 }
 function plus50(){
    $('.plus50').show();
    $('.plus50').hide(800);
 }
 function plus100(){
    $('.plus100').show();
    $('.plus100').hide(800);
 }
 //减分
 function reduce3(){
    $('.reduce3').show();
    $('.reduce3').hide(800);
 }
function reduce4(){
    $('.reduce4').show();
    $('.reduce4').hide(800);
 }
function reduce5(){
    $('.reduce5').show();
    $('.reduce5').hide(800);
 }
function reduce8(){
    $('.reduce8').show();
    $('.reduce8').hide(800);
 }
function reduce10(){
    $('.reduce10').show();
    $('.reduce10').hide(800);
 }
function reduce20(){
    $('.reduce20').show();
    $('.reduce20').hide(800);
 }
function reduce30(){
    $('.reduce30').show();
    $('.reduce30').hide(800);
 } 
function reduce40(){
    $('.reduce40').show();
    $('.reduce40').hide(800);
 }

function reduce50(){
    $('.reduce50').show();
    $('.reduce50').hide(800);
 }
function reduce100(){
    $('.reduce100').show();
    $('.reduce100').hide(800);
 }




// ===================================================== 动画部分
function removeElement(_element){
     var _parentElement = _element.parentNode;
     if(_parentElement){
            _parentElement.removeChild(_element);
     }
}
function calculateDistance(startPoint, endPoint) {
    const diffX = Math.abs(startPoint.x - endPoint.x);
    const diffY = Math.abs(startPoint.y - endPoint.y);
    return Math.round(Math.sqrt(diffX * diffX + diffY * diffY));
}
//定义三个样式
function Price(type){
    switch(type){
        case '红包':
        this.width = 5;
        this.height = 5;
        this.backgroundImage = 'url(./img/red.png)';
        break;
        case '炸弹':
        this.width = 4;
        this.height = 4;
        this.backgroundImage = 'url(./img/bomb.png)';
        break;
        case '钻石':
        this.width = 4;
        this.height = 4;
        this.backgroundImage = 'url(./img/ds.png)';
        break;
        case '榴莲':
        this.width = 5;
        this.height = 5 ;
        this.backgroundImage = 'url(./img/durian.png)';
        break;
        case '金币':
        this.width = 4;
        this.height = 4;
        this.backgroundImage = 'url(./img/cold.png)'
    }
    this.div = null;    //空的盒子
    this.max_x = document.documentElement.clientWidth-this.width-4; //最大的x
    this.max_y = 200;
    this.x = Math.floor(Math.random() * (this.max_x - 40)) + 20; 
    //console.log(this.x)       //坐标
    this.y = Math.floor(Math.random() * this.max_y);
    this.translateTime = Math.floor(Math.random() * 5 + 1); //旋转的时间
    this.translateAnimation = 'priceTranslate ' + this.translateTime + 's infinite linear'; //动画
    this.timer = null;
}
//通过传price传值生成不同的样式丢到div中
Price.prototype.show = function(position){
    this.div = document.createElement('div');
    document.getElementById('prize').appendChild(this.div);
    this.div.style.width = this.width + 'rem';
    this.div.style.height = this.height + 'rem';
    this.div.style.position = 'absolute';
    this.div.style.left = this.x + 'px';
    this.div.style.top = this.y + 'px';
    this.div.style.backgroundImage = this.backgroundImage;
    this.div.style.animation = this.translateAnimation;
}
var count = 0;  
Price.prototype.move = function(){
    this.y = this.y+1;
    this.div.style.top = this.y + 'px';
    var overflowHeight = (document.documentElement.clientHeight-this.height-4);
    if(this.y > overflowHeight && this.timer){
        removeElement(this.div);
        clearInterval(this.timer)
        if ($('#prize').contents().length ==1) {
            //第一关
              if (levelId==1) {
                if (count>20) {
                $('#page-music').attr('src','./music/end.mp3' );
                $('#page-music').attr('loop',false);
                upgrade1();
                    }else{
                    count=0 ;
                    countDown();            
                   };   
                 }
            //第二关
              if (levelId==2) {
                if (count>=60) {
                $('#page-music').attr('src','./music/end.mp3');
                upgrade2();
                    }else{
                    count=0 ;
                    countDown();            
                   };   
                }; 
            //第三关
              if (levelId==3) {
                if (count>=110) {
                $('#page-music').attr('src','./music/end.mp3');
                upgrade3();
                    }else{
                    count=0 ;
                    countDown();            
                   };   
                }; 
            //第四关
              if (levelId==4) {
                if (count>=160) {
                $('#page-music').attr('src','./music/end.mp3'); 
                upgrade4();
                    }else{
                    count=0 ;
                    countDown();            
                   };   
                }; 
            //第五关
              if (levelId==5) {
                if (count>=210) {
                $('#page-music').attr('src','./music/end.mp3');    
                upgrade5();
                    }else{
                    count=0 ;
                    countDown();            
                   };   
                }; 
             //第六关
              if (levelId==6) {
                if (count>=260) {
                $('#page-music').attr('src','./music/end.mp3');    
                upgrade6();
                    }else{
                    count=0 ;
                    countDown();            
                   };   
                }; 
             //第七关
              if (levelId==7) {
                if (count>=700) {
                $('#page-music').attr('src','./music/end.mp3');    
                upgrade7();
                    }else{
                    count=0 ;
                    countDown();            
                   };   
                }; 
            //第八关
              if (levelId==8) {
                if (count>=1100) {
                $('#page-music').attr('src','./music/end.mp3');    
                upgrade8();
                    }else{
                    count=0 ;
                    countDown();            
                   };   
                }; 
            //第九关
              if (levelId==9) {
                if (count>=1600) {
                $('#page-music').attr('src','./music/end.mp3');    
                upgrade9();
                    }else{
                    count=0 ;
                    countDown();            
                   };   
                }; 
          };       
    }
    var dogBox = $('#dog');
    var dogHeight = dogBox.offset().top;
    var dogLeft = dogBox.offset().left;
    var thisDivHeight = $(this.div).offset().top;
    var thisDivleft = $(this.div).offset().left;
    if(thisDivHeight > dogHeight && thisDivHeight <  (dogHeight + 5)&& dogLeft - 15 < thisDivleft && thisDivleft < dogLeft + 15){
        var i =0 ;
        $(this.div).remove();
        $('#number-music').attr('src','./music/number.mp3');
        var bgurl = this.backgroundImage;
        console.log(bgurl);
            //第一关
            if (levelId==1) {
                 if (bgurl == 'url(./img/ds.png)') {
                count += 2;
                plus2();
                     $('#number-music')[0].play();
                    } else if (bgurl == 'url(./img/red.png)'){
                            count += 3;
                            plus3();
                    } else {
                            count = count - 3;
                            reduce3();
                    }
                     console.log(count); 
                     if (count<0) {
                        count=0;
                     };            
            };
            //第二关
            if (levelId==2) {
                 if (bgurl == 'url(./img/ds.png)') {
                count += 3;
                plus3();
                    } else if (bgurl == 'url(./img/red.png)'){
                            count += 4;
                            plus4();
                    } else {
                            count = count - 4;
                            reduce4();
                    }
                     console.log(count);             
            };
            //第三关
            if (levelId==3) {
                 if (bgurl == 'url(./img/ds.png)') {
                count += 5;
                plus5();
                    } else if (bgurl == 'url(./img/red.png)'){
                            count += 8;
                            plus8();
                    } else if (bgurl == 'url(./img/cold.png)') {
                            count += 2;
                            plus2();
                    } else if (bgurl == 'url(./img/bomb.png)') {
                           count = count - 4;
                            reduce4();
                    }else{
                            count = count -3;
                            reduce3();
                    };
                     console.log(count);             
            };
            //第四关
            if (levelId==4) {
                 if (bgurl == 'url(./img/ds.png)') {
                count += 5;
                plus5();
                    } else if (bgurl == 'url(./img/red.png)'){
                            count += 10;
                            plus10();
                    } else if (bgurl == 'url(./img/cold.png)') {
                            count += 5;
                            plus5();    
                    } else if (bgurl == 'url(./img/bomb.png)') {
                           count = count - 5;
                            reduce5();
                    }else{
                            count = count -5;
                            reduce5();
                    };
                     console.log(count);             
            };
            //第五关
            if (levelId==5) {
                 if (bgurl == 'url(./img/ds.png)') {
                count += 5;
                plus5();
                    } else if (bgurl == 'url(./img/red.png)'){
                            count += 15;
                            plus15();
                    } else if (bgurl == 'url(./img/cold.png)') {
                            count += 5;
                            plus5();
                    } else if (bgurl == 'url(./img/bomb.png)') {
                           count = count - 10;
                            reduce10();
                    }else{
                            count = count -10;
                            reduce10();
                    };
                     console.log(count);             
            };
            //第六关
            if (levelId==6) {
                 if (bgurl == 'url(./img/ds.png)') {
                count += 5;
                plus5();
                    } else if (bgurl == 'url(./img/red.png)'){
                            count += 20;
                            plus20();
                    } else if (bgurl == 'url(./img/cold.png)') {
                            count += 5;
                            plus5();
                    } else if (bgurl == 'url(./img/bomb.png)') {
                           count = count - 10;
                            reduce10();
                    }else{
                            count = count -10;
                            reduce10();
                    };
                     console.log(count);             
            };
            //第七关
            if (levelId==7) {
                 if (bgurl == 'url(./img/ds.png)') {
                count += 20;
                plus20();
                    } else if (bgurl == 'url(./img/red.png)'){
                            count += 30;
                            plus30();
                    } else if (bgurl == 'url(./img/cold.png)') {
                            count += 10;
                            plus10();
                    } else if (bgurl == 'url(./img/bomb.png)') {
                           count = count - 40;
                            reduce40();
                    }else{
                            count = count -30;
                            reduce30();
                    };
                     console.log(count);             
            };
            //第八关
            if (levelId==8) {
                 if (bgurl == 'url(./img/ds.png)') {
                count += 30;
                plus30();
                    } else if (bgurl == 'url(./img/red.png)'){
                            count += 30;
                            plus30();
                    } else if (bgurl == 'url(./img/cold.png)') {
                            count += 20;
                            plus20();
                    } else if (bgurl == 'url(./img/bomb.png)') {
                           count = count - 50;
                            reduce50();
                    }else{
                            count = count -50;
                            reduce50();
                    };
                     console.log(count);             
            };

            //第九关
            if (levelId==9) {
                 if (bgurl == 'url(./img/ds.png)') {
                count += 20;
                plus20();
                    } else if (bgurl == 'url(./img/red.png)'){
                            count += 40;
                            plus40();
                    } else if (bgurl == 'url(./img/cold.png)') {
                            count += 20;
                            plus20();
                    } else if (bgurl == 'url(./img/bomb.png)') {
                           count = count - 100;
                            reduces100();
                    }else{
                            count = count -100;
                            reduce100();
                    };
                     console.log(count);             
            };    
    }
}
 //开始游戏（初始化）
Price.prototype.start = function(){
    this.show();
    var that = this;
    //下落的速度
    this.timer  = setInterval(function(){that.move();}, Math.floor(Math.random() * 10) + 10);
}

//循环出个数
function addPrice(type,num){
    for (var i = num - 1; i >= 0; i--) {
        var  newDiv = new Price(type);
        newDiv.start();
    }
}
function customsPass(data){
    var data_ = {}
    for(var i in data){
        data_[i] = data[i];
    }
    for(var  i in data_){
        (function(i_){
            //设定个数
            addPrice(i_,1);
            //复制出来的个数
            data_[i_] = data_[i_] - 1;
            gametimer = setInterval(function(){
                if(data_[i_] > 0){
                    addPrice(i_,1);
                    data_[i_] = data_[i_] - 1;
                }
                if(data_[i_] == 0){
                delete data_[i_];
                if(JSON.stringify(data_) == "{}"){
                    console.log('游戏结束')
                    clearInterval(gametimer);
                }
                };
            },5000);   //礼物出现时间   
        })(i)
        
    }
  }

//获取游戏开始数据
function startGame() {
    // ajax请求
    $.ajax({
        url:'http://192.168.1.108:8080/web/game/start',
        type:'get', //GET      
        data:{     //请求参数
            "userld":null,    //登录ID（登录后传）
            "randomNum":"",   //随机数（没有登陆玩第二次时）
            "isShare":false,  //是否是好友挑战分享出来的
            "shareld":null    //分享ID
        },
        success:function(res){
            console.log(res);
           var userld = res.data.userld;   //用户ID（登录后才有值）
           var userName = res.data.userName; // 用户昵称
           var avatar = res.data.avatar;    //用户头像
           var randomNum = res.data.randomNum;  //随机数（没有登录玩第二次时）
           var levelld = res.data.levelld;   //关卡
           var levelTitle = res.data.levelTitle;    //用户等级
           var score = res.data.score      //过关分数             
         },      
        error:function(){
            console.log('数据加载失败')
        }
    })
}
resData = {};

//获取游戏等级参数
    $(function(){
        // ajax请求
        $.ajax({
            url:'http://192.168.1.108:8080/web/game/level/setting',
            type:'get', //GET        
            data:{  //请求参数
                "userId":10091   //用户ID
            },
            success:function(res){
                console.log(res);
                levelId = res.data.levelId;  //关卡   
                var score = res.data.score;      //过关总分
                var list = res.data.list;
                for (var i = 0; i < list.length; i++) {
                   var _name =list[i].name    //道具名称
                   var _number = list[i].number  //道具数量
                   var _score = list[i].score   //类型数量
                   resData[list[i].name] = list[i].number;
                };
            },            
            error:function(){
                console.log('数据加载失败')
            }
        });       
    })     




