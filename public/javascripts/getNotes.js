var XHR = new XMLHttpRequest();

XHR.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200) {
        note = JSON.parse(XHR.responseText);
        printNotes();
    }
};

XHR.open("GET", "/notes", true);

XHR.send();

function printNotes() {
    var notes = "";
    var i;
    for (i = 0; i < note.length; i++) {
        notes += "<li>" + "<br>" + note[i].note + "</li>";
    }

    document.getElementById("notes").innerHTML = notes;
}