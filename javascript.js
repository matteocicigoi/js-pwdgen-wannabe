'use strict';

const password = document.getElementById('password');

const nome = prompt('Inserisci il tuo nome');
const cognome = prompt('Inserisci il tuo cognome');
const colore = prompt('Inserisci il tuo colore preferito');

password.innerHTML = 'Password: ' + nome + cognome + colore + 2;