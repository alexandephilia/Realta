const words = [
    { text: "BUSINESS" },
    { text: "INNOVATION" },
    { text: "TECHNOLOGY" },
    { text: "GROWTH" },
    { text: "STRATEGY" },
    { text: "LEADERSHIP" }
];
let currentIndex = 0;
const container = document.querySelector('.dynamic-text-container');

function createLetterSpans(word) {
    return word.split('').map((letter, index, array) => {
        const percentage = (index / (array.length - 1)) * 100;
        return `<span class="letter" style="background: linear-gradient(90deg, #7209d4, #2832d4 33%, #00a5b2); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-size: ${array.length * 100}% 100%; background-position: ${percentage}% 0;">${letter}</span>`;
    }).join('');
}

function animateLetters(inOrOut) {
    const letters = container.querySelectorAll('.letter');
    letters.forEach((letter, index) => {
        setTimeout(() => {
            letter.classList.toggle(inOrOut === 'in' ? 'active' : 'fade-out');
        }, index * 50);
    });
    return (letters.length + 1) * 50; // Total animation time
}

async function changeWord() {
    if (container.children.length) {
        await new Promise(resolve => setTimeout(resolve, animateLetters('out')));
    }

    const nextWord = words[currentIndex];
    container.innerHTML = createLetterSpans(nextWord.text);

    await new Promise(resolve => setTimeout(resolve, 10)); // Small delay for DOM update
    animateLetters('in');

    currentIndex = (currentIndex + 1) % words.length;
}

changeWord(); // Initial call
setInterval(changeWord, 4000);