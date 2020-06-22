let endpoint = "https://api.github.com/users/renvelvet";
let endRepo = "https://api.github.com/users/renvelvet/repos";
let options = {
  method: "GET",
  //   headers: {
  //     "Content-type": "application/json",
  //   },
};

let name = document.getElementById("name");
let image = document.querySelector("img");
let userName = document.getElementById("username");
let repo = document.getElementById("repo");
let following = document.getElementById("following");
let followers = document.getElementById("followers");

async function getProfile() {
  try {
    let response = await fetch(endpoint, options);
    let results = await response.json();
    console.log(results);
    // profile
    name.innerHTML = `${results.name}'s Profile`;
    image.setAttribute("src", results.avatar_url);
    userName.innerHTML = `User ID: ${results.login}`;

    // repo-following-followers
    repo.setAttribute("value", "Repository");

    // results.forEach((result) => {
    //   const li = document.createElement("li");
    //   const text = document.createTextNode(result.name);

    //   li.appendChild(text);
    //   ul.appendChild(li);
    // });
    // h3.innerHTML = `Jumlah data: ${results.length}`;
  } catch (error) {
    console.log(error);
  }
}

getProfile();
