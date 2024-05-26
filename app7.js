
var remainingFuel = prompt("Please enter the remaining fuel in your car (in litres):");


remainingFuel = parseFloat(remainingFuel);


if (remainingFuel < 0.25) {
    alert("Please refill the fuel in your car");
} else {
    alert("You have enough fuel");
}
