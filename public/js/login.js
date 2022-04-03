//log in
$('#login-button').click(logIn);

async function logIn(e) {
  e.preventDefault();

  const email = $('#login-email').val().trim();
  const password = $('#login-password').val();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      setTimeout(() => document.location.replace('/dashboard'), 200);
    } else {
      alert(response.statusText);
    }
  }
}

// sign up
const signUpMessage = $('#signup-message')
$('#signup-button').click(signUp);
async function signUp(event) {
  event.preventDefault();

  const name = $('#user-name').val().trim();
  const email = $('#email').val().trim();
  const password = $('#password').val();
  const confirmPassword = $('#confirm-password').val();

  if (password.length < 8) {
    signUpMessage.css('display', 'initial')
    signUpMessage.text(
      'Please use a password at least 8 characters long.'
    );
    return;
  }

  if (password !== confirmPassword) {
    signUpMessage.css('display', 'initial')
    signUpMessage.text('Passwords do not match, try again!');
    return;
  }

  if (name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      signUpMessage.text('Success!');
      setTimeout(() => document.location.replace('/dashboard'), 200);
    } else {
      alert(response.statusText);
    }
  }
}
