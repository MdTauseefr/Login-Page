const form = document.getElementById("loginForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("Login Successful!");
});

document.querySelector(".google").addEventListener("click", () => {
    alert("Connect Google OAuth here");
});

document.querySelector(".facebook").addEventListener("click", () => {
    alert("Connect Facebook OAuth here");
});