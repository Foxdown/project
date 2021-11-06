var $ = function (id) { return document.getElementById(id); };

var volunteerArray = [];

var displayVolunteers = function () {
    // display the volunteers in the text area
    var volunteerString = "";

    console.log(volunteerArray)
//incrementation to add the number infront of the names
    for (var z = 0; z < volunteerArray.length; z++) {
        volunteerString = volunteerString + "\n" + (z + 1) + ". " + volunteerArray[z];
    }

    $("volunteerList").value = volunteerString;
};

var addVolunteer = function () {
    // get the data from the form
    var volunteerString = $("first_name").value + " " + $("last_name").value;

    // store the data in an array
    volunteerArray.push(volunteerString);

    // display the volunteers and clear the add form
    displayVolunteers();

    // get the add form ready for next entry
    $("first_name").value = "";
    $("last_name").value = "";
    $("first_name").focus();
};

var deleteVolunteer = function () {
    var volunteerString = $("first_name").value + " " + $("last_name").value;

    console.log(volunteerArray.indexOf(volunteerString));

    console.log(volunteerString);
//using the filter method to match the name entered to the array for deletion4
    volunteerArray = volunteerArray.filter(name => name !== volunteerString);


    // display the volunteers and clear the add form
    displayVolunteers();

    // get the delete form ready for next entry
    $("first_name").value = "";
    $("last_name").value = "";
    $("first_name").focus();
};

var clearList = function () {
    // delete the data from the arrays
    volunteerArray = [];

    // remove the volunteers data from the web page
    $("volunteerList").value = "";

    $("first_name").focus();
};

var sortList = function () {
    // sort the scores
    volunteerArray.sort();

    // display the scores
    displayVolunteers();
};

//When the page is fully loaded, the buttons will be mapped to the JavaScript functions
window.onload = function () {
    $("add_button").onclick = addVolunteer;
    $("delete_button").onclick = deleteVolunteer;
    $("clear_button").onclick = clearList;
    $("sort_button").onclick = sortList;
    $("first_name").focus();
};