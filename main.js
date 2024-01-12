$(document).ready(function() {
    $('#taskForm').submit(function(event) {
        event.preventDefault();
        const taskName = $('#taskName').val();
        if (taskName) {
            const listItem = $('<li>').text(taskName);
            $('#taskList').append(listItem);
            $('#taskName').val('');
        }
});

    $('#taskList').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});