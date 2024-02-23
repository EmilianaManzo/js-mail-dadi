// MAIL 

const listmail = ['emy@libero.it', 'giulio@gmail.com', 'emy3@gmail.com', 'boolean@gmail.com', 'machimelohafattofare@libero.it','ciaoboolean@gmail.com'];
console.log(listmail);

let mailUtente = prompt('Inserisci la tua email');
let isValidData = false

// variabile add class 
const bottom = document.querySelector('.bottom');


for (let i=0; i < listmail.length; i++){
  console.log(i);
  if (mailUtente == listmail[i]){
    isValidData = true
  }
}

if (isValidData){
  document.getElementById('mailbox').innerHTML = 'La mail inserita è corretta. <br> Adesso puoi giocare ai dadi.'
}else{
  alert('Email inserita non presente nel sistema. Riprovare');
  document.getElementById('mailbox').innerHTML = 'La mail inserita non è corretta.'
  bottom.classList.add('d-none')
}


// DADI 
const btn =document.querySelector('.btn');


btn.addEventListener('click', function(){
  let dicepc = (Math.ceil(Math.random()*6));
  let diceuser = (Math.ceil(Math.random()*6));
  
  console.log(dicepc, diceuser);

  document.getElementById('diceuser').innerHTML= diceuser;
  document.getElementById('dicepc').innerHTML= dicepc;

  if (dicepc > diceuser){
    document.getElementById('resulte').innerHTML = 'Ha vinto il PC!'
  }else if (diceuser > dicepc){
    document.getElementById('resulte').innerHTML = 'Hai vinto User!'
  }else if (dicepc == diceuser){
    document.getElementById('resulte').innerHTML = 'Il risultato è pari'
  }
  
})
