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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwibm1kZSIsImRlc2NyaWJlIiwiaXQiLCJlcXVhbCIsImhlbGxvIiwiRXJyb3IiLCJlbnRpdHkiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdURBLElBQU1BLFNBQVNDLFFBQVMsUUFBVCxDQUFmOzs7O0FBSUE7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLG1CQUFULENBQWI7QUFDQTs7Ozs7Ozs7QUFRQTs7QUFFQUUsU0FBVSxNQUFWLEVBQWtCLFlBQU87OztBQUd4QkEsVUFBVSw4QkFBVixFQUEwQyxZQUFPO0FBQ2hEQyxLQUFJLHNCQUFKLEVBQTRCLFlBQU87O0FBRWxDSixVQUFPSyxLQUFQLENBQWNILEtBQU0sRUFBRSxRQUFRLE1BQVYsRUFBTixDQUFkLEVBQTBDLE1BQTFDOztBQUVBLEdBSkQ7QUFLQSxFQU5EOzs7QUFTQUMsVUFBVSxnQ0FBVixFQUE0QyxZQUFPO0FBQ2xEQyxLQUFJLHVCQUFKLEVBQTZCLFlBQU87O0FBRW5DSixVQUFPSyxLQUFQLENBQWNILEtBQU0sU0FBU0ksS0FBVCxHQUFpQixDQUFHLENBQTFCLENBQWQsRUFBNEMsT0FBNUM7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7OztBQVNBSCxVQUFVLGlCQUFWLEVBQTZCLFlBQU87QUFDbkNDLEtBQUksdUJBQUosRUFBNkIsWUFBTzs7QUFFbkNKLFVBQU9LLEtBQVAsQ0FBY0gsS0FBTUssS0FBTixDQUFkLEVBQTZCLE9BQTdCOztBQUVBLEdBSkQ7QUFLQSxFQU5EOzs7QUFTQUosVUFBVSxpQkFBVixFQUE2QixZQUFPO0FBQ25DQyxLQUFJLG9CQUFKLEVBQTBCLFlBQU87O0FBRWhDSixVQUFPSyxLQUFQLENBQWNILFVBQVcsRUFBekIsRUFBNkIsSUFBN0I7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7OztBQVNBQyxVQUFVLHdCQUFWLEVBQW9DLFlBQU87QUFDMUNDLEtBQUksb0JBQUosRUFBMEIsWUFBTzs7QUFFaENKLFVBQU9LLEtBQVAsQ0FBY0gsS0FBTSxNQUFOLEtBQWtCLEVBQWhDLEVBQW9DLElBQXBDOztBQUVBLEdBSkQ7QUFLQSxFQU5EOzs7QUFTQUMsVUFBVSxxQkFBVixFQUFpQyxZQUFPO0FBQ3ZDQyxLQUFJLG9CQUFKLEVBQTBCLFlBQU87O0FBRWhDSixVQUFPSyxLQUFQLENBQWNILEtBQU0sRUFBTixLQUFlLEVBQTdCLEVBQWlDLElBQWpDOztBQUVBLEdBSkQ7QUFLQSxFQU5EOzs7QUFTQUMsVUFBVSw0QkFBVixFQUF3QyxZQUFPO0FBQzlDQyxLQUFJLG9CQUFKLEVBQTBCLFlBQU87O0FBRWhDSixVQUFPSyxLQUFQLENBQWNILEtBQU0sWUFBTyxDQUFHLENBQWhCLEtBQXNCLEVBQXBDLEVBQXdDLElBQXhDOztBQUVBLEdBSkQ7QUFLQSxFQU5EOzs7QUFTQUMsVUFBVSw2REFBVixFQUF5RSxZQUFPO0FBQy9FQyxLQUFJLG9CQUFKLEVBQTBCLFlBQU87QUFDaENKLFVBQU9LLEtBQVAsQ0FBY0gsS0FBTSxVQUFFTSxNQUFGLFVBQWdCLE9BQU9BLE1BQVAsSUFBaUIsUUFBakMsRUFBTixLQUF1RCxFQUFyRSxFQUF5RSxJQUF6RTtBQUNBLEdBRkQ7QUFHQSxFQUpEOzs7QUFPQSxDQXpFRDs7QUEyRUEiLCJmaWxlIjoidGVzdC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAdGVzdC1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtdGVzdC1saWNlbnNlXG5cblx0QHRlc3QtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJubWRlXCIsXG5cdFx0XHRcInBhdGhcIjogXCJubWRlL3Rlc3QuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvbm1kZS5naXRcIlxuXHRcdH1cblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cblxuXHRAdGVzdC1kb2N1bWVudGF0aW9uOlxuXG5cdEBlbmQtdGVzdC1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhc3NlcnRcIjogXCJzaG91bGRcIixcblx0XHRcdFwibm1kZVwiOiBcIm5tZGVcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZFwiICk7XG5cblxuXG4vLzogQGNsaWVudDpcbmNvbnN0IG5tZGUgPSByZXF1aXJlKCBcIi4vbm1kZS5zdXBwb3J0LmpzXCIgKTtcbi8vOiBAZW5kLWNsaWVudFxuXG5cblxuXG5cblxuXG4vLzogQGNsaWVudDpcblxuZGVzY3JpYmUoIFwibm1kZVwiLCAoICkgPT4ge1xuXG5cblx0ZGVzY3JpYmUoIFwiYG5tZGUoIHsgJ25hbWUnOiAneWVhaCcgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gJ3llYWgnXCIsICggKSA9PiB7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggbm1kZSggeyAnbmFtZSc6ICd5ZWFoJyB9ICksIFwieWVhaFwiICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImBubWRlKCBmdW5jdGlvbiBoZWxsbyggKXsgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gJ2hlbGxvJ1wiLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIG5tZGUoIGZ1bmN0aW9uIGhlbGxvKCApeyB9ICksIFwiaGVsbG9cIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgbm1kZSggRXJyb3IgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuICdFcnJvcidcIiwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBubWRlKCBFcnJvciApLCBcIkVycm9yXCIgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYG5tZGUoICkgPT0gJydgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiB0cnVlXCIsICggKSA9PiB7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggbm1kZSggKSA9PSBcIlwiLCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImBubWRlKCAndGVzdCcgKSA9PSAnJ2BcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHRydWVcIiwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBubWRlKCBcInRlc3RcIiApID09IFwiXCIsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYG5tZGUoIHsgfSApID09ICcnYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gdHJ1ZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIG5tZGUoIHsgfSApID09IFwiXCIsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYG5tZGUoICggKSA9PiB7IH0gKSA9PSAnJ2BcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHRydWVcIiwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBubWRlKCAoICkgPT4geyB9ICkgPT0gXCJcIiwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgbm1kZSggKCBlbnRpdHkgKSA9PiAoIHR5cGVvZiBlbnRpdHkgPT0gJ3N0cmluZycgKSApID09ICcnYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCBubWRlKCAoIGVudGl0eSApID0+ICggdHlwZW9mIGVudGl0eSA9PSBcInN0cmluZ1wiICkgKSA9PSBcIlwiLCB0cnVlIClcblx0XHR9ICk7XG5cdH0gKTtcblxuXG59ICk7XG5cbi8vOiBAZW5kLWNsaWVudFxuXG5cbiJdfQ==
//# sourceMappingURL=test.support.js.map
