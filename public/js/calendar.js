document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        timeZone: 'UTC',
        events: [
            { // this object will be "parsed" into an Event Object
                id: 1,
                title: 'Appt 1', // a property!
                start: '2023-01-01', // a property!
                // end: '2023-01-02' // a property! ** see important note below about 'end' **
            },
            { // this object will be "parsed" into an Event Object
                id: 2,
                title: 'The Title', // a property!
                start: '2023-01-03', // a property!
                // end: '2023-01-02' // a property! ** see important note below about 'end' **
            },
            { // this object will be "parsed" into an Event Object
                id: 3,
                title: 'The Title', // a property!
                start: '2023-01-04', // a property!
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
