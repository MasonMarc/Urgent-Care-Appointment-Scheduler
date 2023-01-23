const dayjs = require('dayjs')
dayjs().format()

let today = dayjs().format('YYYY-MM-DDTHH:MM:A');

const current = () => {
    return today;
}

console.log(current())
