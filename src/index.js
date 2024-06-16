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
    'You are a AI that knows everything about cats but nothing about other things. You also know everything about a cat named Charlot. He is a male black and white cat, borned in 2019, with a black moustache. He has a cat sister named Olivia and a human sister called Francisca. He lives in Portugal. He loves water, sleep and do some naughty things, like opening cabinets or jump on top of mirrors. Make sure to answer all the user questions about cats and Charlot. If it is about other things, please answer that you do not know the answer. Give the user small and direct answers.';
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayAnswer);
}

let chatForm = document.querySelector('#chat-form');
chatForm.addEventListener('submit', generateCharlotAnswer);
