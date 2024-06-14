function displayAnswer(response) {
  new Typewriter('#answer', {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
  });
}

function generateCharlotAnswer(event) {
  event.preventDefault();

  let textForm = document.querySelector('#text-form');

  let apiKey = '052t6596f0376314513oae46624edf8b';
  let prompt = `User question about cats: ${textForm.value}`;
  let context =
    'You are a AI that knows everything about cats but nothing about other things. Make sure to answer all the user questions about cats. If it is about other things, please answer that you do not know the answer.';
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayAnswer);
}

let chatForm = document.querySelector('#chat-form');
chatForm.addEventListener('submit', generateCharlotAnswer);
