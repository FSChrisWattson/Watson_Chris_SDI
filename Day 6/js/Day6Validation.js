
 /*
Christopher Watson 
Section 00
7/18/15
Validating Prompts for loops
 */

//alert("Testing to see if this works!");

 //isNAN(item to test)
 //true if not a number
 //false if it is a number

 //To test blank we test(item ==="")

 //To test text strings
 //(item.toLowerCase() != "yes" && item.toLowerCase() !="no"

 //For validation we use a while loop
 //We use a while loop because we dont know how many times the user will get it wrong

 //Ask the user for a number
 var userNum = prompt("Please enter in a number. ");
 //Directly after each prompt, validate for that prompt
 while(isNaN(userNum) || userNum===""){
     //re-prompt using the same variable
     userNum=prompt("Please only use numbers and don't leave blank. \nPlease type in a number.")
 }
 console.log("After the while loop. ");

 //Ask the user for either red or black
 var color = prompt("Please choose red or black:");
 //Validate!!!!
 while(color.toLowerCase()!= "red" && color.toLowerCase()!= "black"){
     //reprompt the user using the same variable
     color=prompt("Please only type in red or black. \n Choose your color.")
 }
