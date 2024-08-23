const faveQuotes = {
    //Favourite quotes in no particular order
    breakingBad: [
        "Just because you shot Jesse James, don't make you Jesse James",
        "Say my name",
        "I am the one who knocks",
    ],

    cobraKai: [
        "No be there",
        "It's not lame ass karate, its cobra kai!",
        "I may not always win, but I never back out of a fight",
    ],

    brooklynNineNine: [
        "Noice",
        "You took the wrong fluffy boy!",
        "Toit",
    ],

    breakingBadQuotes() {
        let randomQuote = Math.floor(Math.random() * faveQuotes.breakingBad.length);
        console.log(faveQuotes.breakingBad[randomQuote]);
    },      

    cobraKaiQuotes() {
        let randomQuote = Math.floor(Math.random() * faveQuotes.cobraKai.length);
        console.log(faveQuotes.cobraKai[randomQuote]);
    },

    brooklynNineNineQuotes() {
        let randomQuote = Math.floor(Math.random() * faveQuotes.brooklynNineNine.length);
        console.log(faveQuotes.brooklynNineNine[randomQuote]);
    }

};

console.log("Today's Breaking Bad quote is: ") + faveQuotes.breakingBadQuotes();

console.log("Today's Cobra Kai quote is: ") + faveQuotes.cobraKaiQuotes();

console.log("Today's Brooklyn Nine Nine quote is: ") + faveQuotes.brooklynNineNineQuotes();