var card = document.getElementById('card');

function openRegisterScreen() {
    card.style.transform= 'rotateY(-180deg)';
}

function openLoginScreen() {
    card.style.transform= 'rotateY(0deg)';
}