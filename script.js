let modal = document.getElementById('modal');
let button = document.getElementById('modal-button');
let escape = document.getElementById('escape');
let hire = document.getElementById('hire');
let main = document.getElementById('main');

function trigModal(){
    modal.style.display = 'unset';
    modal.style.display = 'flex';
    main.style.filter = 'brightness(50%)';
}

function unTrigModal(){
    modal.style.display = "unset";
    modal.style.display = "none";
    main.style.filter = 'unset';
}



button.addEventListener('click', trigModal);
escape.addEventListener('click', unTrigModal);