function single_page(){
	var xmlhttp = new XMLHttpRequest();
	var url_string = window.location.href;
	var url = new URL(url_string);
	var id_request = url.searchParams.get("id");
	var type_request = url.searchParams.get("type");
	if(type_request==null)
		displayError();
	var request_url = localStorage.getItem("server_url")+type_request+"/"+id_request;
	xmlhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	        var myArr = JSON.parse(this.responseText);
	        document.getElementById("loader").style.display="none";
	        if(type_request=="artisticEvent")
	        	displayEvent(myArr);
	        else if(type_request=="seminar")
	        	displaySeminar(myArr);
	        else
	        	displayError();
	    }
	};
	
	xmlhttp.open("GET",request_url, true);
	xmlhttp.send();


	function displayEvent(jsonData){
		var title = jsonData.artistic_events[0].name;
		if(jsonData.artistic_events[0].day!=null){
			var date = jsonData.artistic_events[0].day;
			var year = date.charAt(0)+date.charAt(1)+date.charAt(2)+date.charAt(3);
			var month_num = date.charAt(5)+date.charAt(6);
			var month;
			switch (month_num) {
			  case "01":
			    month = "January";
			    break;
			  case "02":
			    month = "February";
			    break;
			  case "03":
			    month = "March";
			    break;
			  case "04":
			    month = "April";
			    break;
			  case "05":
			    month = "May";
			    break;
			  case "06":
			    month = "June";
			    break;
			  case "07":
			    month = "July";
			    break;
			  case "08":
			    month = "August";
			    break;
			  case "09":
			    month = "September";
			    break;
			  case "10":
			    month = "October";
			    break;
			  case "11":
			    month = "November";
			    break;
			  case "12":
			    month = "December";
			}

			var day = date.charAt(8)+date.charAt(9);
			var h = date.charAt(11)+date.charAt(12);
			var min = date.charAt(14)+date.charAt(15);
			h_int=parseInt(h);
			if(h_int>12&&h_int<24){
				h_int-=12;
				h="0"+h_int.toString();
				var event_time=h+":"+min+"PM";
			}else if(h_int==24){
				h=0;
				var event_time="00"+":"+min+"AM";
			}else{
				var event_time=h+":"+min+"AM";
			}
			var eventdate=day+" "+month+" "+year;
		}
		var fact_sheet = jsonData.artistic_events[0].fact_sheet;
		var abstract = jsonData.artistic_events[0].abstract;
		document.getElementById('title').innerHTML=title;
		document.getElementById('date').innerHTML=eventdate+" at "+event_time;
		document.getElementById('fact_sheet').innerHTML=fact_sheet;
		document.getElementById('fact_sheet').style.display="block";
		document.getElementById('abstract').innerHTML=abstract;
		document.getElementById('abstract').style.display="block";
		document.getElementsByClassName('item_part')[0].style.opacity='1';
		if(jsonData.performerLink.length>0){
			document.getElementById('performers_title').style.display='block';
		}
		for(var i = 0; i < jsonData.performerLink.length; i++){
			var performer = jsonData.performerLink[i];
			
			let newDiv = document.createElement('div');
			
	 		let newLink = document.createElement('a');
	 		newDiv.className='performer_name';
	 		newLink.className='performer_link';
	 		newLink.number=i;
	 		newLink.innerHTML=jsonData.performerLink[i].name;
	 		newLink.onclick=function (){
	 			var xmlhttp = new XMLHttpRequest();
				var new_request_url = jsonData.performerLink[this.number].request.url;
				var newType;
				var newId;
				xmlhttp.onreadystatechange = function() {
				    if (this.readyState == 4 && this.status == 200) {
				        var myArr = JSON.parse(this.responseText);
				        if(myArr.artist==undefined||myArr.artist==null){
				        	newType="company";
				        	newId=myArr.company[0].id;
				        	location.href = 'single_performer.html?type='+newType+'&id='+newId;
				        }
				        else if(myArr.company==undefined||myArr.company==null){
				        	newType="artist";
				        	newId=myArr.artist[0].id;
				        	location.href = 'single_performer.html?type='+newType+'&id='+newId;
				        }
				    }
				};
				
				xmlhttp.open("GET",new_request_url, true);
				xmlhttp.send();
			};
			var myList=document.getElementById("performers_title");
			myList.appendChild(newDiv);
			newDiv.appendChild(newLink);
		}
		var seminar = jsonData.artistic_events[0].seminar;
		console.log(seminar);
		let newDiv = document.createElement('div');
	 	let newLink = document.createElement('a');
	 	newDiv.className='seminar_name';
	 	newLink.className='seminar_link';
	 	newLink.innerHTML=jsonData.artistic_events[0].seminar.title;
	 	newLink.onclick=function (){
			var new_request_url = jsonData.artistic_events[0].seminar.request.url;
			var newType;
			var newId=jsonData.artistic_events[0].seminar.id;
			location.href = 'single_event.html?type=seminar&id='+newId;
		}
		var myList=document.getElementById("seminar_title");
		myList.appendChild(newDiv);
		newDiv.appendChild(newLink);
		if(jsonData.artistic_events[0].seminar.title!=null){
			document.getElementById('seminar_title').style.display='block';
		}
	}
	function displaySeminar(jsonData){
		var title = jsonData.seminars[0].title;
		if(jsonData.seminars[0].day!=null){
			var date = jsonData.seminars[0].day;
			var year = date.charAt(0)+date.charAt(1)+date.charAt(2)+date.charAt(3);
			var month_num = date.charAt(5)+date.charAt(6);
			var month;
			switch (month_num) {
			  case "01":
			    month = "January";
			    break;
			  case "02":
			    month = "February";
			    break;
			  case "03":
			    month = "March";
			    break;
			  case "04":
			    month = "April";
			    break;
			  case "05":
			    month = "May";
			    break;
			  case "06":
			    month = "June";
			    break;
			  case "07":
			    month = "July";
			    break;
			  case "08":
			    month = "August";
			    break;
			  case "09":
			    month = "September";
			    break;
			  case "10":
			    month = "October";
			    break;
			  case "11":
			    month = "November";
			    break;
			  case "12":
			    month = "December";
			}

			var day = date.charAt(8)+date.charAt(9);
			var h = date.charAt(11)+date.charAt(12);
			var min = date.charAt(14)+date.charAt(15);
			h_int=parseInt(h);
			if(h_int>12&&h_int<24){
				h_int-=12;
				h="0"+h_int.toString();
				var event_time=h+":"+min+"PM";
			}else if(h_int==24){
				h=0;
				var event_time="00"+":"+min+"AM";
			}else{
				var event_time=h+":"+min+"AM";
			}
			var eventdate=day+" "+month+" "+year;
		}
		var location = jsonData.seminars[0].location;
		document.getElementById('title').innerHTML=title;
		document.getElementById('date').innerHTML=eventdate+" at "+event_time;
		document.getElementById('location').innerHTML=location;
		document.getElementById('location').style.display="block";
		document.getElementsByClassName('item_part')[0].style.opacity='1';
		document.getElementById("ticket_box").style.display="none";
		if(jsonData.artisticEventLink.length>0){
			document.getElementById('events_title').style.display='block';
		}
		for(var i = 0; i < jsonData.artisticEventLink.length; i++){
			var performer = jsonData.artisticEventLink[i];
			
			let newDiv = document.createElement('div');
	 		let newLink = document.createElement('a');
	 		newDiv.className='performer_name';
	 		newLink.className='performer_link';
	 		newLink.number=i;
	 		newLink.innerHTML=jsonData.artisticEventLink[i].name;
	 		newLink.identificator=jsonData.artisticEventLink[i].id;
	 		newLink.onclick=function (){
	 			var xmlhttp = new XMLHttpRequest();
				var new_request_url = jsonData.artisticEventLink[this.number].request.url;
				var newType;
				var newId;
				xmlhttp.onreadystatechange = function() {
				    if (this.readyState == 4 && this.status == 200) {
				        var myArr = JSON.parse(this.responseText);
				        if(myArr.artistic_events==undefined||myArr.artistic_events==null){
				        	newType="seminar";
				        	newId=myArr.seminars[0].id;
				        	refresh(newType,newId);
				        }
				        else if(myArr.seminars==undefined||myArr.seminars==null){
				        	newType="artisticEvent";
				        	newId=myArr.artistic_events[0].id;
				        	refresh(newType,newId);
				        }
				    }
				};
				
				xmlhttp.open("GET",new_request_url, true);
				xmlhttp.send();
			};
			var myList=document.getElementById("events_title");
			myList.appendChild(newDiv);
			newDiv.appendChild(newLink);
		}
	}
	function displayError(){
		document.getElementById("list_part").style.display="none";
		document.getElementById("item_info").style.display="none";
		var page = document.getElementsByClassName("upper_part")[0];
		let newH = document.createElement('h1');
		newH.className="ops";
		newH.innerHTML="OPS!";
		let newH2 = document.createElement('h1');
		newH2.class="wrong";
		newH2.innerHTML="Something went wrong...";
		page.appendChild(newH);
		page.appendChild(newH2);
	}

}
document.getElementById("art_ev").onclick=function(){
	localStorage.setItem("page_to_display",1);
	localStorage.setItem("page_s_to_display",1);
}

function refresh(type,id){
	var url_string = window.location.href;
	var url = new URL(url_string);
	var query_string = url.search;
	var search_params = new URLSearchParams(query_string); 
	search_params.set('type', type);
	search_params.set('id', id);
	url.search = search_params.toString();
	var new_url = url.toString();
	window.location.href = new_url;
}


var ticket = document.getElementById("ticket");
ticket.onclick=function(){
	var url_string = window.location.href;
	var url = new URL(url_string);
	var id_request = url.searchParams.get("id");
	var token = sessionStorage.getItem("token");
	var xmlhttp = new XMLHttpRequest();
	var url= "http://localhost:3000/registration";
	xmlhttp.open("POST", url, true);
	xmlhttp.setRequestHeader("Content-type", "application/json");
	xmlhttp.setRequestHeader("authorization","bearer "+token);
	xmlhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 201) {
	        var myArr = JSON.parse(this.responseText);
	        document.getElementById("ticket").style.marginRight = "0";
	        document.getElementById("checkmark").style.display="block";
	    }else if(this.readyState == 4 && this.status == 401){
	    	window.location.href = "./login_page.html";
	    }else if(this.readyState == 4 && this.status == 500){
	    	document.getElementById("error").innerHTML="Ticket already ordered";
	    }
	};
	var body=JSON.stringify({
		"artistic_events_id": id_request
	});
	xmlhttp.send(body);
}
