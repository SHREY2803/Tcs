function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // Implement your authentication logic here.
    // For simplicity, let's assume the user is authenticated if email and password are valid.
    // In a real-world scenario, you should use a secure authentication mechanism like Firebase or a server-side solution.
  
    // For demo purposes, you can check hardcoded credentials.
    const validEmail = "20BEE079@sot.pdpu.ac.in";
    const validPassword = "ramit079@PDEU";
  
    if (email === validEmail && password === validPassword) {
      // Redirect to the home page after successful login.
      window.location.href = "./index.html";
    } else {
      alert("Invalid email or password. Please try again.");
    }
  }
  