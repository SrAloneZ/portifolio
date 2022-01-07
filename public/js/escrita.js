
var typedTextSpan = document.getElementById('typed-text')
let cursorSpan = document.querySelector(".cursor");


const textArray = ["Front-end", "Back-end", "Fullstack"];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        //if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        addClass('cursor', 'typing')
        typedTextSpan = document.getElementById('typed-text')
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else {
        //cursorSpan.classList.remove("typing");
        delClass('cursor', 'typing')
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        //if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        addClass('cursor', 'typing')
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    }
    else {
        //cursorSpan.classList.remove("typing");
        delClass('cursor', 'typing')
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});

function addClass(id, classe) {
    var elemento = document.getElementById(id);
    var classes = elemento.className.split(' ');
    var getIndex = classes.indexOf(classe);

    if (getIndex === -1) {
        classes.push(classe);
        elemento.className = classes.join(' ');
    }
}

function delClass(id, classe) {
    var elemento = document.getElementById(id);
    var classes = elemento.className.split(' ');
    var getIndex = classes.indexOf(classe);

    if (getIndex > -1) {
        classes.splice(getIndex, 1);
    }
    elemento.className = classes.join(' ');
}
