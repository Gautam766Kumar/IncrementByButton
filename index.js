var cont=document.querySelector('.num');
function increment(){
     let val=parseInt(cont.innerText);
     val=val+1;
     // document.getElementsByClassName("num").innerHTML="val";
     cont.innerText=val;
     if(val>=0){
          cont.style.color="white";
     }
}
function decrement(){
     let val=parseInt(cont.innerText);
     val=val-1;
     // document.getElementsByClassName("num").innerHTML="val";
     cont.innerText=val;
     if(val<0){
          cont.style.color="red";
     }
}