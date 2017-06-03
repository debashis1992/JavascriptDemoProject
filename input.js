var start = function() {
	
	var username = prompt("Enter username : ").toUpperCase();
	var role = prompt("Enter role : ").toUpperCase();
	var user_appl_name = prompt("Enter user application name : ").toUpperCase();
	var sol_id = prompt("Enter sol ID : ").toUpperCase();
	var user_workclass = prompt("Enter user workclass : ").toUpperCase();
	
	confirm(username+"|"+user_appl_name+"|"+role+"|"+sol_id+"|"+user_workclass);
	//console.log(username+" "+role);
	
	document.getElementById("myUsername").value = username;
	document.getElementById("myRole").value = role;
	document.getElementById("myuser_appl_name").value = user_appl_name;
	document.getElementById("mysol_id").value = sol_id;
	document.getElementById("myuser_work_class").value = user_workclass;
	
	
};