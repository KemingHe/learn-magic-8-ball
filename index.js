const messageList = ["Yes", "No", "Maybe", "Haha, Ask Again!"];
function newMessage() {
  const lSize = messageList.length;
  const newIdx = Math.floor(Math.random()*lSize);
  return messageList[newIdx]
}

function updateDisplay() {
  const oldDisplay = document.getElementById("eight");
  oldDisplay.textContent = "";

  const newDisplay = document.getElementById("answer");
  newDisplay.textContent = newMessage();

  document.getElementById("question-input").value = "";
}

document.getElementById("shake-button").addEventListener("click", updateDisplay);

