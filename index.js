const buttonEl = document.getElementById("btn");
const emojiNameEl = document.getElementById("emojiName");
const apiKey = "655b6d4bdcba865728584c6b14d092bc15561e46";
const url = "https://emoji-api.com/emojis";

const emoji = [];

async function getEmoji() {
  let response = await fetch(`${url}?access_key=${apiKey}`);
  const data = await response.json();

  for (let i = 0; i < 1500; i++) {
    emoji.push({
      emojiName: data[i].character,
      emojiCode: data[i].unicodeName,
    });
  }
}
 getEmoji();

buttonEl.addEventListener("click", () => {
    const randomNum = Math.floor(Math.random() * emoji.length)
    buttonEl.innerText = emoji[randomNum].emojiName
    emojiNameEl.innerText = emoji[randomNum].emojiCode
});
