//inizializzo array con le mail invitate alla festa
const invitedMail = ['salvatore@gmail.com', 'alessio@hotmail.com', 'marco@libero.it', 'katia@virgilio.it'];

//chiedo all'utente la sua mail
let userMail = prompt('Inserisci la tua mail');

//inizializzo la varabile di confronto
let checkMail;

//ciclo for
for(let i = 0; !checkMail && i<invitedMail.length; i++){
    if(invitedMail[i] == userMail){
        checkMail = true;
    }
}

if(checkMail){
    console.log(`La tua mail e' presente tra gli invitati, complimenti`)
}
else{
    console.log(`La tua mail non e' presente tra gli invitati, mi dispiace`)
}