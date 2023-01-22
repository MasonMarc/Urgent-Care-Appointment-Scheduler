
document.addEventListener('DOMContentLoaded', function (x, y) {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {

        timeZone: 'UTC',
        events: [
            { // this object will be "parsed" into an Event Object
                id: 1,
                title: x, // a property!
                start: y, // a property!
                // end: '2023-01-02' // a property! ** see important note below about 'end' **
            }
        ],
        selectable: true,
        businessHours: {
            // days of week. an array of zero-based day of week integers (0=Sunday)
            daysOfWeek: [0, 1, 2, 3, 4, 5, 6], // Monday - Thursday

            startTime: '08:00', // a start time (10am in this example)
            endTime: '20:00', // an end time (6pm in this example)
        },
        resources: {
            url: '/seeds/appointment_seed.json',
            method: ''
        },
        eventDidMount: (info) => {
            console.log(info);
        },
        eventClick: function (info) {
            alert('This appointment is: ' + info.event.title);
            // this is where we add functionality to view an appointment
        },
        dateClick: function (info) {
            alert('This day is: ' + info.dateStr);
            // This is where we add functionality to book an appointment
        }
    });
    calendar.render();
});

const addEvents = async () => {

    const response = await fetch('/api/appointments', {
        method: 'GET',
        body: JSON.stringify({
            title: title,
            start: start,
        }),
        headers: { 'Content-Type': 'application/json' },
    })
        .then((title, start) => {
            console.log(title + ' ' + start)
            addEventListener(title, start);
        })
    if (response.ok) {
        alert("good")
    } else {
        alert('Failed');
    }

};





addEvents();

