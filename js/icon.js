/*-------------phone header---------------*/
var hambar_text= document.getElementById("h_text");
var hambar_fa = document.getElementById("h_fa");
hambar_fa.addEventListener('click',function(){
    if(hambar_text.style.display==="none"){
        hambar_text.style.display="block";
    }else{
        hambar_text.style.display="none";
    }
});


let ol_style = document.getElementById("ol_style");
let ol_kid = document.getElementsByClassName("ol_kid")[0];

ol_style.addEventListener("click", function(){

    if( ol_kid.style.display === "none" ){
        ol_kid.style.display="block";
    }else{
        ol_kid.style.display="none";
    }
});

/*-------------購物車---------------*/
var tt = document.getElementById("tt");
var shopping_icon = document.getElementById("shopping_icon");
shopping_icon.addEventListener('click', function(){
    // tt.style.display="block";
    if( tt.style.display==="none"){
        tt.style.display="block";
    }else{
        tt.style.display="none";
    }
});

/*-------------動畫---------------*/

