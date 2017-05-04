
const assert = require( "assert" );
const nmde = require( "./nmde.js" );

assert.equal( nmde( function hello( ){ } ), "hello", "should have name 'hello'" );

assert.equal( nmde( { } ), "", "should be empty name" );

assert.equal( nmde( ), "", "should be empty name" );

assert.equal( nmde( { "name": "yeah" } ), "yeah", "should have name 'yeah'" );

console.log( "ok" );
