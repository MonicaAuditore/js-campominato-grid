/*
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
*/

/*
1. creo le celle con classe cella all'interno della griglia;
2. al click del bottone "play" rendo visibile la griglia;
3. assegno un numero alle celle;
4. coloro di azzurro la casella cliccata;
5. stampo in console il numero che è stato cliccato.

Bonus:
6. aggiungo la select in html;
7. in css creo altre due classi per cella-medium e cella-hard;
8. 
*/

const bottone = document.querySelector(".btn");
const gliglia = document.querySelector(".griglia");

// creo le celle con classe cella all'interno della griglia;
for (let i = 1; i <= 100; i++) {
  console.log(i);
  let div = document.createElement("div");

  // assegno un numero alle celle;
  div.innerHTML += i;
  div.classList.add("cella");
  gliglia.append(div);

  // coloro di azzurro la casella cliccata;
  div.addEventListener("click", function () {
    div.classList.add("cellaCliccata");
    // stampo in console il numero che è stato cliccato.
    console.log("Cella cliccata numero:", i);
  });
}

const livelli = document.getElementById("levels");

// al click del bottone "play" rendo visibile la griglia;
bottone.addEventListener("click", function () {
  if (livelli.value == "e") {
    gliglia.classList.remove("hidden");
  }
});
