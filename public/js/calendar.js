
document.addEventListener('DOMContentLoaded', async function () {
    var calendarEl = document.getElementById('calendar');
    var events = await getEvents();
    var calendar = new FullCalendar.Calendar(calendarEl, {

        timeZone: 'UTC',
        events:events,
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
            console.log(info)
            // This is where we add functionality to book an appointment
        }
    });
    calendar.render();
});

const getEvents = async () => {
   
    const response = await fetch('/api/appointments')
    console.log(response)
    const eventData = await response.json()
    console.log(eventData)
    // const events = eventData.map(calendarEvent => {
    //     calendarEvent.start = new Date (calendarEvent.start)
    //     return calendarEvent
    // }) 

    return eventData


};
