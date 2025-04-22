function submitForm() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const statusMessage = document.getElementById('status');


    if (!username || !email) {
        statusMessage.textContent = 'Please fill in all fields.';
        statusMessage.className = 'status error';
        return;
    }


    simulateFormSubmission(username, email)
        .then(response => {
            statusMessage.textContent = 'Registration successful!';
            statusMessage.className = 'status success';
        })
        .catch(error => {
            statusMessage.textContent = 'Registration failed: ' + error;
            statusMessage.className = 'status error';
        });
}

function simulateFormSubmission(username, email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email.includes('@')) {
                resolve('Success');
            } else {
                reject('Invalid email address');
            }
        }, 2000);
    });
}
