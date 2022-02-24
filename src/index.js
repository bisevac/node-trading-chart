const controller = require( './controller' );
const server = require( './lib/server' );

( async () => {
  const router = server();

  controller( router );
} )();
