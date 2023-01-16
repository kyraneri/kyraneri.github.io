var res = document.getElementsByClassName("resume-accordian");
var i;

for (i = 0; i < res.length; i++) {
    res[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var details = this.nextElementSibling;
        if (details.style.display === "block") {
            panel.style.display = "none";
        } else {
            details.style.display = "block";
        }
    });
};


for (i = 0; i < res.length; i++) {
    res[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var details = this.nextElementSibling;
        if (details.style.maxHeight) {
            details.style.maxHeight = null;
        } else {
            details.style.maxHeight = details.scrollHeight + "px";
        }
    });
}