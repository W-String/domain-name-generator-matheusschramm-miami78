import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let domain = document.querySelector(".domain")

  // Domain name generator
  // We will be using multiple arrays
  // We want to output every possible permutation using each item in our arrays
  // rendering the domain names on the browser

  // 1. Create a set of arrays to make our permutations
  let pronoun = ["the", "our", "your", "my", "her", "his"];
  let adjective = ["great", "happy", "genius", "silly", "thoughtful"];
  let noun = ["dog", "cat", "llama", "pig", "cow", "plane", "person", "reason"];
  let extension = ["com", "net", "org", "dev", "us", "io"];

  // 2. querySelect <ul> classname to add a list </ul>
  let listElement = document.querySelector('.domain');
  let listOfItems = [];

  // 3. create a nested for loop to iterate through all items
  for (let i = 0; i < pronoun.length; ++i) { // outer loop
    for (let j = 0; j < adjective.length; ++j) { // inner loop
      for (let n = 0; n < noun.length; ++n) { // inner loop
        for (let e = 0; e < extension.length; ++e) {

          let temp = document.createElement('li');
          temp.innerHTML = '${pronoun[i]}${adjective[j]}${noun[n]}';

          // add a condition that checks for the last three characters (substring)
          // if they are "com", add a dot before it, capcom => cap.com
          // slice or splice on the string

          // if the last 3 characters are 'com'
          if (noun[n].endsWith(extension[e])) {
            const lastThree = noun.slice(-extension[e].length)
            const restOfWord = noun.slice(0, -extension[e].length)
            let text = (pronoun[i] + adjective[j] + restOfWord + "." + lastThree)
            const item = document.createElement("li")
            item.textContent = text;
            domain.appendChild(item)
          } else {
            let text = (pronoun[i] + adjective[j] + noun[n] + "." + extension[e])
            const item = document.createElement("li")
            item.textContent = text;
            domain.appendChild(item)
          };
        };
      };
    };
  };
};