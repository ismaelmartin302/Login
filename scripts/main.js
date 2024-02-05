"use strict";
console.log(document.forms[0]);
document.forms[0].addEventListener("submit", function (event) {
    event.preventDefault();
    var username = document.getElementById("username");
});
