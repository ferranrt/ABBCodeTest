const WebSocketServer = require('websocket').server;
const http = require('http');

const server = http.createServer(() => {});

const INTERVAL = 5000;
const status = ['success', 'warning', 'danger'];
const properties = ['X', 'Y', 'Z', 'diam', 'len'];

server.listen(8080, () => {});
const wsServer = new WebSocketServer({
  httpServer: server,
});

const randFromArr = array => {
  return array[Math.floor(Math.random() * array.length)];
};

const features = [
  {
    name: 'Seam 1',
    sizeComponent: 'XXL',
    status: randFromArr(status),
    controls: [],
  },
  {
    name: 'Slot 1',
    sizeComponent: 'M',
    status: randFromArr(status),
    controls: [],
  },
  {
    name: 'Hole 1',
    sizeComponent: 'M',
    status: randFromArr(status),
    controls: [],
  },
  {
    name: 'Seam 2',
    sizeComponent: 'M',
    status: randFromArr(status),
    controls: [],
  },
  {
    name: 'Slot 2',
    sizeComponent: 'M',
    status: randFromArr(status),
    controls: [],
  },
  {
    name: 'Hole 2',
    sizeComponent: 'XL',
    status: randFromArr(status),
    controls: [],
  },
];

const generateNewData = () => {
  const output = [];
  for (let index = 0; index < features.length; index += 1) {
    const feature = { name: features[index].name, controls: [] };
    for (let j = 0; j < properties.length; j += 1) {
      feature.controls.push({
        cname: properties[j],
        dev: (Math.random() * 16).toFixed(2) + 1,
        devout: (Math.random() * 4).toFixed(2) + 1,
        tol: randFromArr(status),
      });
    }
    output.push(feature);
  }
  return output;
};

wsServer.on('connect', request => {
  request.send(JSON.stringify({ type: 'broadcast', content: features }));
});

wsServer.on('request', function(request) {
  const connection = request.accept(null, request.origin);
  connection.on('message', () => {});
  connection.on('close', () => {});

  setInterval(() => {
    wsServer.broadcast(
      JSON.stringify({ type: 'control', content: generateNewData() }),
    );
  }, INTERVAL);
});
