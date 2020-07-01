$(function () {
    
    $('#navbar-button').blur(function (event) {
        
        var screenWidth = window.innerWidth;
        if(screenWidth < 768) {
            $('#collapsable-nav').collapse('hide');
        }
        
    });
    
});

(function (global) {

	var ts = {};

	var homeHtml = "snippets/home.html";
	var contactHtml = "snippets/contact.html";

	var insertHtml = function (selector, html) {
		var targetElem = document.querySelector(selector);
		targetElem.innerHTML = html;
	};

	var showLoading = function (selector) {
  		var html = "<div id='loading' class='text-center'>";
 		html += "<img src='images/ajax-loader.gif'></div>";
  		insertHtml(selector, html);
	};

    document.addEventListener("DOMContentLoaded", function (event) {

        showLoading("#main");
        $ajaxUtils.sendGetRequest(
            homeHtml,
            function (responseText) {
                document.querySelector("#main").innerHTML = responseText;
            },
            false
        );
    });

    ts.loadContact = function () {
        showLoading("#main");
        $ajaxUtils.sendGetRequest(
            contactHtml,
            function (responseText) {
                document.querySelector("#main").innerHTML = responseText;
            },
            false
        );
    }
    
    ts.loadHome = function () {
        showLoading("#main");
        $ajaxUtils.sendGetRequest(
            homeHtml,
            function (responseText) {
                document.querySelector("#main").innerHTML = responseText;
            },
            false
        );
    }
    
	global.$ts = ts;

})(window);
