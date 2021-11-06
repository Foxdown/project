//function created to replace the content
function replaceContent() {
	//declaring the variables
	var myRecipientName;
	var hostName;
	
	//setting the variables to the input field's id named recipientNameInput's value 
	myRecipientName = document.getElementById("recipientNameInput").value;
	//setting the variables to the input field's id named  hostNameInput
	hostName = document.getElementById("hostNameInput").value;
	
	console.log('Variable myRecipientName: ' + myRecipientName);
	console.log('Variable hostName: ' + hostName);
	
	//setting the HTML code in the span id recipientNamePlaceholder with the variable 
	document.getElementById("recipientNamePlaceholder").innerHTML = myRecipientName;
	//setting the HTML code in the span id hostNamePlaceholder with the variable 
	document.getElementById("hostNamePlaceholder").innerHTML = hostName;
} 