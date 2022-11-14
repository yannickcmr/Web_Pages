function Randomize_Quote(){
    // read document with quotes.
    fetch("Pretty_Quotes.txt").then(respone => respone.text()).then(text =>{
        // get quotes and authors as lines.
        var lines = text.split(/\r?\n/);
        // choose random quote
        let rnd_int = Math.floor(Math.random() * lines.length);
        var quote = lines[rnd_int];
        // split quote (0) and author (1)
        quote = quote.split(";");
        // replace text in tags.
        document.getElementById("quote-area").innerText = quote[0];
        document.getElementById("author-area").innerText = "~ " + quote[1];
    })
};