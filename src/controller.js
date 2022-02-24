const path = require( 'path' );
const fs = require( 'fs' );

module.exports = ( router ) => {
  router.get( '/data', ( req, res ) => {
    const csvPath = path.resolve( __dirname, '../data/data.csv' );

    fs.readFile( csvPath, ( err, csvText ) => {
      if ( err ) console.error( err );

      res.send( csvText );
    } );
  } );

  router.get( '*', ( req, res ) => {
    const indexPath = path.resolve( __dirname, '../public/index.html' );

    res.sendFile( indexPath );
  } );
};
