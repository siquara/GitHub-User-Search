// Axios
let btn = document.querySelector("#btn");
let div = document.querySelector("#app");

btn.onclick = function () {
  // Limpar a div
  div.innerHTML = "";
  // Criar o span
  let spanNome = document.createElement("span");
  spanNome.classList.add("text-white", "fw-bold", "ms-3");
  // Criar o nome
  let txtNome = "";
  // Recuperar o valor do input
  let github_user = document.querySelector("input[name=github_user]");
  let user = github_user.value;

  // Limpa o input
  github_user.value = "";

  axios
    .get(`https://api.github.com/users/${user}`)
    .then(function (response) {
      if (response.data.name !== null) {
        txtNome = document.createTextNode(response.data.name);

        let img = document.createElement("img");
        img.setAttribute("src", response.data.avatar_url);
        img.setAttribute("alt", response.data.name);
        img.setAttribute("width", "100px");
        img.setAttribute("height", "100px");
        div.appendChild(img);
      } else {
        txtNome = document.createTextNode("Usuário sem nome cadastrado");
      }
      // Adiciona o texto ao span
      spanNome.appendChild(txtNome);
      // Adiciona o span à div
      div.appendChild(spanNome);
    })
    .catch(function (error) {
      txtNome = document.createTextNode(
        "Não foi possível realizar a requisição"
      );
      spanNome.appendChild(txtNome);
      div.appendChild(spanNome);
    });
};
