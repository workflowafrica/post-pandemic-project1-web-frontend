var card = document.getElementById('card');

function openRegisterScreen() {
    card.style.transform= 'rotateY(-180deg)';
}

function openLoginScreen() {
    card.style.transform= 'rotateY(0deg)';
}

var password = document.getElementById('password');
var eye = document.getElementById('eye');

eye.addEventListener('click', togglePassword);

function togglePassword(){
    eye.classList.toggle('active');

    (password.type == 'password') ? password.type = 'text' : password.type = 'password';
}