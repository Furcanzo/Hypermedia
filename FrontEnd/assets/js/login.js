function signup() {
	var email = document.getElementById("signupemail").value;
	var password = document.getElementById("signuppassword").value;
	var password_confirm = document.getElementById("signupcpassword").value;
	if(password==password_confirm){
		var xmlhttp = new XMLHttpRequest();
		var url= "http://localhost:3000/user/signup";
		xmlhttp.open("POST", url, true);
		xmlhttp.setRequestHeader("Content-type", "application/json");
		xmlhttp.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 201) {
		        var myArr = JSON.parse(this.responseText);
		        var x = document.getElementById("pills-signup-tab");
		        var y = document.getElementById("pills-signin-tab");
		        var x1 = document.getElementById("pills-signin");
		        var y1 = document.getElementById("pills-signup");
		        x.className="nav-link show";
		        y.className="nav-link show active";
		        x1.className="tab-pane fade show active";
		        y1.className="tab-pane fade";
		        document.getElementById("email").value=email;
		    } else if(this.status == 401)
		    document.getElementById("error_message").innerHTML="Email address already signed up";
		};
		var body=JSON.stringify({
			"eMail": email,
			"password": password
		});
		xmlhttp.send(body);
	}else{
		document.getElementById("error_message").innerHTML="Your password and confirmation password do not match";
	}
}
function signin() {
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	var xmlhttp = new XMLHttpRequest();
	var url= "http://localhost:3000/user/login";
	xmlhttp.open("POST", url, true);
	xmlhttp.setRequestHeader("Content-type", "application/json");
	xmlhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	        var myArr = JSON.parse(this.responseText);
	        sessionStorage.setItem("login_email",email);
	        sessionStorage.setItem("token",myArr.token);
	        window.location = "../index.html";
	    }else if(this.readyState == 4 && this.status == 401)
	    document.getElementById("error_message").innerHTML="Email address or password incorrect";
	};
	var body=JSON.stringify({
		"eMail": email,
		"password": password
	});
	xmlhttp.send(body);
}

function login_nav(){
	var token = sessionStorage.getItem("token");
	if(token!=undefined&&token!="undefined"){
		document.getElementById("shopping_cart").style.display="block";
		document.getElementById("email_nav").innerHTML=sessionStorage.getItem("login_email");
		document.getElementById("email_nav").style.display="block";
		document.getElementById("logout_nav").style.display="block";
		document.getElementById("signin_nav").style.display="none";
	}
}
function logout(){
	sessionStorage.setItem("login_email",undefined);
	sessionStorage.setItem("token",undefined);
}