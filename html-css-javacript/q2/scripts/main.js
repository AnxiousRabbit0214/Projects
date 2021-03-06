// main.js

// 'use strict;' turns on JavaScripts strict mode, which helps catch errors

// $ is the main jQuery function used for calling jQuery functions

// document is a pre-defined JavaScript variable that refers to the entire web
// page

// ready is a jQuery function that is not called until the page's DOM is fully
// loaded and the page is ready --- you should always use it!

'use strict';

$(document).ready(function() {

	let clickfunction = function(event){
		let wpnum = Number($('#wp').val())
		let hpnum = Number($('#hp').val())
		let length = Number($('#len').val())
		let result = Math.sqrt(wpnum**2+hpnum**2)/length
		$('#result').text(result)
	}
	$('#button').click(clickfunction)
    // always call your code through ready to ensure the DOM is fully loaded

});
