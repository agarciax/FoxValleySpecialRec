function submitAccidentReportBtn() {
    let accidentReportObj = {};

    accidentReportObj = {
        "accident_incident_id": document.getElementById("")
    }

    insertMinorInjuryLog(accidentReportObj);

}

function insertAccidentReportObj(accidentReportObj) {
    let URL = "http://127.0.0.1:3000/fvsra/AccidentIncidentReport"
    $.ajax({
        url : URL,
        contentType : 'application/json',
        type: 'POST',
        data : JSON.stringify( accidentReportObj ),
        success : function( data ) {
            //let oStr = "<h2> Success </h2>" ;
            console.log(`Success`)
            console.log( data );
            alert("Log has been reported.")
            window.location.reload();
        },
        error : function( xhr, status, error ) {
            alert( "Error");
            console.log(`AJAX ERROR`)
            console.log( error );
        }
    })
}