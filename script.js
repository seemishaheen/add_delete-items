$(document).ready(function () {
    const taskInput = $("#taskInput");
    const addTaskButton = $("#addTask");
    const taskList = $("#taskList");
    const clearCompletedButton = $("#clearCompleted");

    addTaskButton.click(function () {
        const taskText = taskInput.val().trim();

        if (taskText !== "") {
            const li = $("<li>").addClass("list-group-item");
            const span = $("<span>").text(taskText);
            const deleteButton = $("<button>").addClass("btn btn-danger btn-sm float-right ml-2").text("Delete");
            const completeButton = $("<button>").addClass("btn btn-success btn-sm float-right").text("Complete");

            li.append(span, deleteButton, completeButton);
            taskList.append(li);
            taskInput.val("");

            deleteButton.click(function () {
                li.remove();
            });

            completeButton.click(function () {
                li.toggleClass("completed");
            });
        }
    });

    clearCompletedButton.click(function () {
        $(".completed").remove();
    });
});
