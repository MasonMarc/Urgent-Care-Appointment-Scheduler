const appointmentAdd = async function (event) {
    event.preventDefault();
  
    const titleEl = document.querySelector('#title-input');
    const startEl = document.querySelector('#start-input');

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
    alert('appointment added')
  } else {
    alert('Failed to add');
  }
};

document
  .querySelector('#appt-form')
  .addEventListener('submit', appointmentAdd);