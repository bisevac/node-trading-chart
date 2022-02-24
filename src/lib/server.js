const express = require( 'express' );
const path = require( 'path' );
const bodyParser = require( 'body-parser' );

module.exports = () => {
  const app = express();
  const router = express.Router();

  app.use( bodyParser.json( { limit : '500mb' } ) );
  app.use( bodyParser.urlencoded( { extended : true } ) );

  const staticPath = path.resolve( __dirname, '../../public' );
  app.use( express.static( staticPath ) );

  app.use( router );

  const port = process.env.port || 3000;
  app.listen( port );
  console.log( `SERVER LISTEN ${port}` );

  return router;
};
