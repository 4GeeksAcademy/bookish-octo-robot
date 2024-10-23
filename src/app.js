/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  // arrays
  let pronoun = ["the", "our", "his"];
  let adj = ["satanic", "infernal", "rotten"];
  let noun = ["priest", "nun", "corpse", "murder", "mass"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        console.log(pronoun[i] + adj[j] + noun[k] + ".com");
        document.querySelector("#domain").innerHTML =
          pronoun[i] + adj[j] + noun[k] + ".com";

        let domainparagraph = document.createElement("p");
        domainparagraph.textContent = pronoun[i] + adj[j] + noun[k] + ".com";
        let divelement = document.querySelector("#container");
        divelement.appendChild(domainparagraph);
      }
    }
  }
};
