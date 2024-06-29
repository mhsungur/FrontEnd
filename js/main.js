import Authservices from "./Authservices.js";

// Elementleri alma
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const signInFormButton = document.getElementById('signInButton');
const container = document.getElementById('container');

// Sign Up butonuna tıklama olayı
signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

// Sign In butonuna tıklama olayı
signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

// Sign In form butonuna tıklama olayı
signInFormButton.addEventListener('click', async (event) => {
    event.preventDefault();
    const email = document.querySelector('.sign-in-container input[type="email"]').value;
    const password = document.querySelector('.sign-in-container input[type="password"]').value;

    try {
        const user = await Authservices.login(email, password);
        if (user) {
            console.log("User logged in:", user);
            window.location.href = "userpage.html"; // Giriş başarılıysa yönlendir
        } else {
            console.log("No user found");
        }
    } catch (error) {
        console.error("Error logging in:", error);
    }
});
