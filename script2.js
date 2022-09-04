function clarification(){
    localStorage.setItem("clear", true);
    whenClearOverlayOff();
}


function whenClearOverlayOff(){
    if(localStorage.getItem("clear")){
        document.getElementsByClassName("overlay").item(0).style.display = "none"
    }else{
        document.getElementsByClassName("overlay").item(0).style.display = "flex";
    }
}

whenClearOverlayOff()
