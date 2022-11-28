let button_generate = document.getElementById("generate");
button_generate.addEventListener('click', function() {
    // Chiedere i kilometri da percorrere
    let kilometers = parseInt(document.getElementById("km").value);

    // Chiedere l'età del passeggero
    let age = document.getElementById("range_age").value;

    // Definisco il prezzo normale
    let prize = kilometers * 0.21;
    
    // Dichiariamo il prezzo scontato
    let final_prize;
    
    // Definisco gli sconti
    if (age === 'Minorenne') {
        final_prize = (prize * 0.8).toFixed(2)
        console.log(final_prize);
    }
    else if (age === 'Maggiorenne') {
        final_prize = prize.toFixed(2)
        console.log(final_prize);
    }
    else if (age === 'Over 65') {
        final_prize = (prize * 0.6).toFixed(2)
        console.log(final_prize);
    }
    
    
});
