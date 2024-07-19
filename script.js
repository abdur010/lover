// Play the background music when user interacts with the document
document.body.addEventListener('click', function() {
    var backgroundMusic = document.getElementById('backgroundMusic');
    if (backgroundMusic) {
        backgroundMusic.play();
    }
});

// Add dynamic animations for the Valentine's Day hearts
const urlParams = new URLSearchParams(window.location.search);
const valentine = urlParams.get("valentine");
if (valentine) {
  document.getElementById("valentine").innerText = valentine;
}

const randomInt = (n) => Math.floor(Math.random() * n);
let numberOfHearts = 45;
while (numberOfHearts--) {
  var heartDiv = document.createElement("div");
  heartDiv.classList.add("heart");
  heartDiv.style = `animation: spin ${randomInt(14) + 6}s ease-in infinite;
                      top: ${randomInt(40)}vh;
                      left: ${randomInt(100)}vw;
                      font-size: ${randomInt(40) + 20}px;
                      color: ${["#d00", "#e66", "#fcc"][randomInt(3)]};`;
  heartDiv.textContent = ["\u2661", "\u2665"][randomInt(2)];
  document.getElementById("falling-hearts").appendChild(heartDiv);
}
