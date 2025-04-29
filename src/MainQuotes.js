let btn = document.getElementById('btn');
let output = document.getElementById('output');
let cards = [
"'Premature optimization is the root of all evil.' - Donald Knuth",
"'Any fool can use a computer. Many do.' - Ted Nelson",
"'Software is like entropy. It is difficult to grasp, weighs nothing, and obeys the Second Law of Thermodynamics; i.e., it always increases.' - Norman Augustine",
"'The best thing about a boolean is even if you are wrong, you are only off by a bit.' - Anonymous",
"'In mathematics, you don't understand things. You just get used to them.' - Johann von Neumann",
"'There are only two kinds of programming languages: those people always bitch about and those nobody uses.' - Bjarne Stroustrup",
"'Walking on water and developing software from a specification are easy if both are frozen.' - Edward V. Berard",
"'To err is human, but to really foul things up you need a computer.' - Paul Ehrlich",
"'Debugging is like trying to find a needle in a haystack, while blindfolded and riding a horse.' - Anonymous",
"'Mathematics is the language in which God has written the universe.' - Galileo Galilei",
"'The only way to learn mathematics is to do mathematics.' - Paul Halmos",
"'The good Christian should beware of mathematicians and all those who make empty prophecies. The danger already exists that mathematicians have made a covenant with the devil to darken the spirit and confine man in the bonds of Hell.' - Saint Augustine",
"'Pure mathematics is, in its way, the poetry of logical ideas.' - Albert Einstein",
"'Mathematics is the art of giving the same name to different things.' - Henri Poincaré",
"'A mathematician is a device for turning coffee into theorems.' - Paul Erdős",
"'God created the integers; all else is the work of man.' - Leopold Kronecker",
"'The only thing that interferes with my learning is my education.' - Albert Einstein",
"'Computer science is no more about computers than astronomy is about telescopes.' - Edsger Dijkstra",
"'Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding.' - William Paul Thurston",
"'Mathematics is the most beautiful and most powerful creation of the human spirit.' - Stefan Banach"

];

let shuffledCards = cards.sort(function() {return Math.random() - 0.5;});
let i = 0;

btn.addEventListener('click', function()
{
    if(i<cards.length){
        output.innerHTML = shuffledCards[i];
        i++;
    }
    else
        output.innerHTML = "koniec cytatów";
});

