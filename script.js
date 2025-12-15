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

// Chapter 6-9

// Chapter 6-9 / (Q:1)
document.write("<h1>Increment and Decrement Operations:</h1><br>");
var a = 10;
document.write("The value of a is: " + a + "<br>");
document.write("The value of ++a is: " + (++a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");
document.write("The value of a++ is: " + (a++) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");
document.write("The value of --a is: " + (--a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");
document.write("The value of a-- is: " + (a--) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

// Chapter 6-9 / (Q:2)
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("a is: " + a + "<br>");
document.write("b is: " + b + "<br>");
document.write("result is: " + result + "<br><br>");
document.write("Explanation:<br>");
document.write("--a = " + (a + 1) + "<br>");
document.write("--a - --b = " + ((a + 1) - (b + 1)) + "<br>");
document.write("--a - --b + ++b = " + (((a + 1) - (b + 1)) + (b + 1)) + "<br>");
document.write("--a - --b + ++b + b-- = " + ((((a + 1) - (b + 1)) + (b + 1)) + b) + "<br><br>");

// Chapter 6-9 / (Q:3)
var userName = prompt("Enter your name:");
alert("Welcome " + userName + "!");
document.write("<br><br>");

// Chapter 6-9 / (Q:4)
var tableNumber = prompt("Enter a number to show its multiplication table:", 5);
if (tableNumber === null || tableNumber.trim() === "") {
    tableNumber = 5;
}
else {
    tableNumber = parseInt(tableNumber);
}
document.write("<h1>Table of " + tableNumber + ":</h1><br>");
for (var i = 1; i <= 10; i++) {
    var result = tableNumber * i;
    document.write(tableNumber + " x " + i + " = " + result + "<br>");
}
document.write("<br>");

// Chapter 6-9 / (Q:5)
var subject1 = prompt("Enter name of subject 1:");
var subject2 = prompt("Enter name of subject 2:");
var subject3 = prompt("Enter name of subject 3:");
var totalMarksPerSubject = 100;
var marks1 = parseInt(prompt("Enter marks obtained in " + subject1 + ":"));
var marks2 = parseInt(prompt("Enter marks obtained in " + subject2 + ":"));
var marks3 = parseInt(prompt("Enter marks obtained in " + subject3 + ":"));
var totalMarks = totalMarksPerSubject * 3;
var marksObtained = marks1 + marks2 + marks3;
var percentage = (marksObtained / totalMarks) * 100;
document.write("<h1>Marks Sheet:</h1><br>");
document.write("<table border='1'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Marks Obtained</th><th>Percentage</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarksPerSubject + "</td><td>" + marks1 + "</td><td>" + ((marks1 / totalMarksPerSubject) * 100).toFixed(2) + "%</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarksPerSubject + "</td><td>" + marks2 + "</td><td>" + ((marks2 / totalMarksPerSubject) * 100).toFixed(2) + "%</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarksPerSubject + "</td><td>" + marks3 + "</td><td>" + ((marks3 / totalMarksPerSubject) * 100).toFixed(2) + "%</td></tr>");
document.write("<tr><th>Total</th><th>" + totalMarksPerSubject * 3 	+ "</th><th>" 	+ marksObtained 	+ "</th><th>" 	+ percentage.toFixed(2) 	+ "%</th></tr>");
document.write("</table>");