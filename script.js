// defining the function to call when button is clicked to generate and display password based upon user selected inputs

    function writePassword() {

// setting up variable for the password and selection array
    var passwrd ="";
    var allchars = [];

// getting user input as to criteria for password and echoing to the console as the user makes selections 

    console.log(allchars);
    var upcase = confirm("Do you want to use upper case letters?");
    console.log("upcase", upcase);
    var lowcase = confirm("Do you want to use lower case letters?");
    console.log("lowcase", lowcase);
    var numtype = confirm("you want to use numeric entries?");
    console.log("numtype", numtype);
    var symtype = confirm("Do you want to use Symbols?");
    console.log("symtype", symtype);

    var passlength = parseInt(prompt("how long to you want your password to be?"))

//  testing to see if password length is valid

    while (passlength < 7 || passlength > 128) {   

    alert("your password must be greater than 8 characters or less than 128");

    var passlength = parseInt(prompt("how long to you want your password to be?"));}

    console.log("length", passlength);

// setting up the arrays to select password characters from 

    var upchar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S","T","U","V","W","X","Y","Z"];
    var lowchar = ["a", "b", "c", "d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var numchar = ["1", "2", "3", "4", "5", "6","7","8","9"];
    var symchar = ["#", "@", "/", "*", "!", "$","<",">","~","+","^","%"];

// building the consolidated array based upon user selection criteria

    if (upcase === true) {allchars=allchars.concat(upchar);}
    if (lowcase === true) {allchars=allchars.concat(lowchar);} 
    if (numtype === true) {allchars=allchars.concat(numchar);}
    if (symtype === true) {allchars=allchars.concat(symchar);}

    console.log(allchars);

// building the password based upon input criteria 

    for(var i=0; i < passlength; i++) {
    var j = Math.floor(Math.random() * allchars.length);
    passwrd = passwrd + allchars[j];

    console.log(j);
    console.log(allchars[j]);
    console.log(passwrd)
    }
// alert("your password is " + passwrd);

// inserting the new password into the element for display and changing some of the colors so it "pops"

    document.getElementById("passwrd-display").innerHTML = passwrd;
    document.getElementById("passwrd-display").setAttribute ("style" ,
                        "background-color:lightgoldenrodyellow");

        event.currentTarget.setAttribute(
            "style",
            "background-color: blue");

    generateBtn.innerHTML= "Here's your new password!";;
}

// defining the generateBtn element 

    var generateBtn = document.getElementById("generate");

// Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);
