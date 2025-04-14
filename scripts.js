let textInput = document.querySelector('textarea');
let charCount = document.querySelector('.char-count');
let wordCount = document.querySelector('.word-count');
let lineCount = document.querySelector('.line-count');
let paraCount = document.querySelector('.para-count');
let calcBtn = document.querySelector('.calc-btn');
let dltBtn = document.querySelector('.delete-btn');

window.addEventListener('DOMContentLoaded', () => {
    textInput.value = localStorage.getItem('text-input') || "";
    countsChar(); 
    countsWord();
    countsLine();
    countsPara();
});

textInput.addEventListener('input', () => {
    localStorage.setItem('text-input', textInput.value);
});

calcBtn.addEventListener('click', () => {
    countsChar();
    countsWord();
    countsLine();
    countsPara();
});

dltBtn.addEventListener('click', () => {
    textInput.value = "";
    localStorage.removeItem('text-input'); 
    countsChar();
    countsWord();
    countsLine();
    countsPara();
});

const countsChar = () => {
    const count = textInput.value.length;
    charCount.textContent = count;
};

const countsWord = () => {
    const count = textInput.value.trim().split(/\s+/).filter(word => word.length > 0).length;
    wordCount.textContent = count;
};

const countsLine = () => {
    const count = textInput.value.trim().split(/[.?!]\s*/).filter(s => s.trim().length > 0).length;
    lineCount.textContent = count;
};

const countsPara = () => {
    const count = textInput.value.trim().split("\n").filter(para => para.length > 0).length;
    paraCount.textContent = count;
};

/*
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat nobis eaque sunt ipsam! 
Sequi facere ipsam eveniet, eum dignissimos vitae sit animi quibusdam autem rem odit voluptatum ad cupiditate aspernatur.
*/