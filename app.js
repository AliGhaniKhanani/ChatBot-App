var list = document.getElementById("list");

function sendMessage() {
  if (event.keyCode === 13) {
    var value = event.target.value;
    list.innerHTML += "<li class = 'right-side'>" + value;
    event.target.value = "";
    if (["hi", "hello", "salam"].indexOf(value.toLowerCase()) !== -1) {
      setTimeout(function () {
        list.innerHTML +=
          "<li class='left-side'> Hello! This Is Jinnah Medical Help Desk. How Can I Help You?</li>";
      }, 2000);
    } else if (
      ["patient","admitting"].some((word) => value.toLowerCase().includes(word))) {
      setTimeout(function () {
        list.innerHTML +=
          "<li class='left-side'>The process for admitting a patient involves an initial assessment, completing necessary documentation, signing consent forms, assigning a room, and handling payment or insurance</li>";
      }, 2000);
    } else if (
      ["i", "services", "visiting", "appointment"].some((word) =>
        value.toLowerCase().includes(word)
      )
    ) {
      setTimeout(function () {
        list.innerHTML +=
          "<li class='left-side'> The visiting hours are from Moring 8AM To 6PM.</li>";
      }, 2000);
    } else {
      setTimeout(function () {
        list.innerHTML +=
          "<li class='left-side'> Mai apki Baat Samj Nahi Saka </li>";
      }, 2000);
    }

    // Scroll to the bottom of the chat
    var chatMessages = document.querySelector(".chat-messages");
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
}
