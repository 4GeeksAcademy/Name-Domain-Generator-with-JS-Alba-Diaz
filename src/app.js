import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {

  let pronoun = ['the', 'our']; 
  let adj = ['great', 'big', 'fantastic'];
  let noun = ['jogger', 'racoon', 'brunches']; 
  let domain = ['.com', '.es', '.er'] 

  let listOfEmails = [];

  for (let i in pronoun) {
    for (let j in adj) {
      for (let k in noun) {
        for (let l in domain) {
          let email = pronoun[i] + adj[j] + noun[k] + domain[l];

          if (noun[k].endsWith(domain[l].slice(-2))) {
            email = pronoun[i] + adj[j] + noun[k].slice(0, -2) + domain[l];
          }

          listOfEmails.push(email);
        }
      }
    }
  }
  document.getElementById("email").innerHTML = "<ul>" + listOfEmails.map(email => `<li>${email}</li>`).join('') + "</ul>";

};

