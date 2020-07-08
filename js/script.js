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
    var projectHtml = "snippets/projects.html";
    var servicesHtml = "snippets/services.html";
    var aboutHtml = "snippets/about.html";

	var insertHtml = function (selector, html) {
		var targetElem = document.querySelector(selector);
		targetElem.innerHTML = html;
	};

	var showLoading = function (selector) {
  		var html = "<div id='loading' class='text-center'>";
 		html += "<img src='images/ajax-loader.gif'></div>";
  		insertHtml(selector, html);
	};
    
    var removeActive = function () {
        document.querySelector("#n-hom").removeAttribute("class");
        document.querySelector("#n-ser").removeAttribute("class");
        document.querySelector("#n-abo").removeAttribute("class");
        document.querySelector("#n-con").removeAttribute("class");
    }

    document.addEventListener("DOMContentLoaded", function (event) {

        showLoading("#main");
        document.querySelector("#n-hom").setAttribute("class", "active")
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
        removeActive();
        document.querySelector("#n-con").setAttribute("class", "active")
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
        removeActive();
        document.querySelector("#n-hom").setAttribute("class", "active")
        $ajaxUtils.sendGetRequest(
            homeHtml,
            function (responseText) {
                document.querySelector("#main").innerHTML = responseText;
            },
            false
        );
    }
    
    ts.loadServices = function () {
        showLoading("#main");
        removeActive();
        document.querySelector("#n-ser").setAttribute("class", "active")
        $ajaxUtils.sendGetRequest(
            servicesHtml,
            function (responseText) {
                document.querySelector("#main").innerHTML = responseText;
            },
            false
        );
    }
    
    ts.loadAbout = function () {
        showLoading("#main");
        removeActive();
        document.querySelector("#n-abo").setAttribute("class", "active")
        $ajaxUtils.sendGetRequest(
            aboutHtml,
            function (responseText) {
                document.querySelector("#main").innerHTML = responseText;
            },
            false
        );
    }
    
	global.$ts = ts;

})(window);
