/* Typing Animation */
const text = "Hey Jasmeen💕 yeh chhota sa surprise sirf tumhare liye hai. Tumhari ek muskaan meri saari thakaan chura leti hai, aur tumhari ek nazar mera din bana deti hai. Kuch ehsaas lafzon mein bayaan nahi hote, par phir bhi dil har baar tumhara naam le leta hai.  Tum ho toh khamoshi bhi pyaari lagti hai, aur tum na ho toh bheed mein bhi tanhaai si mehsoos hoti hai.  Shayad isiliye kehte hain, kuch rishte likhe nahi jaate… mehsoos kiye jaate hain.  Tum ho toh har pal thoda zyada pyaara, har lamha thoda zyada khaas, aur meri duniya thodi aur khoobsurat lagti hai 🌹";
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


