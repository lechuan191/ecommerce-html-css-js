var img = document.getElementById("menutoggle");
var menuitem = document.getElementById("menuitem");
var productimg = document.getElementById("productimg");
var smallimg = document.getElementsByClassName("small-img");
menuitem.style.maxHeight = "3px";

img.onclick = function(){
    if(menuitem.style.maxHeight == "0px"){
        menuitem.style.maxHeight = "200px";
    }
    else{
        menuitem.style.maxHeight = "0px";

    }
}

smallimg[0].onclick = function(){
    productimg.src = smallimg[0].src;
}
smallimg[1].onclick = function(){
    productimg.src = smallimg[1].src;
}
smallimg[2].onclick = function(){
    productimg.src = smallimg[2].src;
}
smallimg[3].onclick = function(){
    productimg.src = smallimg[3].src;
}

