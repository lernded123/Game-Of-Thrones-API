document.querySelector("button").addEventListener("click", getCharacter);

function getCharacter() {
  const choice = document.querySelector("input").value;
  console.log(choice);

  fetch(`https://thronesapi.com/api/v2/Characters/${choice}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.querySelector("h2").innerText = data.fullName;
      document.querySelector(".title").innerText = data.title;
      document.querySelector(".family").innerText = data.family;
      document.querySelector("img").src = data.imageUrl;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
