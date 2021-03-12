// tady je místo pro náš program

//document.querySelector("#vysledek").innerHTML = secti(4, 5);

/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */
function secti(a, b) {
  let c = a + b;
  return c;
}

/**
 * Upozorní uživatele při spuštění.
 */
function upozorni() {
  alert("Gratulace, právě jsi spustila tuto funkci!");
}

//Vytvořte tlačítko, při jehož stisknutí se změní barva <strong>Čtvereček</strong> na zelenou.

function upravBarvu() {
  let squareElement = document.getElementsByClassName('ctverecek')[0]
  squareElement.style.backgroundColor = 'green'
}

//Upravte kód tak, aby se výsledek funkce secti() zobrazil 
//v prvku s ID vysledek až po stiknutí nově přidaného tlačítka "Zobraz výsledek".

function scitej() {
  document.getElementById("vysledek").innerHTML = secti(4, 5);
}

// Uprav funkci upozorni() tak, aby se navíc vypisoval text i do konzole a také nahradil text v elementu Čtvereček.
function upozorniNahrad() {
  let squareElement = document.getElementsByClassName('ctverecek')[0]
  squareElement.innerHTML = 'Muhaha'
  alert("Gratulace, právě jsi spustila tuto funkci!")
  console.log('Zmenil se text i ve ctverecku')
}
