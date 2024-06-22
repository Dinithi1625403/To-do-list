function showTaskFormPr(){
   
    document.getElementById("taskFormModalPr").style.display = "block";
    

}
function hideTaskFormPr(){
    document.getElementById("taskFormModalPr").style.display = "none";
    
}

function prioratise(){
    // Get the task name, description, and remain date from the input fields
    const taskName = document.getElementById('task-name').value;
    const taskDescription = document.getElementById('task-description').value;
    const remainDate = document.getElementById('remain-date').value;

    // Create a new list item element
    const newTask = document.createElement('li');
    newTask.style.listStyleType = 'none';
    newTask.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';

    // Create a checkbox element
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.style.width = '40px';
    checkbox.style.height = '40px';
    checkbox.style.position = 'absolute';
    checkbox.style.top = '50%';
    checkbox.style.transform = 'translateY(-50%)';
    checkbox.style.left = '0%';
    checkbox.style.marginLeft = '10px';
    checkbox.id = 'taskCheckbox';
    checkbox.className = 'form-check-input';
    checkbox.onclick = function() {
            if (checkbox.checked) {
                    newTask.style.textDecoration = 'line-through';
            } else {
                    newTask.style.textDecoration = 'none';
            }
    };

    // Create a div element for checkbox and remove button
    const checkboxDiv = document.createElement('div');
    checkboxDiv.className = 'form-check';

    // Create a label element for checkbox
    const checkboxLabel = document.createElement('label');
    checkboxLabel.className = 'form-check-label';
    checkboxLabel.htmlFor = 'taskCheckbox';

    // Append the checkbox and label to the checkbox div
    checkboxDiv.appendChild(checkbox);
    checkboxDiv.appendChild(checkboxLabel);

    // Create a remove button element
    const removeButton = document.createElement('button');
    removeButton.innerHTML = '<i class="fa fa-close"></i>';
    removeButton.className = 'btn btn-danger';

    // Create an edit button element
    const editButton = document.createElement('button');
    editButton.innerHTML = '<i class="fa fa-edit"></i>';
    editButton.className = 'btn btn-primary';
    editButton.onclick = function() {
        document.getElementById('editForm').style.display = "block";

        document.getElementById('edit').onclick = function() {
            // Get the updated task name, description, and remain date from the input fields
            const updatedTaskName = document.getElementById('edit-task-name').value;
            const updatedTaskDescription = document.getElementById('edit-task-description').value;
            const updatedRemainDate = document.getElementById('edit-remain-date').value;

            // Update the task details
            taskDetailsDiv.innerHTML = `
                <h3>${updatedTaskName}</h3>
                <p>${updatedTaskDescription}</p>
                <p>${updatedRemainDate}</p>
            `;

            // Hide the edit form modal
            hideEditForm();
        }
    }

    // Create a div element for task details
    const taskDetailsDiv = document.createElement('div');
    taskDetailsDiv.className = 'task-details';
    taskDetailsDiv.innerHTML = `
        <h3>${taskName}</h3>
        <p>${taskDescription}</p>
        <p>${remainDate}</p>
    `;

    // Append the task details div to the new task
   

    newTask.className = 'list-group-item d-flex justify-content-between align-items-center';
    newTask.appendChild(checkboxDiv);
    newTask.appendChild(taskDetailsDiv);
    newTask.appendChild(removeButton);
    newTask.appendChild(editButton);

    // Append the new task to the task list
    taskList.appendChild(newTask);

    const impUrg = document.getElementById('impUrgUl');
    const notImpUrg = document.getElementById('notImpUrgUl');
    const impNotUrg = document.getElementById('impNotUrgUl');
    const notImpNotUrg = document.getElementById('notImpNotUrgUl');
    const radioValue = document.querySelector('input[name="category"]:checked').value;
    if (radioValue === 'impUrg') {
        impUrg.appendChild(newTask);
        removeButton.onclick = function () {
            impUrg.removeChild(newTask);
            removeButton.onclick = function () {
                taskList.removeChild(newTask);
            }
        }
    } 
    if (radioValue === 'notImpUrg') {
        notImpUrg.appendChild(newTask);
        removeButton.onclick = function () {
            notImpUrg.removeChild(newTask);
            removeButton.onclick=function(){
                taskList.removeChild(newTask);
            }
        }
    }
    if (radioValue === 'impNotUrg') {
        impNotUrg.appendChild(newTask);
        removeButton.onclick = function () {
            impNotUrg.removeChild(newTask);
        }
    } 
    if (radioValue === 'notImpNotUrg') {
        notImpNotUrg.appendChild(newTask);
        removeButton.onclick = function () {
            notImpNotUrg.removeChild(newTask);
        } 
    }
    hideTaskFormPr();
    // Clear the input fields
    document.getElementById('task-name').value = '';
}
function hideEditForm() {
    document.getElementById('editForm').style.display = "none";
}