function openMenu(e) {
    e.classList.toggle("close");

    var elem = document.getElementById("navID")
    Style = window.getComputedStyle(elem)
    right = Style.getPropertyValue("right");

    if (right == "-50px") {
        elem.style.right = "-400px";
    } else {
        elem.style.right = "-50px";
    }
}
