'use strict';

module.exports.endpoint = async () => {
  return {
    statusCode: 200,
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
        key: 'value',
        random: Date.now().toString(),
    }),
  }
};
