const colorChangeBtn = document.getElementById("dynamic-color-change");

colorChangeBtn.addEventListener('click', function(){
    const randomColor = Math.floor(Math.random()*13236164).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
})

const completeBtns = document.querySelectorAll(".com-btn");

for(let i = 0; i < completeBtns.length; i++){
    completeBtns[i].addEventListener('click', function(){
        const navCount = parseInt(document.getElementById("nav-task-count").innerText);
        document.getElementById('nav-task-count').innerText = navCount + 1;
        const assignTask = parseInt(document.getElementById('assign-task').innerText);
        if(assignTask > 0){
            document.getElementById('assign-task').innerText = assignTask - 1;
        }
        alert("Board Updated Successfully");
        completeBtns[i].disabled = true;

        let checkCompleteOrNot = true;
        // Congrats Section
        for(let j  = 0; j < completeBtns.length; j++){
            if(completeBtns[j].disabled !== true){
                checkCompleteOrNot = false;
                break;
            }
        }

        if(checkCompleteOrNot){
            alert("Congrats!!! You have completed all the current tasks");
        }

        const title = document.getElementById(`title-${i+1}`).innerText;
        console.log(title);

        // Activity Log
        const activityDiv = document.getElementById("activity-div");
        const activityNotiDiv = document.createElement('div');
        activityNotiDiv.classList.add('mt-3', "text-sm", "bg-zinc-100", "rounded-lg", "px-3", "py-2" , "notification");
        const activityNotification = document.createElement('p');
        activityNotification.innerText = `You have completed the task ${title} at ${new Date().toLocaleTimeString()}`;
        activityNotiDiv.appendChild(activityNotification);
        activityDiv.appendChild(activityNotiDiv);

    })
}

const clearBtn = document.getElementById("clear-btn");

clearBtn.addEventListener('click', function(){
    const notificationDiv = document.querySelectorAll(".notification");
    for(let i = 0; i < notificationDiv.length; i++){
        notificationDiv[i].remove();
    }
})

// Day and date section

function updateDayAndDate(){
    const date = new Date();

    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const day = weekDays[date.getDay()];

    const DateToUpdate = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "2-digit",
    })

    console.log(DateToUpdate);

    document.getElementById("Day").innerText = day;
    document.getElementById("Date").innerText = DateToUpdate;
}

updateDayAndDate();

document.getElementById("blog-btn").addEventListener('click', function(){
    location.href = "blog.html";
})