const state = {
  linkedinUser: [],
};

let pendingRequests = parseInt(localStorage.getItem("pendingRequests")) || 0;

function getContacts() {
  fetch("https://dummy-apis.netlify.app/api/contact-suggestions?count=8")
    .then((response) => response.json())
    .then((jsonData) => {
      state.linkedinUser = jsonData;
      renderContacts();
    });
}

function getNewSuggestion() {
  return fetch("https://dummy-apis.netlify.app/api/contact-suggestions?count=1")
    .then((response) => response.json())
    .then((jsonData) => jsonData[0]);
}

function createCard(contact) {
  const card = document.createElement("div");
  card.classList.add("contact-card");

  const closeButton = document.createElement("button");
  closeButton.innerHTML = "&#10006;";
  closeButton.classList.add("close-button");
  closeButton.addEventListener("click", () => removeContact(contact));

  const connectButton = document.createElement("button");
  connectButton.classList.add("connect-btn");
  connectButton.innerText = "Connect";
  connectButton.addEventListener("click", () => {
    if (connectButton.innerText === "Connect") {
      connectButton.innerText = "Pending";
      pendingRequests += 1;
    } else {
      connectButton.innerText = "Connect";
      pendingRequests = Math.max(0, pendingRequests - 1);
    }

    localStorage.setItem("pendingRequests", pendingRequests);
    updatePendingRequests(pendingRequests);
  });

  const title = document.createElement("p");
  const name = document.createElement("p");
  const profession = document.createElement("p");
  const pic = document.createElement("img");
  const mutualConnections = document.createElement("p");

  const backgroundContainer = document.createElement("div");
  backgroundContainer.classList.add("background-container");
  backgroundContainer.style.backgroundImage = `url('${contact.backgroundImage}')`;

  const nameTitleContainer = document.createElement("div");
  nameTitleContainer.classList.add("name-title-container");

  title.innerText = contact.name.title;
  profession.innerText = contact.title;
  profession.style.fontStyle = "italic";
  name.innerText = `${contact.name.first} ${contact.name.last}`;
  name.style.fontWeight = "bold";
  pic.src = contact.picture;
  pic.alt = "Profile Picture";
  mutualConnections.innerText = `Mutual Connections: ${contact.mutualConnections}`;

  nameTitleContainer.appendChild(pic);
  nameTitleContainer.appendChild(title);
  nameTitleContainer.appendChild(name);
  nameTitleContainer.appendChild(profession);

  card.appendChild(closeButton);
  card.appendChild(backgroundContainer);
  card.appendChild(nameTitleContainer);
  card.appendChild(mutualConnections);
  card.appendChild(connectButton);

  return card;
}

function updatePendingRequests(count) {
  const pendingContainer = document.querySelector(".pending-container");
  if (pendingContainer) {
    pendingContainer.innerText = `Pending Requests: ${count}`;
  }
}

function renderContacts() {
  const main = document.querySelector(".main");

  const pendingContainer = document.createElement("div");
  pendingContainer.classList.add("pending-container");
  pendingContainer.innerText = `Pending Requests: ${pendingRequests}`;

  const body = document.querySelector("body");
  const pendingWrapper = document.createElement("div");
  pendingWrapper.classList.add("pending-wrapper");

  pendingWrapper.appendChild(pendingContainer);

  for (let contact of state.linkedinUser) {
    const card = createCard(contact);
    main.appendChild(card);
  }

  body.appendChild(pendingWrapper);
}

function removeContact(contact) {
  state.linkedinUser = state.linkedinUser.filter((c) => c !== contact);
  getNewSuggestion().then((newContact) => {
    state.linkedinUser.push(newContact);

    document.querySelector(".main").innerHTML = "";
    renderContacts();
  });
}

getContacts();
