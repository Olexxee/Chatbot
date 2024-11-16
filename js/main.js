// const chat = document.getElementById("_chat");
// const jokeBtn = document.getElementById("jokeBtn");

// generatejoke();

// jokeBtn.addEventListener("click", generatejoke);

// async function generatejoke() {
//   jokeBtn.disabled = true;
//   const message = createMessageElement("Hey Olexxee tell me a joke");
//   appendMessage(message);

//   const joke = createMessageElement();
//   setElementContent(joke, '<i class="fa - solid fa - ellipsis"></i>');

//   appentMessage(joke);

//   const res = await fetch("https://icanhazdadjoke.com", {
//     headers: {
//       Accept: "application/json",
//     },
//   });

//   if (res.ok) {
//     const data = await res.json();
//     console.log(data);
//     setElementContent(joke, data.joke);
//     jokeBtn.disabled = false;
//   }
// }

// function createMessageElement(content) {
//   const element = document.createElement("div");
//   element.classList.add("message");
//   if (content) {
//     element.classList.add("response");
//     setElementContent(element, content);
//   } else {
//     element.classList.add("joke");
//   }

//   return element;
// }

// function setElementContent(element, content) {
//   element.innerHTML = content;
// }

// function appendMessage(element) {
//   chat.appendChild(element);
// }

const chat = document.getElementById("_chat");
const jokeBtn = document.getElementById("jokeBtn");

generatejoke();

jokeBtn.addEventListener("click", generatejoke);

async function generatejoke() {
  jokeBtn.disabled = true; // Disable the button temporarily
  const message = createMessageElement("Hey Robot, tell me a joke");
  appendMessage(message);

  const joke = createMessageElement();
  setElementContent(joke, '<i class="fa-solid fa-ellipsis"></i>'); // Loading dots
  appendMessage(joke);

  const res = await fetch("https://icanhazdadjoke.com", {
    headers: {
      Accept: "application/json",
    },
  });

  if (res.ok) {
    const data = await res.json();
    console.log(data);
    setElementContent(joke, data.joke); // Update the joke element with the fetched joke
    jokeBtn.disabled = false; // Re-enable the button
  }
}

function createMessageElement(content) {
  const element = document.createElement("div");
  element.classList.add("message");
  if (content) {
    element.classList.add("response");
    setElementContent(element, content);
  } else {
    element.classList.add("joke");
  }
  return element;
}

function setElementContent(element, content) {
  element.innerHTML = content;
}

function appendMessage(element) {
  chat.appendChild(element);
}
