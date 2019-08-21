function responsive_topbar() {
    var x = document.getElementById("mytopbar");
    if (x.className === "topbar") {
        x.className += " responsive";
    } 
    else {
        x.className = "topbar";
    }
}