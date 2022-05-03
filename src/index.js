document.addEventListener("DOMContentLoaded", () => {
  //function
  const createNewTask = (e) => {
    e.preventDefault();
    //grab the input
    const newTaskDescription = document.getElementById('new-task-description')
    //creat li's
    const newLi = document.createElement('li')
    //print input to li
    newLi.textContent = newTaskDescription.value
    //append
    const ul = document.querySelector("#tasks")
    ul.appendChild(newLi)

    e.target.reset();
  }
  // grabb info from the DOM
  const form = document.getElementById(`create-task-form`)

  //event listeners
  form.addEventListener('submit', createNewTask)
});
