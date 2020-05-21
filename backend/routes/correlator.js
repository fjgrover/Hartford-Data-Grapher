const express = require( 'express' );
const AutoCollisionClaim = require( '../models/AutoCollisionClaim' );
const DriverInfo = require( '../models/DriverInfo' );

const router = express.Router();

router.get( '/', async ( req, res ) => {
    try {
        console.log( req.connection.localAddress + ": request to " + req.originalUrl );
        const urlParams = await new URLSearchParams( req.query );
        const queryRequest = urlParams.get( 'query' );
        const strFilter = urlParams.get( 'state' );
        filter = {}

        var retVal = [];

        if ( AutoCollisionClaim.schema.path( queryRequest ) ) {
            collection = AutoCollisionClaim;
            if( strFilter.trim() )
                filter = { LOSS_LOC_ST_ABBR: strFilter };
        } else {
            collection = DriverInfo;
            if ( strFilter.trim() )
                filter = { INSD_MAIL_ST_ABBR: strFilter };
        }

        var queryResult = await collection.find( filter, `${ queryRequest } -_id` );
        
        queryResult.forEach(element => {
            retVal.push(element[queryRequest]);
        });
        
        res.json( { 'x' : retVal } );

    } catch ( err ) {
        res.json( { message: err } );
    }
});

module.exports = router;