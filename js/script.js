console.log('----------ES-MAIL----------')
//inizializzo array con le mail invitate alla festa
const invitedMail = ['salvatore@gmail.com', 'alessio@hotmail.com', 'marco@libero.it', 'katia@virgilio.it'];

//chiedo all'utente la sua mail
let userMail = prompt('Inserisci la tua mail');

//inizializzo la varabile di confronto
let checkMail = false;

//ciclo for
for(let i = 0; !checkMail && i<invitedMail.length; i++){
    if(invitedMail[i].toLowerCase() === userMail.toLowerCase()){
        checkMail = true;
    }
}

//stampo risultato del controllo
if(checkMail){
    console.log(`La tua mail e' presente tra gli invitati, complimenti`)
}
else{
    console.log(`La tua mail non e' presente tra gli invitati, mi dispiace`)
}

console.log('----------ES-DADI----------')

//Numero random per utente e pc
let numeroUtente =(Math.floor(Math.random() * 6) + 1);
let numeroPc = (Math.floor(Math.random() * 6) + 1);

if(numeroUtente>numeroPc){
    console.log(`il tuo numero e' ${numeroUtente} , quello del pc e' ${numeroPc}, hai vinto`)
}
else if(numeroPc>numeroUtente){
    console.log(`il tuo numero e' ${numeroUtente} , quello del pc e' ${numeroPc}, hai perso`)
}
else{
    console.log(`il tuo numero e' ${numeroUtente} , quello del pc e' ${numeroPc}, e' un pareggio`)
}