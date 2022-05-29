//Création des variables et constantes
const task = document.querySelector("#task");
const addTask = document.querySelector(".addTask");
let list = document.querySelector(".list");
let addlist = document.querySelector(".addlist");
let liInput;

//Mise en place d'un écouteur d'évenement
addTask.addEventListener("click", function () {
  //Création de li
  let li = document.createElement("li");
  //Création d'un boutton de suppression
  let deleteButton = document.createElement("button");
  //Creation d'un bouton changement d'état de la tache
  let inprogress = document.createElement("button");
  //Création d'un boutton modification
  let changeButton = document.createElement("button");
  //Donner la valeur à li
  li.innerHTML = task.value;
  //Donner un nom au bouton inprogress
  inprogress.innerHTML = "A faire";
  //Donner un nom à deleteButton
  deleteButton.innerHTML = "Supprimer";
  //Donner un nom à changeButton
  changeButton.innerHTML = "Modifier";
  //Faire apparaitre le button supprimer
  li.appendChild(deleteButton);
  // Faire apparaitre le bouton inprogress
  li.appendChild(inprogress);
  //Faire apparaitre le bouton Modifier
  li.appendChild(changeButton);
  //Faire apparaitre l'enfant li dans le parent ul
  addlist.appendChild(li);

  //Placer un écouteur d'évenement sur deleteButton
  deleteButton.addEventListener("click", function () {
    if (confirm("Voulez vous supprimer?")) {
      li.remove();
    } else {
      false;
    }
  });

  //Placer un écouteur d'événement sur le bouton inprogress
  inprogress.addEventListener("click", function () {
    if (inprogress.innerHTML == "A faire") {
      inprogress.innerHTML = "En cours";
      li.style.color = "red";
    } else {
      inprogress.innerHTML = "A faire";
      li.style.color = "";
    }
  });

  //Placer un écouteur d'évenement sur changeButton
  changeButton.addEventListener("click", function () {
    //Suppression de l'ancienne valeur de li
    li.innerText = "";
    let liInput = document.createElement("input");
    liInput.setAttribute("type", "text");
    li.appendChild(liInput);
    //Faire apparaitre le button supprimer
    li.appendChild(deleteButton);
    // Faire apparaitre le bouton inprogress
    li.appendChild(inprogress);

    //Placer un écouteur d'évenement sur liInput
    liInput.addEventListener("keydown", function (e) {
      if (e.key == "Enter") {
        li.innerText = liInput.value;
        //Faire apparaitre le button supprimer
        li.appendChild(deleteButton);
        // Faire apparaitre le bouton inprogress
        li.appendChild(inprogress);
        //Faire apparaitre le bouton Modifier
        li.appendChild(changeButton);
      }
    });
  });
});
