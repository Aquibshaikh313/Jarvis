function speak(
  message = "Hello, I am your virtual assistant JARVIS. How may I help you today?"
) {
  //converts text into speech
  const speech = new SpeechSynthesisUtterance(message); //creates the speech object.
  speech.lang = "en-US";
  speech.pitch = 1;
  speech.rate = 1;
  speech.volume = 1;
  speechSynthesis.speak(speech); //speaks the message out loud
}

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
// Ensures browser compatibility for speech recognition API
// webkitSpeechRecognition is for Chrome
// By using this pattern, the code can work seamlessly across different browsers

// that support either version of the API,
//  allowing developers to use SpeechRecognition in the rest
// of their code without worrying about browser-specific differences.

const recognition = new SpeechRecognition(); //listens from user through microphone
recognition.lang = "en-US"; //lang is set
recognition.interimResults = false; //means engine will provide final result not partial or in-progress.
recognition.maxAlternatives = 1; //returns only the best match for the spoken words.

function startListening() {
  //function is created to start listening the input from user
  recognition.start(); //just after clicking start voice recognition
}

recognition.onresult = function (event) {
  const userVoice = event.results[0][0].transcript.toLowerCase();
  console.log("User said:", userVoice);

  //event.results[0][0] → Get the first possible match for what you said
  //.transcript → Get the actual text of what you said
  //.toLowerCase() → Convert it to small letters for easy understanding

  if (userVoice.includes("time")) {
    const now = new Date();
    const timeMessage = `Current time is ${now.getHours()} ${now.getMinutes()}`;
    speak(timeMessage);
  } else if (userVoice.includes("hello") || userVoice.includes("hi")) {
    speak("Hello sir! I am JARVIS. What can I do for you?");
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
