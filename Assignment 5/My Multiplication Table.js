/*
   CIS 217 – Web Programming – Programming Assignment
   JavaScript Static Multiplication Table
	
   Author: Marcais Jackson
   Date:   11/8/2017
   
   Filename: My Multiplication Table.js
   This file contains some math formulas, functions, if statements, methods and a few other types of JavaScript concepts to 
   help create a multiplication table.
 */
 
       function table() 
	   {
           var color_td;
		   //The write() method writes HTML expressions or JavaScript code to a document.
           document.write("<table border = '1px'>");
           //Marks a block of statements to be executed as long as a condition is true.
           for (var i = 1; i < 13; i++) 
		   {

               document.write("<tr >");

               for (var j = 1; j < 13; j++) 
			   {
				//Marks a block of statements to be executed depending on a condition.
                   if (j == 1 || i == 1) 
				   {
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
       
 
