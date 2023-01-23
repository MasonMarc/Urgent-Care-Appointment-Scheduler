const dayjs = require('dayjs')
//import dayjs from 'dayjs' // ES 2015
dayjs().format()

let today = dayjs().format('YYYY-MM-DDTHH:MM:A');

const current = () => {
    return today;
}

console.log(current())
