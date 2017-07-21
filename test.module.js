"use strict";

/*;
	@test-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-test-license

	@test-configuration:
		{
			"package": "nmde",
			"path": "nmde/test.js",
			"file": "test.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/nmde.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should",
			"nmde": "nmde"
		}
	@end-include
*/

const assert = require( "should" );

//: @server:
const nmde = require( "./nmde.js" );
//: @end-server

//: @client:
const nmde = require( "./nmde.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge


//: @!bridge:


describe( "nmde", ( ) => {


	describe( "`nmde( { 'name': 'yeah' } )`", ( ) => {

		it( "should return 'yeah'", ( ) => {

			assert.equal( nmde( { 'name': 'yeah' } ), "yeah" );

		} );

	} );


	describe( "`nmde( function hello( ){ } )`", ( ) => {

		it( "should return 'hello'", ( ) => {

			assert.equal( nmde( function hello( ){ } ), "hello" );

		} );

	} );


	describe( "`nmde( Error )`", ( ) => {

		it( "should return 'Error'", ( ) => {

			assert.equal( nmde( Error ), "Error" );

		} );

	} );


	describe( "`nmde( ) == ''`", ( ) => {

		it( "should return true", ( ) => {

			assert.equal( nmde( ) == "", true );

		} );

	} );


	describe( "`nmde( 'test' ) == ''`", ( ) => {

		it( "should return true", ( ) => {

			assert.equal( nmde( "test" ) == "", true );

		} );

	} );


	describe( "`nmde( { } ) == ''`", ( ) => {

		it( "should return true", ( ) => {

			assert.equal( nmde( { } ) == "", true );

		} );

	} );


	describe( "`nmde( ( ) => { } ) == ''`", ( ) => {

		it( "should return true", ( ) => {

			assert.equal( nmde( ( ) => { } ) == "", true );

		} );

	} );


	describe( "`nmde( ( entity ) => ( typeof entity == 'string' ) ) == ''`", ( ) => {
		it( "should return true", ( ) => {
			assert.equal( nmde( ( entity ) => ( typeof entity == "string" ) ) == "", true )
		} );
	} );


} );


//: @end-bridge


//: @bridge:


describe( "nmde", ( ) => {

	let directory = __dirname;
	let testBridge = path.resolve( directory, "bridge.html" );
	let bridgeURL = `file://${ testBridge }`;

	describe( "`nmde( { 'name': 'yeah' } )`", ( ) => {

		it( "should return 'yeah'", ( ) => {

			let result = browser.url( bridgeURL ).execute( ( ) => nmde( { 'name': 'yeah' } ) );

			assert.equal( result.value, "yeah" );

		} );

	} );


	describe( "`nmde( function hello( ){ } )`", ( ) => {

		it( "should return 'hello'", ( ) => {

			let result = browser.url( bridgeURL ).execute( ( ) => nmde( function hello( ){ } ) );

			assert.equal( result.value, "hello" );

		} );

	} );

	describe( "`nmde( Error )`", ( ) => {

		it( "should return 'Error'", ( ) => {

			let result = browser.url( bridgeURL ).execute( ( ) => nmde( Error ) );

			assert.equal( result.value, "Error" );

		} );

	} );


	describe( "`nmde( ) == ''`", ( ) => {

		it( "should return true", ( ) => {

			let result = browser.url( bridgeURL ).execute( ( ) => nmde( ) == "" );

			assert.equal( result.value, true );

		} );

	} );


	describe( "`nmde( 'test' ) == ''`", ( ) => {

		it( "should return true", ( ) => {

			let result = browser.url( bridgeURL ).execute( ( ) => nmde( "test" ) == "" );

			assert.equal( result.value, true );

		} );

	} );


	describe( "`nmde( { } ) == ''`", ( ) => {

		it( "should return true", ( ) => {

			let result = browser.url( bridgeURL ).execute( ( ) => nmde( { } ) == "" );

			assert.equal( result.value, true );

		} );

	} );


	describe( "`nmde( ( ) => { } ) == ''`", ( ) => {

		it( "should return true", ( ) => {

			let result = browser.url( bridgeURL ).execute( ( ) => nmde( ( ) => { } ) == "" );

			assert.equal( result.value, true );

		} );

	} );


	describe( "`nmde( ( entity ) => ( typeof entity == 'string' ) ) == ''`", ( ) => {
		it( "should return true", ( ) => {

			let result = browser.url( bridgeURL ).execute( ( ) => nmde( ( entity ) => ( typeof entity == 'string' ) ) == "" );

			assert.equal( result.value, true );

		} );
	} );


} );


//: @end-bridge
