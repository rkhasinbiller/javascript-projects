// Declare and assign the variables below
let shuttleName = "Determination";
let shuttleSpeedMPH = 17500;
let distanceToMarsKm = 225000000;
let distanceToMoonKm = 384400;
let milesPerKm = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof shuttleName);
console.log(typeof shuttleSpeedMPH);
console.log(typeof distanceToMarsKm);
console.log(typeof distanceToMoonKm);
console.log(typeof milesPerKm);
// Calculate a space mission below
let milesToMars = distanceToMarsKm * milesPerKm;
let hoursToMars = milesToMars / shuttleSpeedMPH;
let daysToMars = hoursToMars / 24; 

// Print the results of the space mission calculations below
console.log(shuttleName + "will take" + daysToMars + "days to reach Mars.")
// Calculate a trip to the moon below
let milesToMoon = distanceToMarsKm * milesPerKm
// Print the results of the trip to the moon below

