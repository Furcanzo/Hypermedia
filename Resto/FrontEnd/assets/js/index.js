localStorage.setItem("server_url","http://localhost:3000/");
localStorage.setItem("page_to_display",1);
localStorage.setItem("page_s_to_display",1);
localStorage.setItem("page_perf_to_display",1);
localStorage.setItem("page_perf_s_to_display",1);
localStorage.setItem("page_cart_to_display",1);
var token = sessionStorage.getItem("token");
if(token!=undefined&&token!="undefined"){
	document.getElementById("buy_ticket").innerHTML="Click to see your tickets";
	document.getElementById("buy_ticket").href="./pages/shopping_cart_page.html";
}
var date = new Date();
var y= date.getFullYear();
var m=date.getMonth()+1;
var d=date.getDate();
document.getElementById("today_event").onclick=function (){
				location.href = "./pages/day_page.html?y="+y+"&m=0"+m+"&d="+d;
};