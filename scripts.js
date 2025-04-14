const textInput = document.querySelector('textarea');
let charCount = document.querySelector('.char-count');
let wordCount = document.querySelector('.word-count');
let lineCount = document.querySelector('.line-count');
let paraCount = document.querySelector('.para-count');
calcBtn = document.querySelector('.calc-btn');
dltBtn = document.querySelector('.delete-btn');

calcBtn.addEventListener('click', () => {
        countsChar();
        countsWord();
        countsLine();
        countsPara();
});

dltBtn.addEventListener('click', () => {
    textInput.value = "";
});

const countsChar = () => {
    const count = textInput.value.length;
    charCount.textContent = count;
};

const countsWord = () => {
    const count = textInput.value.trim().split(/\s+/).length;
    wordCount.textContent = count;
};

const countsLine = () => {
    const count = textInput.value.trim().split(/[.?!]\s*/).filter(s => s.trim().length > 0).length;
    lineCount.textContent = count;
};

const countsPara = () => {
    const count = textInput.value.trim().split("\n").length;
    paraCount.textContent = count;
};

// console.log(text.length); //char
// console.log(text.trim().split(/\s+/).length); //words
// console.log(text.trim().split(/[.?!]\s*/).filter(s => s.trim().length > 0).length); //sentences
// console.log(text.trim().split("\n").length); //paragraphs
/*
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem voluptas dolores atque iste sit deserunt asperiores. 
Magni consequatur eius rem autem deserunt aspernatur, officia laudantium iure fugit voluptate tenetur et?
*/