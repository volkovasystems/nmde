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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJkaXJlY3RvcnkiLCJfX2Rpcm5hbWUiLCJ0ZXN0QnJpZGdlIiwicmVzb2x2ZSIsImJyaWRnZVVSTCIsIml0IiwicmVzdWx0IiwiYnJvd3NlciIsInVybCIsImV4ZWN1dGUiLCJubWRlIiwiZXF1YWwiLCJ2YWx1ZSIsImhlbGxvIiwiRXJyb3IiLCJlbnRpdHkiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdURBLElBQU1BLFNBQVNDLFFBQVMsUUFBVCxDQUFmOzs7Ozs7QUFNQTtBQUNBLElBQU1DLE9BQU9ELFFBQVMsTUFBVCxDQUFiO0FBQ0E7Ozs7Ozs7O0FBUUE7OztBQUdBRSxTQUFVLE1BQVYsRUFBa0IsWUFBTzs7QUFFeEIsS0FBSUMsWUFBWUMsU0FBaEI7QUFDQSxLQUFJQyxhQUFhSixLQUFLSyxPQUFMLENBQWNILFNBQWQsRUFBeUIsYUFBekIsQ0FBakI7QUFDQSxLQUFJSSx3QkFBdUJGLFVBQTNCOztBQUVBSCxVQUFVLDhCQUFWLEVBQTBDLFlBQU87O0FBRWhETSxLQUFJLHNCQUFKLEVBQTRCLFlBQU87O0FBRWxDLE9BQUlDLFNBQVNDLFFBQVFDLEdBQVIsQ0FBYUosU0FBYixFQUF5QkssT0FBekIsQ0FBa0Msb0JBQU9DLEtBQU0sRUFBRSxRQUFRLE1BQVYsRUFBTixDQUFQLEVBQWxDLENBQWI7O0FBRUFkLFVBQU9lLEtBQVAsQ0FBY0wsT0FBT00sS0FBckIsRUFBNEIsTUFBNUI7O0FBRUEsR0FORDs7QUFRQSxFQVZEOzs7QUFhQWIsVUFBVSxnQ0FBVixFQUE0QyxZQUFPOztBQUVsRE0sS0FBSSx1QkFBSixFQUE2QixZQUFPOztBQUVuQyxPQUFJQyxTQUFTQyxRQUFRQyxHQUFSLENBQWFKLFNBQWIsRUFBeUJLLE9BQXpCLENBQWtDLG9CQUFPQyxLQUFNLFNBQVNHLEtBQVQsR0FBaUIsQ0FBRyxDQUExQixDQUFQLEVBQWxDLENBQWI7O0FBRUFqQixVQUFPZSxLQUFQLENBQWNMLE9BQU9NLEtBQXJCLEVBQTRCLE9BQTVCOztBQUVBLEdBTkQ7O0FBUUEsRUFWRDs7QUFZQWIsVUFBVSxpQkFBVixFQUE2QixZQUFPOztBQUVuQ00sS0FBSSx1QkFBSixFQUE2QixZQUFPOztBQUVuQyxPQUFJQyxTQUFTQyxRQUFRQyxHQUFSLENBQWFKLFNBQWIsRUFBeUJLLE9BQXpCLENBQWtDLG9CQUFPQyxLQUFNSSxLQUFOLENBQVAsRUFBbEMsQ0FBYjs7QUFFQWxCLFVBQU9lLEtBQVAsQ0FBY0wsT0FBT00sS0FBckIsRUFBNEIsT0FBNUI7O0FBRUEsR0FORDs7QUFRQSxFQVZEOzs7QUFhQWIsVUFBVSxpQkFBVixFQUE2QixZQUFPOztBQUVuQ00sS0FBSSxvQkFBSixFQUEwQixZQUFPOztBQUVoQyxPQUFJQyxTQUFTQyxRQUFRQyxHQUFSLENBQWFKLFNBQWIsRUFBeUJLLE9BQXpCLENBQWtDLG9CQUFPQyxVQUFXLEVBQWxCLEVBQWxDLENBQWI7O0FBRUFkLFVBQU9lLEtBQVAsQ0FBY0wsT0FBT00sS0FBckIsRUFBNEIsSUFBNUI7O0FBRUEsR0FORDs7QUFRQSxFQVZEOzs7QUFhQWIsVUFBVSx3QkFBVixFQUFvQyxZQUFPOztBQUUxQ00sS0FBSSxvQkFBSixFQUEwQixZQUFPOztBQUVoQyxPQUFJQyxTQUFTQyxRQUFRQyxHQUFSLENBQWFKLFNBQWIsRUFBeUJLLE9BQXpCLENBQWtDLG9CQUFPQyxLQUFNLE1BQU4sS0FBa0IsRUFBekIsRUFBbEMsQ0FBYjs7QUFFQWQsVUFBT2UsS0FBUCxDQUFjTCxPQUFPTSxLQUFyQixFQUE0QixJQUE1Qjs7QUFFQSxHQU5EOztBQVFBLEVBVkQ7OztBQWFBYixVQUFVLHFCQUFWLEVBQWlDLFlBQU87O0FBRXZDTSxLQUFJLG9CQUFKLEVBQTBCLFlBQU87O0FBRWhDLE9BQUlDLFNBQVNDLFFBQVFDLEdBQVIsQ0FBYUosU0FBYixFQUF5QkssT0FBekIsQ0FBa0Msb0JBQU9DLEtBQU0sRUFBTixLQUFlLEVBQXRCLEVBQWxDLENBQWI7O0FBRUFkLFVBQU9lLEtBQVAsQ0FBY0wsT0FBT00sS0FBckIsRUFBNEIsSUFBNUI7O0FBRUEsR0FORDs7QUFRQSxFQVZEOzs7QUFhQWIsVUFBVSw0QkFBVixFQUF3QyxZQUFPOztBQUU5Q00sS0FBSSxvQkFBSixFQUEwQixZQUFPOztBQUVoQyxPQUFJQyxTQUFTQyxRQUFRQyxHQUFSLENBQWFKLFNBQWIsRUFBeUJLLE9BQXpCLENBQWtDLG9CQUFPQyxLQUFNLFlBQU8sQ0FBRyxDQUFoQixLQUFzQixFQUE3QixFQUFsQyxDQUFiOztBQUVBZCxVQUFPZSxLQUFQLENBQWNMLE9BQU9NLEtBQXJCLEVBQTRCLElBQTVCOztBQUVBLEdBTkQ7O0FBUUEsRUFWRDs7O0FBYUFiLFVBQVUsNkRBQVYsRUFBeUUsWUFBTztBQUMvRU0sS0FBSSxvQkFBSixFQUEwQixZQUFPOztBQUVoQyxPQUFJQyxTQUFTQyxRQUFRQyxHQUFSLENBQWFKLFNBQWIsRUFBeUJLLE9BQXpCLENBQWtDLG9CQUFPQyxLQUFNLFVBQUVLLE1BQUYsVUFBZ0IsT0FBT0EsTUFBUCxJQUFpQixRQUFqQyxFQUFOLEtBQXVELEVBQTlELEVBQWxDLENBQWI7O0FBRUFuQixVQUFPZSxLQUFQLENBQWNMLE9BQU9NLEtBQXJCLEVBQTRCLElBQTVCOztBQUVBLEdBTkQ7QUFPQSxFQVJEOzs7QUFXQSxDQTNHRDs7O0FBOEdBIiwiZmlsZSI6InRlc3QuYnJpZGdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKjtcclxuXHRAdGVzdC1saWNlbnNlOlxyXG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcblx0XHRAbWl0LWxpY2Vuc2VcclxuXHJcblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXHJcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cclxuXHJcblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXHJcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuXHRcdFNPRlRXQVJFLlxyXG5cdEBlbmQtdGVzdC1saWNlbnNlXHJcblxyXG5cdEB0ZXN0LWNvbmZpZ3VyYXRpb246XHJcblx0XHR7XHJcblx0XHRcdFwicGFja2FnZVwiOiBcIm5tZGVcIixcclxuXHRcdFx0XCJwYXRoXCI6IFwibm1kZS90ZXN0LmpzXCIsXHJcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QuanNcIixcclxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXHJcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXHJcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXHJcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcclxuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcclxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcclxuXHRcdFx0XSxcclxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL25tZGUuZ2l0XCJcclxuXHRcdH1cclxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxyXG5cclxuXHRAdGVzdC1kb2N1bWVudGF0aW9uOlxyXG5cclxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxyXG5cclxuXHRAaW5jbHVkZTpcclxuXHRcdHtcclxuXHRcdFx0XCJhc3NlcnRcIjogXCJzaG91bGRcIixcclxuXHRcdFx0XCJubWRlXCI6IFwibm1kZVwiXHJcblx0XHR9XHJcblx0QGVuZC1pbmNsdWRlXHJcbiovXHJcblxyXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZFwiICk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuLy86IEBicmlkZ2U6XHJcbmNvbnN0IHBhdGggPSByZXF1aXJlKCBcInBhdGhcIiApO1xyXG4vLzogQGVuZC1icmlkZ2VcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vOiBAYnJpZGdlOlxyXG5cclxuXHJcbmRlc2NyaWJlKCBcIm5tZGVcIiwgKCApID0+IHtcclxuXHJcblx0bGV0IGRpcmVjdG9yeSA9IF9fZGlybmFtZTtcclxuXHRsZXQgdGVzdEJyaWRnZSA9IHBhdGgucmVzb2x2ZSggZGlyZWN0b3J5LCBcImJyaWRnZS5odG1sXCIgKTtcclxuXHRsZXQgYnJpZGdlVVJMID0gYGZpbGU6Ly8keyB0ZXN0QnJpZGdlIH1gO1xyXG5cclxuXHRkZXNjcmliZSggXCJgbm1kZSggeyAnbmFtZSc6ICd5ZWFoJyB9IClgXCIsICggKSA9PiB7XHJcblxyXG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiAneWVhaCdcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IG5tZGUoIHsgJ25hbWUnOiAneWVhaCcgfSApICk7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSwgXCJ5ZWFoXCIgKTtcclxuXHJcblx0XHR9ICk7XHJcblxyXG5cdH0gKTtcclxuXHJcblxyXG5cdGRlc2NyaWJlKCBcImBubWRlKCBmdW5jdGlvbiBoZWxsbyggKXsgfSApYFwiLCAoICkgPT4ge1xyXG5cclxuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gJ2hlbGxvJ1wiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gbm1kZSggZnVuY3Rpb24gaGVsbG8oICl7IH0gKSApO1xyXG5cclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQudmFsdWUsIFwiaGVsbG9cIiApO1xyXG5cclxuXHRcdH0gKTtcclxuXHJcblx0fSApO1xyXG5cclxuXHRkZXNjcmliZSggXCJgbm1kZSggRXJyb3IgKWBcIiwgKCApID0+IHtcclxuXHJcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuICdFcnJvcidcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IG5tZGUoIEVycm9yICkgKTtcclxuXHJcblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LnZhbHVlLCBcIkVycm9yXCIgKTtcclxuXHJcblx0XHR9ICk7XHJcblxyXG5cdH0gKTtcclxuXHJcblxyXG5cdGRlc2NyaWJlKCBcImBubWRlKCApID09ICcnYFwiLCAoICkgPT4ge1xyXG5cclxuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gdHJ1ZVwiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gbm1kZSggKSA9PSBcIlwiICk7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSwgdHJ1ZSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHJcblx0fSApO1xyXG5cclxuXHJcblx0ZGVzY3JpYmUoIFwiYG5tZGUoICd0ZXN0JyApID09ICcnYFwiLCAoICkgPT4ge1xyXG5cclxuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gdHJ1ZVwiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gbm1kZSggXCJ0ZXN0XCIgKSA9PSBcIlwiICk7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSwgdHJ1ZSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHJcblx0fSApO1xyXG5cclxuXHJcblx0ZGVzY3JpYmUoIFwiYG5tZGUoIHsgfSApID09ICcnYFwiLCAoICkgPT4ge1xyXG5cclxuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gdHJ1ZVwiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gbm1kZSggeyB9ICkgPT0gXCJcIiApO1xyXG5cclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQudmFsdWUsIHRydWUgKTtcclxuXHJcblx0XHR9ICk7XHJcblxyXG5cdH0gKTtcclxuXHJcblxyXG5cdGRlc2NyaWJlKCBcImBubWRlKCAoICkgPT4geyB9ICkgPT0gJydgXCIsICggKSA9PiB7XHJcblxyXG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiB0cnVlXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBubWRlKCAoICkgPT4geyB9ICkgPT0gXCJcIiApO1xyXG5cclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQudmFsdWUsIHRydWUgKTtcclxuXHJcblx0XHR9ICk7XHJcblxyXG5cdH0gKTtcclxuXHJcblxyXG5cdGRlc2NyaWJlKCBcImBubWRlKCAoIGVudGl0eSApID0+ICggdHlwZW9mIGVudGl0eSA9PSAnc3RyaW5nJyApICkgPT0gJydgXCIsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHRydWVcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IG5tZGUoICggZW50aXR5ICkgPT4gKCB0eXBlb2YgZW50aXR5ID09ICdzdHJpbmcnICkgKSA9PSBcIlwiICk7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSwgdHJ1ZSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cclxufSApO1xyXG5cclxuXHJcbi8vOiBAZW5kLWJyaWRnZVxyXG4iXX0=
//# sourceMappingURL=test.bridge.js.map
