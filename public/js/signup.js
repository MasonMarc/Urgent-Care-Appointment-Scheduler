const signupFormHandler = async function (event) {
  event.preventDefault();

  const usernameEl = document.querySelector('#username-input-signup');
  const emailEl = document.querySelector('#email-input-signup');
  const firstnameEl = document.querySelector('#firstname-input-signup');
  const lastnameEl = document.querySelector('#lastname-input-signup');
  const telephoneEl = document.querySelector('#tel-input-signup');
  const passwordEl = document.querySelector('#password-input-signup');

  const response = await fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify({
      username: usernameEl.value,
      email: emailEl.value,
      firstname: firstnameEl.value,
      lastname: lastnameEl.value,
      telephone: telephoneEl.value,
      password: passwordEl.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to sign up');
  }
};

document
  .querySelector('#signup-form')
  .addEventListener('submit', signupFormHandler);
