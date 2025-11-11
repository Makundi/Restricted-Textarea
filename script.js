const textArea = document.getElementById("message");
const counter = document.getElementById("counter");
const MAX_LENGTH = 250;



textArea.addEventListener("input", () => {

    if (textArea.value.length > MAX_LENGTH) {
        textArea.value = textArea.value.slice(0, MAX_LENGTH);
    }

    const currentLength = textArea.value.length;
    counter.textContent = `${currentLength}/${MAX_LENGTH}`;

    const isMax = currentLength === MAX_LENGTH;
    const color = isMax ? "red" : "black";

    textArea.style.borderColor = color;
    counter.style.color = color;
});