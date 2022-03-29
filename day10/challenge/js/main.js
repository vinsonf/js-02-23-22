// get elements from dom
const body = document.body;


// Create a new element
const usernameInput = document.createElement('input');
const passwordInput = document.createElement('input');
const confirmPasswordInput = document.createElement('input');
const submitButton = document.createElement('button');
const p = document.createElement('p');

// Add elements to the DOM
body.append(usernameInput);
addLine();
body.append(passwordInput);
addLine();
body.append(confirmPasswordInput);
addLine();
body.append(submitButton);
body.append(p);


// Labels
usernameInput.placeholder = 'Username';
passwordInput.placeholder = 'Password';
confirmPasswordInput.placeholder = 'Confirm password';
submitButton.innerText = 'Submit';

// Listeners
usernameInput.addEventListener('input', checkAllFieldsAreValid);
passwordInput.addEventListener('input', checkAllFieldsAreValid);
confirmPasswordInput.addEventListener('input', checkAllFieldsAreValid);
submitButton.addEventListener('click', () => {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (password !== confirmPassword) {
        p.innerHTML = 'Passwords do not match';
    } else {
        p.innerHTML = 'Passwords match';
    }
});




// helper functions
function checkAllFieldsAreValid() {
    let disabled = false;
    const username = usernameInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (username.length < 5) {
        disabled = true;
    }
    if (password.length < 4) {
        disabled = true;
    }
    if (confirmPassword.length < 4) {
        disabled = true;
    }

    if (disabled) {
        submitButton.disabled = true;
    } else {
        submitButton.disabled = false;
    }
}

function addLine() {
    const hr = document.createElement('hr');
    body.append(hr);
}


// runtime
checkAllFieldsAreValid();