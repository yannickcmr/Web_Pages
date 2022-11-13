const fs = require("fs");
var path = require('path');

function Get_Quote(){
    // document undefined...
    var quote = document.getElementById("quote-area");
    console.log(quote.innerHTML);
    quote.innerHTML = Randomize_Quote();
};

function Randomize_Quote(){
    var quotes = Read_Quotes("Pretty_Quotes.txt");
    console.log("->", quotes)
}

function Read_Quotes(file_name){
    var file_path = path.join(__dirname, file_name);
    console.log(file_path);
    // not working as intended, still needs some work.
    var quotes = []
    fs.readFile(file_path, function read(err, data) {
        if (err) {
            throw err;
        }
        var content = data.toString();
        var lines = content.split(/\r?\n/);
        for (let i = 0; i < lines.lenght; i++){
            quotes.push(lines[i])
        };
    });
    return quotes
};

Randomize_Quote()