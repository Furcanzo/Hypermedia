localStorage.setItem("page_to_display",1);
localStorage.setItem("page_s_to_display",1);
localStorage.setItem("page_perf_to_display",1);
localStorage.setItem("page_perf_s_to_display",1);
var number = 9;

function refresh_page(){
	var url_string = window.location.href;
	window.location.href = url_string;
	localStorage.setItem("page_cart_to_display",1);
}


function removeTicket(id){
	var token = sessionStorage.getItem("token");
	var xmlhttp = new XMLHttpRequest();
	var url= "http://localhost:3000/registration/"+id;
	xmlhttp.open("DELETE", url, true);
	xmlhttp.setRequestHeader("authorization","bearer "+token);
	xmlhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	        var myArr = JSON.parse(this.responseText);
	        refresh_page();
	    }
	};
	xmlhttp.send();
}


function tickets(){
	var token = sessionStorage.getItem("token");
	var xmlhttp = new XMLHttpRequest();
	var url= "http://localhost:3000/registration/";
	xmlhttp.open("GET", url, true);
	xmlhttp.setRequestHeader("authorization","bearer "+token);
	xmlhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	        var myArr = JSON.parse(this.responseText);
        	if(window.screen.width<=499)
				number=3
			else if(window.screen.width<=768&&window.screen.width>=500)
				number=4;
			else
				number=6;
	        list(myArr);
	    }
	};
	xmlhttp.send();
}

document.getElementById("page_button").onclick=function(){
	var x = document.getElementById("page_list");
	if(x.style.display==="none"){
		x.style.display="block";
	}else{
		x.style.display="none";
	}
}

function list(jsonData){
	var n_events=jsonData.registration.length;
	if(n_events==0){
		document.getElementById("loader").style.display="none";
		document.getElementById("n_pages").style.display="none";
		document.getElementById("no_tickets").style.display="block";
	} else{
		var n_pages = Math.ceil(n_events/number);
		const pages = document.getElementById('page_list');
		for(var i=1;i<=n_pages;i++){
			let newLi = document.createElement('li');
			if(i==1)
				newLi.className='num page_active';
			else
				newLi.className='num';
			newLi.id=i;
			newLi.innerHTML=i;
			newLi.setAttribute('onclick', "pagesFun("+i+","+n_events+")");
			pages.appendChild(newLi);
		}
		
		const myList = document.getElementById('artistic_events');
		for (var i = 0; i < jsonData.registration.length; i++) {
			let container = document.createElement('div');
		 	let newDiv = document.createElement('div');   //create a div box
		 	let newLink = document.createElement('a'); //create a a
		 	let newDivDate = document.createElement('div'); // create a date div
		 	let newDateSpan = document.createElement('span'); //create a date span
		 	let newImage = document.createElement('img'); //create an image
		 	let newInfoDiv = document.createElement('div'); //create an info div
		 	let newTitleSpan = document.createElement('span'); //create a title span
		 	let newButton = document.createElement('button'); //create a remove ticket button

		 	container.className="list_elem";
		 	container.id="list_elem";


		 	//div box
			newDiv.className='title_box clearfix';
			newDiv.id='listBox'+i;
			


			//date div
			newDivDate.className='event_date';

				
			//a
			newLink.className='box_link';
			newLink.id='box_link'+i;
			newLink.number=i;
			newLink.onclick=function (){
				location.href = 'single_event.html?type=artisticEvent&id='+this.identificator;
			}

			//span date
			newDateSpan.className='date';
			newDateSpan.id='date'+i;
			//image
			newImage.className='box_img';
			newImage.setAttribute('src','../assets/img/artistic_events.jpg')

			//info div
			newInfoDiv.className='event_info';

			//title span
			newTitleSpan.className='event_title';
			newTitleSpan.id='event_title'+i;

			//button 
			newButton.className='remove_button';
			newButton.id='remove_button'+i;
			newButton.innerHTML="Remove this ticket";

		 	//document.body.appendChild(newElement);
		 	myList.appendChild(container);
		 	container.appendChild(newDiv);
		 	newDiv.appendChild(newLink);
		 	newLink.appendChild(newDivDate);
		 	newDivDate.appendChild(newDateSpan);
		 	newLink.appendChild(newImage);
		 	newLink.appendChild(newInfoDiv);
		 	newInfoDiv.appendChild(newTitleSpan);
		 	container.appendChild(newButton);
		 	getEventData(jsonData,i);
		}
		if(localStorage.getItem("page_cart_to_display")==undefined||localStorage.getItem("page_cart_to_display")==null)
			page_to_display=1;
		else
			page_to_display=localStorage.getItem("page_cart_to_display");
		display(page_to_display,n_events);
		pageList();
		
		document.getElementById("loader").style.display="none";
	}
}
function pageList(){
	var x1 = document.getElementsByClassName("num page_active")[0].innerHTML;
	document.getElementById("page_button").textContent="Pag "+x1;
	document.getElementById("page_list").style.display="none";
}
function display(num, tot){
	console.log(num);
	console.log(tot);
	for(var j=0;j<tot;j++){
		var id1='listBox'+j;
		console.log(id1);
		var id = document.getElementById(id1);
		if(document.getElementById(id1).style.display=="block")
			document.getElementById(id1).style.display="none";
	}
	localStorage.setItem("page_to_display",num);
	if(document.getElementById(num)!=null){
		var y1 = document.getElementsByClassName("num page_active")[0];
		y1.className="num";
		y1.style.display="block";
		var x1 = document.getElementById(num);
		x1.className="num page_active";
	}
	var num_elem=(num-1)*number;
	if(num_elem>=tot)
		var last = tot;
	else
		var last = num_elem+number;
	for(var i=num_elem;i<last;i++){
		var id='listBox'+i;
		if(document.getElementById(id)!=null)
			document.getElementById(id).style.display="block";
	}
}
function pagesFun(a,b){
	display(a,b);
	pageList();
}

function getEventData(jsonData,i){
	var xmlhttp1 = new XMLHttpRequest();
	var url=jsonData.registration[i].request.url;
	xmlhttp1.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	        var myArr = JSON.parse(this.responseText);
	        //take the data format
			if(myArr.artistic_events[0].day!=null){
				var date = myArr.artistic_events[0].day;
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
			console.log(myArr.artistic_events[0].id);
			document.getElementById("box_link"+i).identificator=myArr.artistic_events[0].id;
			document.getElementById("event_title"+i).textContent=myArr.artistic_events[0].name;
			document.getElementById("date"+i).textContent=day+" "+month+" "+year;
			document.getElementById("remove_button"+i).setAttribute('number',myArr.artistic_events[0].id);
			document.getElementById("remove_button"+i).onclick=function(){
				removeTicket(this.getAttribute("number"));
			};
		}
	}
	xmlhttp1.open("GET", url, true);
	xmlhttp1.send();
}