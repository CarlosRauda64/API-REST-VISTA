const btnLogout = document.getElementById("btn-logout");

// Recupera el valor almacenado
const user = localStorage.getItem("user");

// Convierte la cadena JSON a un objeto JavaScript
const userObject = JSON.parse(user);

if(userObject === null) {
    window.location.href = "login.html";
}else{
    btnLogout.addEventListener("click", () => {
        localStorage.removeItem("user");
        window.location.href = "login.html";
    });
}