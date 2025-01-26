// npm packages
const logEvents=require('./newindex')

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('log', (msg) => {
  logEvents(msg)
});
myEmitter.emit('log','log event emiiter');