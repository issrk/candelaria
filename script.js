document.addEventListener('DOMContentLoaded', () => {
    // Registration form
    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();

const form = document.getElementById('form')
const Name = document.getElementById('Name')
const Email = document.getElementById('Email')
const Repeat = document.getElementById('Repeat')

if (!name || !email || !password || !repeatPassword) {
    alert('Please fill in all fields.');
    return;
}

if (password !== repeatPassword) {
    alert('Passwords do not match.');
    return;
}

alert('Registration successful!');
});
}

// Login form
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        const rememberMe = document.getElementById('rememberMe').checked;

       
        if (!email || !password) {
            alert('Please fill in both fields.');
            return;
        }

        
        if (email === 'user@example.com' && password === 'password') {
            alert(`Login successful! Remember me: ${rememberMe}`);
        } else {
            alert('Invalid email or password.');
        }
    });
}
});