function showTaskForm() {
        document.getElementById("taskFormModal").style.display = "block";
        document.getElementById("overlay").style.display = "block";
}

function hideTaskForm() {
        document.getElementById("taskFormModal").style.display = "none";
        document.getElementById("overlay").style.display = "none";
}

// Get the reference to the task list element
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
        // Get the task name, description, and remain date from the input fields
        const taskName = document.getElementById('task-name').value;
       // const taskDescription = document.getElementById('task-description').value;
       // const remainDate = document.getElementById('remain-date').value;

        // Create a new list item element
        const newTask = document.createElement('li');

        // Create a checkbox element
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
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
        removeButton.innerHTML = 'Remove';
        removeButton.className = 'btn btn-danger';
        removeButton.onclick = function() {
                taskList.removeChild(newTask);
        };

        // Create a div element for task details
        const taskDetailsDiv = document.createElement('div');
        taskDetailsDiv.className = 'task-details';
        taskDetailsDiv.innerHTML = `
                <h3>${taskName}</h3>
                
        `;

        // Add responsive classes to the task details div
        taskDetailsDiv.classList.add('col-md-6', 'col-lg-4', 'col-xl-3');

        // Create a div element for task item
        const taskItemDiv = document.createElement('div');
        taskItemDiv.className = 'row  card card-header';
        taskItemDiv.appendChild(checkboxDiv); taskItemDiv.appendChild(taskDetailsDiv); taskItemDiv.appendChild(removeButton);

        // Append the task item div to the new task
        newTask.appendChild(taskItemDiv);

        // Append the new task to the task list
        taskList.appendChild(newTask);

        // Clear the input fields
        document.getElementById('task-name').value = '';
        document.getElementById('task-description').value = '';
        document.getElementById('remain-date').value = '';

        // Hide the task form modal
        hideTaskForm();
}

