document.addEventListener("DOMContentLoaded", () => {
//function
const createNewTask = (e) =>{
  e.preventDefault();
  console.log('submit')
  //grab the input
  const newTaskDescription = document.getElementById('new-task-description')
  console.log(newTaskDescription.value)
 //creat li's
  const newLi = document.createElement('li')
  console.log(newLi)
    //print input to li
  newLi.textContent = newTaskDescription.value
  //append
  const ul = document.querySelector("#tasks")
  console.log(ul)
  ul.appendChild(newLi)
  
  e.target.reset();
}
  // grabb info from the DOM
const form = document.getElementById(`create-task-form`)


  //event listeners
form.addEventListener('submit',createNewTask)
});
