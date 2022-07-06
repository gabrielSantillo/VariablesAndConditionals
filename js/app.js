let age = 18;
let is_subscribed = false;

if (age < 18 && is_subscribed == false) {
    console.log("The user is younger than 18 and is not subscribed.");
} else if (age >= 18 && is_subscribed == false) {
    console.log("The user is older than 18 and is not subscribed.");
} else if (age < 18 && is_subscribed == true) {
    console.log("The user is younger that 18 and is subscribed.");
} else {
    console.log("The user is 18 and is subsribed.");
}