document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        timeZone: 'UTC',
        events: [
            { // this object will be "parsed" into an Event Object
                id: 1,
                title: 'The Title', // a property!
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
        eventDidMount: (info) => {
            console.log(info);
        }
    });
    calendar.render();
});
