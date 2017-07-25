
const assert = require( "assert" );
const nmde = require( "./nmde.js" );

assert.equal( nmde( { "name": "yeah" } ), "yeah", "should return 'yeah'" );

assert.equal( nmde( function hello( ){ } ), "hello", "should return 'hello'" );

assert.equal( nmde( Error ), "Error", "should return 'Error'" );

assert.equal( nmde( ), "", "should return empty string" );

assert.equal( nmde( "test" ), "", "should return empty string" );

assert.equal( nmde( { } ), "", "should return empty string" );

assert.equal( nmde( function( ){ } ), "", "should return empty string" );

assert.equal( nmde( ( ) => { } ), "", "should return empty string" );

assert.equal( nmde( ( entity ) => ( typeof entity == "string" ) ),
	"", "should return empty string" );

console.log( "ok" );
