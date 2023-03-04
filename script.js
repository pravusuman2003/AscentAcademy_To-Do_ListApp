$(document).ready(function() {
  // Initialize the task array
  var tasks = [];

  // Listen for form submission
  $('#taskForm').submit(function(event) {
    event.preventDefault();
    // Get the task input value
    var taskInput = $('#taskInput').val();
    // Add the task to the array
    tasks.push({
      text: taskInput,
      completed: false
    });
    // Update the list on the screen
    displayTasks(tasks);
    // Clear the input field
    $('#taskInput').val('');
  });

  // Listen for task completion
  $('#taskList').on('click', 'li', function() {
    // Get the index of the clicked task
    var index = $(this).data('index');
    // Toggle the completed status of the task
    tasks[index].completed = !tasks[index].completed;
    // Update the list on the screen
    displayTasks(tasks);
  });

  // Listen for all tasks button click
  $('#allTasks').click(function() {
    displayTasks(tasks);
  });

  // Listen for completed tasks button click
  $('#completedTasks').click(function() {
    var completedTasks = tasks.filter(function(task) {
      return task.completed;
    });
    displayTasks(completedTasks);
  });

  // Listen for active tasks button click
  $('#activeTasks').click(function() {
    var activeTasks = tasks.filter(function(task) {
return !task.completed;
});
displayTasks(activeTasks);
});

// Function to display tasks on the screen
function displayTasks(tasksArray) {
// Clear the list
$('#taskList').empty();
// Loop through the tasks array and append each task to the list
for (var i = 0; i < tasksArray.length; i++) {
var task = tasksArray[i];
var listItem = $('<li>').addClass('list-group-item').data('index', i);
if (task.completed) {
listItem.addClass('list-group-item-success');
}
var checkbox = $('<input>').attr('type', 'checkbox').prop('checked', task.completed);
var textSpan = $('<span>').text(task.text);
listItem.append(checkbox).append(textSpan);
$('#taskList').append(listItem);
}
}
});
