document.getElementById('year').innerHTML = new Date().getFullYear();
document.getElementById('month').innerHTML = new Date().toLocaleString('default', { month: 'long' });
document.getElementById('day').innerHTML = new Date().getDate();



function showTaskForm() {
        document.getElementById("taskFormModal").style.display = "block";
}

function hideTaskForm() {
        document.getElementById("taskFormModal").style.display = "none";
        document.getElementById("overlay").style.display = "none";
}
function hideEditForm() {
        document.getElementById("editForm").style.display = "none";
        document.getElementById("overlay").style.display = "none";
}

// Get the reference to the task list element
const taskList = document.getElementById('taskList');
taskList.style.boxShadow='box-shadow: rgb(200, 208, 231) 3.2px 3.2px 8px 0px inset, rgb(255, 255, 255) -3.2px -3.2px 8px 0px inset;'

const remainDate = document.getElementById('remain-date').value;
// Remove the duplicate declaration of newTask
function addTask() {
        // Get the task name, description, and remain date from the input fields
        const taskName = document.getElementById('task-name').value;
        const taskDescription = document.getElementById('task-description').value;
        const remainDate = document.getElementById('remain-date').value;

        // Create a new list item element
        const newTask = document.createElement('li');
        newTask.id='newTask';
        newTask.style.listStyleType = 'none';
       
        newTask.style.boxShadow='box-shadow: rgb(200, 208, 231) 3.2px 3.2px 8px 0px inset, rgb(255, 255, 255) -3.2px -3.2px 8px 0px inset;';
        newTask.style.borderRadius='10px';
        
        newTask.style.padding='10px';

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
        checkbox.style.accentColor='#6f00ff';
        
        
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
        removeButton.onclick = function() {
                taskList.removeChild(newTask);
                document.getElementById('tasksContainer').style.display = 'none';
        };

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
        };

        // Create a div element for task details
        const taskDetailsDiv = document.createElement('div');
        taskDetailsDiv.className = 'task-details';
        taskDetailsDiv.innerHTML = `
                <h3>${taskName}</h3>
                <p>${taskDescription}</p>
                <p>${remainDate}</p>
        `;

        newTask.className = 'list-group-item d-flex justify-content-between align-items-center';
        newTask.appendChild(checkboxDiv);
        newTask.appendChild(taskDetailsDiv);
        newTask.appendChild(removeButton);
        newTask.appendChild(editButton);
        taskList.appendChild(newTask);

        document.getElementById('tasksContainer').style.display = 'block';

        // Clear the input fields
        document.getElementById('task-name').value = '';
        document.getElementById('task-description').value = '';
        document.getElementById('remain-date').value = '';

        // Hide the task form modal
        hideTaskForm();
}

// display newTask in todayTasks div if remainDate=Today automatically
if (new Date(remainDate).toDateString() === new Date().toDateString()) {
       

}

