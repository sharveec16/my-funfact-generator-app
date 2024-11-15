// script.js
const facts = [
    "Travel enthusiast who loves visiting new places and experiencing different cultures.",
    "Loves exploring and discovering hidden gems around the world.",
    "Enjoys trying different cuisines and learning about the culinary arts from various cultures."
];

function displayFact() {
    const fact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById('factText').innerText = fact;
}
