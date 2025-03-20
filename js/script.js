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

//confronto i numeri


if(numeroUtente>numeroPc){  //caso di vittoria da parte dell'utente
    console.log(`il tuo numero e' ${numeroUtente} , quello del pc e' ${numeroPc}, hai vinto`)
}
else if(numeroPc>numeroUtente){  //caso di vittoria da parte del pc
    console.log(`il tuo numero e' ${numeroUtente} , quello del pc e' ${numeroPc}, hai perso`)
}
else{  //caso di pareggio
    console.log(`il tuo numero e' ${numeroUtente} , quello del pc e' ${numeroPc}, e' un pareggio`)
}

console.log('----------ES-DADI ARRAY----------')
const nums = [1,2,3,4,5,6];

let randomPcNum = nums[Math.floor(Math.random()*nums.length)]
let randomUserNum = nums[Math.floor(Math.random()*nums.length)]

if(randomUserNum>randomPcNum){
    console.log(`il tuo numero e' ${randomUserNum} , quello del pc e' ${randomPcNum}, hai vinto`)
}
else if (randomUserNum<randomPcNum){
    console.log(`il tuo numero e' ${randomUserNum} , quello del pc e' ${randomPcNum}, hai perso`)
}
else{
    console.log(`il tuo numero e' ${randomUserNum} , quello del pc e' ${randomPcNum}, e' un pareggio`)
}