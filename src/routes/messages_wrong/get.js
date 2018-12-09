
const db = require('../../libs/db');

async function response() {
  
  let data = await db.models.messages.findAll();
  let count = await db.models.messages.count();

  return {
    meta: {
      total: count
    },
    data: data
  };
}

module.exports = {
  method: 'GET',
  path: '/messages_wrong',
  options: {
    handler: response
  }
};