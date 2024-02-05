"use strict";
console.log(document.forms[0]);
document.forms[0].addEventListener("submit", function (event) {
    var _a, _b, _c, _d;
    event.preventDefault();
    // Coger todos los values de los input
    var username = (_a = document.getElementById("username")) === null || _a === void 0 ? void 0 : _a.value;
    var email_number = (_b = document.getElementById("email_number")) === null || _b === void 0 ? void 0 : _b.value;
    var password = (_c = document.getElementById("password")) === null || _c === void 0 ? void 0 : _c.value;
    var password_check = (_d = document.getElementById("password_check")) === null || _d === void 0 ? void 0 : _d.value;
    // Coger todos los parrafos de error
    var errorUsername = document.getElementById("errorUsername");
    var errorEmailNumber = document.getElementById("errorEmailNumber");
    var errorPassword = document.getElementById("errorPassword");
    var errorPasswordCheck = document.getElementById("errorPasswordCheck");
    // Declarar las expresiones regulares
    var comprobarEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var comprobarNumber = /^6\d{8}$/;
    var comprobarPassword = /^(?=.*\d).{8,}$/;
    // Declaramos errores
    var error1;
    var error2;
    var error3;
    var error4;
    // Comprobar que se a introducido un nombre
    if (username == "") {
        errorUsername === null || errorUsername === void 0 ? void 0 : errorUsername.classList.add("error");
        error1 = true;
    }
    else {
        errorUsername === null || errorUsername === void 0 ? void 0 : errorUsername.classList.remove("error");
        error1 = false;
    }
    // Comprobar que el Email/Numero esta bien puesto
    if (!(comprobarEmail.test(email_number) || comprobarNumber.test(email_number))) {
        errorEmailNumber === null || errorEmailNumber === void 0 ? void 0 : errorEmailNumber.classList.add("error");
        error2 = true;
    }
    else {
        errorEmailNumber === null || errorEmailNumber === void 0 ? void 0 : errorEmailNumber.classList.remove("error");
        error2 = false;
    }
    // Comprobar que la contraseña esta bien
    if (!comprobarPassword.test(password)) {
        errorPassword === null || errorPassword === void 0 ? void 0 : errorPassword.classList.add("error");
        error3 = true;
    }
    else {
        errorPassword === null || errorPassword === void 0 ? void 0 : errorPassword.classList.remove("error");
        error3 = false;
    }
    // Comprobar que las contraseñas coinciden
    if (password != password_check) {
        errorPasswordCheck === null || errorPasswordCheck === void 0 ? void 0 : errorPasswordCheck.classList.add("error");
        error4 = true;
    }
    else {
        errorPasswordCheck === null || errorPasswordCheck === void 0 ? void 0 : errorPasswordCheck.classList.remove("error");
        error4 = false;
    }
    console.log(error1, error2, error3, error4);
    if ((error1 == false) && (error2 == false) && (error3 == false) && (error4 == false)) {
        document.location.href = "https://twitter.com";
    }
});
