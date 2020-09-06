let modal = document.getElementById('modal');
let button = document.getElementById('modal-button');
let escape = document.getElementById('escape');

function trigModal(){
    modal.style.display = 'unset';
    modal.style.display = 'flex';
}

function unTrigModal(){
    modal.style.display = "unset";
    modal.style.display = "none";
}

button.addEventListener('click', trigModal);
escape.addEventListener('click', unTrigModal);