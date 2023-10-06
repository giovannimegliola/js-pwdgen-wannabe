//PASSWORD GENERATOR: 

/*Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21*/

let name_pw = prompt ('Insert your name:');
let lastname_pw = prompt ('Insert your last name:');
let favorite_color_pw = prompt ('Insert your favorite color:');

let new_password = name_pw + lastname_pw + favorite_color_pw +21; 

document.getElementById('password').innerHTML = `Your new password is : ${new_password}`;

document.getElementById('hello_user').innerHTML += ' ' +name_pw + ' ' +lastname_pw;

console.log(`Hello ${name_pw}`)