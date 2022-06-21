const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const letters=["A","B","C","D","E","F","G","H","I","J"]

const newNumbers = [];
const divv = document.querySelector("div");
const getirBtn = document.querySelector(".getir");
const clearBtn = document.querySelector(".clear");

getirBtn.addEventListener("click", (e) => {
  for (let i = 0; i < 4; i++) {
    e.preventDefault();
    let random = Math.floor(Math.random() * letters.length);
    let x = letters[random];
    newNumbers[i] = x;
    newNumbers.push(x);
  }

 console.log(newNumbers);

  divv.innerHTML = newNumbers.join("");
  newNumbers.splice(0, newNumbers.length);
  //or newNumbers.length=0  (to empty the array)
 
});

clearBtn.addEventListener("click", (e) => {
  divv.innerHTML = "";
});
