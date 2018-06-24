function displayErrorMessageForFirstname() {
    valid++;
    $('#name').css("border", "solid 1px red");
    $('#errorfirstname').show();
}
function validateFirstname() {
    const firstname = $('#name').val();
    if (firstname === "" || !/^[a-zA-Z]*$/g.test(firstname)) {
        return false;
    }
    return true;
}
function displayErrorMessageForDate() {
    valid++;
    $('#date').css("border", "solid 1px red");
    $('#errordate').show();
}
