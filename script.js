var square = document.querySelectorAll(".square")
var btn_showAll = document.querySelector("#showAll")
var btn_hideAll = document.querySelector("#hideAll")
var filter = document.querySelector("#filter")

btn_showAll.addEventListener("click", function () {
    square.forEach(function (element) {
        element.style.display = "block"
    });
})

btn_hideAll.addEventListener("click", function () {
    square.forEach(function (element) {
        element.style.display = "none"
    });
})

filter.addEventListener("keyup", function () {
    var colorName = filter.value
    square.forEach(function (color) {
        if (color.classList.contains(colorName)) {
            color.style.display = "block"
        }
        else {
            color.style.display = "none"
        }
    })
})

square.forEach(function (element) {
    element.addEventListener("mouseover", function () {
        element.style.width = "250px"
        element.style.height = "200px"
    })

    element.addEventListener("mouseout", function () {
        element.style.width = "230px"
        element.style.height = "180px"
    })
})
