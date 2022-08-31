const http = require("http");
const estadoLista = require("./database/estados.json");

const server = http.createServer((request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.write(JSON.stringify(estadoLista));

  return response.end();
});

server.listen(8000);
