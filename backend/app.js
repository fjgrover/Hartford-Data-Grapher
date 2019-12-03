const express = require( 'express' );
const cors = require( 'cors' );
const mongoose = require( 'mongoose' );
const app = express();

require( 'dotenv' ).config();

app.use(express.json());

// import routes
const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
}
const claimsRoute = require( './routes/correlator' );
app.use( '/get', cors(corsOptions), claimsRoute );

mongoose.connect(
    process.env.DB_CONNECTION,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    ( err, client ) => {
        if ( err ) {
            console.error( err );
            return;
        }
    }
);

app.listen(3000, 'localhost');