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

// document.getElementById("fall1").innerHTML =
        //     `<div class="card drag" id="drag6" draggable="true" ondragstart="drag(event)">
        //         <button class="delete is-small" id="delete6" onclick="deleteCourse(6);"></button>
        //         <div class="card-content">
        //             course code<br>
        //             course title (credits)
        //         </div>
        //     </div>`;

// if last 3 digits of code is 100 -> freshman fall; 200 -> sophomore fall, etc
    // add course to appropriate object
    // calculate semester's new credit total & total credit total
// assigns color based on areas, also checks major req based on areas

function color() {
    let areas = ['H', 'S'];
    let r = 0;
    let g = 0;
    let b = 0;

    if (areas.includes('H')) { // red
        r = 249;
        g = 111;
        b = 111;
    }

    if (areas.includes('N')) { // green
        if (r != 0) {
            r = (r + 91) / 2;
            g = (g + 226) / 2;
            b = (b + 108) / 2;
        } else {
            r = 91;
            g = 226;
            b = 108;
        }
    }

    if (areas.includes('S')) { // yellow
        if (r != 0) {
            r = (r + 255) / 2;
            g = (g + 246) / 2;
            b = (b + 107) / 2;
        } else {
            r = 255;
            g = 246;
            b = 107;
        }

    }

    if (areas.includes('Q')) { // purple
        if (r != 0) {
            r = (r + 194) / 2;
            g = (g + 112) / 2;
            b = (b + 255) / 2;
        } else {
            r = 194;
            g = 112;
            b = 255;
        }
    }

    if (areas.includes('E')) { // blue
        if (r != 0) {
            r = (r + 112) / 2;
            g = (g + 212) / 2;
            b = (b + 255) / 2;
        } else {
            r = 112;
            g = 212;
            b = 255;
        }
    }

    // document.getElementById("drag1").style.color = "white";
    document.getElementById("drag1").style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}

function deleteCourse(id) {
    document.getElementById("drag" + id).style.display = "none";
}