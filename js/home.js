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
taskList.style.boxShadow = 'box-shadow: rgb(200, 208, 231) 3.2px 3.2px 8px 0px inset, rgb(255, 255, 255) -3.2px -3.2px 8px 0px inset;'

// Remove the duplicate declaration of newTask
function addTask() {
        // Get the task name, description, and due date from the input fields
        const taskName = document.getElementById('task-name').value;
        const taskDescription = document.getElementById('task-description').value;
        const dueDate = document.getElementById('due-date').value;

        // Create a new list item element
        const newTask = document.createElement('li');
        newTask.id = 'newTask';
        newTask.style.listStyleType = 'none';
        newTask.style.boxShadow = 'inset rgb(200, 208, 231) 3.2px 3.2px 8px 0px, inset rgb(255, 255, 255) -3.2px -3.2px 8px 0px';
        newTask.style.borderRadius = '10px';

        // Create a checkbox element
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.style.position = 'absolute';
        checkbox.style.top = '50%';
        checkbox.style.transform = 'translateY(-50%)';
        checkbox.style.left = '0%';
        checkbox.id = 'taskCheckbox';
        checkbox.style.accentColor = '#6f00ff';
        checkbox.style.width = '20px';
        checkbox.style.height = '20px';

        checkbox.onclick = function () {
                if (checkbox.checked) {
                        newTask.style.textDecoration = 'line-through';
                        newTask.style.opacity = '0.6';
                } else {
                        newTask.style.textDecoration = 'none';
                        newTask.style.opacity = '1';
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
        removeButton.innerHTML = '<i class="fa fa-close" style="font-size: 100%; padding:0%"></i>';
        removeButton.className = 'btn ';
        removeButton.style.backgroundColor = 'white';

        removeButton.onclick = function () {
                taskList.removeChild(newTask);
                if (taskList.childElementCount === 0) {
                        document.getElementById('tasksContainer').style.display = 'none';
                }
        };

        // Create an edit button element
        const editButton = document.createElement('button');
        editButton.innerHTML = '<i class="fa fa-edit" style="color:#8C52FF;font-size: 100%;padding:0%"></i>';
        editButton.className = 'btn ';
        editButton.style.backgroundColor = 'white';

        editButton.onclick = function () {
                document.getElementById('editForm').style.display = "block";

                document.getElementById('edit').onclick = function () {
                        // Get the updated task name, description, and due date from the input fields
                        const updatedTaskName = document.getElementById('edit-task-name').value;
                        const updatedTaskDescription = document.getElementById('edit-task-description').value;
                        const updatedDueDate = document.getElementById('edit-due-date').value;

                        // Update the task details
                        taskDetailsDiv.innerHTML = `
                                <h3>${updatedTaskName}</h3>
                                <h6>${updatedTaskDescription}</h6>
                                <h6>${updatedDueDate}</h6>
                        `;

                        // Hide the edit form modal
                        hideEditForm();
                }
        };

        // Create a div element for task details
        const taskDetailsDiv = document.createElement('div');
        taskDetailsDiv.style.fontFamily = 'Coming Soon';
        if (window.innerWidth < 768) {
                taskDetailsDiv.style.fontSize = '0.5rem';
        } else {
                taskDetailsDiv.style.fontSize = '1.5rem';
                checkbox.style.width = '40px';
        }
        taskDetailsDiv.className = 'task-details';
        taskDetailsDiv.innerHTML = `
                <h3>${taskName}</h3>
                <h6>${taskDescription}</h6>
                <h6>${dueDate}</h6>
        `;

        const btnDiv = document.createElement('div');
        btnDiv.appendChild(removeButton);
        btnDiv.appendChild(editButton);
        btnDiv.style.float = 'right';

        taskDetailsDiv.style.width = '60%';
        checkboxDiv.style.width = '5%';

        newTask.className = 'list-group-item d-flex justify-content-between align-items-center';
        newTask.appendChild(checkboxDiv);
        newTask.appendChild(taskDetailsDiv);
        newTask.appendChild(btnDiv);
        taskList.appendChild(newTask);

        document.getElementById('tasksContainer').style.display = 'block';

        // Clear the input fields
        document.getElementById('task-name').value = '';
        document.getElementById('task-description').value = '';
        document.getElementById('due-date').value = '';

        // Hide the task form modal
        hideTaskForm();
}

// display newTask in todayTasks div if dueDate is today
if (new Date(dueDate).toDateString() === new Date().toDateString()) {
        // Code to display newTask in todayTasks div
}
