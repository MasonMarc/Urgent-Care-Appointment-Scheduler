const { noExtendLeft } = require("sequelize/types/lib/operators");

const appointmentAdd = async function (event) {
  event.preventDefault();

  const titleEl = document.querySelector('#title-input');
  const startEl = document.querySelector('#start-input');

  console.log(startEl.value);

  const response = await fetch('/api/appointments', {
    method: 'POST',
    body: JSON.stringify({
      title: titleEl.value,
      start: startEl.value,

    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/calendar');
    alert('Your appointment has been scheduled!')
  } else {
    alert('There was a problem with this appointment! Please try again.');
  }
};

document
  .querySelector('#appt-form')
  .addEventListener('submit', appointmentAdd);