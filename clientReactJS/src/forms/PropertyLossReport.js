import "../css/PropertyLossReport_CSS.css"
import "../images/icons/FVSRA_ICON.png"
import logo from ".//PDRMA Form 03 Property Loss Report_files/Image_001.jpg"
import {useState} from "react";
import {useNavigate} from "react-router-dom";



const PropertyReport = () => {

const [agencyName, setAgencyName] = useState("Fox Valley Special Recreation Association");
const [todaysDate, setTodaysDate] = useState("");
const [dateOfIncident, setDateOfIncident] = useState("");
const [timeOfIncident, setTimeOfIncident] = useState("");
const [nameOfPersonCompletingTheReport, setNameOfPersonCompletingTheReport] = useState("");
const [titleOfPersonCompletingReport, setTitleOfPersonCompletingReport] = useState("");
const [bizPhone, setBizPhone] = useState("");
const [bizEmail, setBizEmail] = useState("");
const [howDidTheIncidentOccurAndWhatPropertyWasDamaged, setHowDidTheIncidentOccurAndWhatPropertyWasDamaged] = useState("");
const [nameOfLocation, setNameOfLocation] = useState("");
const [streetAddressIncidentLocation, setStreetAddressIncidentLocation] = useState("");
const [cityIncidentLocation, setCityIncidentLocation] = useState("");
const [stateIncidentLocation, setStateIncidentLocation] = useState("");
const [zipCode, setZipCode] = useState("");
const [locationSpecify, setLocationSpecify] = useState("");
const [primaryLocation, setPrimaryLocation] = useState("");
const [estimateOfLoss, setEstimateOfLoss] = useState(0);
const [contactPersonFacility, setContactPersonFacility] = useState("");
const [contactPersonEmail, setContactPersonEmail] = useState("")
const [contactPersonPhoneNum, setContactPersonPhoneNum] = useState("")
const [damageThirdParty, setDamageThirdParty] = useState("")
const [personResponsibleName, setPersonResponsibleName] = useState("");
const [personResponsibleStreetAddress, setPersonResponsibleStreetAddress] = useState("");
const [personResponsibleCity, setPersonResponsibleCity] = useState("");
const [personResponsibleState, setPersonResponsibleState] = useState("")
const [zipCodePersonResponsible, setZipCodePersonResponsible] = useState("")
const [policeInvestigationYesNoUnknown, setPoliceInvestigationYesNoUnknown] = useState("");
const [whatPoliceAgency, setWhatPoliceAgency] = useState("");
const [policeReportNumber, setPoliceNumber] = useState("");
const [wereCriminalCharges, setWereCriminalCharges] = useState("");
const navigate = useNavigate() //Like going back and forward in "history"/back from the previous or next page


  const handleSubmit = (e) => { //Handles the onSubmit action of the log
    e.preventDefault();

    let propertyLossReportObj = {
      "Name_of_the_Agency": agencyName,
      "Todays_Date": todaysDate,
      "Date_of_Incident": dateOfIncident,
      "Time_Of_Incident": timeOfIncident,
      "Name_of_the_person_Completing_the_report": nameOfPersonCompletingTheReport,
      "Title_Of_Person_Completing_the_report": titleOfPersonCompletingReport,
      "Business_Phone": bizPhone,
      "Business_Email": bizEmail,
      "How_did_the_incident_occur_and_what_property_was_damaged": howDidTheIncidentOccurAndWhatPropertyWasDamaged,
      "Name_of_location": nameOfLocation,
      "Street_Address_Incident_Location": streetAddressIncidentLocation,
      "State_Incident_Location": stateIncidentLocation,
      "City_Incident_Location": cityIncidentLocation,
      "Zip_Code": zipCode,
      "Location_Specify": locationSpecify,
      "Primary_Location": primaryLocation,
      "Estimate_of_Loss": estimateOfLoss,
      "Contact_Person_Facility": contactPersonFacility,
      "Contact_Person_Email": contactPersonEmail,
      "Contact_Person_Phone_Number": contactPersonPhoneNum,
      "Damage_Third_Party": damageThirdParty,
      "Person_Responsible_Name": personResponsibleName,
      "Person_Responsible_Street_Address": personResponsibleStreetAddress,
      "Person_Responsible_City": personResponsibleCity,
      "Person_Responsible_State": personResponsibleState,
      "Zip_Code_Person_Responsible": zipCodePersonResponsible,
      "Police_Investigation_Yes_No_Unknown": policeInvestigationYesNoUnknown,
      "What_Police_Agency": whatPoliceAgency,
      "Police_Report_Number": policeReportNumber,
      "Were_Criminal_Charges": wereCriminalCharges
    }

    fetch('http://127.0.0.1:5000/fvsra/propertyLossReport', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(propertyLossReportObj)
    }).then(() => {
      alert("Report has been submitted!")
      navigate(-1) //Redirects page

    })

  }

    return (
        <div className="PLRF_entire-page">
        <div className="PLRF_top-space" />
        <div className="PLRF_page-head">
          <div className="PLRF_page-head-grid">
            <div>
              <p style={{textIndent: '0pt', textAlign: 'left'}}><span><img alt="image" height={68} src={logo} width={222} /></span>
              </p>
            </div>
            <div>
              <table className="PLRF_table" style={{borderCollapse: 'collapse'}} cellSpacing={0}>
                <tbody><tr style={{height: '16pt'}}>
                    <td style={{width: '315pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: 'white'}} rowSpan={3} bgcolor="#25408F"><p className="PLRF_head-text4" style={{paddingTop: '1pt', paddingLeft: '1pt', paddingRight: '4pt', textIndent: '0pt', textAlign: 'center'}}>
                      </p><h1 style={{textIndent: '0pt', lineHeight: '27pt', textAlign: 'center'}}>Property Loss Report</h1>
                      <p className="PLRF_s1" style={{textIndent: '0pt', lineHeight: '9pt', textAlign: 'center'}}>
                        (For damage to agency property)
                      </p>
                      <p style={{paddingTop: '2pt', textIndent: '0pt', textAlign: 'center'}}>
                        Attorney/Client Privileged Document
                      </p>
                    </td>
                    <td style={{width: '57pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt'}} bgcolor="#25408F"><p className="PLRF_head-text2" style={{paddingLeft: '7pt', paddingRight: '7pt', textIndent: '0pt', lineHeight: '15pt', textAlign: 'center'}}>
                      </p><h3 style={{paddingTop: '2pt', paddingLeft: '8pt', textIndent: '0pt', textAlign: 'left'}}>Form</h3>
                      <h2 style={{paddingTop: '3pt', paddingLeft: '14pt', textIndent: '0pt', textAlign: 'left'}}>03</h2>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="PLRF_header-body-space" />
        <form onSubmit={handleSubmit}>
          <table className="PLRF_form-table">
            <tbody><tr style={{height: '21pt'}}>
                <td className="PLRF_blue-boxes-top">
                  1
                </td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderBottomColor: '#24418E'}}>
                  <p className="PLRF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>Agency name</p>
                  <input className="PLRF_Input" type="text" value={agencyName} onChange={(e) => setAgencyName(e.target.value)} id="Agency_Name" name="Agency_Name" required />
                </td>
                <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderBottomColor: '#24418E'}}>
                  <p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="PLRF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>Today’s date</p>
                  <input className="PLRF_Input" type="date" id="Todays_Date" value={todaysDate} onChange={(e) => setTodaysDate(e.target.value)} name="Today's_Date" defaultValue min="2021-01-01" max="2050-01-01" />
                </td>
              </tr>
              <tr style={{height: '22pt'}}>
                <td className="PLRF_blue-boxes">
                  2
                </td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '2pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="PLRF_s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>Date of incident (mm/dd/yyyy)</p>
                  <input className="PLRF_Input" type="date" id="Date_of_Incident" value={dateOfIncident} onChange={(e) => setDateOfIncident(e.target.value)} name="Date_of_Incident" defaultValue min="2021-01-01" max="2050-01-01" />
                </td>
                <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '2pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '2pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="PLRF_s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>Time of incident (hh/mm,
                    a.m./p.m.)</p>
                  <input className="PLRF_Input" type="time" value={timeOfIncident} onChange={(e) => setTimeOfIncident(e.target.value)} id="Time_of_Incident" name="Time_of_Incident" />
                </td>
              </tr>
              <tr style={{height: '22pt'}}>
                <td className="PLRF_blue-boxes">
                  3
                </td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="PLRF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>Name of person completing the report</p>
                  <input className="PLRF_Input" type="text" value={nameOfPersonCompletingTheReport} onChange={(e) => setNameOfPersonCompletingTheReport(e.target.value)} id="Name_of_person_completing_the_report" name="Name_of_person_completing_the_report" required />
                </td><td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="PLRF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>Title of person completing report</p>
                  <div className="PLRF_endInput"><input className="PLRF_Input" type="text" value={titleOfPersonCompletingReport} onChange={(e) => setTitleOfPersonCompletingReport(e.target.value)} id="Title_of_person_completing_report" name required /></div>
                </td>
              </tr>
              <tr style={{height: '21pt'}}>
                <td className="PLRF_blue-boxes">
                  4
                </td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderBottomColor: '#24418E'}}>
                  <p className="PLRF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>Business phone</p>
                  <input className="PLRF_Input" type="tel" id="Business_phone" value={bizPhone} onChange={(e) => setBizPhone(e.target.value)} name="phone" placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                </td><td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderBottomColor: '#24418E'}}>
                  <p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="PLRF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>Business email</p>
                  <div className="PLRF_endInput"><input className="PLRF_Input" type="text" value={bizEmail} onChange={(e) => setBizEmail(e.target.value)} id="Business_email" name required /></div>
                </td>
              </tr>
              <tr style={{height: '25pt'}}>
                <td className="PLRF_blue-boxes">
                  5
                </td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '2pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="PLRF_s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>How did the incident
                    occur and what property was damaged? (Provide a brief factual summary.)</p>
                </td>
              </tr>
              <tr style={{height: '20pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p>
                  <div className="PLRF_endInput"><input className="PLRF_Input" type="text" value={howDidTheIncidentOccurAndWhatPropertyWasDamaged} onChange={(e) => setHowDidTheIncidentOccurAndWhatPropertyWasDamaged(e.target.value)} id="How_did_the_incident_occur_and_what_property_was_damaged" name="How_did_the_incident_occur_and_what_property_was_damaged" required /></div>
                </td>
              </tr>
              <tr style={{height: '20pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p>
                  {/*                <div class="endInput"><input className="PLRF_Input" type="text" id="HowDidIncidentOccur2" name=""></div>*/}
                </td>
              </tr>
              <tr style={{height: '4pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p>
                  {/*                <div class="endInput"><input className="PLRF_Input" type="text" id="HowDidIncidentOccur3" name=""></div>*/}
                </td>
              </tr>
              <tr style={{height: '23pt'}}>
                <td className="PLRF_blue-boxes">
                  6
                </td>
                <td colSpan={3} style={{borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="PLRF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>Name of the location (park, pool,
                    community center; <span className="PLRF_s7">Ex. Smith Pool, Johnson Community Center</span>) or nearest intersection
                  </p>
                  <p className="PLRF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>where the incident occurred.</p>
                  <div className="PLRF_endInput"><input className="PLRF_Input" type="text" value={nameOfLocation} onChange={(e) => setNameOfLocation(e.target.value)} id="NameOfLocation" name="NameOfLocation" required /></div>
                </td>
              </tr>
              <tr style={{height: '19pt'}}>
                <td className="PLRF_blue-boxes">
                  7
                </td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '2pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="PLRF_s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>Is there an address
                    for incident location? If yes, please provide the following:</p></td>
              </tr>
              <tr style={{height: '32pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="PLRF_s3" style={{paddingTop: '4pt', textIndent: '0pt', textAlign: 'left'}}>Street address</p>
                  <div className="PLRF_endInput"><input className="PLRF_Input" type="text" value={streetAddressIncidentLocation} onChange={(e) => setStreetAddressIncidentLocation(e.target.value)} id="StreetAddressIncidentLocation" name="StreetAddressIncidentLocation" /></div>
                </td>
              </tr>
              <tr style={{height: '27pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                  <p className="PLRF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>City</p>
                  <div className="PLRF_endInput"><input className="PLRF_Input" type="text" value={cityIncidentLocation} onChange={(e) => setCityIncidentLocation(e.target.value)} id="CityIncidentLocation" name="CityIncidentLocation" /></div>
                </td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'none', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                  <p className="PLRF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>State</p>
                  <div className="PLRF_endInput"><input className="PLRF_Input" type="text" value={stateIncidentLocation} onChange={(e) => setStateIncidentLocation(e.target.value)} id="StateIncidentLocation" name="StateIncidentLocation" /></div>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="PLRF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>Zip code</p>
                  <input className="PLRF_Input" type="tel" id="ZipCode" value={zipCode} onChange={(e) => setZipCode(e.target.value)} name="ZipCode" placeholder="00000" pattern="[0-9]{5}" />
                </td>
              </tr>
              <tr style={{height: '5pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              </tr>
              <tr style={{height: '24pt'}}>
                <td className="PLRF_blue-boxes">
                  8
                </td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="PLRF_s3" style={{paddingLeft: '1pt', textIndent: '0pt', textAlign: 'left'}}>Location (Specify the
                    exact type of location/facility damaged, listing multiple locations/facilities if necessary. <span className="PLRF_s7">Ex. mainte-</span></p>
                  <p className="PLRF_s7" style={{paddingLeft: '1pt', textIndent: '0pt', textAlign: 'left'}}>nance garage, sports field<span className="PLRF_s3">)</span></p>
                </td>
              </tr>
              <tr style={{height: '22pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p>
                  <div className="PLRF_endInput"><input className="PLRF_Input" type="text" value={locationSpecify} onChange={(e) => setLocationSpecify(e.target.value)} id="LocationSpecify" name="LocationSpecify" /></div>
                </td>
              </tr>
              <tr style={{height: '6pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p>
                  {/*                <div class="endInput"><input className="PLRF_Input" type="text" id="LocationSpecify2" name=""></div>*/}
                </td>
              </tr>
              <tr style={{height: '24pt'}}>
                <td className="PLRF_blue-boxes">
                  9
                </td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="PLRF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>Primary location (Identify the exact
                    area of damage. <span className="PLRF_s7">Ex. tool storage, batting cage</span>)</p>
                  <div className="PLRF_endInput"><input className="PLRF_Input" type="text" value={primaryLocation} onChange={(e) => setPrimaryLocation(e.target.value)} id="PrimaryLocation" name="PrimaryLocation" /></div>
                </td>
              </tr>
              <tr style={{height: '23pt'}}>
                <td className="PLRF_blue-boxes">
                  10
                </td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="PLRF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>Estimate of loss</p>
                  <div className="PLRF_endInput"><input className="PLRF_Input" type="text" id="EstimateOfLoss" value={estimateOfLoss} onChange={(e) => setEstimateOfLoss(e.target.value)} name="EstimateOfLoss" /></div>
                </td>
              </tr>
              <tr style={{height: '24pt'}}>
                <td className="PLRF_blue-boxes">
                  11
                </td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="PLRF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>Contact person at facility</p>
                  <div className="PLRF_endInput"><input className="PLRF_Input" type="text" value={contactPersonFacility} onChange={(e) => setContactPersonFacility(e.target.value)} id="ContactPersonFacility" name="ContactPersonFacility" /></div>
                </td>
              </tr>
              <tr style={{height: '23pt'}}>
                <td className="PLRF_blue-boxes">
                  12
                </td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="PLRF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>Contact person’s email</p>
                  <div className="PLRF_endInput"><input className="PLRF_Input" type="text" value={contactPersonEmail} onChange={(e) => setContactPersonEmail(e.target.value)} id="ContactPersonEmail" name="ContactPersonEmail" /></div>
                </td>
              </tr>
              <tr style={{height: '23pt'}}>
                <td className="PLRF_blue-boxes">
                  13
                </td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '2pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="PLRF_s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>Contact person’s phone number</p>
                  <input className="PLRF_Input" type="tel" value={contactPersonPhoneNum} onChange={(e) => setContactPersonPhoneNum(e.target.value)} id="ContactPersonPhoneNumber" name="ContactPersonPhoneNumber" placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                </td>
              </tr>
              <tr style={{height: '22pt'}}>
                <td className="PLRF_blue-boxes">
                  14
                </td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="PLRF_s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>Was damage caused by third-party
                    (non-agency) individual?</p></td>
                <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <div className="PLRF_inputGrid">
                    <div className="PLRF_s3-right">Yes</div>
                    <div className="PLRF_centerInput">
                      <input className="PLRF_Input" type="radio" value="Yes" checked={damageThirdParty === "Yes"} onClick={() => setDamageThirdParty("Yes")} defaultValue="Yes" id="DamageThirdPartyYes" name="DamageThirdParty" />
                    </div>
                  </div>
                  {/*                <p class="s3" style="text-indent: 0pt;line-height: 10pt;text-align: right;">Yes <div class="centerInput"><input className="PLRF_Input" type="checkbox" id="horns" name="horns"></div></p>*/}
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="PLRF_inputGrid">
                    <div className="PLRF_inputGrid">
                      <div className="PLRF_s3-right">No</div>
                      <div className="PLRF_centerInput">
                        <input className="PLRF_Input" type="radio" value={"No"} checked={damageThirdParty === "No"} onClick={() => setDamageThirdParty("No")} defaultValue="No" id="DamageThirdPartyNo" name="DamageThirdParty" />
                      </div>
                    </div>
                    <div className="PLRF_inputGrid">
                      <div className="PLRF_s3-right">Unknown</div>
                      <div className="PLRF_centerInput">
                        <input className="PLRF_Input" type="radio" value={"Unknown"} onClick={() => setDamageThirdParty("Unknown")} defaultValue="Unknown" id="DamageThirdPartyUnknown" name="DamageThirdParty" defaultChecked />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '27pt'}}>
                <td className="PLRF_blue-boxes">
                  15
                </td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="PLRF_s3" style={{paddingRight: '9pt', textIndent: '0pt', textAlign: 'left'}}>Has the party
                    responsible for damage been identified? If yes, provide the following contact information for the person or
                    persons identified:</p></td>
              </tr>
              <tr style={{height: '36pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                  <p className="PLRF_s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Name</p>
                  <div className="PLRF_endInput"><input className="PLRF_Input" type="text" value={personResponsibleName} onChange={(e) => setPersonResponsibleName(e.target.value)} id="PersonResponsibleName" name="PersonResponsibleName" /></div>
                </td>
                <td colSpan={2} style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="PLRF_s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Street address</p>
                  <div className="PLRF_endInput"><input className="PLRF_Input" type="text" value={personResponsibleStreetAddress} onChange={(e) => setPersonResponsibleStreetAddress(e.target.value)} id="PersonResponsibleStreetAddress" name="PersonResponsibleStreetAddress" /></div>
                </td>
              </tr>
              <tr style={{height: '29pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                  <p className="PLRF_s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>City</p>
                  <div className="PLRF_endInput"><input className="PLRF_Input" type="text" value={personResponsibleCity} onChange={(e) => setPersonResponsibleCity(e.target.value)} id="PersonResponsibleCity" name="PersonResponsibleCity" /></div>
                </td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'none', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                  <p className="PLRF_s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>State</p>
                  <div className="PLRF_endInput"><input className="PLRF_Input" type="text" value={personResponsibleState} onChange={(e) => setPersonResponsibleState(e.target.value)} id="PersonResponsibleState" name="PersonResponsibleState" /></div>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="PLRF_s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Zip code</p>
                  <input className="PLRF_Input" type="tel" id="ZipCodePersonResponsible" value={zipCodePersonResponsible} onChange={(e) => setZipCodePersonResponsible(e.target.value)} name="ZipCodePersonResponsible" placeholder="00000" pattern="[0-9]{5}" />
                </td>
              </tr>
              <tr style={{height: '7pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              </tr>
              <tr style={{height: '25pt'}}>
                <td className="PLRF_blue-boxes">
                  16
                </td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="PLRF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>Has a police agency conducted an investigation?</p>
                </td>
                <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="PLRF_s8" style={{textIndent: '0pt', textAlign: 'right'}}>
                  </p><div className="PLRF_inputGrid">
                    <div className="PLRF_s3-right">Yes</div>
                    <div className="PLRF_centerInput">
                      <input className="PLRF_Input" type="radio" onChange={(e) => setPoliceInvestigationYesNoUnknown("Yes")} defaultValue="Yes" id="PoliceInvestigationYes" name="PoliceInvestigation" />
                    </div>
                  </div>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="PLRF_s3" style={{paddingRight: '33pt', textIndent: '0pt', textAlign: 'right'}}>
                  </p><div className="PLRF_inputGrid">
                    <div className="PLRF_inputGrid">
                      <div className="PLRF_s3-right">No</div>
                      <div className="PLRF_centerInput">
                        <input className="PLRF_Input" type="radio" defaultValue="No" onChange={(e) => setPoliceInvestigationYesNoUnknown("No")} id="PoliceInvestigationNo" name="PoliceInvestigation" />
                      </div>
                    </div>
                    <div className="PLRF_inputGrid">
                      <div className="PLRF_s3-right">Unknown</div>
                      <div className="PLRF_centerInput">
                        <input className="PLRF_Input" type="radio" defaultValue="Unknown" onChange={(e) => setPoliceInvestigationYesNoUnknown("Unknown")} id="PoliceInvestigationUnknown" name="PoliceInvestigation" defaultChecked />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '23pt'}}>
                <td className="PLRF_blue-boxes">
                  17
                </td>
                <td colSpan={2} style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="PLRF_s3" style={{paddingLeft: '1pt', textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>What police
                    agency investigated the incident?</p>
                  <div className="PLRF_endInput"><input className="PLRF_Input" type="text" id="WhatPoliceAgency" value={whatPoliceAgency} onChange={(e) => setWhatPoliceAgency(e.target.value)} name="WhatPoliceAgency" /></div>
                </td>
                <td colSpan={1} style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="PLRF_s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>What is the police report
                    number?</p>
                  <div className="PLRF_endInput"><input className="PLRF_Input" type="text" value={policeReportNumber} onChange={(e) => setPoliceNumber(e.target.value)} id="PoliceReportNumber" name="PoliceReportNumber" /></div>
                </td>
              </tr>
              <tr style={{height: '23pt'}}>
                <td className="PLRF_blue-boxes-bottom">
                  18
                </td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="PLRF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>Were criminal charges brought against
                    the responsible party? If yes, what were the charges?</p>
                  <div className="PLRF_endInput"><input className="PLRF_Input" type="text" value={wereCriminalCharges} onChange={(e) => setWereCriminalCharges(e.target.value)} id="WereCriminalCharges" name="WereCriminalCharges" /></div>
                </td>
              </tr>
            </tbody></table>
          <div className="PLRF_center-text">
            <button name="submitPropertyLossReport" onclick="submitBtn()">Submit</button>
          </div>
        </form>
        <div className="PLRF_bottom-space" />
      </div>
     );
}
 
export default PropertyReport;