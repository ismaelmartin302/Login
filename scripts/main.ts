"use strict"
console.log(document.forms[0])
document.forms[0].addEventListener("submit", (event)=> {
    event.preventDefault();

    let username: HTMLElement | null = document.getElementById("username")
    
});