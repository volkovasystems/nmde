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

var assert = require("should");





//: @bridge:
var path = require("path");
//: @end-bridge







//: @bridge:


describe("nmde", function () {

	var directory = __dirname;
	var testBridge = path.resolve(directory, "bridge.html");
	var bridgeURL = "file://" + testBridge;

	describe("`nmde( { 'name': 'yeah' } )`", function () {
		it("should return 'yeah'", function () {

			var result = browser.url(bridgeURL).execute(function () {return nmde({ 'name': 'yeah' });});

			assert.equal(result.value, "yeah");

		});
	});


	describe("`nmde( function hello( ){ } )`", function () {
		it("should return 'hello'", function () {

			var result = browser.url(bridgeURL).execute(function () {return nmde(function hello() {});});

			assert.equal(result.value, "hello");

		});
	});

	describe("`nmde( Error )`", function () {
		it("should return 'Error'", function () {

			var result = browser.url(bridgeURL).execute(function () {return nmde(Error);});

			assert.equal(result.value, "Error");

		});
	});


	describe("`nmde( ) == ''`", function () {
		it("should return true", function () {

			var result = browser.url(bridgeURL).execute(function () {return nmde() == "";});

			assert.equal(result.value, true);

		});
	});


	describe("`nmde( 'test' ) == ''`", function () {
		it("should return true", function () {

			var result = browser.url(bridgeURL).execute(function () {return nmde("test") == "";});

			assert.equal(result.value, true);

		});
	});


	describe("`nmde( { } ) == ''`", function () {
		it("should return true", function () {

			var result = browser.url(bridgeURL).execute(function () {return nmde({}) == "";});

			assert.equal(result.value, true);

		});
	});


	describe("`nmde( ( ) => { } ) == ''`", function () {
		it("should return true", function () {

			var result = browser.url(bridgeURL).execute(function () {return nmde(function () {}) == "";});

			assert.equal(result.value, true);

		});
	});


	describe("`nmde( ( entity ) => ( typeof entity == 'string' ) ) == ''`", function () {
		it("should return true", function () {

			var result = browser.url(bridgeURL).execute(function () {return nmde(function (entity) {return typeof entity == 'string';}) == "";});

			assert.equal(result.value, true);

		});
	});


});


//: @end-bridge
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJkaXJlY3RvcnkiLCJfX2Rpcm5hbWUiLCJ0ZXN0QnJpZGdlIiwicmVzb2x2ZSIsImJyaWRnZVVSTCIsIml0IiwicmVzdWx0IiwiYnJvd3NlciIsInVybCIsImV4ZWN1dGUiLCJubWRlIiwiZXF1YWwiLCJ2YWx1ZSIsImhlbGxvIiwiRXJyb3IiLCJlbnRpdHkiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdURBLElBQU1BLFNBQVNDLFFBQVMsUUFBVCxDQUFmOzs7Ozs7QUFNQTtBQUNBLElBQU1DLE9BQU9ELFFBQVMsTUFBVCxDQUFiO0FBQ0E7Ozs7Ozs7O0FBUUE7OztBQUdBRSxTQUFVLE1BQVYsRUFBa0IsWUFBTzs7QUFFeEIsS0FBSUMsWUFBWUMsU0FBaEI7QUFDQSxLQUFJQyxhQUFhSixLQUFLSyxPQUFMLENBQWNILFNBQWQsRUFBeUIsYUFBekIsQ0FBakI7QUFDQSxLQUFJSSx3QkFBdUJGLFVBQTNCOztBQUVBSCxVQUFVLDhCQUFWLEVBQTBDLFlBQU87QUFDaERNLEtBQUksc0JBQUosRUFBNEIsWUFBTzs7QUFFbEMsT0FBSUMsU0FBU0MsUUFBUUMsR0FBUixDQUFhSixTQUFiLEVBQXlCSyxPQUF6QixDQUFrQyxvQkFBT0MsS0FBTSxFQUFFLFFBQVEsTUFBVixFQUFOLENBQVAsRUFBbEMsQ0FBYjs7QUFFQWQsVUFBT2UsS0FBUCxDQUFjTCxPQUFPTSxLQUFyQixFQUE0QixNQUE1Qjs7QUFFQSxHQU5EO0FBT0EsRUFSRDs7O0FBV0FiLFVBQVUsZ0NBQVYsRUFBNEMsWUFBTztBQUNsRE0sS0FBSSx1QkFBSixFQUE2QixZQUFPOztBQUVuQyxPQUFJQyxTQUFTQyxRQUFRQyxHQUFSLENBQWFKLFNBQWIsRUFBeUJLLE9BQXpCLENBQWtDLG9CQUFPQyxLQUFNLFNBQVNHLEtBQVQsR0FBaUIsQ0FBRyxDQUExQixDQUFQLEVBQWxDLENBQWI7O0FBRUFqQixVQUFPZSxLQUFQLENBQWNMLE9BQU9NLEtBQXJCLEVBQTRCLE9BQTVCOztBQUVBLEdBTkQ7QUFPQSxFQVJEOztBQVVBYixVQUFVLGlCQUFWLEVBQTZCLFlBQU87QUFDbkNNLEtBQUksdUJBQUosRUFBNkIsWUFBTzs7QUFFbkMsT0FBSUMsU0FBU0MsUUFBUUMsR0FBUixDQUFhSixTQUFiLEVBQXlCSyxPQUF6QixDQUFrQyxvQkFBT0MsS0FBTUksS0FBTixDQUFQLEVBQWxDLENBQWI7O0FBRUFsQixVQUFPZSxLQUFQLENBQWNMLE9BQU9NLEtBQXJCLEVBQTRCLE9BQTVCOztBQUVBLEdBTkQ7QUFPQSxFQVJEOzs7QUFXQWIsVUFBVSxpQkFBVixFQUE2QixZQUFPO0FBQ25DTSxLQUFJLG9CQUFKLEVBQTBCLFlBQU87O0FBRWhDLE9BQUlDLFNBQVNDLFFBQVFDLEdBQVIsQ0FBYUosU0FBYixFQUF5QkssT0FBekIsQ0FBa0Msb0JBQU9DLFVBQVcsRUFBbEIsRUFBbEMsQ0FBYjs7QUFFQWQsVUFBT2UsS0FBUCxDQUFjTCxPQUFPTSxLQUFyQixFQUE0QixJQUE1Qjs7QUFFQSxHQU5EO0FBT0EsRUFSRDs7O0FBV0FiLFVBQVUsd0JBQVYsRUFBb0MsWUFBTztBQUMxQ00sS0FBSSxvQkFBSixFQUEwQixZQUFPOztBQUVoQyxPQUFJQyxTQUFTQyxRQUFRQyxHQUFSLENBQWFKLFNBQWIsRUFBeUJLLE9BQXpCLENBQWtDLG9CQUFPQyxLQUFNLE1BQU4sS0FBa0IsRUFBekIsRUFBbEMsQ0FBYjs7QUFFQWQsVUFBT2UsS0FBUCxDQUFjTCxPQUFPTSxLQUFyQixFQUE0QixJQUE1Qjs7QUFFQSxHQU5EO0FBT0EsRUFSRDs7O0FBV0FiLFVBQVUscUJBQVYsRUFBaUMsWUFBTztBQUN2Q00sS0FBSSxvQkFBSixFQUEwQixZQUFPOztBQUVoQyxPQUFJQyxTQUFTQyxRQUFRQyxHQUFSLENBQWFKLFNBQWIsRUFBeUJLLE9BQXpCLENBQWtDLG9CQUFPQyxLQUFNLEVBQU4sS0FBZSxFQUF0QixFQUFsQyxDQUFiOztBQUVBZCxVQUFPZSxLQUFQLENBQWNMLE9BQU9NLEtBQXJCLEVBQTRCLElBQTVCOztBQUVBLEdBTkQ7QUFPQSxFQVJEOzs7QUFXQWIsVUFBVSw0QkFBVixFQUF3QyxZQUFPO0FBQzlDTSxLQUFJLG9CQUFKLEVBQTBCLFlBQU87O0FBRWhDLE9BQUlDLFNBQVNDLFFBQVFDLEdBQVIsQ0FBYUosU0FBYixFQUF5QkssT0FBekIsQ0FBa0Msb0JBQU9DLEtBQU0sWUFBTyxDQUFHLENBQWhCLEtBQXNCLEVBQTdCLEVBQWxDLENBQWI7O0FBRUFkLFVBQU9lLEtBQVAsQ0FBY0wsT0FBT00sS0FBckIsRUFBNEIsSUFBNUI7O0FBRUEsR0FORDtBQU9BLEVBUkQ7OztBQVdBYixVQUFVLDZEQUFWLEVBQXlFLFlBQU87QUFDL0VNLEtBQUksb0JBQUosRUFBMEIsWUFBTzs7QUFFaEMsT0FBSUMsU0FBU0MsUUFBUUMsR0FBUixDQUFhSixTQUFiLEVBQXlCSyxPQUF6QixDQUFrQyxvQkFBT0MsS0FBTSxVQUFFSyxNQUFGLFVBQWdCLE9BQU9BLE1BQVAsSUFBaUIsUUFBakMsRUFBTixLQUF1RCxFQUE5RCxFQUFsQyxDQUFiOztBQUVBbkIsVUFBT2UsS0FBUCxDQUFjTCxPQUFPTSxLQUFyQixFQUE0QixJQUE1Qjs7QUFFQSxHQU5EO0FBT0EsRUFSRDs7O0FBV0EsQ0E3RkQ7OztBQWdHQSIsImZpbGUiOiJ0ZXN0LmJyaWRnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QHRlc3QtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXRlc3QtbGljZW5zZVxuXG5cdEB0ZXN0LWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwibm1kZVwiLFxuXHRcdFx0XCJwYXRoXCI6IFwibm1kZS90ZXN0LmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0LmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL25tZGUuZ2l0XCJcblx0XHR9XG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXG5cblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcblxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXG5cdFx0XHRcIm5tZGVcIjogXCJubWRlXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJzaG91bGRcIiApO1xuXG5cblxuXG5cbi8vOiBAYnJpZGdlOlxuY29uc3QgcGF0aCA9IHJlcXVpcmUoIFwicGF0aFwiICk7XG4vLzogQGVuZC1icmlkZ2VcblxuXG5cblxuXG5cblxuLy86IEBicmlkZ2U6XG5cblxuZGVzY3JpYmUoIFwibm1kZVwiLCAoICkgPT4ge1xuXG5cdGxldCBkaXJlY3RvcnkgPSBfX2Rpcm5hbWU7XG5cdGxldCB0ZXN0QnJpZGdlID0gcGF0aC5yZXNvbHZlKCBkaXJlY3RvcnksIFwiYnJpZGdlLmh0bWxcIiApO1xuXHRsZXQgYnJpZGdlVVJMID0gYGZpbGU6Ly8keyB0ZXN0QnJpZGdlIH1gO1xuXG5cdGRlc2NyaWJlKCBcImBubWRlKCB7ICduYW1lJzogJ3llYWgnIH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuICd5ZWFoJ1wiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBubWRlKCB7ICduYW1lJzogJ3llYWgnIH0gKSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSwgXCJ5ZWFoXCIgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYG5tZGUoIGZ1bmN0aW9uIGhlbGxvKCApeyB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiAnaGVsbG8nXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IG5tZGUoIGZ1bmN0aW9uIGhlbGxvKCApeyB9ICkgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQudmFsdWUsIFwiaGVsbG9cIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYG5tZGUoIEVycm9yIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiAnRXJyb3InXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IG5tZGUoIEVycm9yICkgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQudmFsdWUsIFwiRXJyb3JcIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgbm1kZSggKSA9PSAnJ2BcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHRydWVcIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gbm1kZSggKSA9PSBcIlwiICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LnZhbHVlLCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImBubWRlKCAndGVzdCcgKSA9PSAnJ2BcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHRydWVcIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gbm1kZSggXCJ0ZXN0XCIgKSA9PSBcIlwiICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LnZhbHVlLCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImBubWRlKCB7IH0gKSA9PSAnJ2BcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHRydWVcIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gbm1kZSggeyB9ICkgPT0gXCJcIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgbm1kZSggKCApID0+IHsgfSApID09ICcnYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gdHJ1ZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBubWRlKCAoICkgPT4geyB9ICkgPT0gXCJcIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgbm1kZSggKCBlbnRpdHkgKSA9PiAoIHR5cGVvZiBlbnRpdHkgPT0gJ3N0cmluZycgKSApID09ICcnYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gdHJ1ZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBubWRlKCAoIGVudGl0eSApID0+ICggdHlwZW9mIGVudGl0eSA9PSAnc3RyaW5nJyApICkgPT0gXCJcIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblxufSApO1xuXG5cbi8vOiBAZW5kLWJyaWRnZVxuIl19
//# sourceMappingURL=test.bridge.js.map
