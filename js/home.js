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
        const taskDescription = document.getElementById('task-description').value;
        const remainDate = document.getElementById('remain-date').value;

        // Create a new list item element
        const newTask = document.createElement('li');
        newTask.style.listStyleType = 'none';
        newTask.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
        newTask.style.border= '5px solid blueViolet';

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
        removeButton.onclick = function () {
                taskList.removeChild(newTask);
        };

        // Create an edit button element
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

        // Append the new task to the task list
        taskList.appendChild(newTask);


       // get radio button value and put the task name in the corresponding div
        const radioValue = document.querySelector('input[name="category"]:checked').value;
        const impUrg = document.getElementById('imp&urg');
        const notImpUrg = document.getElementById('notimp&urg');
        const impNotUrg = document.getElementById('imp&noturg');
        const notImpNotUrg = document.getElementById('notimp&noturg');
        if (radioValue === 'impUrg') {
                impUrg.innerHTML += `<p>${taskName}</p>`;
        } 
        if (radioValue === 'notImpUrg') {
                notImpUrg.innerHTML += `<p>${taskName}</p>`;
        }
        if (radioValue === 'impNotUrg') {
                impNotUrg.innerHTML += `<p>${taskName}</p>`;
        } 
        if (radioValue === 'notImpNotUrg') {
                notImpNotUrg.innerHTML += `<p>${taskName}</p>`;
        }



        // Clear the input fields
        document.getElementById('task-name').value = '';
        document.getElementById('task-description').value = '';
        document.getElementById('remain-date').value = '';

        // Hide the task form modal
        hideTaskForm();


       


}

function hideEditForm() {
        document.getElementById('editForm').style.display = "none";
}
