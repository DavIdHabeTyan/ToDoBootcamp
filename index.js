const form = document.querySelector('#task_form');
const input = document.querySelector('#task_input');

const tasks = document.querySelector('#tasks');

form.addEventListener('submit', e => {
   e.preventDefault();

   const task = input.value;
   if (!task) {
      toDoBlock.classList.add('task');
   }
   // ----- Add task

   const toDoBlock = document.createElement('div');
   toDoBlock.classList.add('task');

   const taskContentElem = document.createElement('div');
   taskContentElem.classList.add('content');
   toDoBlock.appendChild(taskContentElem);

   const taskInput = document.createElement('input');
   taskInput.classList.add('text');
   taskInput.type = 'text';
   taskInput.value = task;
   taskInput.setAttribute('readonly', 'readonly');


   taskContentElem.appendChild(taskInput);

   const taskActionElem = document.createElement('div');
   taskActionElem.classList.add('actions');

   const taskEditElem = document.createElement('button');
   taskEditElem.classList.add('edit');
   taskEditElem.innerHTML = "Edit";

   const taskDeleteElem = document.createElement('button');
   taskDeleteElem.classList.add('delete');
   taskDeleteElem.innerHTML = "Delete";

   taskActionElem.appendChild(taskEditElem);
   taskActionElem.appendChild(taskDeleteElem);

   toDoBlock.appendChild(taskActionElem);

   tasks.appendChild(toDoBlock);
   input.value = "";

   taskEditElem.addEventListener('click', e => {
      if(taskEditElem.innerText.toLowerCase() === 'edit') {
         taskEditElem.innerText = "Save";
         taskInput.removeAttribute( 'readonly');
         taskInput.focus()
      }else {
         taskEditElem.innerText = 'Edit';
         taskInput.setAttribute('readonly', 'readonly');

      }
   })
   taskDeleteElem.addEventListener('click', e => {
      tasks.removeChild(toDoBlock)
   })


})