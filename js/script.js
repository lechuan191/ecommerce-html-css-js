var img = document.getElementById("menutoggle");
var menuitem = document.getElementById("menuitem");
menuitem.style.maxHeight = "0px";

img.onclick = function(){
    if(menuitem.style.maxHeight = "0px"){
        menuitem.style.maxHeight = "200px";
    }
    else{
        menuitem.style.maxHeight = "0px";

    }
}
