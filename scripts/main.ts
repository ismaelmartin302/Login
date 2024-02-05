"use strict"
console.log(document.forms[0]);
document.forms[0].addEventListener("submit", (event)=> {
    event.preventDefault();
    
    // Coger todos los values de los input
    let username: string | null = (document.getElementById("username") as HTMLInputElement)?.value;
    let email_number: string | null = (document.getElementById("email_number") as HTMLInputElement)?.value;
    let password: string | null = (document.getElementById("password") as HTMLInputElement)?.value;
    let password_check: string | null = (document.getElementById("password_check") as HTMLInputElement)?.value;

    // Coger todos los parrafos de error
    let errorUsername: HTMLElement | null = document.getElementById("errorUsername");
    let errorEmailNumber: HTMLElement | null = document.getElementById("errorEmailNumber");
    let errorPassword: HTMLElement | null = document.getElementById("errorPassword");
    let errorPasswordCheck: HTMLElement | null = document.getElementById("errorPasswordCheck");

    // Declarar las expresiones regulares
    let comprobarEmail: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let comprobarNumber: RegExp = /^6\d{8}$/;
    let comprobarPassword: RegExp = /^(?=.*\d).{8,}$/;

    // Declaramos errores
    let error1: boolean;
    let error2: boolean;
    let error3: boolean;
    let error4: boolean;


    // Comprobar que se a introducido un nombre
    if (username == "") {
        errorUsername?.classList.add("error");
        error1 = true;
    } else {
        errorUsername?.classList.remove("error");
        error1 = false;
    }

    // Comprobar que el Email/Numero esta bien puesto
    if (!(comprobarEmail.test(email_number) || comprobarNumber.test(email_number))) {
        errorEmailNumber?.classList.add("error");
        error2 = true;
    } else {
        errorEmailNumber?.classList.remove("error");
        error2 = false;
    }

    // Comprobar que la contraseña esta bien
    if (!comprobarPassword.test(password)) {
        errorPassword?.classList.add("error");
        error3 = true;
    } else {
        errorPassword?.classList.remove("error");
        error3 = false;
    }

    // Comprobar que las contraseñas coinciden
    if (password != password_check) {
        errorPasswordCheck?.classList.add("error");
        error4 = true;
    } else {
        errorPasswordCheck?.classList.remove("error");
        error4 = false;
    }

    console.log(error1, error2, error3, error4)
    if ((error1 == false) && (error2 == false) && (error3 == false) && (error4 == false)) {
        document.location.href = "https://twitter.com"
    }


});