const spanReaction = document.querySelector('.reaction-score');

const spanMemory = document.querySelector('.memory-score');

const spanVerbal = document.querySelector('.verbal-score');

const spanVisual = document.querySelector('.visual-score');

const spansArray = [
    spanReaction,
    spanMemory,
    spanVerbal,
    spanVisual
];


fetch('/data.json').then((response) => response.json()).then((json) => {
    for(let x = 0; x < json.length; x++){
        spansArray[x].textContent = json[x].score;
    }
}
);




