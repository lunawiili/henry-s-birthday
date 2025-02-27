const messages = [
    "My little moon, You always give me a good feeling. Like the moon in a dark sky, you shine and make everything feel a little softer, a little warmer. I don’t need anything else when you’re here.",
	
	
    "You have no idea how important you are to me, and I have no idea how To explain it to you.",
	
	
    "It’s hard to find the right words to say how much you mean to me. Just know that there’s always a hug waiting for you here, a place where you can come and find comfort. I promise to do my best to protect you and take care of you, and I’ll always try to bring a smile to your face.",
	
	
    "No matter where you are, no matter how far, you will always have a place with me. You are my favorite kind of forever."
];

let index = 0;

function start() {
    document.querySelector('.welcome').classList.add('hidden');
    document.querySelector('.container').classList.remove('hidden');
    document.getElementById("message").innerText = messages[index];
    document.getElementById("bg-music").play();
}

function nextMessage() {
    if (index < messages.length - 1) {
        index++;
        document.getElementById("message").innerText = messages[index];
    } else {
        document.querySelector('.container').classList.add('hidden');
        document.querySelector('.end').classList.remove('hidden');
    }
}

function prevMessage() {
    if (index > 0) {
        index--;
        document.getElementById("message").innerText = messages[index];
    }
}

function openLetter() {
    const letter = document.querySelector('.letter');
    letter.classList.add('open');
    letter.innerHTML = "Happy birthday to the most beautiful, intelligent, loving, sweet, hot, caring, smart, funny, pretty, talented, supportive, incredible, amazing, and extraordinary person I’ve ever met.";
}
