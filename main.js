const faveQuotes = {
    //Favourite quotes in no particular order
    breakingBad: [
        "Just because you shot Jesse James, don't make you Jesse James",
        "Say my name",
        "I am the one who knocks",
        "Stay out of my territory",
        "Yeah, Mr White! Yeah science!",
        "I watched Jane Die",
        "If you don't know who I am, then maybe your best course would be to tread lightly",
        "No more half measures",
        "I am not in the meth business, I am in the empire business",
        "It's easy money. Until we catch you!",
    ],

    cobraKai: [
        "No be there",
        "It's not lame ass karate, its cobra kai!",
        "I may not always win, but I never back out of a fight",
        "Whats an uber",
        "You want something, you'll have to crawl across the floor. Use your damn teeth if you have to",
        "Put good into the world and good will come back to you",
        "Strike First, Strike Hard, No Mercy", 
        "QUIET!",
        "YES SENSEI",
        "If I'm extra hard on you, it's only because you have the potential to be better than I ever was",
    ],

    brooklynNineNine: [
        "Noice",
        "You took the wrong fluffy boy!",
        "Toit",
        "Yippee kayak other buckets!",
        "BINGPOT!",
        "Wuntch time is over, boom! Had it both ways! No regrets",
        "BONE!?",
        "I once sold a man a fake Pekingese. Twas a cat",
        "Like Yeast!",
        "NINE NINE!!",

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