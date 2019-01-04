//number of kits
var centMk10 = 0;
var centAVRE = 0;
var M4A3E8 = 0;
var t3485 = 0;
var spitfire = 0;
var p51mustang = 0;
var bf109g6 = 0;
var yak3 = 0;

var centMk10c = 55.95;
var centAVREc = 150.00;
var M4A3E8c = 35.50;
var t3485c = 44.95;
var spitfirec = 75.95;
var p51mustangc = 66.50;
var bf109g6c = 70.49;
var yak3c = 60.95;

$ (function() {
    $( "#accordion" ).accordion( { heightStyle: "content" } ); } );

function addToCart(){
    var modelKitHeader = "";
    var modelKitCount = "";
    var modelKitPrice = "";

    var modelName = "";
    var modelCount = "";
    var modelPrice = "";

    var customerTotal = 0.0;

    centMk10 = document.getElementById("centMk10").value;
    centAVRE = document.getElementById("centAVRE").value;
    M4A3E8 = document.getElementById("M4A3E8").value;
    t3485 = document.getElementById("t3485").value;
    spitfire = document.getElementById("spitfire").value;
    p51mustang = document.getElementById("p51mustang").value;
    bf109g6 = document.getElementById("bf109g6").value;
    yak3 = document.getElementById("yak3").value;

    if( centMk10 != 0 ||  
        centAVRE != 0 || 
        M4A3E8 != 0 ||
        t3485 != 0 || 
        spitfire != 0 || 
        p51mustang != 0 || 
        bf109g6 != 0 || 
        yak3 != 0 ){

        modelKitHeader = "Model Kit:";
        modelKitCount = "Amount:";
        modelKitPrice = "Price ($):";
        customerTotal = 0.0;
    }
    else{
        modelKitHeader = "Your cart is empty.";
        modelKitCount = "";
        modelKitPrice = "";
        modelName = "";
        modelCount = "";
        modelPrice = "";
        customerTotal = "N/A";
    }

    if(centMk10 != 0){
        modelName += "<p>British Army Centurion Mk.10</p>";
        modelCount += "<p>" + centMk10 + "</p>";
        modelPrice += "<p>" + parseFloat(centMk10c) * parseFloat(centMk10) + "</p>";
        customerTotal += parseFloat(centMk10c) * parseFloat(centMk10);
    }
    if(centAVRE != 0){
        modelName += "<p>British Army Centurion AVRE 165 (Gulf War)</p>";
        modelCount += "<p>" + centAVRE + "</p>";
        modelPrice += "<p>" + parseFloat(centAVREc) * parseFloat(centAVRE) + "</p>";
        customerTotal += parseFloat(centAVREc) * parseFloat(centAVRE);
    }
    if(M4A3E8 != 0){
        modelName += "<p>United States Army Corps M4A3E8 Sherman</p>";
        modelCount += "<p>" + M4A3E8 + "</p>";
        modelPrice += "<p>" + parseFloat(M4A3E8c) * parseFloat(M4A3E8) + "</p>";
        customerTotal += parseFloat(M4A3E8c) * parseFloat(M4A3E8);
    }
    if(t3485 != 0){
        modelName += "<p>Soviet Red Army T-34/85 (1945)</p>";
        modelCount += "<p>" + t3485 + "</p>";
        modelPrice += "<p>" + parseFloat(t3485c) * parseFloat(t3485) + "</p>";
        customerTotal += parseFloat(t3485c) * parseFloat(t3485);
    }
    if(spitfire != 0){
        modelName += "<p>Royal Air Force Supermarine Spitfire Mk. IX</p>";
        modelCount += "<p>" + spitfire + "</p>";
        modelPrice += "<p>" + parseFloat(spitfirec) * parseFloat(spitfire) + "</p>";
        customerTotal += parseFloat(spitfirec) * parseFloat(spitfire);
    }
    if(p51mustang != 0){
        modelName += "<p>United States Air Force North American P-51D Mustang</p>";
        modelCount += "<p>" + p51mustang + "</p>";
        modelPrice += "<p>" + parseFloat(p51mustangc) * parseFloat(p51mustang) + "</p>";
        customerTotal += parseFloat(p51mustangc) * parseFloat(p51mustang);
    }
    if(bf109g6 != 0){
        modelName += "<p>Luftwaffe Messerschmitt Bf 109 G-6</p>";
        modelCount += "<p>" + bf109g6 + "</p>";
        modelPrice += "<p>" + parseFloat(bf109g6c) * parseFloat(bf109g6) + "</p>";
        customerTotal += parseFloat(bf109g6c) * parseFloat(bf109g6);
    }
    if(yak3 != 0){
        modelName += "<p>Soviet Air Force Yakovlev Yak-3</p>";
        modelCount += "<p>" + yak3 + "</p>";
        modelPrice += "<p>" + parseFloat(yak3c) * parseFloat(yak3) + "</p>";
        customerTotal += parseFloat(yak3c) * parseFloat(yak3);
    }

    document.getElementById("modelKitHeader").innerHTML = modelKitHeader;
    document.getElementById("modelKitCount").innerHTML = modelKitCount;
    document.getElementById("modelKitPrice").innerHTML = modelKitPrice;
    
    document.getElementById("modelName").innerHTML = modelName;
    document.getElementById("modelCount").innerHTML = modelCount;
    document.getElementById("modelPrice").innerHTML = modelPrice;

    document.getElementById("customerTotal").innerHTML = customerTotal;
}
/*
function placeOrder(){
    $.ajax({
        type    : "POST",
        url     : "submit.php",
        data    : { 
                    "centMk10" : centMk10, 
                    "centAVRE" : centAVRE,
                    "M4A3E8" : M4A3E8,
                    "t3485" : t3485,
                    "spitfire" : spitfire,
                    "p51mustang" : p51mustang,
                    "bf109g6" : bf109g6,
                    "yak3" : yak3
                },
        success : function(){
            alert("asdfadsf");
        }
    });
}
*/
//validation

var allFieldsValid = false;

//this function will return true if all fields are validated, if it returns false, form will not submit
function continueOrNot(){
    if(allFieldsValid){
        //placeOrder();
    }
    return allFieldsValid;
}
//this function is called on load and focuses the customer's first name entry box
function focusThis(){
	document.getElementById("customerFirstName").focus();
}
//get rid of white spaces
function trimWhiteSpace(inputString){
    return inputString.trim();
}
//to uppercase
function allUpperCase(inputString){
    return inputString.toUpperCase();
}
//this function checks to make sure mandatory fields aren't empty
function checkIfFilled(){
    var alreadyFocused = false;
    var compoundErrorMessage = "Please fill in the mandatory fields highlighted in red.<br>";
    var isMatch = false;

    document.getElementById("customerFirstName").style.removeProperty("border");
    document.getElementById("customerLastName").style.removeProperty("border");
    document.getElementById("phoneNumber").style.removeProperty("border");
    document.getElementById("address").style.removeProperty("border");
    document.getElementById("city").style.removeProperty("border");
    document.getElementById("province").style.removeProperty("border");
    document.getElementById("postalCode").style.removeProperty("border");

    if(document.getElementById("customerFirstName").value == ""){
        document.getElementById("customerFirstName").style.borderColor = "red";
        compoundErrorMessage += "Error: The &quot;First Name&quot; field cannot be blank.<br>";
        if(alreadyFocused == false){
            alreadyFocused = true;
            document.getElementById("customerFirstName").focus();
        }
        allFieldsValid = false;
    } else {
        document.getElementById("customerFirstName").value = firstLetterUpperCase(document.getElementById("customerFirstName").value);
        allFieldsValid = true;
    }
    if(document.getElementById("customerLastName").value == ""){
        document.getElementById("customerLastName").style.borderColor = "red";
        compoundErrorMessage += "Error: The &quot;Last Name&quot; field cannot be blank.<br>";
        if(alreadyFocused == false){
            alreadyFocused = true;
            document.getElementById("customerLastName").focus();
        }
        allFieldsValid = false;
    } else {
        document.getElementById("customerLastName").value = firstLetterUpperCase(document.getElementById("customerLastName").value);
    }
    //calls phone number validation function to validate phone number
    if(document.getElementById("phoneNumber").value == ""){
        document.getElementById("phoneNumber").style.borderColor = "red";
        compoundErrorMessage += "Error: The &quot;Phone Number&quot; field cannot be blank. Phone number format must be xxx-xxx-xxxx or 10 numbers without the dashes.<br>";
        if(alreadyFocused == false){
            alreadyFocused = true;
            document.getElementById("phoneNumber").focus();
        }
        allFieldsValid = false;
    } else if(!validatePhoneNumber(document.getElementById("phoneNumber").value)){
        document.getElementById("phoneNumber").style.borderColor = "red";
        compoundErrorMessage += "Error: The &quot;Phone Number&quot; format must be xxx-xxx-xxxx or 10 numbers without the dashes.<br>";
        if(alreadyFocused == false){
            alreadyFocused = true;
            document.getElementById("phoneNumber").focus();
        }
        allFieldsValid = false;
    } else {
        document.getElementById("phoneNumber").value = trimWhiteSpace(document.getElementById("phoneNumber").value);
    }
    //make sure address can't be blank
    if(document.getElementById("address").value == ""){
        document.getElementById("address").style.borderColor = "red";
        compoundErrorMessage += "Error: The &quot;Address&quot; field cannot be blank.<br>";
        if(alreadyFocused == false){
            alreadyFocused = true;
            document.getElementById("address").focus();
        }
        allFieldsValid = false;
    } else {
        document.getElementById("address").value = firstLetterUpperCase(document.getElementById("address").value);
    }
    //make sure city can't be blank
    if(document.getElementById("city").value == ""){
        document.getElementById("city").style.borderColor = "red";
        compoundErrorMessage += "Error: The &quot;City&quot; field cannot be blank.<br>";
        if(alreadyFocused == false){
            alreadyFocused = true;
            document.getElementById("city").focus();
        }
        allFieldsValid = false;
    } else {
        document.getElementById("city").value = firstLetterUpperCase(document.getElementById("city").value);
    }
    //make sure province field can't be the default value
    if(document.getElementById("province").value == "default"){
        document.getElementById("province").style.borderColor = "red";
        compoundErrorMessage += "Error: The &quot;Province&quot; selection cannot be the default value, please select a province.<br>";
        if(alreadyFocused == false){
            alreadyFocused = true;
            document.getElementById("province").focus();
        }
        allFieldsValid = false;
    }
    //regex for postal code
    if(validatePostalCode(document.getElementById("postalCode").value) == false){
        document.getElementById("postalCode").style.borderColor = "red";
        compoundErrorMessage += "Error: The &quot;Postal Code&quot; must be in A1B2C3 or in A1B 2C3 format.<br>";
        if(alreadyFocused == false){
            alreadyFocused = true;
            document.getElementById("postalCode").focus();
        }
        allFieldsValid = false;
    } else {
        document.getElementById("postalCode").value = allUpperCase(document.getElementById("postalCode").value.trim());
    }

    if( centMk10 == 0 &&  
        centAVRE == 0 && 
        M4A3E8 == 0 && 
        t3485 == 0 && 
        spitfire == 0 && 
        p51mustang == 0 && 
        bf109g6 == 0 && 
        yak3 == 0 ){
            alert("You have not added anything to the cart! You cannot place an order without purchasing anything.");
            compoundErrorMessage += "Error: You cannot place an order without anything in the cart.";
            allFieldsValid = false;
    }
    
    //for formatting
    if(compoundErrorMessage == "Please fill in the mandatory fields highlighted in red.<br>"){
        compoundErrorMessage = "<br>";
    }
    document.getElementById("errorMessages").innerHTML = compoundErrorMessage;
}
//this function validates the phone number using regex
function validatePhoneNumber(number){
    var pattern1 = /^\d{3}\d{3}\d{4}$/; //first pattern for matching with no dashes
    var pattern2 = /^\d{3}-{1}\d{3}-{1}\d{4}$/; //second pattern for matching with both dashes

    if(trimWhiteSpace(number).match(pattern1)){
        return true;
    } else if(trimWhiteSpace(number).match(pattern2)){
        return true;
    }
    return false;
}
function validatePostalCode(postalCode){
    //pattern for postal code
    //1 letter, 1 number, 1 letter, optional space, 1 number, 1 letter, 1 number
    var pattern = /^[a-z]{1}\d{1}[a-z]{1} ?\d{1}[a-z]{1}\d{1}/; 

    //trims whitespace from postal code, send to lower, and matches to pattern
    if(trimWhiteSpace(postalCode).toLowerCase().match(pattern)){
        return true;
    } 
    return false;
}
function firstLetterUpperCase(inputString){
    inputString = trimWhiteSpace(inputString);

    //after trimming whitespace, letter at index 0 should be first letter to capitalize
    return inputString.charAt(0).toUpperCase() + inputString.slice(1); 
}