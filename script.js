let username = document.getElementById('submit')
username.addEventListener('click', () => {

    let name = document.getElementById('usertext').value;
    let nameRegex = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{8,14}$/g;
    nameRegex.test(name) ? name : document.getElementById('name_error').innerHTML = "Enter a valid username";

    let email = document.getElementById('emailtext').value;
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    emailRegex.test(email) ? email : document.getElementById('email_error').innerHTML = "Enter a valid Email id";

    let p = document.getElementById('passwordtext').value;
    errors = [];
    if (p.length < 8 || p.length > 16) {
        errors.push("Your password must be within 8 and 16 character length."); 
    }
    if (p.search(/[!@#$%^&*()_]/) < 0) {
        errors.push("Your password must contain one special character."); 
    }
    if (p.search(/[A-Z]/) < 0) {
        errors.push("Your password must contain at least one Capital letter.");
    }
    if (p.search(/[0-9]/) < 0) {
        errors.push("Your password must contain at least one number."); 
    }
    if (errors.length > 0) {
        document.getElementById('password_error').innerHTML = errors.join("<br>");
        return false;
    }
    return true;

})