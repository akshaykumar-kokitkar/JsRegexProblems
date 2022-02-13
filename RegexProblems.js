/* UC 1: The Postal Index Number (PIN) or PIN Code is a 6 digit code of Post Office numbering used
by India Post. Create a regex pattern to validate PIN Code UC 1 PIN code 400088
*/
{
    let validateWithoutSpace = () => {
        try {
            let pincode = "400088";
            let pincodePattern = new RegExp('^[1-9]{1}[0-9]{5}$');
            if (pincodePattern.test(pincode))
                console.log('Pincode is valid.');
            else
                throw 'Pincode is not valid.';
        }
        catch (e) {
            console.error(e);
        }
    }
    validateWithoutSpace();
}


// UC 2: Restrict the PIN code from taking alphabets or special characters at the beginning.
{
    let validatePincode = () => {
        try {
            let pincode = "A400088";
            let pincodePattern = new RegExp('^[1-9]{1}[0-9]{5,}$');
            if (pincodePattern.test(pincode))
                console.log('Pincode is valid.');
            else
                throw 'Pincode is not valid.';
        }
        catch (e) {
            console.error(e);
        }
    }
    validatePincode();
}


// UC 3: Restrict the PIN code from taking alphabets or special characters at the End.
{
    let validatePincode = () => {
        try {
            let pincode = "400088B";
            let pincodePattern = new RegExp('^[1-9]{1}[0-9]{5,}$');
            if (pincodePattern.test(pincode))
                console.log('Pincode is valid.');
            else
                throw 'Pincode is not valid.';
        }
        catch (e) {
            console.error(e);
        }
    }
    validatePincode();
}


// UC 4: Make sure 400 088 is also valid along with 400088
{
    let validatePincode = () => {
        try {
            //take user input
            const prompt=require("prompt-sync")();
            let pincode = prompt("Enter pincode: ");
            let pincodePattern = new RegExp('^[1-9]{1}[0-9]{2}\\s?[0-9]{3}$');
            if (pincodePattern.test(pincode))
                console.log('Pincode is valid.');
            else
                throw 'Pincode is not valid.';
        }
        catch (e) {
            console.error(e);
        }
    }
    validatePincode();
}


/* UC 5:- Validate Email address with a regex. The email consists of minimum 3 and optional 2 more
parts with mandatory @ and .    ex:- abc.xyz@bridgelabz.co.in 
Here abc, bridgelabz and co are mandatory and the remaining 2 are optional
To begin with lets validate the mandatory part and start with abc
*/
const prompt=require("prompt-sync")();
{
    let emailId = prompt("Enter your email id: ");
    try {
        let emailPattern = new RegExp("^(abc).?[a-z]{3,}[@][a-z]{5,}.?[a-z]{2,}$");
        if (emailPattern.test(emailId))
            console.log('Email id is valid.');
        else
            throw 'Email id is not valid.';
    }
    catch (e) {
        console.error(e);
    }
}


/* UC 6: Ensure @ and validate the mandatory 2nd part i.e. bridgelabz */
{
    let emailId = prompt("Enter your email id: ");
    try {
        let emailPattern = new RegExp("^(abc).?[a-z]{3,}[@](bridgelabz).?[a-z]{2,}$");
        if (emailPattern.test(emailId))
            console.log('Email id is valid.');
        else
            throw 'Email id is not valid.';
    }
    catch (e) {
        console.error(e);
    }
}


/* UC 7: Ensure “.” after bridgelabz and validate the mandatory 3rd part i.e. co */
{
    let emailId = prompt("Enter your email id: ");
    try {
        let emailPattern = new RegExp("^(abc).?[a-z]{3,}[@](bridgelabz).?(co).?[a-z]{2,}$");
        if (emailPattern.test(emailId))
            console.log('Email id is valid.');
        else
            throw 'Email id is not valid.';
    }
    catch (e) {
        console.error(e);
    }
}


/* UC 8: Lets handle optional part i.e. xyz in abc.xyz@bridgelabz.co.in
NOTE: make sure only following are valid special characters _,+,-,. proceeding to xyz 
*/
{
    let emailId = prompt("Enter your email id: ");
    try {
        let emailPattern = new RegExp("^(abc)[\. _ + -]{1}[a-z]{3,}[@](bridgelabz).?(co).?[a-z]{2,}$");
        if (emailPattern.test(emailId))
            console.log('Email id is valid.');
        else
            throw 'Email id is not valid.';
    }
    catch (e) {
        console.error(e);
    }
}