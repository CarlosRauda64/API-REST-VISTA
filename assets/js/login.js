const endpoint = "https://api-rest-django-1ggr.onrender.com/api/usuarios/";

const email = document.querySelector("#email");
const password = document.querySelector("#password");
const message = document.querySelector("#error-login");

login = async () => {
    e.preventDefault();
    const data2 = await fetch(endpoint);
    const response2 = await data2.json();
    console.log(response2);
    try {
        if (email.value !== "" && password.value !== "") {
            const data = await fetch(endpoint + `?correo=${email.value}`);
            const response = await data.json();
            console.log(response);
            if(response[0].password === password.value && response[0].correo === email.value){
                localStorage.setItem("user", JSON.stringify(response[0]));
                window.location.href = "index.html";
            }
        } else if (email.value === "" && password.value === "") {
            message.innerHTML = "Ingrese un usuario valido";
        }
        else {
            message.innerHTML = "Email o Contraseña incorrecta";
        }

    } catch (error) {
        message.innerHTML = "Email o Contraseña incorrecta";
    }
}