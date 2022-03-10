// Adding current date to the jumbotron.
let currentDate = $("#currentDay").text(moment().format("MMMM Do YYYY"));


let description = $(".description");
let saveButton = $(".saveBtn");
let hour = $(".hour");
let currentHour = moment().hour();
console.log(currentHour);
console.log(typeof currentHour);


// Color coding the time blocks using each and comparing the moment current time (currentHour) to the id attribute assigned to the textarea.
description.each(function () {
    let timeBlock = parseInt($(this).attr("id"));
    console.log(typeof description);

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


let userTasks = JSON.parse(localStorage.getItem("userTasks")) || {};

// for (let [key, value] of Object.defineProperties(userTasks)){
//     $(`#${key}`).val(value);
// }

// console.log(`${key}: ${value}`);

// function saveTasks () {
//     let currentTime = $(this).data("hour");
//     let rowHour = $(this).siblings(".hour").text();
//     let task = $(this).siblings(".time-block").val();

//     console.log(currentTime);
//     console.log(rowHour);
//     console.log(task);

//     if (task === "") {
//         return false;
//     }
//     else {
//         userTasks.push()
//         localStorage.setItem("userData", JSON.stringify(userTasks));
   
//     }
// }


// function reset() {

//     for (let i = 0; i < userTasks.length; i++) {
        
//         if (userTasks[i].hour === hour.text()) {
//             console.log(hour.index());
//             timeBlock.val(userTasks[i].task);
//         }
//     }
// }


// $(window).on("load", reset());
// saveButton.on("click", saveTasks);