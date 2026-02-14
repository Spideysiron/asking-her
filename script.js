/* Typing Animation */
const text = "Hey Babbbyyyy💕Sorry...I know mai thoda late ho gya, itne chhote se gift ke liye.\n Ye likhte hue mujhe pata chal rha hai ki tum kitni important ho mere liye.❤️\n Mai jab bhi ye song sunta hu mujhe tumhari hi yaad aati, i wish tum yaha hote mujhe gale lagane ke liye🫂\n I miss you everyday🙃 & I love you Forever😘\n Aur haan!! You are in my wallet and in my heart🐰";
const typingElement = document.getElementById("typingText");
let index = 0;

function typeText() {
  if (index < text.length) {
    typingElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeText, 70);
  }
}
typeText();

/* Buttons */
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const result = document.getElementById("result");

let noCount = 0;
let yesScale = 1;

const noTexts = [
  "Are you sure?🙄",
  "Really sure?🥲",
  "Dubara sochlo😏",
  "Pleaseee 💕",
  "Milo tum🤨",
  "Maan jao😏",
  "Sharam karlo🥲"
];
function moveNoButton() {
  const buttonWidth = noBtn.offsetWidth;
  const buttonHeight = noBtn.offsetHeight;

  const maxX = window.innerWidth - buttonWidth - 20;
  const maxY = window.innerHeight - buttonHeight - 20;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.position = "fixed"; // important!
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;

  noBtn.innerText = noTexts[noCount % noTexts.length];
  noCount++;

  // YES button grows 😌
  yesScale += 0.05;
  yesBtn.style.transform = `scale(${yesScale})`;
}

// function moveNoButton() {
//   // Move NO button
//   const x = Math.random() * 120 - 60;
//   const y = Math.random() * 60 - 30;
//   noBtn.style.transform = `translate(${x}px, ${y}px)`;
//   noBtn.innerText = noTexts[noCount % noTexts.length];
//   noCount++;

//   // 🔥 GROW YES BUTTON
//   yesScale += 0.1;
//   yesBtn.style.transform = `scale(${yesScale})`;
// }

/* Desktop */
noBtn.addEventListener("mouseenter", moveNoButton);

/* Mobile */
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveNoButton();
});

/* Extra safety */
noBtn.addEventListener("click", (e) => {
  e.preventDefault();
  moveNoButton();
});

yesBtn.addEventListener("click", () => {
  // Hide message, question & buttons
  document.querySelector(".message-box").style.display = "none";
  document.querySelector(".buttons").style.display = "none";
  document.querySelector(".question").style.display = "none";

  // Show result
  result.style.display = "block";

  // 🎉 Confetti Explosion
  confetti({
    particleCount: 180,
    spread: 80,
    origin: { y: 0.6 }
  });
});


