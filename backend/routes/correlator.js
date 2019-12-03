const express = require( 'express' );
const router = express.Router();
const AutoCollisionClaim = require( '../models/AutoCollisionClaim' );
const DriverInfo = require( '../models/DriverInfo' );

router.get( '/', async ( req, res ) => {
    try {
        console.log( "request to: " + req.originalUrl );
        const urlParams = await new URLSearchParams( req.query );
        const x_var = urlParams.get( 'x_var' );
        const y_var = urlParams.get( 'y_var' );

        if ( AutoCollisionClaim.schema.path( x_var ) )
            x_collection = AutoCollisionClaim;
        else
            x_collection = DriverInfo;

        if( AutoCollisionClaim.schema.path( y_var ) )
            y_collection = AutoCollisionClaim;
        else
            y_collection = DriverInfo;

        var x_query = await x_collection.find( {}, `${x_var} -_id` );
        var y_query = await y_collection.find( {}, `${y_var} -_id` );
        
        res.json( { 'x' : x_query, 'y' : y_query } );

    } catch ( err ) {
        res.json( { message: err } );
    }
});

module.exports = router;