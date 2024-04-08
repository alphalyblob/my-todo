/* Récupération des éléments du DOM */

const iptTask = document.querySelector('#ipt-task');
const btnAdd = document.querySelector('#btn-add');
const list = document.querySelector('#ul-tasks');
const delBtns = document.querySelectorAll('.fas fa-trash-alt');
const donBtns = document.querySelectorAll('.fas fa-check');

/* Fonction d'ajout de tâche en cliquant du bouton AJOUTER */

function addTask() {

    console.log(iptTask.value);
    console.log(iptTask.value.length);

    // Si le champ texte n'est pas vide
    if (iptTask.value.length > 0) {

        // Valeur du placeholder du champ texte
        iptTask.setAttribute("placeholder", "Ranger ma chambre...");

        // Eléments créés et leurs attributs
        const newTask = document.createElement("li");
        const newPTask = document.createElement("p");
        const newDivLi = document.createElement("div");
        newDivLi.setAttribute("class", "div-content-li");

        const newDivAction = document.createElement("div");
        newDivAction.setAttribute("class", "div-action");
        const doneBtn = document.createElement("button");
        doneBtn.setAttribute("type", "checkbox");
        doneBtn.setAttribute("class", "fas fa-check");
        const deleteBtn = document.createElement("button");
        deleteBtn.setAttribute("class", "fas fa-trash-alt");

        newPTask.textContent = iptTask.value;

        newDivAction.appendChild(doneBtn);
        newDivAction.appendChild(deleteBtn);
        newDivLi.appendChild(newPTask);
        newDivLi.appendChild(newDivAction);
        newTask.appendChild(newDivLi);
        list.appendChild(newTask);

        // Gestionnaire d'événement pour le bouton DELETE pour supprimer une tache
        deleteBtn.addEventListener('click', function () {
            // Supprime la li parent du bouton DELETE
            newTask.remove();
        });

        // Gestionnaire d'événement pour le bouton DONE pour barrer une tache accomplie
        doneBtn.addEventListener('click', function () {
            // la tache prend la classe completed et dans le css le texte contenu est barré
            newPTask.classList.toggle('completed', doneBtn.checked);

            // Change l'icône du bouton en fonction de l'état checked
            if (doneBtn.checked) {
                doneBtn.className = "fas fa-trash-alt"; // Change l'icône pour "undo"
            } else {
                doneBtn.className = "fas fa-check"; // Change l'icône pour "check"
            }
        });

    }
    // Si le champ texte est vide
    else {
        // Valeur du placeholder change
        iptTask.setAttribute("placeholder", "Ajoutez une tâche ici !");
    }
    iptTask.value = "";



}

btnAdd.addEventListener('click', addTask);

/* Fonction d'ajout de tâche en pressant la touche ENTRER */
function addTaskEnter(event) {
    if (event.code === 'Enter') {
        addTask();
    }

}

iptTask.addEventListener('keydown', addTaskEnter);