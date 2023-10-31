'use strict';

const password = document.getElementById('password');

const nome = prompt('Inserisci il tuo nome');
console.log('Nome: ' + nome);
const cognome = prompt('Inserisci il tuo cognome');
console.log('Cognome: ' + cognome);
const colore = prompt('Inserisci il tuo colore preferito');
console.log('Colore: ' + colore);

const numero = Math.floor(Math.random() * 1000);
console.log('Numero: ' + numero);

password.innerHTML = 'Password: ' + nome + cognome + colore + numero;