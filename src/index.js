function generateCharlotAnswer(event) {
  event.preventDefault();

  new Typewriter('#answer', {
    strings: 'Meow meow meow meow',
    autoStart: true,
    delay: 1,
  });
}

let chatForm = document.querySelector('#chat-form');
chatForm.addEventListener('submit', generateCharlotAnswer);
