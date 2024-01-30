function validateForm() {
    var phonenumberPattern = /^\d{10}$/;
    var pincodePattern = /^\d{6}$/;

    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var dob = document.getElementById('dob').value;
    var phonenumber = document.getElementById('phonenumber').value;
    var whatsappnumber = document.getElementById('whatsappnumber').value;
    var pincode = document.getElementById('pincode').value;
    var State = document.getElementById('State').value;
    var City = document.getElementById('City').value;

    if (!firstname || !lastname || !dob || !phonenumber || !whatsappnumber || !pincode || !State || !City) {
        alert("All fields are required");
        return false;
    }

    if (!phonenumberPattern.test(phonenumber)) {
        alert("Invalid phone number format");
        return false;
    }

    if (!pincodePattern.test(pincode)) {
        alert("Invalid pincode format");
        return false;
    }

    alert("Registration successful!");
    return true;
}

