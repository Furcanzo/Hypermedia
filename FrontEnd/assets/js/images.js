var xmlhttp = new XMLHttpRequest();
var url = "http://localhost:3000/photos/staticAssets";
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        var backgroundImage = document.getElementById("page");
        if(backgroundImage!= null && backgroundImage!=undefined)
        	backgroundImage.style.backgroundImage = "url(" + myArr.assets[0].request.url + ")";
        var logo = document.getElementById("logo_img");
        if(logo!= null && logo!=undefined)
        	logo.setAttribute("src", myArr.assets[1].request.url);
        var favicon = document.getElementById("favicon");
        if(favicon!= null && favicon!=undefined)
	        favicon.href = myArr.assets[2].request.url;
	    var event = document.getElementById("event_img");
        if(event!= null && event!=undefined)
        	event.setAttribute("src", myArr.assets[3].request.url);
        var performer = document.getElementById("performers_img");
        if(performer!= null && performer!=undefined)
        	performer.setAttribute("src", myArr.assets[4].request.url);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();
