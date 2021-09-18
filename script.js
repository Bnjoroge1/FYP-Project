function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));

    // move course to dictionary object respective to semester
        // add to new object, remove from old object
    // calculate semester's new credit total
        // if semester's new credit total > allowance based on ksas / wse, display warning
}

// let fall1 = {};
// let spring1 = {};
// let fall2 = {};
// let spring2 = {};
// let fall3 = {};
// let spring3 = {};
// let fall4 = {};
// let spring4 = {};

// function addCourse() {
//     // if last 3 digits of code is 100 -> freshman fall; 200 -> sophomore fall, etc
//     // add course to appropriate object
//     // calculate semester's new credit total & total credit total

//     // assigns color based on areas, also checks major req based on areas
//     // h red, n green, s yellow, q purple, e blue
//     let areas = ["H"];
//     let r, g, b;

//     if (areas.includes("H")) {
//         r = 249;
//         g = 111;
//         b = 111;
//         // #F96F6F
//         // 249, 111, 111
//     }

//     if (areas.includes("N")) {
//         if (r != 0) {
//             r = (r + 140) / 2;
//             g = (g + 249) / 2;
//             b = (b + 111) / 2;
//         }
//         // #8CF96F
//         // 140, 249, 111
//     }

//     if (areas.includes("S")) {
//         if (r != 0) {
//             r = (r + 249) / 2;
//             g = (g + 235) / 2;
//             b = (b + 111) / 2;
//         }
//         // #F9EB6F
//         // 249, 235, 111
//     }

//     if (areas.includes("Q")) {
//         if (r != 0) {
//             r = (r + 194) / 2;
//             g = (g + 112) / 2;
//             b = (b + 255) / 2;
//         }
//         // #C270FF
//         // 194, 112, 255
//     }

//     if (areas.includes("E")) {
//         if (r != 0) {
//             r = (r + 112) / 2;
//             g = (g + 212) / 2;
//             b = (b + 255) / 2;
//         }
//         // #70D4FF
//         // 112, 212, 255
//     }
    
//     // document.getElementById("fall1").innerHTML +=
//     //     `<div class="card drag" id="drag6" draggable="true" ondragstart="drag(event)">
//     //         <button class="delete is-small" id="delete6" onclick="deleteCourse(6);"></button>
//     //         <div class="card-content">
//     //             course code<br>
//     //             course title (credits)
//     //         </div>
//     //     </div>`;
// }

// addCourse();

function deleteCourse(id) {
    document.getElementById("drag" + id).style.display = "none";
}