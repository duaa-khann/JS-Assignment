
var signalColor = prompt("Please enter the color of the traffic signal (red/yellow/green):");

signalColor = signalColor.toLowerCase();

if (signalColor === "red") {
    alert("Must Stop");
} else if (signalColor === "yellow") {
    alert("Ready to move");
} else if (signalColor === "green") {
    alert("Move now");
} else {
    alert("Invalid color entered");
}
