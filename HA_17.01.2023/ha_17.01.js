fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
      .then(postMessage => console.log(postMessage))
      .then(comments => console.log())


// Zufallswert berechnen
function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}
  
//"Main":
var secretNumber = getRandomInt(100);

function guess() {
    //Eingabe aus dem input ziehen
    let userGuess = document.getElementById("userInput").value;

    //Nur Zahlen sind erlaubt.
    if(isNaN(userGuess)){
        alert("Bitte nur Zahlen eingeben!");
    }
    
    //Wenn input eine Zahl enthält, dann vergleiche den Wert mit unserer secretNumber.
    //Außerdem: Gewonnen? Zu klein? Zu Groß?
    else{
        let outputEle = document.getElementById("output")
        if(userGuess == secretNumber){
            outputEle.innerHTML = "Du hast richtig geraten!";
        }
        else if(userGuess < secretNumber){
            outputEle.innerHTML = "Zu klein!";
        }
        else{
            outputEle.innerHTML = "Zu groß!";
        }
    }
}

//fügt dem userButton-Element einen EventListener hinzu, der beim klicken auf den Knop die guess-Funktion ausführen soll
document.getElementById("userButton").addEventListener("click", guess)