const http = require('http');

const requestListener = (req, res) => {
  console.dir(req, {depth: 0});
  res.write('Hello Node\n');
  res.end();
}

const server = http.createServer(requestListener);
//longer syntax is using the event emmitter syntax
//server.on('request', requestListener);

server.listen(4242, () => {
  console.log('Server is running...');
});
