
document.addEventListener('DOMContentLoaded', async function () {
    var calendarEl = document.getElementById('calendar');
    var events = await getEvents();
    var calendar = new FullCalendar.Calendar(calendarEl, {

        timeZone: 'local',
        events: events,
        selectable: true,
        businessHours: {
            daysOfWeek: [0, 1, 2, 3, 4, 5, 6],
        },
        selectConstraint: "businessHours",
        resources: {
            url: '/seeds/appointment_seed.json',
            method: ''
        },
        eventDidMount: (info) => {
            console.log(info);
        },
        eventClick: function (info) {
            console.log('This appointment is: ' + info.event.title);
            // this is where we add functionality to view an appointment
        },
        dateClick: function (info) {
            console.log(info)
            const myModalAlternative = new bootstrap.Modal('#appointmentModal', {})
            myModalAlternative.show();
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
