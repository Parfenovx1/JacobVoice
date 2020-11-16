const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

const greetings = ['Hi', 'Hello', 'Moyo pochitenie', 'leave me alone']

const greetingsMod = ['Im good you asshole', 'Doing well, what about you?', 'leave me alone']

const weather = ['weather is good', 'it is rainy outside', 'it is sunny today']

const answers = ['my  name is Jacob']
const SpeechRecognition =
  window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onstart = () => {
  console.log("voice is activated, you can use microphone");
};

recognition.onresult = (event) => {
  const  current = event.resultIndex;

  const transcript = event.results[current][0].transcript;
  
  readOutLoud(transcript)
};


btn.addEventListener('click', () => {
    recognition.start();
})


function readOutLoud(message){
  const speech = new SpeechSynthesisUtterance();

  speech.text = 'repeat please';

  if(message.includes('Hello', 'Hi')){
    const finalText = greetings[Math.floor(Math.random() * greetings.length)] 
    content.textContent = finalText;
    speech.text = finalText
  }

  if(message.includes('How are you')){
    const finalText = greetingsMod[Math.floor(Math.random() * greetingsMod.length)]
    content.textContent = finalText;
    speech.text = finalText;
  }
  
  if(message.includes('weather')){
    const finalText = weather[Math.floor(Math.random() * weather.length)]
    content.textContent = finalText;
    speech.text = finalText;
  }

  if(message.includes('name')){
    const finalText = answers[Math.floor(Math.random() * answers.length)]
    content.textContent = finalText;
    speech.text = finalText;
  }
  speech.volume = 1.5;
  speech.rate = 0.7;
  speech.pitch = 1;

 

  window.speechSynthesis.speak(speech);
}