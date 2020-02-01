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
	        if(type_request=="artist")
	        	displayArtist(myArr);
	        else if(type_request=="company")
	        	displayCompany(myArr);
	        else
	        	displayError();
	    }
	};
	
	xmlhttp.open("GET",request_url, true);
	xmlhttp.send();


	function displayArtist(jsonData){
		var title = jsonData.artist[0].name;
		document.getElementById("page_title").innerHTML=title;
		var details = jsonData.artist[0].details;
		var current_affiliation = jsonData.artist[0].current_affiliation;
		var main_achievements = jsonData.artist[0].main_achievements;
		document.getElementById('name').innerHTML=title;
		document.getElementById('details').innerHTML=details;
		document.getElementById('current_affiliation').innerHTML=current_affiliation;
		document.getElementById('main_achievements').innerHTML=main_achievements;
		document.getElementsByClassName('item_part')[0].style.opacity='1';
		if(jsonData.artisticEventLink.length>0){
			document.getElementById('events_title').style.display='block';
		}
		for(var i = 0; i < jsonData.artisticEventLink.length; i++){
			var performer = jsonData.artisticEventLink[i];
			
			let newDiv = document.createElement('div');
			if(window.screen.width<=768){
				let newLink = document.createElement('p');
				newDiv.className='event_name clearfix';
		 		newLink.className='event_link';
		 		newLink.setAttribute('number',i);
		 		newLink.innerHTML=jsonData.artisticEventLink[i].name;
		 		newLink.onclick=function (){
		 			var xmlhttp = new XMLHttpRequest();
					var new_request_url = jsonData.artisticEventLink[this.getAttribute('number')].request.url;
					var newType;
					var newId;
					xmlhttp.onreadystatechange = function() {
					    if (this.readyState == 4 && this.status == 200) {
					        var myArr = JSON.parse(this.responseText);
					        if(myArr.artistic_events==undefined||myArr.artistic_events==null){
					        	newType="seminar";
					        	newId=myArr.seminars[0].id;
					        	location.href = 'single_event.html?type='+newType+'&id='+newId;
					        }
					        else if(myArr.seminars==undefined||myArr.seminars==null){
					        	newType="artisticEvent";
					        	newId=myArr.artistic_events[0].id;
					        	location.href = 'single_event.html?type='+newType+'&id='+newId;
					        }
					    }
					};
					
					xmlhttp.open("GET",new_request_url, true);
					xmlhttp.send();
				};
				var myList=document.getElementById("events_title");
				myList.appendChild(newDiv);
				newDiv.appendChild(newLink);
			}else{
				let newLink = document.createElement('a');
		 		newDiv.className='event_name clearfix';
		 		newLink.className='event_link';
		 		newLink.setAttribute('number',i);
		 		newLink.innerHTML=jsonData.artisticEventLink[i].name;
		 		newLink.onclick=function (){
		 			var xmlhttp = new XMLHttpRequest();
					var new_request_url = jsonData.artisticEventLink[this.getAttribute('number')].request.url;
					var newType;
					var newId;
					xmlhttp.onreadystatechange = function() {
					    if (this.readyState == 4 && this.status == 200) {
					        var myArr = JSON.parse(this.responseText);
					        if(myArr.artistic_events==undefined||myArr.artistic_events==null){
					        	newType="seminar";
					        	newId=myArr.seminars[0].id;
					        	location.href = 'single_event.html?type='+newType+'&id='+newId;
					        }
					        else if(myArr.seminars==undefined||myArr.seminars==null){
					        	newType="artisticEvent";
					        	newId=myArr.artistic_events[0].id;
					        	location.href = 'single_event.html?type='+newType+'&id='+newId;
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
	}
	function displayCompany(jsonData){
		var title = jsonData.company[0].name;
		document.getElementById("page_title").innerHTML=title;
		var details = jsonData.company[0].details;
		document.getElementById('name').innerHTML=title;
		document.getElementById('details').innerHTML=details;
		document.getElementById('current_affiliation').style.display="none";
		document.getElementById('main_achievements').style.display="none";
		document.getElementsByClassName('item_part')[0].style.opacity='1';
		if(jsonData.artisticEventLink.length>0){
			document.getElementById('events_title').style.display='block';
		}
		for(var i = 0; i < jsonData.artisticEventLink.length; i++){
			var performer = jsonData.artisticEventLink[i];
			
			let newDiv = document.createElement('div');
	 		let newLink = document.createElement('a');
	 		newDiv.className='event_name';
	 		newLink.className='event_link';
	 		newLink.number=i;
	 		newLink.innerHTML=jsonData.artisticEventLink[i].name;
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
				        	location.href = 'single_event.html?type='+newType+'&id='+newId;
				        }
				        else if(myArr.seminars==undefined||myArr.seminars==null){
				        	newType="artisticEvent";
				        	newId=myArr.artistic_events[0].id;
				        	location.href = 'single_event.html?type='+newType+'&id='+newId;
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
}
document.getElementById("art_ev").onclick=function(){
	localStorage.setItem("page_to_display",1);
	localStorage.setItem("page_s_to_display",1);
}