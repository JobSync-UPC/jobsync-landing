const titleKeyword = document.getElementById("title-keyword");
const words = ["Efficient", "Powerful", "Affordable"];
const typingSpeedInMs = 200;
let wordIndex = 0;
let letterIndex = 0;

const goForward = () => {
  const word = words[wordIndex];
  titleKeyword.textContent = word.substring(0, letterIndex + 1);
  ++letterIndex;

  if (letterIndex === word.length) {
    typeBehavior = goBackwards;
  }
}

const goBackwards = () => {
  const word = words[wordIndex];
  titleKeyword.textContent = word.substring(0, letterIndex - 1);
  --letterIndex;
  
  if (letterIndex === 0) {
    typeBehavior = goForward;
    ++wordIndex;
    if (wordIndex === words.length) wordIndex = 0;
  }
}

let typeBehavior = goForward;
const typeWritingEffect = setInterval(() => typeBehavior(), typingSpeedInMs);
window.addEventListener("beforeunload", () => clearInterval(typeWritingEffect));