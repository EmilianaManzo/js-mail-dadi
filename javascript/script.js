// MAIL 

const listmail = ['emy@libero.it', 'giulio@gmail.com', 'emy3@gmail.com', 'boolean@gmail.com', 'machimelohafattofare@libero.it','ciaoboolean@gmail.com'];

console.log(listmail);

let mailUtente = prompt('Inserisci la tua email');

let isValidData = false


for (let i=0; i < listmail.length; i++){
  console.log(i);
  if (mailUtente == listmail[i]){
    isValidData = true
  }
}

if (isValidData){
  document.getElementById('mailbox').innerHTML = 'La mail inserita è corretta. Adesso puoi giocare ai dadi.'
}else{
  alert('Email inserita non presente nel sistema. Riprovare');
  document.getElementById('mailbox').innerHTML = 'La mail inserita non è corretta.'
}


// DADI 

let dicepc = (Math.ceil(Math.random()*6));
let diceuser = (Math.ceil(Math.random()*6));

console.log(dicepc, diceuser);

document.getElementById('diceuser').append(diceuser);
document.getElementById('dicepc').append(dicepc);


if (dicepc > diceuser){
  document.getElementById('resulte').innerHTML = 'Ha vinto il PC!'
}else if (diceuser > dicepc){
  document.getElementById('resulte').innerHTML = 'Hai vinto!'
}else if (dicepc == diceuser){
  document.getElementById('resulte').innerHTML = 'Il risultato è pari'
}
