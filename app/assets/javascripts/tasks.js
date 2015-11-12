// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$('#tasks').append(data);
$('#task_name').val('');

$(document).on("ready page:load", ready);

// $(document).on("ready", ready);
//
// function ready() {
//   $('#new_task').on('ajax:success', newTask);
//
   function newTask(event, data) {
     $('body').append(data);
   }
// }
