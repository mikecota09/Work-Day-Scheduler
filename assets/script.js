$(document).ready(function() {

// Adds current date to the jumbotron
    let currentDate = $("#currentDay").text(moment().format("dddd MMMM Do YYYY"));
    let description = $(".description");
    let saveButton = $(".saveBtn");
    let currentHour = moment().hour();
    
    console.log(currentHour);
    console.log(typeof currentHour);
    
    // Color coding the time blocks based on what the current time is
    description.each(function () {
        let timeBlock = parseInt($(this).attr("id"));
    
        if (timeBlock === currentHour) {
            $(this).addClass("present");
            $(this).removeClass("future");
            $(this).removeClass("past");
        }
        else if (timeBlock < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else {
            $(this).addClass("future");
            $(this).removeClass("past");
            $(this).removeClass("present");
        }
    });
    
// Uses .each function to populate tasks in the appropriate row
    description.each(function() {
    
        for (let i = 0; i < localStorage.length; i++) {
            let objectKey = localStorage.key(i);
            let taskValue = localStorage.getItem(objectKey);
            let rowHour = $(this).siblings(".hour").text();
            
            console.log(rowHour);
            console.log(typeof rowHour);
            console.log(objectKey);
            console.log(typeof objectKey);
            console.log(taskValue);
            console.log(typeof taskValue);
           
            if (objectKey === rowHour) {
                $(this).val(taskValue);
            }   
        }
    });
    
// Function to save information when the save button is clicked.
    function saveTasks () {
        let currentTime = $(this).data("hour");
        let rowHour = $(this).siblings(".hour").text();
        let task = $(this).siblings(".description").val();
    
        console.log(currentTime);
        console.log(rowHour);
        console.log(task);
    
        if (task === "") {
            localStorage.setItem(rowHour, "");
        }
        else {
            localStorage.setItem(rowHour, task);
        }
    }
    saveButton.on("click", saveTasks);
    });