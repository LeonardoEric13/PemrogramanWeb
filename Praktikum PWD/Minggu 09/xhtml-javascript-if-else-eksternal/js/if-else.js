var age;
var gender;

age    = prompt("Please enter your age in years:", 0);
gender = prompt("Are you a (M)ale or (F)emale?", "M");

if (age > 20) {
    if (gender == "M") {
        alert("You are a male over 20 years of age");
    } else {
        alert("You are a female over 20 years of age");
    }
} else {
    if (gender == "M") {
        alert("You are a male under the age of 21");
    } else {
        alert("You are a female under the age of 21");
    }
}
