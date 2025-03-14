import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ['the', 'our']; //arr1 --> i
  let adj = ['great', 'big', 'fantastic']; //arr2 --> j
  let noun = ['jogger', 'racoon', 'bayonet', 'aches']; //arr3 --> k
  let domain = ['.com', '.es', '.net'] //arr4 ---> l

//function listOfEMails() { esto es el extra 
  for (let i in pronoun){
    for (let j in adj){  
      for (let k in noun) {
        for (let l in domain) {
           pronoun[i] + adj[j] + noun[k] + domain[l];
           // si el final del los elementos del array [noun] es igual al final de los elementos del array [domain] 
           // entonces genera un string en el que las dos ultimas letras de los elementos del array [noun] desaparezcan 
          // if 
          
        console.log(pronoun[i] + adj[j] + noun[k] + domain[l]);        
          
        }
      }
    }
  }
 // return (extra)
// }


//document.getElementById("email").innerHTML = listOfEMails(); (extra)



};

