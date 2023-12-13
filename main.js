
const Quotes = [
    {'author': 'Oscar Wilde', 
     'quote': 'Be yourself; everyone else is already taken.'
    },
    {'author': 'Ayman Elhessy', 
     'quote': 'we need to travel right now anyware '
    },
    {'author': 'Marcus Tullius Cicero', 
     'quote': 'A room without books is like a body without a soul..'
    },
    {'author': 'Bernard M. Baruch', 
     'quote': 'Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind.'
    },
    {'author': 'Marilyn Monroe', 
     'quote': 'I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best.'
    },
    {'author': 'Frank Zappa', 
     'quote': 'So many books, so little time'
    },
];

function generateQuote(){
    const random = Number.parseInt(Math.random()*Quotes.length + 1);
    document.querySelector('#quoteOutput').textContent = `\"${Quotes[random].quote}\"`;
    document.querySelector('#authorOutput').textContent = `--${Quotes[random].author}`;
    
}

/////////////////// another solution ////////////////////////////

// const quoteContainer = document.querySelector('.quote-container');
// const quote = document.querySelector('.quote');
// const author = document.querySelector('.author');
// const newQuoteButton = document.querySelector('.new-quote');

// const quotes = [
//  { quote: 'The purpose of our lives is to be happy.', author: 'Dalai Lama' },
//  { quote: 'Life is what happens when you’re busy making other plans.', author: 'John Lennon' },
//  { quote: 'money money money money.', author: 'ayman' },
//  { quote: 'wealth wealth welath .', author: 'omar' },
//  { quote: 'mosh 7elwamosh 7elwamosh 7elwamosh 7elwa.', author: '3ami' },

// ];

// function displayQuote() {
//  const randomIndex = Math.floor(Math.random() * quotes.length);
//  const selectedQuote = quotes[randomIndex];
  
//  quote.textContent = selectedQuote.quote;
//  author.textContent = selectedQuote.author;
// }


// displayQuote();


// newQuoteButton.addEventListener('click', displayQuote);



///////////////////////////////////////////////////////////////