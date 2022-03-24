function openMenu(e) {
    e.classList.toggle("close");

    var elem = document.getElementById("navID")
    Style = window.getComputedStyle(elem)
    right = Style.getPropertyValue("right");

    console.log(right)
    if (right == "-50px") {
        elem.style.right = "-450px";
    } else if (right == "-450px") {
        elem.style.right = "-50px";
    } else if (right.includes("-")) {
        elem.style.right = "0px";
    } else if (right == "0px") {
        elem.style.right = "-100vw"
    }
}
