/*
Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
*/

/*
1. creo le celle con classe cella all'interno della griglia;
2. al click del bottone "play" rendo visibile la griglia;
3. assegno un numero alle celle;
4. coloro di azzurro la casella cliccata;
5. stampo in console il numero che è stato cliccato.
6. inserisco tutto all'interno di una funzione (nuoveCelle) che poi invoco all'inizio.
*/

const bottone = document.querySelector(".btn");
const gliglia = document.querySelector(".griglia");

const celle = nuoveCelle();

function nuoveCelle() {
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
      if (this.classList.contains("cellaCliccata")) {
        this.classList.remove("cellaCliccata");
      } else {
        this.classList.add("cellaCliccata");
      }

      // stampo in console il numero che è stato cliccato.
      console.log("Cella cliccata numero:", i);
    });
  }
}

// al click del bottone "play" rendo visibile la griglia;
bottone.addEventListener("click", function () {
  gliglia.classList.remove("hidden");
});
