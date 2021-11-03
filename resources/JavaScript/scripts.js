let imageParent = document.getElementById("image-parent");

imageParent.onmouseover = function() {
    document.getElementById("popup").style.display = "block";
}

imageParent.onmouseout = function() {
    document.getElementById("popup").style.display = "none";
}