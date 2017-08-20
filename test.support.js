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



//: @client:
var nmde = require("./nmde.support.js");
//: @end-client







//: @client:

describe("nmde", function () {


	describe("`nmde( { 'name': 'yeah' } )`", function () {

		it("should return 'yeah'", function () {

			assert.equal(nmde({ 'name': 'yeah' }), "yeah");

		});

	});


	describe("`nmde( function hello( ){ } )`", function () {

		it("should return 'hello'", function () {

			assert.equal(nmde(function hello() {}), "hello");

		});

	});


	describe("`nmde( Error )`", function () {

		it("should return 'Error'", function () {

			assert.equal(nmde(Error), "Error");

		});

	});


	describe("`nmde( ) == ''`", function () {

		it("should return true", function () {

			assert.equal(nmde() == "", true);

		});

	});


	describe("`nmde( 'test' ) == ''`", function () {

		it("should return true", function () {

			assert.equal(nmde("test") == "", true);

		});

	});


	describe("`nmde( { } ) == ''`", function () {

		it("should return true", function () {

			assert.equal(nmde({}) == "", true);

		});

	});


	describe("`nmde( ( ) => { } ) == ''`", function () {

		it("should return true", function () {

			assert.equal(nmde(function () {}) == "", true);

		});

	});


	describe("`nmde( ( entity ) => ( typeof entity == 'string' ) ) == ''`", function () {
		it("should return true", function () {
			assert.equal(nmde(function (entity) {return typeof entity == "string";}) == "", true);
		});
	});


});

//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwibm1kZSIsImRlc2NyaWJlIiwiaXQiLCJlcXVhbCIsImhlbGxvIiwiRXJyb3IiLCJlbnRpdHkiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdURBLElBQU1BLFNBQVNDLFFBQVMsUUFBVCxDQUFmOzs7O0FBSUE7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLG1CQUFULENBQWI7QUFDQTs7Ozs7Ozs7QUFRQTs7QUFFQUUsU0FBVSxNQUFWLEVBQWtCLFlBQU87OztBQUd4QkEsVUFBVSw4QkFBVixFQUEwQyxZQUFPOztBQUVoREMsS0FBSSxzQkFBSixFQUE0QixZQUFPOztBQUVsQ0osVUFBT0ssS0FBUCxDQUFjSCxLQUFNLEVBQUUsUUFBUSxNQUFWLEVBQU4sQ0FBZCxFQUEwQyxNQUExQzs7QUFFQSxHQUpEOztBQU1BLEVBUkQ7OztBQVdBQyxVQUFVLGdDQUFWLEVBQTRDLFlBQU87O0FBRWxEQyxLQUFJLHVCQUFKLEVBQTZCLFlBQU87O0FBRW5DSixVQUFPSyxLQUFQLENBQWNILEtBQU0sU0FBU0ksS0FBVCxHQUFpQixDQUFHLENBQTFCLENBQWQsRUFBNEMsT0FBNUM7O0FBRUEsR0FKRDs7QUFNQSxFQVJEOzs7QUFXQUgsVUFBVSxpQkFBVixFQUE2QixZQUFPOztBQUVuQ0MsS0FBSSx1QkFBSixFQUE2QixZQUFPOztBQUVuQ0osVUFBT0ssS0FBUCxDQUFjSCxLQUFNSyxLQUFOLENBQWQsRUFBNkIsT0FBN0I7O0FBRUEsR0FKRDs7QUFNQSxFQVJEOzs7QUFXQUosVUFBVSxpQkFBVixFQUE2QixZQUFPOztBQUVuQ0MsS0FBSSxvQkFBSixFQUEwQixZQUFPOztBQUVoQ0osVUFBT0ssS0FBUCxDQUFjSCxVQUFXLEVBQXpCLEVBQTZCLElBQTdCOztBQUVBLEdBSkQ7O0FBTUEsRUFSRDs7O0FBV0FDLFVBQVUsd0JBQVYsRUFBb0MsWUFBTzs7QUFFMUNDLEtBQUksb0JBQUosRUFBMEIsWUFBTzs7QUFFaENKLFVBQU9LLEtBQVAsQ0FBY0gsS0FBTSxNQUFOLEtBQWtCLEVBQWhDLEVBQW9DLElBQXBDOztBQUVBLEdBSkQ7O0FBTUEsRUFSRDs7O0FBV0FDLFVBQVUscUJBQVYsRUFBaUMsWUFBTzs7QUFFdkNDLEtBQUksb0JBQUosRUFBMEIsWUFBTzs7QUFFaENKLFVBQU9LLEtBQVAsQ0FBY0gsS0FBTSxFQUFOLEtBQWUsRUFBN0IsRUFBaUMsSUFBakM7O0FBRUEsR0FKRDs7QUFNQSxFQVJEOzs7QUFXQUMsVUFBVSw0QkFBVixFQUF3QyxZQUFPOztBQUU5Q0MsS0FBSSxvQkFBSixFQUEwQixZQUFPOztBQUVoQ0osVUFBT0ssS0FBUCxDQUFjSCxLQUFNLFlBQU8sQ0FBRyxDQUFoQixLQUFzQixFQUFwQyxFQUF3QyxJQUF4Qzs7QUFFQSxHQUpEOztBQU1BLEVBUkQ7OztBQVdBQyxVQUFVLDZEQUFWLEVBQXlFLFlBQU87QUFDL0VDLEtBQUksb0JBQUosRUFBMEIsWUFBTztBQUNoQ0osVUFBT0ssS0FBUCxDQUFjSCxLQUFNLFVBQUVNLE1BQUYsVUFBZ0IsT0FBT0EsTUFBUCxJQUFpQixRQUFqQyxFQUFOLEtBQXVELEVBQXJFLEVBQXlFLElBQXpFO0FBQ0EsR0FGRDtBQUdBLEVBSkQ7OztBQU9BLENBdkZEOztBQXlGQSIsImZpbGUiOiJ0ZXN0LnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qO1xyXG5cdEB0ZXN0LWxpY2Vuc2U6XHJcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcclxuXHRcdEBtaXQtbGljZW5zZVxyXG5cclxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3JcclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxyXG5cclxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcclxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG5cdFx0U09GVFdBUkUuXHJcblx0QGVuZC10ZXN0LWxpY2Vuc2VcclxuXHJcblx0QHRlc3QtY29uZmlndXJhdGlvbjpcclxuXHRcdHtcclxuXHRcdFx0XCJwYWNrYWdlXCI6IFwibm1kZVwiLFxyXG5cdFx0XHRcInBhdGhcIjogXCJubWRlL3Rlc3QuanNcIixcclxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5qc1wiLFxyXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcclxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcclxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcclxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xyXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxyXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxyXG5cdFx0XHRdLFxyXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvbm1kZS5naXRcIlxyXG5cdFx0fVxyXG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXHJcblxyXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XHJcblxyXG5cdEBlbmQtdGVzdC1kb2N1bWVudGF0aW9uXHJcblxyXG5cdEBpbmNsdWRlOlxyXG5cdFx0e1xyXG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZFwiLFxyXG5cdFx0XHRcIm5tZGVcIjogXCJubWRlXCJcclxuXHRcdH1cclxuXHRAZW5kLWluY2x1ZGVcclxuKi9cclxuXHJcbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwic2hvdWxkXCIgKTtcclxuXHJcblxyXG5cclxuLy86IEBjbGllbnQ6XHJcbmNvbnN0IG5tZGUgPSByZXF1aXJlKCBcIi4vbm1kZS5zdXBwb3J0LmpzXCIgKTtcclxuLy86IEBlbmQtY2xpZW50XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLzogQGNsaWVudDpcclxuXHJcbmRlc2NyaWJlKCBcIm5tZGVcIiwgKCApID0+IHtcclxuXHJcblxyXG5cdGRlc2NyaWJlKCBcImBubWRlKCB7ICduYW1lJzogJ3llYWgnIH0gKWBcIiwgKCApID0+IHtcclxuXHJcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuICd5ZWFoJ1wiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBubWRlKCB7ICduYW1lJzogJ3llYWgnIH0gKSwgXCJ5ZWFoXCIgKTtcclxuXHJcblx0XHR9ICk7XHJcblxyXG5cdH0gKTtcclxuXHJcblxyXG5cdGRlc2NyaWJlKCBcImBubWRlKCBmdW5jdGlvbiBoZWxsbyggKXsgfSApYFwiLCAoICkgPT4ge1xyXG5cclxuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gJ2hlbGxvJ1wiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBubWRlKCBmdW5jdGlvbiBoZWxsbyggKXsgfSApLCBcImhlbGxvXCIgKTtcclxuXHJcblx0XHR9ICk7XHJcblxyXG5cdH0gKTtcclxuXHJcblxyXG5cdGRlc2NyaWJlKCBcImBubWRlKCBFcnJvciApYFwiLCAoICkgPT4ge1xyXG5cclxuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gJ0Vycm9yJ1wiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBubWRlKCBFcnJvciApLCBcIkVycm9yXCIgKTtcclxuXHJcblx0XHR9ICk7XHJcblxyXG5cdH0gKTtcclxuXHJcblxyXG5cdGRlc2NyaWJlKCBcImBubWRlKCApID09ICcnYFwiLCAoICkgPT4ge1xyXG5cclxuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gdHJ1ZVwiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBubWRlKCApID09IFwiXCIsIHRydWUgKTtcclxuXHJcblx0XHR9ICk7XHJcblxyXG5cdH0gKTtcclxuXHJcblxyXG5cdGRlc2NyaWJlKCBcImBubWRlKCAndGVzdCcgKSA9PSAnJ2BcIiwgKCApID0+IHtcclxuXHJcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHRydWVcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5lcXVhbCggbm1kZSggXCJ0ZXN0XCIgKSA9PSBcIlwiLCB0cnVlICk7XHJcblxyXG5cdFx0fSApO1xyXG5cclxuXHR9ICk7XHJcblxyXG5cclxuXHRkZXNjcmliZSggXCJgbm1kZSggeyB9ICkgPT0gJydgXCIsICggKSA9PiB7XHJcblxyXG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiB0cnVlXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIG5tZGUoIHsgfSApID09IFwiXCIsIHRydWUgKTtcclxuXHJcblx0XHR9ICk7XHJcblxyXG5cdH0gKTtcclxuXHJcblxyXG5cdGRlc2NyaWJlKCBcImBubWRlKCAoICkgPT4geyB9ICkgPT0gJydgXCIsICggKSA9PiB7XHJcblxyXG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiB0cnVlXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIG5tZGUoICggKSA9PiB7IH0gKSA9PSBcIlwiLCB0cnVlICk7XHJcblxyXG5cdFx0fSApO1xyXG5cclxuXHR9ICk7XHJcblxyXG5cclxuXHRkZXNjcmliZSggXCJgbm1kZSggKCBlbnRpdHkgKSA9PiAoIHR5cGVvZiBlbnRpdHkgPT0gJ3N0cmluZycgKSApID09ICcnYFwiLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiB0cnVlXCIsICggKSA9PiB7XHJcblx0XHRcdGFzc2VydC5lcXVhbCggbm1kZSggKCBlbnRpdHkgKSA9PiAoIHR5cGVvZiBlbnRpdHkgPT0gXCJzdHJpbmdcIiApICkgPT0gXCJcIiwgdHJ1ZSApXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHJcbn0gKTtcclxuXHJcbi8vOiBAZW5kLWNsaWVudFxyXG5cclxuXHJcbiJdfQ==
//# sourceMappingURL=test.support.js.map
