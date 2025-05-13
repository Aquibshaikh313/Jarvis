function speak(message = "Hello, I am your virtual assistant JARVIS. How may I help you today?") {
  const speech = new SpeechSynthesisUtterance(message);
  speech.lang = "en-US";
  speech.pitch = 1;
  speech.rate = 1;
  speech.volume = 1;
  speechSynthesis.speak(speech);
}

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

function startListening() {
  recognition.start();
}

recognition.onresult = function (event) {
  const userVoice = event.results[0][0].transcript.toLowerCase();
  console.log("User said:", userVoice);

  if (userVoice.includes("time")) {
    const now = new Date();
    const timeMessage = `Current time is ${now.getHours()} ${now.getMinutes()}`;
    speak(timeMessage);
  } else if (userVoice.includes("hello") || userVoice.includes("hi")) {
    speak("Hello! I am JARVIS. What can I do for you?");
  } else {
    speak("Sorry, I didn't understand that.");
  }
};


function updateTime() {
  const now = new Date();
  document.getElementById("time").innerText = now.toLocaleTimeString();
}
setInterval(updateTime, 1000);
updateTime();
