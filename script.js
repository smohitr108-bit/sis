// Change this code if you want a different unlock password.
const SECRET_CODE = "shraddha";

const lockScreen = document.getElementById("lockScreen");
const giftContent = document.getElementById("giftContent");
const unlockForm = document.getElementById("unlockForm");
const passcode = document.getElementById("passcode");
const errorMessage = document.getElementById("errorMessage");
const relockButton = document.getElementById("relockButton");
const surpriseButton = document.getElementById("surpriseButton");
const surpriseTitle = document.getElementById("surpriseTitle");
const surpriseMessage = document.getElementById("surpriseMessage");
const letterCopy = document.getElementById("letterCopy");
const letterModal = document.getElementById("letterModal");
const letterEditor = document.getElementById("letterEditor");
const toast = document.getElementById("toast");

const messages = [
  ["A little reminder ✨", "You don't need to be perfect to make a difference. Being your own kind of wonderful is more than enough."],
  ["For the days you forget 🌙", "You are valued more than you know. Keep moving at your own pace and give yourself the same kindness you give others."],
  ["A note from the universe 💫", "Even small steps count. Keep learning, laughing, dreaming, and becoming the person you want to be."],
  ["Never forget this 💜", "You deserve happiness, peace, good friends, and people who celebrate the real you."],
  ["Keep your light ✨", "Your story is still unfolding. There are so many good things ahead, so keep believing in yourself."]
];
let messageIndex = 0;
let toastTimer;

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
}

if (unlockForm && passcode && lockScreen && giftContent && errorMessage) {
  unlockForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (passcode.value.trim().toLowerCase() === SECRET_CODE) {
      lockScreen.classList.add("hidden");
      giftContent.classList.remove("hidden");
      errorMessage.textContent = "";
      window.scrollTo({ top: 0, behavior: "smooth" });
      showToast("Welcome, sis Shraddha 💜");
    } else {
      errorMessage.textContent = "That code isn't quite right. Try again ✨";
      passcode.select();
    }
  });
}

if (relockButton) {
  relockButton.addEventListener("click", () => {
    giftContent.classList.add("hidden");
    lockScreen.classList.remove("hidden");
    passcode.value = "";
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

if (surpriseButton) {
  surpriseButton.addEventListener("click", () => {
    messageIndex = (messageIndex + 1) % messages.length;
    surpriseTitle.textContent = messages[messageIndex][0];
    surpriseMessage.textContent = messages[messageIndex][1];
  });
}

const editLetter = document.getElementById("editLetter");
const closeModal = document.getElementById("closeModal");
const saveLetter = document.getElementById("saveLetter");

if (editLetter && letterEditor && letterCopy && letterModal) {
  editLetter.addEventListener("click", () => {
    letterEditor.value = [...letterCopy.querySelectorAll("p")].map(p => p.textContent.trim()).join("\n\n");
    letterModal.classList.remove("hidden");
    letterEditor.focus();
  });
}
if (closeModal && letterModal) closeModal.addEventListener("click", () => letterModal.classList.add("hidden"));
if (letterModal) {
  letterModal.addEventListener("click", event => {
    if (event.target === letterModal) letterModal.classList.add("hidden");
  });
}
if (saveLetter && letterEditor && letterCopy && letterModal) {
  saveLetter.addEventListener("click", () => {
    const paragraphs = letterEditor.value.split(/\n\s*\n/).map(s => s.trim()).filter(Boolean);
    letterCopy.replaceChildren(...paragraphs.map(text => {
      const p = document.createElement("p");
      p.textContent = text;
      return p;
    }));
    letterModal.classList.add("hidden");
    showToast("Your note has been updated ✦");
  });
}

const stars = document.getElementById("stars");
if (stars) {
  for (let i = 0; i < 45; i++) {
    const star = document.createElement("span");
    star.textContent = Math.random() > 0.5 ? "✦" : "·";
    star.style.position = "absolute";
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.color = Math.random() > 0.5 ? "#d9ceff" : "#fff";
    star.style.opacity = String(0.2 + Math.random() * 0.6);
    star.style.fontSize = `${7 + Math.random() * 9}px`;
    star.style.animationDuration = `${2 + Math.random() * 4}s`;
    stars.appendChild(star);
  }
}
