window.onload=function() {
  
var ekran = document.getElementById('ekran');
var prethodniBroj = document.getElementById('prethodniBroj');
var suma = [];
var brojnaSuma;
var vrednost;
document.getElementsByTagName('button')[0].classList.add("brojevi");
document.getElementsByTagName('button')[1].classList.add("brojevi");
document.getElementsByTagName('button')[2].classList.add("brojevi");
document.getElementsByTagName('button')[3].classList.add("operacije");
document.getElementsByTagName('button')[4].classList.add("brojevi");
document.getElementsByTagName('button')[5].classList.add("brojevi");
document.getElementsByTagName('button')[6].classList.add("brojevi");
document.getElementsByTagName('button')[7].classList.add("operacije");
document.getElementsByTagName('button')[8].classList.add("brojevi");
document.getElementsByTagName('button')[9].classList.add("brojevi");
document.getElementsByTagName('button')[10].classList.add("brojevi");
document.getElementsByTagName('button')[11].classList.add("operacije");
document.getElementsByTagName('button')[12].classList.add("operacije");
document.getElementsByTagName('button')[13].classList.add("brojevi");
document.getElementsByTagName('button')[14].classList.add("operacije");
document.getElementsByTagName('button')[15].classList.add("operacije");

document.addEventListener('click', function(){
  vrednost = event.target.innerHTML;
  if(isNaN(parseInt(vrednost)) === false){
    dodajBroj(vrednost);
  }
  else if(vrednost == '='){
    izracunaj();
  }
  else if(vrednost == 'C'){
    resetuj();
  }
  else if(vrednost == '/'){
    dodajOperaciju('/');
  }
  else if(vrednost == '+'){
    dodajOperaciju('+');
  }
  else if(vrednost == '*'){
    dodajOperaciju('*');
  }
  else if(vrednost == '-'){
    dodajOperaciju('-');
  } 
});

 function dodajBroj(broj){ 
   ekran.value = ekran.value+broj
 }

 function dodajOperaciju(operacija) { 
       prethodniBroj = ekran.value;
       suma.push(prethodniBroj);
       suma.push(operacija);
       ekran.value = ''; 
    }
  
 function resetuj(){ 
    ekran.value = '';
    suma = [];
 }

 function izracunaj(){ 
     prethodniBroj = ekran.value;
     suma.push(prethodniBroj);
     ekran.value = eval(suma.join(' '));
     brojnaSuma = parseInt(ekran.value);
     if(isNaN(brojnaSuma)){
        alert('Nije dozvoljeno deljenje nulom!');
      }
    else{
        ekran.value = brojnaSuma;
        suma = [];
      }
  }        
  



}