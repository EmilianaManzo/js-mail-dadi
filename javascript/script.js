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
  alert('Email inserita non presente nel sistema. Riprovare');
}else{
  document.getElementById('mailbox').innerHTML = 'La mail inserita è corretta. Adesso puoi giocare ai dadi.'
}