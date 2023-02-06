const sidebar = document.querySelector("nav");
const sidebarToggle = document.querySelector(".sidebar-toggle");

let getStatus = localStorage.getItem("status");
if (getStatus && getStatus === "close") {
    sidebar.classList.toggle("close");
}

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    if (sidebar.classList.contains("close")) {
        localStorage.setItem("status", "close");
    } else {
        localStorage.setItem("status", "open");
    }
})

// Sub menu sidebar
const blogBtn = document.querySelector(".blog-btn");
const dataBtn = document.querySelector(".data-btn");
const ppdbBtn = document.querySelector(".ppdb-btn");
const blogShow = document.querySelector(".blog-show");
const dataShow = document.querySelector(".data-show");
const ppdbShow = document.querySelector(".ppdb-show");
const arrowIcon = document.querySelectorAll(".uil-angle-right");

if (blogShow != null && blogShow.classList.contains("show")) {
    arrowIcon[0].classList.add("rotate");
}

if (dataShow != null && dataShow.classList.contains("show")) {
    arrowIcon[1].classList.add("rotate");
}

if (ppdbShow.classList.contains("show")) {
    if (arrowIcon.length === 1) {
        arrowIcon[0].classList.add("rotate");        
    } else {
        arrowIcon[1].classList.add("rotate");        
    }
}

if (blogBtn != null) {
    blogBtn.addEventListener("click", () => {
        blogShow.classList.toggle("show");
        arrowIcon[0].classList.toggle("rotate");
    })
}

if (dataBtn != null) {
    dataBtn.addEventListener("click", () => {
        dataShow.classList.toggle("show");
        arrowIcon[1].classList.toggle("rotate");
    })
}

ppdbBtn.addEventListener("click", () => {
    if (arrowIcon.length === 1) {
        arrowIcon[0].classList.toggle("rotate");        
    } else {
        arrowIcon[2].classList.toggle("rotate");        
    }
    ppdbShow.classList.toggle("show");
})

// Checkbox

function checkAll(ele) {
    var checkboxes = document.getElementsByTagName('input');
    if (ele.checked) {
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].type == 'checkbox' ) {
                checkboxes[i].checked = true;
            }
        }
    } else {
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].type == 'checkbox') {
                checkboxes[i].checked = false;
            }
        }
    }
}