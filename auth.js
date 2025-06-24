// Common functions for both login and signup
document.addEventListener('DOMContentLoaded', function() {
    // Toggle password visibility
    const togglePassword = (inputId, toggleId) => {
        const passwordInput = document.getElementById(inputId);
        const toggleBtn = document.getElementById(toggleId);
        
        toggleBtn.addEventListener('click', function() {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            this.innerHTML = type === 'password' ? '<i class="far fa-eye"></i>' : '<i class="far fa-eye-slash"></i>';
        });
    };

    // Initialize password toggles
    if(document.getElementById('toggleLoginPassword')) {
        togglePassword('loginPassword', 'toggleLoginPassword');
    }
    
    if(document.getElementById('toggleSignupPassword')) {
        togglePassword('signupPassword', 'toggleSignupPassword');
    }

    // Login functionality
    if(document.getElementById('loginBtn')) {
        document.getElementById('loginBtn').addEventListener('click', loginUser);
    }

    // Signup functionality
    if(document.getElementById('signupBtn')) {
        document.getElementById('signupBtn').addEventListener('click', signupUser);
    }
});

// Login function
function loginUser() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    if(!email || !password) {
        alert('Please fill in all fields');
        return;
    }

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Redirect to home page after successful login
            window.location.href = "index.html";
        })
        .catch((error) => {
            alert(error.message);
        });
}

// Signup function
function signupUser() {
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;
    
    // Validate inputs
    if(!name || !email || !password || !confirmPassword) {
        alert('Please fill in all fields');
        return;
    }
    
    if(password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }
    
    if(password.length < 6) {
        alert('Password must be at least 6 characters');
        return;
    }

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Update user profile with name
            return userCredential.user.updateProfile({
                displayName: name
            });
        })
        .then(() => {
            // Redirect to home page after successful signup
            window.location.href = "index.html";
        })
        .catch((error) => {
            alert(error.message);
        });
              }
