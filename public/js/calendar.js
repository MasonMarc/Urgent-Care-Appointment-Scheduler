document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: [
            { // this object will be "parsed" into an Event Object
                title: 'The Title', // a property!
                start: '2023-01-01', // a property!
                end: '2023-01-02' // a property! ** see important note below about 'end' **
            }
        ],
        dateClick: function () {
            console.log("Test");
        },
        plugins: [
        ],
        selectable: true
    });
    calendar.render();
    calendar.on("dateClick", (e) => {
        console.log(e);
    })
});