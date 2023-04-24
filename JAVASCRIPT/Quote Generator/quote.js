function generate(){
    var quotes = {
        "-Nelson Mandela":'"The greatest glory in living lies not in never falling, but in rising every time we fall."',
        "-Walt Disney" :'"The way to get started is to quit talking and begin doing."',
        "-Steve Jobs":'"Your time is limited, so dont waste it living someone elses life Dont be trapped by dogma which is living with the results of other peoples thinking."',
        "-Eleanor Roosevelt":'"If life were predictable it would cease to be life, and be without flavor."',
        "-John Lennon":'"Life is what happens when youre busy making other plans."'
    }
    var authors = Object.keys(quotes);
    var author = authors[Math.floor(Math.random() * authors.length)];

    var quote = quotes[author];
    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}