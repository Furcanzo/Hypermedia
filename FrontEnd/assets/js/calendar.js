function createEvents(){
  var xmlhttp = new XMLHttpRequest();
  var url = localStorage.getItem("server_url")+"artisticEvent/calendar";
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText);
      var eventObject=new Object();
      if(myArr.countAE==0||myArr.countAE==undefined)
        listSeminars(myArr,i,eventObject);
      for(var i=0; i<myArr.countAE;i++){
        if(myArr.daysAE[i].day!=null){
          var date = myArr.daysAE[i].day;
          var year = date.charAt(0)+date.charAt(1)+date.charAt(2)+date.charAt(3);
          var month_num = date.charAt(5)+date.charAt(6);
          var month;
          switch (month_num) {
            case "01":
              month = "Jan";
              break;
            case "02":
              month = "Feb";
              break;
            case "03":
              month = "Mar";
              break;
            case "04":
              month = "Apr";
              break;
            case "05":
              month = "May";
              break;
            case "06":
              month = "Jun";
              break;
            case "07":
              month = "Jul";
              break;
            case "08":
              month = "Aug";
              break;
            case "09":
              month = "Sep";
              break;
            case "10":
              month = "Oct";
              break;
            case "11":
              month = "Nov";
              break;
            case "12":
              month = "Dec";
          }
          var d = date.charAt(8)+date.charAt(9);
          var event_url = new Object();
          event_url["url"]="./pages/day_page.html?y="+year+"&m="+month_num+"&d="+d;
          eventObject[date]=event_url;
          if(i==myArr.countAE-1){
            listSeminars(myArr,i,eventObject);
          }
        } 
      }
    }
  }; 
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}



$(document).ready(function () {
  var date = new Date();
  var a= date.getFullYear();
  var m=date.getMonth()+1;
  var data = a+'-'+m;
  createEvents();
  var objectEvents1 = localStorage.getItem('eventObject');
  var objectEvents = JSON.parse(objectEvents1);
  $(".responsive-calendar").responsiveCalendar({
    time: data,
    events: objectEvents
  });
});

function listSeminars(myArr,i, eventObject){
  for(var j=0; j<myArr.countS;j++){
    if(myArr.daysS[j].date!=null){
      var date_s = myArr.daysS[j].date;
      console.log(date_s);
      var year_s = date_s.charAt(0)+date_s.charAt(1)+date_s.charAt(2)+date_s.charAt(3);
      var month_num_s = date_s.charAt(5)+date_s.charAt(6);
      var month_s;
      switch (month_num_s) {
        case "01":
          month_s = "Jan";
          break;
        case "02":
          month_s = "Feb";
          break;
        case "03":
          month_s = "Mar";
          break;
        case "04":
          month_s = "Apr";
          break;
        case "05":
          month_s = "May";
          break;
        case "06":
          month_s = "Jun";
          break;
        case "07":
          month_s = "Jul";
          break;
        case "08":
          month_s = "Aug";
          break;
        case "09":
          month_s = "Sep";
          break;
        case "10":
          month_S = "Oct";
          break;
        case "11":
          month_s = "Nov";
          break;
        case "12":
          month_s = "Dec";
      }
      var d_s = date_s.charAt(8)+date_s.charAt(9);
      var event_url_s = new Object();
      event_url_s["url"]="./pages/day_page.html?y="+year_s+"&m="+month_num_s+"&d="+d_s;
      eventObject[date_s]=event_url_s;
      if(j==myArr.countS-1){
        console.log(eventObject);
        localStorage.setItem('eventObject', JSON.stringify(eventObject));

      }
    } 
  }
}
