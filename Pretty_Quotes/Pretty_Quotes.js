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

function Copy_Quote () {
    // get text and create temp.
    var quote = document.getElementById("quote-area").innerText;
    var author = document.getElementById("author-area").innerText;
    var temp = document.createElement("textarea");
    document.body.appendChild(temp);
    // assign value to temp.
    temp.value = `'${quote}' ${author}`;
    temp.select();
    // copy temp and remove it.
    document.execCommand("copy");
    document.body.removeChild(temp);

    var copyButton = document.getElementById("copy-button");
};