console.log('Loaded!');
var element=document.getElementById('maintext');
element.innerHTML='new html';
var img=document.getElementById('madi');
var marginRight=0;
function moveRight(){
    marginRight=marginRight+10;
    img.style.marginRight=marginRight+'px';
}
img.onclick=function(){
    var interval=setInterval(moveRight,100);
};