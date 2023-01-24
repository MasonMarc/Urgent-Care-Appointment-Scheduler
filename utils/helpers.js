const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
dayjs.extend(utc)

module.exports = {
  format_date: date => {
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  },

  today: () => {
    return dayjs().utc().format('YYYY-MM-DDTHH:MM');
  }
};

