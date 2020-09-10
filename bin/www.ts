#!/usr/bin/env node

/**
 * Module dependencies.
 */

import debug from 'debug';
import http from 'http';
import cron from 'cron';
import app from '../app';
import fetchNewsData from '../server-scripts/agent';
import ErrnoException = NodeJS.ErrnoException;

function normalizePort(val: string) {
  const port = parseInt(val, 10);

  if (Number.isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

const port = normalizePort(process.env.PORT || '3001');

function onError(error: ErrnoException) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}
/**
 * Get port from environment and store in Express.
 */

app.set('port', port);

/**
 * Create HTTP server.
 */
fetchNewsData();
const job = new cron.CronJob('0 */10 * * * *', fetchNewsData);
job.start();

/**
 * Listen on provided port, on all network interfaces.
 */
const server: http.Server = http.createServer(app);

server.listen(port);
server.on('error', onError);

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
  debug('server-monitor:server')(`Listening on ${bind}`);
}

server.on('listening', onListening);
/**
 * Normalize a port into a number, string, or false.
 */

/**
 * Event listener for HTTP server "error" event.
 */

/**
 * Event listener for HTTP server "listening" event.
 */
