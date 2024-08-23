const faveQuotes = {
    //Favourite quotes in no particular order
    breakingBad: [
        "'Just because you shot Jesse James, don't make you Jesse James' - Mike Ehrmantraut",
        "'Say my name' - Walter White",
        "'I am the one who knocks' - Walter White",
        "'Stay out of my territory' - Walter White",
        "'Yeah, Mr White! Yeah science!' - Jesse Pinkman",
        "'I watched Jane Die' - Walter White",
        "'If you don't know who I am, then maybe your best course would be to tread lightly' - Walter White",
        "'No more half measures' - Mike Ehrmantraut",
        "'I am not in the meth business, I am in the empire business' - Walter White",
        "'It's easy money. Until we catch you!' - Hank Schrader",
    ],

    cobraKai: [
        "'No be there' - Daniel Larusso",
        "'It's not lame ass karate, its cobra kai!' - Miguel Diaz",
        "'I may not always win, but I never back out of a fight' - Johnny Lawrence",
        "'Whats an uber' - Johnny Lawrence",
        "'You want something, you'll have to crawl across the floor. Use your damn teeth if you have to' - Johnny Lawrence",
        "'Put good into the world and good will come back to you' - Chozen Toguchi",
        "'Strike First, Strike Hard, No Mercy'", 
        "'QUIET!' - Johnny Lawrence",
        "'YES SENSEI'",
        "'If I'm extra hard on you, it's only because you have the potential to be better than I ever was' - Johnny Lawrence",
    ],

    brooklynNineNine: [
        "'Noice' - Jake Peralta",
        "'You took the wrong fluffy boy!' - Captain Raymond Holt",
        "'Toit' - Jake Peralta",
        "'Yippee kayak other buckets!' - Charles Boyle",
        "'BINGPOT!' - Captain Raymond Holt",
        "'Wuntch time is over, boom! Had it both ways! No regrets' - Captain Raymond Holt",
        "'BONE!?' - Captain Raymond Holt",
        "'I once sold a man a fake Pekingese. Twas a cat' - Doug Judy",
        "'Like Yeast!' - Charles Boyle",
        "'NINE NINE!!' - Terry Jeffords",

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