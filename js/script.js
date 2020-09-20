var menu = document.getElementById("menutoggle");
var menuitem = document.getElementById("menuitem");
menuitem.style.maxHeight = "3px";

menu.onclick = function(){
    if(menuitem.style.maxHeight == "0px"){
        menuitem.style.maxHeight = "200px";
    }
    else{
        menuitem.style.maxHeight = "0px";

    }
}

