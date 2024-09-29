document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation (in a real scenario, validate with the backend)
    if (username === 'administrator' && password === 'password') {
        // Redirect to another HTML page
        window.location.href = 'HTCs.html';
    } else {
        alert('Invalid username or password');
    }
});
