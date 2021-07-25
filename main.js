function validate(){
	var firstname = document.getElementById("firstname").value;
     if(firstname == "")
	 {
       document.getElementById("er4").style.visibility="visible";
	 }
	 else
	 {

	}

	var lastname = document.getElementById("lastname").value;
	 if(lastname == "")
	 {
        document.getElementById("er1").style.visibility="visible";
	 }
	 else
	 {

	}

    var email = document.getElementById("email").value;
	var regx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	 if(regx.test(email))
	 {
		
	 }
	 else
	 {
		document.getElementById("er2").style.visibility="visible"; 
	}


	var password = document.getElementById("password").value;
	 if(password == "")
	 {
       document.getElementById("er3").style.visibility="visible";
	 }
	 else
	 {

	}

	 
	
}