function openMenu(e) {
    e.classList.toggle("close");

    var elem = document.getElementById("navID")
    Style = window.getComputedStyle(elem)
    right = Style.getPropertyValue("right");

    if (right == "0px") {
        elem.style.right = "-400px";
    } else {
        elem.style.right = "0px";
    }
}
