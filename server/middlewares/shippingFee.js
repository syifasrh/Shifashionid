const request = require("request");

const options = {
  method: 'GET',
  url: 'https://api.rajaongkir.com/basic/province',
  qs: {id: '12'},
  headers: {key: 'f1ee34113fe0a2a851b4e5fa9475b70b'}
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});