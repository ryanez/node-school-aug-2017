const MAX_BUFFER_SIZE = 5;

let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);
let port = process.env.PORT || 3000;
let messages = [];

app.get('/', (req, res) => res.send([
    '<!DOCTYPE html>',
    '<html><body>',
    `<h1>Last ${Math.min(MAX_BUFFER_SIZE, messages.length)} messages</h1>`,
    '<ul>',
    messages.map(data => `<li>${data.value}</li>`).join(''),
    '</ul>',
    '</body></html>'
  ]
  .join('')));
http.listen(port, () => console.log(`listening on *:${port}`));

io.on('connection', socket => {
  socket.emit('messages', messages);

  socket.on('message', data => {
    console.log(`message: ${data.value}`);
    socket.broadcast.emit('message', data);

    if (messages.length >= MAX_BUFFER_SIZE) {
      messages.splice(0, 1);
    }

    messages.push(data);
  })
});