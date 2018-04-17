
	



//前端验证
function checkMobile(str) {  
    if(str==""){  
        alert("手机号不能为空！");  
    }  
    else{  
        var re = /^1\d{10}$/                                //以1开始后面加10位数字  
        if (re.test(str)) {  
            // alert("正确"); 
            var wait=60;
function time(o) {
        if (wait == 0) {
            o.removeAttribute("disabled");            
            o.value="免费获取验证码";
            wait = 60;
        } else { // www.jbxue.com
            o.setAttribute("disabled", true);
            o.value="重新发送(" + wait + ")";
            wait--;
            setTimeout(function() {
                time(o)
            },
            1000)
        }
    }
document.getElementById("btn").onclick=function(){time(this);}


             
        } else {  
            alert("手机号格式错误！");  
        }  
    }  
}  
//   //新浪分享
// function shareSina(){
//   var p = {
//       url:'http://www.mamainst.com/download',
//       appkey:'3105717170',
//         title:'妈妈学院APP,为你提供最全最专业的亲自教育课程，更好的陪伴孩子成长。',/*分享标题(可选)*/ 
//       default_text:'妈妈学院APP,为你提供最全最专业的亲自教育课程，更好的陪伴孩子成长。',
//       pic:'http://www.mamainst.com/images/m/sinaMLogo.png'
//       };
//   var s = [];
//   for(var i in p){
//     s.push(i + '=' + encodeURIComponent(p[i]||''));
//   }
//   var href="http://service.weibo.com/share/share.php?"+s.join('&');
//    window.open(href,'newwindow','height=400,width=400,top=100,left=100');
//    return false;   
// };
// //QQ空间分享
// function  shareQQZone(){
//   var p = {
//     /* url:location.href, */
//     url:'http://www.mamainst.com/download',
//     desc:'妈妈学院APP,为你提供最全最专业的亲自教育课程，更好的陪伴孩子成长。', /*分享理由(风格应模拟用户对话),支持多分享语随机展现（使用|分隔）*/
//     summary:'妈妈学院APP,为你提供最全最专业的亲自教育课程，更好的陪伴孩子成长。', /*分享摘要(可选)*/
//     showcount:'1',/*是否显示分享总数,显示：'1'，不显示：'0' */
//     /* title:'${course_data.title }',/*分享标题(可选)*/ 
//     /* pics:'${course_data.coverM }', /*分享图片的路径(可选)*/
//     pics:'http://www.mamainst.com/images/m/qqMLogo.png',
//     flash: '', /*视频地址(可选)*/
//     style:'201',
//     width:98,
//     height:22,
//     site:'妈妈学院', /*分享来源(可选) 如：QQ分享*/
//     }
//   var s = [];
//   for(var i in p){
//     s.push(i + '=' + encodeURIComponent(p[i]||''));
//   }
//   var href="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?"+s.join('&');
//   window.open(href,'newwindow','height=400,width=400,top=100,left=100');
// };



