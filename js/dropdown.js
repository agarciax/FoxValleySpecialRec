function dropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
}
function dropDown2() {
    document.getElementById("myDropdown2").classList.toggle("show");
}
function dropDown3() {
    document.getElementById("myDropdown3").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.wrap-login100')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}