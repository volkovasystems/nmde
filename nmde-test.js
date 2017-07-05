
const assert = require( "assert" );
const nmde = require( "./nmde.js" );

assert.equal( nmde( { "name": "yeah" } ), "yeah", "should have name 'yeah'" );

assert.equal( nmde( function hello( ){ } ), "hello", "should have name 'hello'" );

assert.equal( nmde( Error ), "Error", "should return 'Error'" );

assert.equal( nmde( ) == "", true, "should return true" );

assert.equal( nmde( "test" ) == "", true, "should return true" );

assert.equal( nmde( { } ) == "", true, "should return true" );

assert.equal( nmde( function( ){ } ) == "", true, "should return true" );

assert.equal( nmde( ( ) => { } ) == "", true, "should return true" );

assert.equal( nmde( ( entity ) => ( typeof entity == "string" ) ) == "",
				true, "should return true" );

console.log( "ok" );
