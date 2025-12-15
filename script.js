// Chapter 5

// Chapter 5 / (Q:1)
var num1 = 3;
var num2 = 5;
var sum = num1 + num2;
document.write("<h1>Sum of " + num1 + " and " + num2 + " is " + sum + "</h1><br><br>");

// Chapter 5 / (Q:2)
var num1 = 3;
var num2 = 5;
var sub = num1 - num2;
var mul = num1 * num2;
var div = num1 / num2;
var mod = num1 % num2;
document.write("Subtraction of " + num1 + " and " + num2 + " is " + sub + "<br>");
document.write("Multiplication of " + num1 + " and " + num2 + " is " + mul + "<br>");
document.write("Division of " + num1 + " and " + num2 + " is " + div + "<br>");
document.write("Modulus of " + num1 + " and " + num2 + " is " + mod + "<br><br>");

// Chapter 5 / (Q:3)
var variable;
document.write("<h1>Value after variable declaration is: " + variable + "</h1><br>");
variable = 5;
document.write("Initial value: " + variable + "<br>");
variable++;
document.write("Value after increment is: " + variable + "<br>");
variable += 7;
document.write("Value after addition is: " + variable + "<br>");
variable--;
document.write("Value after decrement is: " + variable + "<br>");
var remainder = variable % 3;
document.write("The remainder is: " + remainder + "<br><br>");

// Chapter 5 / (Q:4)
var ticketPrice = 600;
var totalCost = ticketPrice * 5;
document.write("Total cost to buy 5 tickets to a movie is " + totalCost + " PKR<br><br>");

// Chapter 5 / (Q:5)
var tableNumber = 4;
document.write("<h1>Table of " + tableNumber + ":</h1><br>");
for (var i = 1; i <= 10; i++) {
    var result = tableNumber * i;
    document.write(tableNumber + " x " + i + " = " + result + "<br>");
}
document.write("<br>");

// Chapter 5 / (Q:6)
document.write("<h1>Temperature Conversion:</h1><br>");
var celsius = 25;
var fahrenheit = (celsius * 9/5) + 32;
document.write("<h4>" + celsius + "°C is " + fahrenheit + "°F</h4><br>");
fahrenheit = 70;
celsius = (fahrenheit - 32) * 5/9;
document.write("<h4>" + fahrenheit + "°F is " + celsius + "°C</h4><br><br>");

// Chapter 5 / (Q:7)
document.write("<h1>Shopping Cart:</h1><br>");
var item1Price = 650;
var item2Price = 100;
var item1Quantity = 3;
var item2Quantity = 7;
var shippingCharges = 100;
var totalCost = (item1Price * item1Quantity) + (item2Price * item2Quantity) + shippingCharges;
document.write("Price of item 1 is " + item1Price + "<br>");
document.write("Quantity of item 1 is " + item1Quantity + "<br>");
document.write("Price of item 2 is " + item2Price + "<br>");
document.write("Quantity of item 2 is " + item2Quantity + "<br>");
document.write("Shipping Charges " + shippingCharges + "<br>");
document.write("Total cost of your order is " + totalCost + "<br><br>");

// Chapter 5 / (Q:8)
document.write("<h1>Marks Sheet:</h1><br>");
var totalMarks = 980;
var marksObtained = 804;
var percentage = (marksObtained / totalMarks) * 100;
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "%<br><br>");

// Chapter 5 / (Q:9)
document.write("<h1>Currency in PKR:</h1><br>");
var usdToPkr = 104.80;
var sarToPkr = 28;
var totalPkr = (10 * usdToPkr) + (25 * sarToPkr);
document.write("Total Currency in PKR: " + totalPkr + "<br><br>");

// Chapter 5 / (Q:10)
document.write("<h1>Mathematical Operations:</h1><br>");
var number = 5;
var result = ((number + 5) * 10) / 2;
document.write("The final result is: " + result + "<br><br>");

// Chapter 5 / (Q:11)
document.write("<h1>Age Calculator:</h1><br>");
var currentYear = 2023;
var birthYear = 1990;
var age = currentYear - birthYear;
document.write("Current Year: " + currentYear + "<br>");
document.write("Birth Year: " + birthYear + "<br>");
document.write("Your Age is: " + age + "<br><br>");

// Chapter 5 / (Q:12)
document.write("<h1>The Geometrizer:</h1><br>");
var radius = 20;
var circumference = 2 * Math.PI * radius;
var area = Math.PI * radius * radius;
document.write("Radius of a circle: " + radius + "<br>");
document.write("Circumference of circle: " + circumference.toFixed(2) + "<br>");
document.write("Area of circle: " + area.toFixed(2) + "<br><br>");

// Chapter 5 / (Q:13)
document.write("<h1>The Lifetime Supply Calculator:</h1><br>");
var snack = "Chocolate Chip";
var currentAge = 15;
var maxAge = 65;
var amountPerDay = 3;
var totalNeeded = (maxAge - currentAge) * 365 * amountPerDay;
document.write("You will need " + totalNeeded + " " + snack + " to last you until the ripe old age of " + maxAge + "<br>");

// Chapter 6

// Chapter 6 / (Q:1)
var a = 10;
document.write("The value of a is: " + a + "<br><br>");
a++;
document.write("The value of ++a is: " + a + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");
a++;
document.write("The value of a++ is: " + a + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");
a--;
document.write("The value of --a is: " + a + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");
a--;
document.write("The value of a-- is: " + a + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

// Chapter 6 / (Q:2)
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("The value of a is: " + a + "<br>");
document.write("The value of b is: " + b + "<br>");
document.write("The result is: " + result + "<br><br>");

// Chapter 6 / (Q:3)
var userName = prompt("Enter your name:");
alert("Welcome " + userName + "!");
document.write("<br><br>");

// Chapter 6 / (Q:4)
var tableNumber = parseInt(prompt("Enter a number to show its multiplication table:"));
if (isNaN(tableNumber)) {
    tableNumber = 5;
}
document.write("<h1>Table of " + tableNumber + ":</h1><br>");
for (var i = 1; i <= 10; i++) {
    var result = tableNumber * i;
    document.write(tableNumber + " x " + i + " = " + result + "<br>");
}
document.write("<br>");

// Chapter 6 / (Q:5)
var subject1 = prompt("Enter name of subject 1:");
var subject2 = prompt("Enter name of subject 2:");
var subject3 = prompt("Enter name of subject 3:");
var totalMarksPerSubject = 100;
var marks1 = parseInt(prompt("Enter marks obtained in " + subject1 + ":"));
var marks2 = parseInt(prompt("Enter marks obtained in " + subject2 + ":"));
var marks3 = parseInt(prompt("Enter marks obtained in " + subject3 + ":"));
var totalObtained = marks1 + marks2 + marks3;
var overallPercentage = (totalObtained / (totalMarksPerSubject * 3)) * 100;
document.write("<h1>Marks Sheet:</h1><br>");
document.write("<table border='1'><tr><th>Subject</th><th>Total Marks</th><th>Marks Obtained</th><th>Percentage</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarksPerSubject + "</td><td>" + marks1 + "</td><td>" + ((marks1 / totalMarksPerSubject) * 100).toFixed(2) + "%</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarksPerSubject + "</td><td>" + marks2 + "</td><td>" + ((marks2 / totalMarksPerSubject) * 100).toFixed(2) + "%</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarksPerSubject + "</td><td>" + marks3 + "</td><td>" + ((marks3 / totalMarksPerSubject) * 100).toFixed(2) + "%</td></tr>");
document.write("<tr><th>Total</th><th>" + (totalMarksPerSubject * 3) + "</th><th>" + totalObtained + "</th><th>" + overallPercentage.toFixed(2) + "%</th></tr>");
document.write("</table><br>");

// Chapter 7

// Chapter 7 / (Q:1)
var city = prompt("Enter city name:");
if (city.toLowerCase() === "karachi") {
    alert("Welcome to the city of lights!");
}
document.write("<br><br>");

// Chapter 7 / (Q:2)
var gender = prompt("Enter your gender (male/female):");
if (gender.toLowerCase() === "male") {
    alert("Good Morning Sir.");
}
else if (gender.toLowerCase() === "female") {
    alert("Good Morning Ma'am.");
}
document.write("<br><br>");

// Chapter 7 / (Q:3)
var signalColor = prompt("Enter traffic signal color (red/yellow/green):");
if (signalColor.toLowerCase() === "red") {
    alert("Must Stop");
}
else if (signalColor.toLowerCase() === "yellow") {
    alert("Ready to move");
}
else if (signalColor.toLowerCase() === "green") {
    alert("Move now");
}
document.write("<br><br>");

// Chapter 7 / (Q:4)
var fuel = parseFloat(prompt("Enter remaining fuel in car (in liters):"));
if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
}
document.write("<br><br>");

// Chapter 7 / (Q:5)
var a = 4;
if (++a === 5) {
    alert("Given condition for variable a is true");
}
var b = 82;
if (b++ === 83) {
    alert("Given condition for variable b is true");
}
var c = 12;
if (c++ === 13) {
    alert("Condition 1 is true");
}
if (c === 13) {
    alert("Condition 2 is true");
}
if (++c < 14) {
    alert("Condition 3 is true");
}
if (c === 14) {
    alert("Condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}
if ("car" < "cat") {
    alert("car is smaller than cat");
}
document.write("<br><br>");

// Chapter 7 / (Q:6)
var subject1 = parseInt(prompt("Enter marks obtained in Subject 1:"));
var subject2 = parseInt(prompt("Enter marks obtained in Subject 2:"));
var subject3 = parseInt(prompt("Enter marks obtained in Subject 3:"));
var totalMarks = 300;
var obtainedMarks = subject1 + subject2 + subject3;
var percentage = (obtainedMarks / totalMarks) * 100;
var grade, remarks;
if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
}
else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
}
else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
}
else {
    grade = "Fail";
    remarks = "Sorry";
}
document.write("<h1>Marks Sheet:</h1><br>");
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + obtainedMarks + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
document.write("Grade: " + grade + "<br>");
document.write("Remarks: " + remarks + "<br><br>");

// Chapter 7 / (Q:7)
var secretNumber = 7;
var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));
if (userGuess === secretNumber) {
    alert("Bingo! Correct answer.");
}
else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
    alert("Close enough to the correct answer.");
}
document.write("<br><br>");

// Chapter 7 / (Q:8)
var number = parseInt(prompt("Enter a number to check if it is divisible by 3:"));
if (number % 3 === 0) {
    alert("The number is divisible by 3.");
}
else {
    alert("The number is not divisible by 3.");
}
document.write("<br><br>");

// Chapter 7 / (Q:9)
var number = parseInt(prompt("Enter a number to check if it is even or odd:"));
if (number % 2 === 0) {
    alert("The number is even.");
}
else {
    alert("The number is odd.");
}
document.write("<br><br>");

// Chapter 7 / (Q:10)
var temperature = parseInt(prompt("Enter the temperature:"));
if (temperature > 40) {
    alert("It is too hot outside.");
}
else if (temperature > 30) {
    alert("The weather today is normal.");
}
else if (temperature > 20) {
    alert("Today's weather is cool.");
}
else if (temperature > 10) {
    alert("OMG! Today's weather is so cool.");
}
document.write("<br><br>");

// Chapter 7 / (Q:11)
var num1 = parseFloat(prompt("Enter first number:"));
var num2 = parseFloat(prompt("Enter second number:"));
var operation = prompt("Enter operation (+, -, *, /, %):");
var result;
if (operation === "+") {
    result = num1 + num2;
}
else if (operation === "-") {
    result = num1 - num2;
}
else if (operation === "*") {
    result = num1 * num2;
}
else if (operation === "/") {
    result = num1 / num2;
}
else if (operation === "%") {
    result = num1 % num2;
}
alert("The result of " + num1 + " " + operation + " " + num2 + " is: " + result);
document.write("<br><br>");

// Chapter 8

// Chapter 8 / (Q:1)
var city = prompt("Enter city name:");
if (city.toLowerCase() === "karachi") {
    alert("Welcome to the city of lights!");
}
document.write("<br><br>");

// Chapter 8 / (Q:2)
var gender = prompt("Enter your gender (male/female):");
if (gender.toLowerCase() === "male") {
    alert("Good Morning Sir.");
}
else if (gender.toLowerCase() === "female") {
    alert("Good Morning Ma'am.");
}
document.write("<br><br>");

// Chapter 8 / (Q:3)
var signalColor = prompt("Enter traffic signal color (red/yellow/green):");
if (signalColor.toLowerCase() === "red") {
    alert("Must Stop");
}
else if (signalColor.toLowerCase() === "yellow") {
    alert("Ready to move");
}
else if (signalColor.toLowerCase() === "green") {
    alert("Move now");
}
document.write("<br><br>");

// Chapter 8 / (Q:4)
var fuel = parseFloat(prompt("Enter remaining fuel in car (in liters):"));
if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
}
document.write("<br><br>");

// Chapter 8 / (Q:5)
var a = 4;
if (++a === 5) {
    alert("Given condition for variable a is true");
}
var b = 82;
if (b++ === 83) {
    alert("Given condition for variable b is true");
}
var c = 12;
if (c++ === 13) {
    alert("Condition 1 is true");
}
if (c === 13) {
    alert("Condition 2 is true");
}
if (++c < 14) {
    alert("Condition 3 is true");
}
if (c === 14) {
    alert("Condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}
if ("car" < "cat") {
    alert("car is smaller than cat");
}
document.write("<br><br>");

// Chapter 8 / (Q:6)
var subject1 = parseInt(prompt("Enter marks obtained in Subject 1:"));
var subject2 = parseInt(prompt("Enter marks obtained in Subject 2:"));
var subject3 = parseInt(prompt("Enter marks obtained in Subject 3:"));
var totalMarks = 300;
var obtainedMarks = subject1 + subject2 + subject3;
var percentage = (obtainedMarks / totalMarks) * 100;
document.write("Total Marks: " + totalMarks);
document.write("<br>");
document.write("Obtained Marks: " + obtainedMarks);
document.write("<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%");
document.write("<br><br>");

// Chapter 8 / (Q:7)
var secretNumber = 7;
var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));
if (userGuess === secretNumber) {
    alert("Bingo! Correct answer.");
}
else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
    alert("Close enough to the correct answer.");
}
document.write("<br><br>");

// Chapter 8 / (Q:8)
var number = parseInt(prompt("Enter a number to check if it is divisible by 3:"));
if (number % 3 === 0) {
    alert("The number is divisible by 3.");
}
else {
    alert("The number is not divisible by 3.");
}
document.write("<br><br>");

// Chapter 8 / (Q:9)
var number = parseInt(prompt("Enter a number to check if it is even or odd:"));
if (number % 2 === 0) {
    alert("The number is even.");
}
else {
    alert("The number is odd.");
}
document.write("<br><br>");

// Chapter 8 / (Q:10)
var temperature = parseInt(prompt("Enter the temperature:"));
if (temperature > 40) {
    alert("It is too hot outside.");
}
else if (temperature > 30) {
    alert("The weather today is normal.");
}
else if (temperature > 20) {
    alert("Today's weather is cool.");
}
else if (temperature > 10) {
    alert("OMG! Today's weather is so cool.");
}
document.write("<br><br>");

// Chapter 8 / (Q:11)
var num1 = parseFloat(prompt("Enter first number:"));
var num2 = parseFloat(prompt("Enter second number:"));
var operation = prompt("Enter operation (+, -, *, /, %):");
var result;
if (operation === "+") {
    result = num1 + num2;
}
else if (operation === "-") {
    result = num1 - num2;
}
else if (operation === "*") {
    result = num1 * num2;
}
else if (operation === "/") {
    result = num1 / num2;
}
else if (operation === "%") {
    result = num1 % num2;
}
alert("The result of " + num1 + " " + operation + " " + num2 + " is: " + result);
document.write("<br><br>");

// Chapter 9

// Chapter 9 / (Q:1)
var userName = prompt("Enter your name:");
alert("Hello, " + userName + "!");
document.write("<br><br>");

// Chapter 9 / (Q:2)
var mobileModel = prompt("Enter your favorite mobile phone model:");
document.write("My favorite phone is: " + mobileModel + "<br>");
document.write("Length of string: " + mobileModel.length + "<br><br>");

// Chapter 9 / (Q:3)
var word = "Pakistani";
var index = word.indexOf("n");
document.write("String: " + word + "<br>");
document.write("Index of 'n': " + index + "<br><br>");

// Chapter 9 / (Q:4)
var greeting = "Hello World";
var lastIndex = greeting.lastIndexOf("l");
document.write("String: " + greeting + "<br>");
document.write("Last index of 'l': " + lastIndex + "<br><br>");

// Chapter 9 / (Q:5)
var word = "Pakistani";
var charAtIndex3 = word.charAt(3);
document.write("String: " + word + "<br>");
document.write("Character at index 3: " + charAtIndex3 + "<br><br>");

// Chapter 9 / (Q:6)
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName + " " + lastName;
alert("Welcome " + fullName + "!");
document.write("<br><br>");

// Chapter 9 / (Q:7)
var city = "Hyderabad";
var newCity = city.replace("Hyder", "Islam");
document.write("City: " + city + "<br>");
document.write("After replacement: " + newCity + "<br><br>");

// Chapter 9 / (Q:8)
var message = "Ali and Sami are best friends. They play cricket and football together.";
var newMessage = message.replace(/and/g, "&");
document.write("Original Message: " + message + "<br>");
document.write("After replacement: " + newMessage + "<br><br>");

// Chapter 9 / (Q:9)
var str = "472";
var num = Number(str);
document.write("Value: " + str + "<br>");
document.write("Type: " + typeof str + "<br>");
document.write("Value: " + num + "<br>");
document.write("Type: " + typeof num + "<br><br>");

// Chapter 9 / (Q:10)
var userInput = prompt("Enter some text:");
var upperCaseInput = userInput.toUpperCase();
document.write("User Input: " + userInput + "<br>");
document.write("Upper Case: " + upperCaseInput + "<br><br>");

// Chapter 9 / (Q:11)
var userInput = prompt("Enter some text:");
var titleCaseInput = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
document.write("User Input: " + userInput + "<br>");
document.write("Title Case: " + titleCaseInput + "<br><br>");

// Chapter 9 / (Q:12)
var num = 35.36;
var str = num.toString().replace(".", "");
document.write("Number: " + num + "<br>");
document.write("Result: " + str + "<br><br>");

// Chapter 9 / (Q:13)
var username = prompt("Enter your username:");
var invalidChars = ["@", ".", ",", "!"];
var isValid = true;
for (var i = 0; i < invalidChars.length; i++) {
    if (username.indexOf(invalidChars[i]) !== -1) {
        isValid = false;
        break;
    }
}
if (!isValid) {
    alert("Please enter a valid username without special characters (@, ., ,, !).");
} else {
    alert("Username is valid.");
}
document.write("<br><br>");

// Chapter 9 / (Q:14)
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userSearch = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?").toLowerCase();
var found = false;
for (var i = 0; i < A.length; i++) {
    if (A[i] === userSearch) {
        found = true;
        alert(userSearch + " is available at index " + i + " in our bakery.");
        break;
    }
}
if (!found) {
    alert("We are sorry. " + userSearch + " is not available in our bakery.");
}
document.write("<br><br>");

// Chapter 9 / (Q:15)
var password = prompt("Enter a password:");
var isValid = true;
if (password.length < 6) {
    isValid = false;
}
else if (!isNaN(password.charAt(0))) {
    isValid = false;
}
for (var i = 0; i < password.length; i++) {
    var charCode = password.charCodeAt(i);
    if (!(charCode >= 48 && charCode <= 57) && !(charCode >= 65 && charCode <= 90) && !(charCode >= 97 && charCode <= 122)) {
        isValid = false;
        break;
    }
}
if (!isValid) {
    alert("Invalid password. Password must be at least 6 characters long, cannot start with a number, and must contain only letters and numbers.");
} else {
    alert("Password is valid.");
}
document.write("<br><br>");

// Chapter 9 / (Q:16)
var university = "University of Karachi";
var chars = university.split("");
for (var i = 0; i < chars.length; i++) {
    document.write(chars[i] + "<br>");
}
document.write("<br><br>");

// Chapter 9 / (Q:17)
var userInput = prompt("Enter some text:");
var lastChar = userInput.charAt(userInput.length - 1);
document.write("User Input: " + userInput + "<br>");
document.write("Last character of input: " + lastChar + "<br><br>");

// Chapter 9 / (Q:18)
var str = "The quick brown fox jumps over the lazy dog";
var count = (str.toLowerCase().match(/the/g) || []).length;
document.write("Text: " + str + "<br>");
document.write("There are " + count + " occurrence(s) of the word 'the'.<br><br>");
