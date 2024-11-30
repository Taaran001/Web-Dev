const loginForm = document.getElementById('login-form');
const loginBtn = document.getElementById('login-btn');
const errorMessage = document.getElementById('error-message');
const studentStatusSelect = document.getElementById('student-status');
const studentOptionsDiv = document.getElementById('student-options');

studentStatusSelect.addEventListener('change', (e) => {
    if (e.target.value === 'student' || e.target.value === 'alumni') {
        studentOptionsDiv.style.display = 'block';
    } else {
        studentOptionsDiv.style.display = 'none';
    }
});

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const studentStatus = document.getElementById('student-status').value;
    const university = document.getElementById('university').value;
    const course = document.getElementById('course').value;

    // Validate input fields
    if (email === '' || password === '') {
        errorMessage.textContent = 'Please fill in all fields';
        return;
    }

    // Check if student status is student or alumni, then validate university and course fields
    if (studentStatus === 'student' || studentStatus === 'alumni') {
        if (university === '' || course === '') {
            errorMessage.textContent = 'Please fill in all fields';
            return;
        }
    }

    // Login logic here
    console.log('Login successful!');
});
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("loader").style.display = "block";
    // Add a timeout to hide the loader after 2 seconds
    setTimeout(function() {
        document.getElementById("loader").style.display = "none";
    }, 2000);
});


