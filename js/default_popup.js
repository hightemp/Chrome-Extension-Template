/*
** file: js/main.js
** description: javascript code for "html/main.html" page
*/

function fnOnDOMContentLoaded () {
	fnSearchByKeyword("Test");
}

function fnSearchByKeyword(in_strKeyword) {
	// Using XMLHttpRequest
	// xhr.setRequestHeader( 'Api-User-Agent', 'Example/1.0' );
  alert(in_strKeyword);
	
	// Using jQuery
	$.ajax({
	    url: "https://www.mediawiki.org/w/api.php",
	    data: {
				action: "query",
				search: "compiler",
				format: "xml",
				prop: "info"
			},
	    dataType: 'json',
	    type: 'GET',
	    headers: { 'Api-User-Agent': 'Example/1.0' },
	    success: function(data) {
	       $("#code").text(data);
	    }
	});
}

//bind events to dom elements
document.addEventListener('DOMContentLoaded', fnOnDOMContentLoaded);