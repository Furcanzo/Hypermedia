localStorage.setItem("page_perf_to_display",1);
localStorage.setItem("page_perf_s_to_display",1);
localStorage.setItem("page_cart_to_display",1);
var number = 9;
function refresh(type){
	var url_string = window.location.href;
	var url = new URL(url_string);
	var t = url.searchParams.get("type");
	if(t==null){
		url_string += '?type='+type;
		window.location.href = url_string;
	}else{
		var query_string = url.search;
		var search_params = new URLSearchParams(query_string); 
		search_params.set('type', type);
		url.search = search_params.toString();
		var new_url = url.toString();
		window.location.href = new_url;
	}
	localStorage.setItem("page_to_display",1);
	localStorage.setItem("page_s_to_display",1);
}







var url_string = window.location.href;
var url1 = new URL(url_string);
var type = url1.searchParams.get("type");
var xmlhttp = new XMLHttpRequest();
if(type==null||type=="all"||type=="seminar")
	var url= localStorage.getItem("server_url")+"artisticEvent/";
else
	var url = localStorage.getItem("server_url")+"artisticEvent/type/"+type;
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        if(type!=null&&type.localeCompare("seminar")==0)
        	listSeminars(myArr);
        else if(type==null||type.localeCompare("all")==0){
        	document.getElementsByClassName("titles")[0].style.display="block";
        	document.getElementsByClassName("titles")[1].style.display="block";
        	if(window.screen.width<=499)
				number=3
			else if(window.screen.width<=768&&window.screen.width>=500)
				number=4;
			else
				number=6;
	        list(myArr,true);
        }
        else
        	list(myArr,false);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();


if(type!=null){

	var y1 = document.getElementsByClassName("type active")[0];
	y1.className="type";
	var x1 = document.getElementById(type);
	x1.className="type active";
	var p = document.getElementsByClassName("type active")[0].innerHTML;
	var y = document.getElementById("type_button");
	y.textContent=p;
}
var x = document.getElementsByClassName('type active')[0].innerHTML;

document.getElementById("page_button").onclick=function(){
	var x = document.getElementById("page_list");
	if(x.style.display==="none"){
		x.style.display="block";
	}else{
		x.style.display="none";
	}
}
document.getElementById("page_s_button").onclick=function(){
	var x = document.getElementById("page_s_list");
	if(x.style.display==="none"){
		x.style.display="block";
	}else{
		x.style.display="none";
	}
}

function list(jsonData,all){
	document.getElementById("container1").style.display="block";
	var n_events=jsonData.countAE;
	if(n_events==0||n_events==undefined){
		document.getElementById("n_pages").style.display="none";
		document.getElementById("no_events").style.display="block";
	}
	else{
		var n_pages = Math.ceil(n_events/number);
		const pages = document.getElementById('page_list');
		for(i=1;i<=n_pages;i++){
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
		for (var i = 0; i < jsonData.artistic_events.length; i++) {
	    	//console.log(jsonData.artistic_events[i].name);
		 	let newDiv = document.createElement('div');   //create a div box
		 	let newLink = document.createElement('a'); //create a a
		 	let newDivDate = document.createElement('div'); // create a date div
		 	let newDateSpan = document.createElement('span'); //create a date span
		 	let newCont=document.createElement('div'); //create a image container
		 	let newImage = document.createElement('img'); //create an image
		 	let newInfoDiv = document.createElement('div'); //create an info div
		 	let newTitleSpan = document.createElement('span'); //create a title span

		 	//div box
			newDiv.className='title_box clearfix';
			newDiv.id='listBox'+i;
			


			//date div
			newDivDate.className='event_date';

			//take the data format
			if(jsonData.artistic_events[i].day!=null){
				var date = jsonData.artistic_events[i].day;
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
			//a
			newLink.className='box_link';
			newLink.number=i;
			newLink.identificator=jsonData.artistic_events[i].id;
			newLink.onclick=function (){
				location.href = 'single_event.html?type=artisticEvent&id='+this.identificator;
			};

			//span date
			newDateSpan.className='date';
			newDateSpan.textContent=day+" "+month+" "+year;
			//image container
			newCont.className="img_container";



			//image
			newImage.className='box_img';
			newImage.setAttribute('src',localStorage.getItem("server_url")+'photos/preview/artisticEvent/'+jsonData.artistic_events[i].id);

			//info div
			newInfoDiv.className='event_info';

			//title span
			newTitleSpan.className='event_title';
			newTitleSpan.textContent=jsonData.artistic_events[i].name;


		 	//document.body.appendChild(newElement);
		 	myList.appendChild(newDiv);
		 	newDiv.appendChild(newLink);
		 	newLink.appendChild(newDivDate);
		 	newDivDate.appendChild(newDateSpan);
		 	newLink.appendChild(newCont);
		 	newCont.appendChild(newImage);
		 	newLink.appendChild(newInfoDiv);
		 	newInfoDiv.appendChild(newTitleSpan);

		}
		if(localStorage.getItem("page_to_display")==undefined||localStorage.getItem("page_to_display")==null)
			page_to_display=1;
		else
			page_to_display=localStorage.getItem("page_to_display");
		display(page_to_display,n_events);
		if(all==true){
			listSeminars(jsonData);
		}
		pageList();
	}
}

function listSeminars(jsonData){
	document.getElementById("container2").style.display="block";
	var n_events=jsonData.countS;
	if(n_events==0||n_events==undefined){
		document.getElementById("n_pages").style.display="none";
		document.getElementById("no_events").style.display="block";
	}
	else{


		var n_pages = Math.ceil(n_events/number);
		const pages = document.getElementById('page_s_list');
		for(k=1;k<=n_pages;k++){
			let newsLi = document.createElement('li');
			if(k==1)
				newsLi.className='num_s page_active_s';
			else
				newsLi.className='num_s';
			newsLi.id="s"+k;
			newsLi.innerHTML=k;
			newsLi.setAttribute('onclick', "pagesFunS("+k+","+n_events+")");
			pages.appendChild(newsLi);
		}
		const myList = document.getElementById('seminar_events');
		for (var i = 0; i < jsonData.seminars.length; i++) {
		 	let newDiv = document.createElement('div');   //create a div box
		 	let newLink = document.createElement('a'); //create a a
		 	let newDivDate = document.createElement('div'); // create a date div
		 	let newDateSpan = document.createElement('span'); //create a date span
		 	let newCont=document.createElement('div'); //create a image container
		 	let newImage = document.createElement('img'); //create an image
		 	let newInfoDiv = document.createElement('div'); //create an info div
		 	let newTitleSpan = document.createElement('span'); //create a title span

		 	//div box
			newDiv.className='title_box clearfix';
			newDiv.id='seminarBox'+i;


			//date div
			newDivDate.className='event_date';

			//take the data format
			var date = jsonData.seminars[i].day;
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
			//a
			newLink.className='box_link';
			newLink.number=i;
			newLink.identificator=jsonData.seminars[i].id;
			newLink.onclick=function (){
				location.href = 'single_event.html?type=seminar&id='+this.identificator;
			};
			//span date
			newDateSpan.className='date';
			newDateSpan.textContent=day+" "+month+" "+year;
			//image container
			newCont.className="img_container";
			//image
			newImage.className='box_img';
			newImage.setAttribute('src',localStorage.getItem("server_url")+'photos/preview/seminar/'+jsonData.seminars[i].id);

			//info div
			newInfoDiv.className='event_info';

			//title span
			newTitleSpan.className='event_title';
			newTitleSpan.textContent=jsonData.seminars[i].title;


		 	//document.body.appendChild(newElement);
		 	myList.appendChild(newDiv);
		 	newDiv.appendChild(newLink);
		 	newLink.appendChild(newDivDate);
		 	newDivDate.appendChild(newDateSpan);
		 	newLink.appendChild(newCont);
		 	newCont.appendChild(newImage);
		 	newLink.appendChild(newInfoDiv);
		 	newInfoDiv.appendChild(newTitleSpan);

		}
		if(localStorage.getItem("page_s_to_display")==undefined||localStorage.getItem("page_s_to_display")==null)
			page_s_to_display=1;
		else
			page_s_to_display=localStorage.getItem("page_s_to_display");
		displayEvents(page_s_to_display,n_events);
		pageListS();
	}
}



function active(){
	var x = document.getElementsByClassName("type active")[0].innerHTML;
	var y = document.getElementById("type_button");
	y.textContent=x;
}


function pageList(){
	var x1 = document.getElementsByClassName("num page_active")[0].innerHTML;
	document.getElementById("page_button").textContent="Pag "+x1;
	document.getElementById("page_list").style.display="none";
}
function pageListS(){
	var x2 = document.getElementsByClassName("num_s page_active_s")[0].innerHTML;
	document.getElementById("page_s_button").textContent="Pag "+x2;
	document.getElementById("page_s_list").style.display="none";
}
function display(num, tot){
	for(var j=0;j<tot;j++){
		var id1='listBox'+j;
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
function displayEvents(num, tot){
	for(var j=0;j<tot;j++){
		var id1='seminarBox'+j;
		if(document.getElementById(id1).style.display=="block")
			document.getElementById(id1).style.display="none";
	}
	localStorage.setItem("page_s_to_display",num);
	if(document.getElementById("s"+num)!=null){
		var y1 = document.getElementsByClassName("num_s page_active_s")[0];
		y1.className="num_s";
		var x1 = document.getElementById("s"+num);
		x1.className="num_s page_active_s";
	}
	var num_elem=(num-1)*number;
	if(num_elem>=tot)
		var last = tot;
	else
		var last = num_elem+number;
	for(var i=num_elem;i<last;i++){
		var id='seminarBox'+i;
		if(document.getElementById(id)!=null)
			document.getElementById(id).style.display="block";
	}
}
function pagesFun(a,b){
	display(a,b);
	pageList();
}
function pagesFunS(a,b){
	displayEvents(a,b);
	pageListS();
}