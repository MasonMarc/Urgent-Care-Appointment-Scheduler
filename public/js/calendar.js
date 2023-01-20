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
        businessHours: {
            // days of week. an array of zero-based day of week integers (0=Sunday)
            daysOfWeek: [ 1, 2, 3, 4, 5, 6, 7], // Monday - Thursday
          
            startTime: '08:00', // a start time (10am in this example)
            endTime: '20:00', // an end time (6pm in this example)
          },
        eventDidMount: (info) => {
            console.log(info);
        }
    });
        // var calendar = new Calendar(calendarEl, {

        //     eventClick: function(info) {
        //       alert('Event: ' + info.event.title);
        //       alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
        //       alert('View: ' + info.view.type);
          
        //       // change the border color just for fun
        //       info.el.style.borderColor = 'red';
        //     }
        //   });
 
    calendar.render();
});
