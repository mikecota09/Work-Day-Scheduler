let currentDate = $("#currentDay").text(moment().format("MMMM Do YYYY"));


let timeBlock = $(".time-block"); 
let saveButton = $(".saveBtn");
let hour = $(".hour");


let userTasks = JSON.parse(localStorage.getItem("userTasks")) || [];


function saveTasks () {
    let currentTime = $(this).data("hour");
    let rowHour = $(this).siblings(".hour").text();
    let task = $(this).siblings(".time-block").val();

    console.log(currentTime);
    console.log(rowHour);
    console.log(task);

    if (task === "") {
        return false;
    }
    else {
        // if ()
        localStorage.setItem(currentTime, task);
   
    }
}


// function reset() {

//     for (let i = 0; i < userTasks.length; i++) {
        
//         if (userTasks[i].hour === hour.text()) {
//             console.log(hour.index());
//             timeBlock.val(userTasks[i].task);
//         }
//     }
// }


// $(window).on("load", reset());
saveButton.on("click", saveTasks);