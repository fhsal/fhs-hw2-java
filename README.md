# fhs-hw3-javascript
3rd homework assignment - password generator


Summary of work

Updated script.js with the following:

* built function to build the password based upon use inputs
* prompt the user for upper/lower case, # or symbols
* ask user for lenght of PW and retry until >8 or <128 
* echo the user responses to the console
* set up arrays for upper/lower case, number and symbol
* populate a target array using random numbers to select from the source arrays that match user input
* use var "paswrd" to capture generated password 
* set html in document element within the Index.html to contain generated password
* change the color of the background for the password and the color and contents of the button to say "Here's your new password!" 
* drive the function based upon the event listener for click on the generate password button on the Index.html page via the ID "generate" 

Updated css file to center, add padding and word-wrap very long text to the card-body element where the generated password is displayed 

Updated the Index.html file with the following:

* added the id "passwrd-display" to the card-body so the generated password could be put there
* added the id "card-body" to the card-body to be able to change the color of that element
* use the "generate" element in the js file to identify the listener
* linked the script file
   
