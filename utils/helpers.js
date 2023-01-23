const dayjs = require('dayjs')


module.exports = {
  format_date: date => {
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  },

  today: () => {
    return dayjs().format('YYYY-MM-DDTHH:MM');
  }
};

