var request_type = localStorage.getItem("request_type");
var request_url = localStorage.getItem("request_link");



function single_page(){
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	        var myArr = JSON.parse(this.responseText);
	        display(myArr);
	    }
	};
	xmlhttp.open(request_type, request_url, true);
	xmlhttp.send();


	function display(jsonData){
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
		document.getElementsByClassName('item_part')[0].style.opacity='1';
		if(jsonData.artisticEventLink.length>0){
			document.getElementById('event_title').style.display='block';
		}
		var myList= document.getElementById('event_list');
		for(var i = 0; i < jsonData.artisticEventLink.length; i++){
			var event = jsonData.artisticEventLink[i];

			
			let newDiv = document.createElement('div');
	 		let newLink = document.createElement('a');
	 		newDiv.className='event_name';
	 		newLink.className='event_link';
	 		newLink.number=i;
	 		newLink.href='./single_event.html';
	 		newLink.innerHTML=event.name;
	 		console.log(event.request.url);
	 		newLink.onclick=function (){
				localStorage.setItem("request_type",jsonData.artisticEventLink[this.number].request.type);
				localStorage.setItem("request_link",jsonData.artisticEventLink[this.number].request.url);
			};
			myList.appendChild(newDiv);
		 	newDiv.appendChild(newLink);
		}


	}
}
