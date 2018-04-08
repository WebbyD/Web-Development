/*
   CIS 217 – Web Programming – Programming Assignment
   JavaScript Dynamic Multiplication Table
	
   Author: Marcais Jackson
   Date:   11/30/2017
   
   Filename: My Dynamic Multiplication Table.js
   This file contains some math formulas, functions, if statements, methods and a few other types of JavaScript concepts to 
   help create a multiplication table.
*/
function OnCk() {
var color_td;
var row = oForm.elements["row"].value;
var col = oForm.elements["col"].value;
document.write("<table border = '1px'>");
for (var i = 1; i < row; i++) {
document.write("<tr >");
for (var j = 1; j < col ; j++) {
  
if (j == 1 || i == 1) {
color_td = "#ccc";
}
else {
color_td = "#fff";
}
document.write("<td style='width:30px;background-color:" + color_td + "'>" + i * j + "</td>");
}
document.write("</tr>");
}
document.write("</table>");
}
//var color_td;
document.write("<table border = '1px'>");
for (var i = 1; i < 13; i++) {
document.write("<tr >");
for (var j = 1; j < 13; j++) {
if (j == 1 || i == 1) {
color_td = "#ccc";
}
else {
color_td = "#fff";
}
document.write("<td style='width:30px;background-color:" + color_td + "'>" + i * j + "</td>");
}
document.write("</tr>");
}
document.write("</table>");