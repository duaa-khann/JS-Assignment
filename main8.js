
if(localStorage.getItem("visits")) {
   
    var visits = parseInt(localStorage.getItem("visits")) + 1;
    localStorage.setItem("visits", visits);
} else {
    var visits = 1;
    localStorage.setItem("visits", visits);
}

document.write("You have visited this site " + visits + " times.");
