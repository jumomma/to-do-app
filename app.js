function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    // get the text
    let title = newToDoText.value;

    //create a new li
    let newLi = document.createElement('li');

    //create a new input
    let checkbox = document.createElement('input');

    //create a delete button
    let deleteButton = document.createElement('button');
    //give the button text
    var buttonText = document.createTextNode('Delete To-Do');
    //attach the buttonText to the parent deleteButton
    deleteButton.appendChild(buttonText);

    deleteButton.addEventListener('click', event => {
      event.preventDefault();
      toDoList.removeChild(newLi);
    });

    //set the input's type to checkbox
    checkbox.type = "checkbox";

    // set the title
    newLi.textContent = title;

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    // attach delete button to the li
    newLi.appendChild(deleteButton);

    // attach the li to the ul
    toDoList.appendChild(newLi);

    // empty the input
    newToDoText.value = '';


});


};


window.onload = function() {
  onReady();
};
