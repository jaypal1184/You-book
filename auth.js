// src/js/auth.js में ये फंक्शन्स जोड़ें
function loginUser() {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      window.location.href = "profile.html";
    })
    .catch(error => {
      alert("Login Error: " + error.message);
    });
}

// Signup function भी इसी तरह जोड़ें
