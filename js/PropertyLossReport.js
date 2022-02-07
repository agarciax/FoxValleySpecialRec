
function submitBtn() {
    let propertyLossReportObj = {};

    propertyLossReportObj = {
        'Name_of_the_Agency': document.getElementById("Agency_Name").value,
        'Todays_Date': document.getElementById("Todays_Date").value,
        'Date_of_Incident': parseInt(document.getElementById("Date_of_Incident").value),
        'Time_Of_Incident': document.getElementById("Time_of_Incident").value,
        'Name_of_the_person_Completing_the_report': document.getElementById("Name_of_person_completing_the_report").value,
        'Title_Of_Person_Completing_the_report': document.getElementById("Title_of_person_completing_report").value,
        'Business_Phone': document.getElementById("Business_phone").value,
        'Business_Email': document.getElementById("Business_email").value,
        'How_did_the_incident_occur_and_what_property_was_damaged': document.getElementById("How_did_the_incident_occur_and_what_property_was_damaged").value,
        'Name_of_location': document.getElementById("NameOfLocation").value,
        'Street_Address_Incident_Location': document.getElementById("StreetAddressIncidentLocation").value,
        'City_Incident_Location': document.getElementById("CityIncidentLocation").value,
        'State_Incident_Location': document.getElementById("StateIncidentLocation").value,
        'Zip_Code': parseInt(document.getElementById("ZipCode").value),
        'Location_Specify': document.getElementById("LocationSpecify").value,
        'Primary_Location': document.getElementById("PrimaryLocation").value,
        'Estimate_of_Loss': document.getElementById("EstimateOfLoss").value,
        'Contact_Person_Facility': document.getElementById("ContactPersonFacility").value,
        'Contact_Person_Email': document.getElementById("ContactPersonEmail").value,
        'Contact_Person_Phone_Number': document.getElementById("ContactPersonPhoneNumber").value,
        'Damage_Third_Party': document.querySelector('input[name="DamageThirdParty"]:checked').value,
        'Person_Responsible_Name': document.getElementById("PersonResponsibleName").value,
        'Person_Responsible_Street_Address': document.getElementById("PersonResponsibleStreetAddress").value,
        'Person_Responsible_City': document.getElementById("PersonResponsibleCity").value,
        'Person_Responsible_State': document.getElementById("PersonResponsibleState").value,
        'Zip_Code_Person_Responsible': document.getElementById("ZipCodePersonResponsible").value,
        'Police_Investigation_Yes_No_Unknown': document.querySelector('input[name="PoliceInvestigation"]:checked').value,
        'What_Police_Agency': document.getElementById("WhatPoliceAgency").value,
        'Police_Report_Number': document.getElementById("PoliceReportNumber").value,
        'Were_Criminal_Charges': document.getElementById("WereCriminalCharges").value

    }
    insertPropertyLossReport(propertyLossReportObj);
}

function insertPropertyLossReport(propertyLossReportObj) {
    let URL = "http://127.0.0.1:3000/fvsra/propertyLossReport"
    $.ajax({
        url : URL,
        contentType : 'application/json',
        type: 'POST',
        data : JSON.stringify( propertyLossReportObj ),
        success : function( data ) {
            //let oStr = "<h2> Success </h2>" ;
            console.log(`Success`)
            console.log( data );
            alert("Report has been reported.")
            //window.location.reload();
        },
        error : function( xhr, status, error ) {
            alert( "Error");
            console.log(`AJAX ERROR`)
            console.log( error );
        }
    })
}