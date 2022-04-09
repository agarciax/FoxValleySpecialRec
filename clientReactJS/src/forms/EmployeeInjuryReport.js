import "../css/EmployeeInjuryReport_CSS.css"
import "../images/icons/FVSRA_ICON.png"
import logo from ".//PDRMA Form 03 Property Loss Report_files/Image_001.jpg"
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const  EmployeeInjury = () => {

  const [agencyName, setAgencyName] = useState("Fox Valley Special Recreation Association");
  const [todaysDate, setTodaysDate] = useState('');
  const [dateIncident, setDateIncident] = useState('');
  const [timeIncident, setTimeIncident] = useState('');
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [businessPhone, setBusinessPhone] = useState('');
  const [businessEmail, setBusinessEmail] = useState('');
  const [incident, setIncident] = useState('');
  const [location, setLocation] = useState('');
  const [incidentAddress, setIncidentAddress] = useState('');
  const [incidentCity, setIncidentCity] = useState('');
  const [incidentState, setIncidentState] = useState('');
  const [incidentZip, setIncidentZip] = useState('');
  const [locationSpecify, setLocationSpecify] = useState('');
  const [primaryLocation, setPrimaryLocation] = useState('');
  const [employerFEIN, setEmployerFEIN] = useState('');
  const [employerWorkdays, setEmployerWorkdays] = useState('');
  const [employeeDoing, setEmployeeDoing] = useState('');
  const [incidentDetailed, setIncidentDetailed] = useState('');
  const [employeeLast, setEmployeeLast] = useState('');
  const [employeeFirst, setEmployeeFirst] = useState('');
  const [employeeAddress, setEmployeeAddress] = useState('');
  const [employeeCity, setEmployeeCity] = useState('');
  const [employeeState, setEmployeeState] = useState('');
  const [employeeZip, setEmployeeZip] = useState('');
  const [employeeHomePhone, setEmployeeHomePhone] = useState('');
  const [employeeWorkPhone, setEmployeeWorkPhone] = useState('');
  const [employeeCellPhone, setEmployeeCellPhone] = useState('');
  const [bestNumber, setBestNumber] = useState('');
  const [email, setEmail] = useState('');
  const [ssn, setSSN] = useState('');
  const [dob, setDOB] = useState('');
  const [gender, setGender] = useState('');
  const [marital, setMarital] = useState('');
  const [dependents, setDependents] = useState('');
  const [english, setEnglish] = useState('');
  const [wage, setWage] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [employeeStatus, setEmployeeStatus] = useState('');
  const [dateHired, setDateHired] = useState('');
  const [tenure, setTenure] = useState('');
  const [timeBegan, setTimeBegan] = useState('');
  const [lastDate, setLastDate] = useState('');
  const [dateDeath, setDateDeath] = useState('');
  const [premises, setPremises] = useState('');
  const [injuryIllness, setInjuryIllness] = useState('');
  const [describeInjuryIllness, setDescribeInjuryIllness] = useState('');
  const [objectHarmed, setObjectHarmed] = useState('');
  const [medical, setMedical] = useState('');
  const [treatment, setTreatment] = useState('');
  const [emergencyRoom, setEmergencyRoom] = useState('');
  const [hospitalized, setHospitalized] = useState('');
  const [hospitalName, setHospitalName] = useState('');
  const [hospitalAddress, setHospitalAddress] = useState('');
  const [hospitalCity, setHospitalCity] = useState('');
  const [hospitalState, setHospitalState] = useState('');
  const [hospitalZip, setHospitalZip] = useState('');
  const [hospitalPhone, setHospitalPhone] = useState('');
  const navigate = useNavigate() //Like going back and forward in "history"/back from the previous or next page



  const handleSubmit = (e) => { //Handles the onSubmit action of the log
    e.preventDefault();

    let EmployeeInjuryReportObj = {
      "Agency_name": agencyName,
      "Todays_Date": todaysDate,
      "Date_of_Incident": dateIncident,
      "Time_Of_Incident": timeIncident,
      "Name_of_the_person_Completing_the_report": name,
      "Title_Of_Person_Completing_the_report": title,
      "Business_Phone": businessPhone,
      "Business_Email": businessEmail,
      "Incident_occur_and_what_property_was_damaged": incident,
      "Name_of_location": location,
      "Street_Address_Incident_Location": incidentAddress,
      "State_Incident_Location": incidentState,
      "City_Incident_Location": incidentCity,
      "Incident_Zip_Code": incidentZip,
      "Location_Damage": locationSpecify,
      "Primary_Location": primaryLocation,
      "Employer_FEIN": employerFEIN,
      "Employer_Workdays": employerWorkdays,
      "Employee_Doing": employeeDoing,
      "Incident_Details": incidentDetailed,
      "Employee_Last_Name": employeeLast,
      "Employee_First_Name": employeeFirst,
      "Employee_Street_Address": employeeAddress,
      "Employee_City": employeeCity,
      "Employee_State": employeeState,
      "Employee_Zip_Code": employeeZip,
      "Employee_Home_Phone": employeeHomePhone,
      "Employee_Work_Phone": employeeWorkPhone,
      "Employee_Cell_Phone": employeeCellPhone,
      "Employee_Best_Number": bestNumber,
      "Employee_Email": email,
      "Employee_Social_Security_Number": ssn,
      "Employee_Date_of_Birth": dob,
      "Employee_Gender": gender,
      "Employee_Marital_Status": marital,
      "Employee_Dependents": dependents,
      "Employee_English": english,
      "Employee_Wage": wage,
      "Employee_Job_Title": jobTitle,
      "Employee_Status": employeeStatus,
      "Employee_Date_Hired": dateHired,
      "Employee_Tenure": tenure,
      "Employee_Time_Began": timeBegan,
      "Employee_Last_Date_Worked": lastDate,
      "Employee_Date_Death": dateDeath,
      "Premises": premises,
      "Injury_or_Illness": injuryIllness,
      "Describe_Injury_or_Illness": describeInjuryIllness,
      "Object_Harmed": objectHarmed,
      "Medical_Attention": medical,
      "Treatment": treatment,
      "Emergency_Room": emergencyRoom,
      "Hospitalized": hospitalized,
      "Hospital_Name": hospitalName,
      "Hospital_Address": hospitalAddress,
      "Hospital_City": hospitalCity,
      "Hospital_State": hospitalState,
      "Hospital_Zip": hospitalZip,
      "Hospital_Phone": hospitalPhone


    }



    fetch('http://127.0.0.1:5000/fvsra/EmployeeInjuryReport', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(EmployeeInjuryReportObj)
    }).then(() => {
      alert("Report has been submitted!")
      navigate(-1) //Redirects page

    })

  }



    return (
        <div>
        <div className="ERF_entire-page">
          <div className="ERF_top-space" />
          <div className="ERF_page-head">
            <div className="ERF_page-head-grid">
              <div>
                <p style={{textIndent: '0pt', textAlign: 'left'}}><span><img alt="image" height={68} src={logo} width={222} /></span>
                </p>
              </div>
              <div>
                <table style={{borderCollapse: 'collapse'}} cellSpacing={0}>
                  <tbody><tr style={{height: '16pt'}}>
                      <td style={{width: '315pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: 'white'}} rowSpan={3} bgcolor="#25408F"><p className="ERF_head-text4" style={{paddingTop: '1pt', paddingLeft: '1pt', paddingRight: '4pt', textIndent: '0pt', textAlign: 'center'}}>
                        </p><h1 style={{textIndent: '0pt', lineHeight: '27pt', textAlign: 'center', paddingTop: '9pt'}}>Employee Injury Report</h1>
                      </td>
                      <td style={{width: '57pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt'}} bgcolor="#25408F"><p className="ERF_head-text2" style={{paddingLeft: '7pt', paddingRight: '7pt', textIndent: '0pt', lineHeight: '15pt', textAlign: 'center'}}>
                        </p><h3 style={{paddingTop: '2pt', paddingLeft: '8pt', textIndent: '0pt', textAlign: 'left'}}>Form</h3>
                        <h2 style={{paddingTop: '3pt', paddingLeft: '14pt', textIndent: '0pt', textAlign: 'left'}}>04</h2>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="ERF_header-body-space" />
          <table className="ERF_form-table">
            <tbody><tr style={{height: '24pt'}}>
                <td className="ERF_blue-boxes">
                  1
                </td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="ERF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>Complete an Employee Injury Report for each employee injured.</p>
                </td>
              </tr>
              <tr style={{height: '21pt'}}>
                <td className="ERF_blue-boxes-top">
                  2
                </td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderBottomColor: '#24418E'}}>
                  <p className="ERF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>Agency name</p>
                  <input className="ERF_Input"  type="text" id="Agency_Name"  value={agencyName} onChange={(e) => setAgencyName(e.target.value)}  name="Agency_Name"  />
                </td>
                <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderBottomColor: '#24418E'}}>
                  <p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="ERF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>Today’s date</p>
                  <input className="ERF_Input"  type="date" id="Todays_Date" value={todaysDate} onChange={(e) => setTodaysDate(e.target.value)}  name="Today's_Date" defaultValue min="2021-01-01" max="2050-01-01" />
                </td>
              </tr>
              <tr style={{height: '22pt'}}>
                <td className="ERF_blue-boxes">
                  3
                </td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '2pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="ERF_s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>Date of incident (mm/dd/yyyy)</p>
                  <input className="ERF_Input"  type="date" id="Date_of_Incident" value={dateIncident} onChange={(e) => setDateIncident(e.target.value)}  name="Date_of_Incident" defaultValue min="2021-01-01" max="2050-01-01" />
                </td>
                <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '2pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '2pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="ERF_s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>Time of incident (hh/mm,
                    a.m./p.m.)</p>
                  <input className="ERF_Input"  type="time" id="Time_of_Incident" value={timeIncident} onChange={(e) => setTimeIncident(e.target.value)}  name="Time_of_Incident" />
                </td>
              </tr>
              <tr style={{height: '22pt'}}>
                <td className="ERF_blue-boxes">
                  4
                </td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="ERF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>Name of person completing the report</p>
                  <input className="ERF_Input"  type="text" id="Name_of_person_completing_the_report" value={name} onChange={(e) => setName(e.target.value)}  name="Name_of_person_completing_the_report" />
                </td><td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="ERF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>Title of person completing report</p>
                  <div className="ERF_endInput"><input className="ERF_Input"  type="text" id="Title_of_person_completing_report" value={title} onChange={(e) => setTitle(e.target.value)} name="Title_of_person_completing_report" /></div>
                </td>
              </tr>
              <tr style={{height: '21pt'}}>
                <td className="ERF_blue-boxes">
                  5
                </td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderBottomColor: '#24418E'}}>
                  <p className="ERF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>Business phone</p>
                  <input className="ERF_Input"  type="tel" id="Business_phone" value={businessPhone} onChange={(e) => setBusinessPhone(e.target.value)} name="phone" placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                </td><td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderBottomColor: '#24418E'}}>
                  <p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="ERF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>Business email</p>
                  <div className="ERF_endInput"><input className="ERF_Input"  type="text" id="Business_email" value={businessEmail} onChange={(e) => setBusinessEmail(e.target.value)} name="Business_email" /></div>
                </td>
              </tr>
              <tr style={{height: '24pt'}}>
                <td className="ERF_blue-boxes">
                  6
                </td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="ERF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>How did the incident occur? (Provide a one-line factual description.)</p>
                  <div className="ERF_endInput"><input className="ERF_Input"  type="text" id="PrimaryLocation" value={incident} onChange={(e) => setIncident(e.target.value)} name="PrimaryLocation" /></div>
                </td>
              </tr>
              <tr style={{height: '23pt'}}>
                <td className="ERF_blue-boxes">
                  7
                </td>
                <td colSpan={3} style={{borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="ERF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>Name of the location (park, pool,
                    community center; <span className="ERF_s7">Ex. Smith Pool, Johnson Community Center</span>) or nearest intersection
                  </p>
                  <p className="ERF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>where the incident occurred.</p>
                  <div className="ERF_endInput"><input className="ERF_Input"  type="text" id="NameOfLocation" value={location} onChange={(e) => setLocation(e.target.value)} name="NameOfLocation" /></div>
                </td>
              </tr>
              <tr style={{height: '19pt'}}>
                <td className="ERF_blue-boxes">
                  8
                </td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '2pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="ERF_s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>Is there an address
                    for incident location? If yes, please provide the following:</p></td>
              </tr>
              <tr style={{height: '32pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="ERF_s3" style={{paddingTop: '4pt', textIndent: '0pt', textAlign: 'left'}}>Street address</p>
                  <div className="ERF_endInput"><input className="ERF_Input"  type="text" id="StreetAddressIncidentLocation" value={incidentAddress} onChange={(e) => setIncidentAddress(e.target.value)} name="StreetAddressIncidentLocation" /></div>
                </td>
              </tr>
              <tr style={{height: '27pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                  <p className="ERF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>City</p>
                  <div className="ERF_endInput"><input className="ERF_Input"  type="text" id="CityIncidentLocation" value={incidentCity} onChange={(e) => setIncidentCity(e.target.value)} name="CityIncidentLocation" /></div>
                </td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'none', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                  <p className="ERF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>State</p>
                  <div className="ERF_endInput"><input className="ERF_Input"  type="text" id="StateIncidentLocation" value={incidentState} onChange={(e) => setIncidentState(e.target.value)} name="StateIncidentLocation" /></div>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="ERF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>Zip code</p>
                  <input className="ERF_Input"  type="tel" id="ZipCode" value={incidentZip} onChange={(e) => setIncidentZip(e.target.value)} name="ZipCode"  placeholder="00000"  pattern="[0-9]{5}" />
                </td>
              </tr>
              <tr style={{height: '5pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              </tr>
              <tr style={{height: '24pt'}}>
                <td className="ERF_blue-boxes">
                  9
                </td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="ERF_s3" style={{paddingLeft: '1pt', textIndent: '0pt', textAlign: 'left'}}>Location (Specify the
                    exact type of location/facility damaged, listing multiple locations/facilities if necessary. <span className="ERF_s7">Ex. mainte-</span></p>
                  <p className="ERF_s7" style={{paddingLeft: '1pt', textIndent: '0pt', textAlign: 'left'}}>nance garage, sports field<span className="ERF_s3">)</span></p>
                </td>
              </tr>
              <tr style={{height: '22pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p>
                  <div className="ERF_endInput"><input className="ERF_Input"  type="text" id="LocationSpecify" value={locationSpecify} onChange={(e) => setLocationSpecify(e.target.value)} name="LocationSpecify" /></div>
                </td>
              </tr>
              <tr style={{height: '6pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p>
                  {/*                <div class="endInput"><input className="ERF_Input"  type="text" id="LocationSpecify2" name=""></div>*/}
                </td>
              </tr>
              <tr style={{height: '24pt'}}>
                <td className="ERF_blue-boxes">
                  10
                </td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="ERF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>Primary location (Specify exact location. Ex. lap pool, cart storage, classroom, pavilion)</p>
                  <div className="ERF_endInput"><input className="ERF_Input"  type="text" id="PrimaryLocation" value={primaryLocation} onChange={(e) => setPrimaryLocation(e.target.value)} name="PrimaryLocation" /></div>
                </td>
              </tr>
              <tr style={{height: '23pt'}}>
                <td className="ERF_blue-boxes">
                  11
                </td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="ERF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>Employer’s FEIN</p>
                  <div className="ERF_endInput"><input className="ERF_Input"  type="text" id="EstimateOfLoss" value={employerFEIN} onChange={(e) => setEmployerFEIN(e.target.value)} name="EstimateOfLoss" /></div>
                </td>
              </tr>
              <tr style={{height: '22pt'}}>
                <td className="ERF_blue-boxes">
                  12
                </td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="ERF_s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>Did the employee miss more than three (3) scheduled workdays?</p></td>
                <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <div className="ERF_inputGrid">
                    <div className="ERF_s3-right">Yes</div>
                    <div className="ERF_centerInput">
                      <input className="ERF_Input"  type="radio" defaultValue="Yes" id="EmployerWorkdaysYes" value={employerWorkdays} onChange={(e) => setEmployerWorkdays(e.target.value)} name="EmployerWorkdaysNo" />
                    </div>
                  </div>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="ERF_inputGrid">
                    <div className="ERF_inputGrid">
                      <div className="ERF_s3-right">No</div>
                      <div className="ERF_centerInput">
                        <input className="ERF_Input"  type="radio" defaultValue="No" id="EmployerWorkdaysNo" value={employerWorkdays} onChange={(e) => setEmployerWorkdays(e.target.value)} name="EmployerWorkdaysNo" />
                      </div>
                    </div>
                    <div className="ERF_inputGrid">
                      <div className="ERF_s3-right">Unknown</div>
                      <div className="ERF_centerInput">
                        <input className="ERF_Input"  type="radio" defaultValue="Unknown" id="EmployerWorkdaysUnknown" value={employerWorkdays} onChange={(e) => setEmployerWorkdays(e.target.value)} name="EmployerWorkdays" defaultChecked />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '24pt'}}>
                <td className="ERF_blue-boxes">
                  13
                </td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="ERF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>What was the employee doing when the accident occurred?</p>
                  <div className="ERF_endInput"><input className="ERF_Input"  type="text" id="EmployeeDoing" value={employeeDoing} onChange={(e) => setEmployeeDoing(e.target.value)} name="EmployeeDoing" /></div>
                </td>
              </tr>
              <tr style={{height: '23pt'}}>
                <td className="ERF_blue-boxes">
                  14
                </td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="ERF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>How did the incident occur? (Provide a detailed factual description.)</p>
                  <div className="ERF_endInput"><input className="ERF_Input"  type="text" id="IncidentDetailed" value={incidentDetailed} onChange={(e) => setIncidentDetailed(e.target.value)} name="IncidentDetailed" /></div>
                </td>
              </tr>
              <tr style={{height: '36pt'}}>
                <td className="ERF_blue-boxes">
                  15
                </td>
                <td colSpan={2} style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                  <p className="ERF_s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Employee last name</p>
                  <div className="ERF_endInput"><input className="ERF_Input"  type="text" id="EmployeeLastName" value={employeeLast} onChange={(e) => setEmployeeLast(e.target.value)} name="EmployeeLastName" /></div>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="ERF_s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>First name</p>
                  <div className="ERF_endInput"><input className="ERF_Input"  type="text" id="EmployeeFirstName" value={employeeFirst} onChange={(e) => setEmployeeFirst(e.target.value)} name="EmployeeFirstName" /></div>
                </td>
              </tr>
              <tr style={{height: '23pt'}}>
                <td className="ERF_blue-boxes" />
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '2pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="ERF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>Address</p>
                  <div className="ERF_endInput"><input className="ERF_Input"  type="text" id="EmployeeAddress" value={employeeAddress} onChange={(e) => setEmployeeAddress(e.target.value)} name="EmployeeAddress" /></div>
                </td>
              </tr>
              <tr style={{height: '29pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td style={{width: '283pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                  <p className="ERF_s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>City</p>
                  <div className="ERF_endInput"><input className="ERF_Input"  type="text" id="PersonResponsibleCity" value={employeeCity} onChange={(e) => setEmployeeCity(e.target.value)} name="PersonResponsibleCity" /></div>
                </td>
                <td style={{width: '283pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'none', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                  <p className="ERF_s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>State</p>
                  <div className="ERF_endInput"><input className="ERF_Input"  type="text" id="PersonResponsibleState" value={employeeState} onChange={(e) => setEmployeeState(e.target.value)} name="PersonResponsibleState" /></div>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="ERF_s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Zip code</p>
                  <input className="ERF_Input"  type="tel" id="ZipCodePersonResponsible" value={employeeZip} onChange={(e) => setEmployeeZip(e.target.value)} name="ZipCodePersonResponsible"  placeholder="00000"  pattern="[0-9]{5}" />
                </td>
              </tr>
              <tr style={{height: '29pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td style={{width: '283pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                  <p className="ERF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>Home phone #</p>
                  <input className="ERF_Input"  type="tel" id="Home_phone" value={employeeHomePhone} onChange={(e) => setEmployeeHomePhone(e.target.value)} name="phone" placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                </td>
                <td style={{width: '283pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'none', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                  <p className="ERF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>Work phone #</p>
                  <input className="ERF_Input"  type="tel" id="Work_phone" value={setEmployeeWorkPhone} onChange={(e) => setEmployeeHomePhone(e.target.value)} name="phone" placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                </td>
                <td style={{width: '202pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="ERF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>Cell phone #</p>
                  <input className="ERF_Input"  type="tel" id="Cell_phone" value={employeeCellPhone} onChange={(e) => setEmployeeCellPhone(e.target.value)} name="phone" placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                </td>
              </tr>
              <tr style={{height: '22pt'}}>
                <td className="ERF_blue-boxes" />
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="ERF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>Best number to contact employee</p>
                  <input className="ERF_Input"  type="text" id="Best_Number"  value={bestNumber} onChange={(e) => setBestNumber(e.target.value)} name="Best_Number" />
                </td><td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="ERF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>Email</p>
                  <div className="ERF_endInput"><input className="ERF_Input"  type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} name /></div>
                </td>
              </tr>
              <tr style={{height: '29pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td style={{width: '283pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                  <p className="ERF_s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Social security number</p>
                  <div className="ERF_endInput"><input className="ERF_Input"  type="text" id="Social_Security" value={ssn} onChange={(e) => setSSN(e.target.value)} name="Social_Security" /></div>
                </td>
                <td style={{width: '283pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'none', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                  <p className="ERF_s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Date of birth (mm/dd/yyyy)</p>
                  <input className="ERF_Input"  type="date" id="date_of_birth" value={dob} onChange={(e) => setDOB(e.target.value)} name="date_of_birth" defaultValue min="2021-01-01" max="2050-01-01" />
                </td>
                <td style={{width: '202pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="ERF_s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Gender</p>
                  <div className="ERF_inputGrid">
                    <div className="ERF_inputGrid">
                      <div className="ERF_s3-right">Male</div>
                      <div className="ERF_centerInput">
                        <input className="ERF_Input"  type="radio" defaultValue="Male" id="GenderMale" value={gender} onChange={(e) => setGender(e.target.value)} name="GenderMale" />
                      </div>
                    </div>
                    <div className="ERF_inputGrid">
                      <div className="ERF_s3-right">Female</div>
                      <div className="ERF_centerInput">
                        <input className="ERF_Input"  type="radio" defaultValue="Female" id="GenderFemale" value={gender} onChange={(e) => setGender(e.target.value)} name="GenderFemale" />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '29pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td style={{width: '283pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                  <p className="ERF_s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Marital status (divorced/married/single/unknown)</p>
                  <div className="ERF_endInput"><input className="ERF_Input"  type="text" id="Marital_Status" value={marital} onChange={(e) => setMarital(e.target.value)} name="Marital_Status" /></div>
                </td>
                <td style={{width: '283pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'none', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                  <p className="ERF_s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Number of dependents</p>
                  <div className="ERF_endInput"><input className="ERF_Input"  type="text" id="Dependents" value={dependents} onChange={(e) => setDependents(e.target.value)} name="Dependents" /></div>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="ERF_s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Does employee speak English?</p>
                  <div className="ERF_inputGrid">
                    <div className="ERF_inputGrid">
                      <div className="ERF_s3-right">Yes</div>
                      <div className="ERF_centerInput">
                        <input className="ERF_Input"  type="radio" defaultValue="Yes" id="EnglishYes" value={english} onChange={(e) => setEnglish(e.target.value)} name="EnglishYes" />
                      </div>
                    </div>
                    <div className="ERF_inputGrid">
                      <div className="ERF_s3-right">No</div>
                      <div className="ERF_centerInput">
                        <input className="ERF_Input"  type="radio" defaultValue="No" id="EnglishNo" name="EnglishNo" />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '22pt'}}>
                <td className="ERF_blue-boxes" />
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="ERF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>Average weekly wage</p>
                  <input className="ERF_Input"  type="text" id="Average_Wage" value={wage} onChange={(e) => setWage(e.target.value)} name="Average_Wage" />
                </td><td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="ERF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>Job title/occupation</p>
                  <div className="ERF_endInput"><input className="ERF_Input"  type="text" id="Title_of_person_completing_report" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} name /></div>
                </td>
              </tr>
            </tbody></table>
          <div className="ERF_bottom-space" />
        </div>
        {/*PAGE BREAK*/}
        {/*PAGE BREAK*/}
        {/*PAGE BREAK*/}
        {/*PAGE BREAK*/}
        {/*PAGE BREAK*/}
        {/*PAGE BREAK*/}
        {/*PAGE BREAK*/}
        {/*PAGE BREAK*/}
        {/*PAGE BREAK*/}
        {/*PAGE BREAK*/}
        {/*PAGE BREAK*/}
        {/*PAGE BREAK*/}
        {/*PAGE BREAK*/}
        {/*PAGE BREAK*/}
        {/*PAGE BREAK*/}
        {/*PAGE BREAK*/}
        {/*PAGE BREAK*/}
        {/*PAGE BREAK*/}
        {/*PAGE BREAK*/}
        {/*PAGE BREAK*/}
        <div className="ERF_entire-page">
          <div className="ERF_top-space" />
          <div className="ERF_page-head">
            <div className="ERF_page-head-grid">
              <div>
                <p style={{textIndent: '0pt', textAlign: 'left'}}><span><img alt="image" height={68} src={logo} width={222} /></span>
                </p>
              </div>
              <div>
                <table style={{borderCollapse: 'collapse'}} cellSpacing={0}>
                  <tbody><tr style={{height: '16pt'}}>
                      <td style={{width: '315pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: 'white'}} rowSpan={3} bgcolor="#25408F"><p className="ERF_head-text4" style={{paddingTop: '1pt', paddingLeft: '1pt', paddingRight: '4pt', textIndent: '0pt', textAlign: 'center'}}>
                        </p><h1 style={{textIndent: '0pt', lineHeight: '27pt', textAlign: 'center', paddingTop: '9pt'}}>Employee Injury Report</h1>
                      </td>
                      <td style={{width: '57pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt'}} bgcolor="#25408F"><p className="ERF_head-text2" style={{paddingLeft: '7pt', paddingRight: '7pt', textIndent: '0pt', lineHeight: '15pt', textAlign: 'center'}}>
                        </p><h3 style={{paddingTop: '2pt', paddingLeft: '8pt', textIndent: '0pt', textAlign: 'left'}}>Form</h3>
                        <h2 style={{paddingTop: '3pt', paddingLeft: '14pt', textIndent: '0pt', textAlign: 'left'}}>04</h2>
                        <p style={{paddingTop: '2pt', textIndent: '0pt', textAlign: 'center'}}>(pg. 2)</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="ERF_header-body-space" />
          <table className="ERF_form-table">
            <tbody><tr style={{height: '24pt'}}>
                <td className="ERF_blue-boxes">
                  15
                </td>
                <td colSpan={3} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="ERF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>What is the employee’s employment status?</p>
                </td>
              </tr>
              <tr style={{height: '32pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="ERF_inputGrid-5">
                    <div className="ERF_inputGrid">
                      <div className="ERF_s3-right">Permanent full-time</div>
                      <div className="ERF_centerInput">
                        <input className="ERF_Input"  type="radio" defaultValue="Permanent Full-Time" id="Employee_Permanent_Full" value={employeeStatus} onChange={(e) => setEmployeeStatus(e.target.value)} name="Employee_Permanent_Full" />
                      </div>
                    </div>
                    <div className="ERF_inputGrid">
                      <div className="ERF_s3-right">Permanent part-time</div>
                      <div className="ERF_centerInput">
                        <input className="ERF_Input"  type="radio"defaultValue="Permanent Part-Time" id="Employee_Permanent_Part" value={employeeStatus} onChange={(e) => setEmployeeStatus(e.target.value)} name="Employee_Permanent_Part" />
                      </div>
                    </div>
                    <div className="ERF_inputGrid">
                      <div className="ERF_s3-right">Seasonal</div>
                      <div className="ERF_centerInput">
                        <input className="ERF_Input"  type="radio" defaultValue="Seasonal" id="Employee_Seasonal" value={employeeStatus} onChange={(e) => setEmployeeStatus(e.target.value)} name="Seasonal"/>
                      </div>
                    </div>
                    <div className="ERF_inputGrid">
                      <div className="ERF_s3-right">Intern</div>
                      <div className="ERF_centerInput">
                        <input className="ERF_Input" type="radio" defaultValue="Intern" id="Employee_Intern" value={employeeStatus} onChange={(e) => setEmployeeStatus(e.target.value)} name="Employee_Intern" />
                      </div>
                    </div>
                    <div className="ERF_inputGrid">
                      <div className="ERF_s3-right">Other</div>
                      <div className="ERF_centerInput">
                        <input className="ERF_Input"  type="radio" defaultValue="Other" id="Employee_Other" value={employeeStatus} onChange={(e) => setEmployeeStatus(e.target.value)} name="Employee_Other" />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '32pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td style={{width: '150pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'none', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                  <p className="ERF_s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Date hired (mm/dd/yyyy)</p>
                  <input className="ERF_Input"  type="date" id="DateHired" value={dateHired} onChange={(e) => setDateHired(e.target.value)} name="DateHired" defaultValue min="1940-01-01" max="2050-01-01" />
                </td>
                <td colSpan={2} style={{width: '526pt', borderLeftStyle: 'none', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="ERF_s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>What is the employee’s tenure? (length of employment)</p>
                  <div className="ERF_inputGrid-5">
                    <div className="ERF_inputGrid">
                      <div className="ERF_s3-right">Less than 1 yr.</div>
                      <div className="ERF_centerInput">
                        <input className="ERF_Input"  type="radio" defaultValue="Less Than 1 yr." id="Less_1_year" value={tenure} onChange={(e) => setTenure(e.target.value)} name="Less_1_year" />
                      </div>
                    </div>
                    <div className="ERF_inputGrid">
                      <div className="ERF_s3-right">1-3 yrs</div>
                      <div className="ERF_centerInput">
                        <input className="ERF_Input"  type="radio" defaultValue="1-3 yrs" id="1-3 yrs" value={tenure} onChange={(e) => setTenure(e.target.value)} name="1-3 yrs" />
                      </div>
                    </div>
                    <div className="ERF_inputGrid">
                      <div className="ERF_s3-right">4-10 yrs</div>
                      <div className="ERF_centerInput">
                        <input className="ERF_Input"  type="radio" defaultValue="4-10 yrs" id="4-10 yrs" value={tenure} onChange={(e) => setTenure(e.target.value)} name="4-10 yrs" />
                      </div>
                    </div>
                    <div className="ERF_inputGrid">
                      <div className="ERF_s3-right">11-19 yrs</div>
                      <div className="ERF_centerInput">
                        <input className="ERF_Input"  type="radio" defaultValue="11-19 yrs" id="11-19 yrs" value={tenure} onChange={(e) => setTenure(e.target.value)} name="11-19 yrs" />
                      </div>
                    </div>
                    <div className="ERF_inputGrid">
                      <div className="ERF_s3-right">More than 20 yrs</div>
                      <div className="ERF_centerInput">
                        <input className="ERF_Input"  type="radio" defaultValue="More than 20 yrs" id="20yrs" value={tenure} onChange={(e) => setTenure(e.target.value)} name="20yrs" />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '22pt'}}>
                <td className="ERF_blue-boxes" />
                <td colSpan={2} style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="ERF_s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>Time employee began work on day of incident (hh/mm a.m./p.m.)</p>
                  <input className="ERF_Input"  type="time" id="TimeBegan" value={timeBegan} onChange={(e) => setTimeBegan(e.target.value)} name="TimeBegan" />
                </td><td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="ERF_s3" style={{textIndent: '0pt', textAlign: 'left'}} />
                </td>
              </tr>
              <tr style={{height: '22pt'}}>
                <td className="ERF_blue-boxes" />
                <td colSpan={2} style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="ERF_s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Last date employee worked prior to date of incident (mm/dd/yyyy)</p>
                  <input className="ERF_Input"  type="date" id="Last_Date" value={lastDate} onChange={(e) => setLastDate(e.target.value)} name="Last_Date" defaultValue min="2020-01-01" max="2050-01-01" />
                </td><td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="ERF_s3" style={{textIndent: '0pt', textAlign: 'left'}} />
                </td>
              </tr>
              <tr style={{height: '22pt'}}>
                <td className="ERF_blue-boxes" />
                <td colSpan={2} style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="ERF_s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>If the employee died as a result of the accident, give the date of death. (mm/dd/yyyy)</p>
                  <input className="ERF_Input"  type="date" id="Date_Death" value={dateDeath} onChange={(e) => setDateDeath(e.target.value)} name="Date_Death" defaultValue min="2021-01-01" max="2050-01-01" />
                </td><td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="ERF_s3" style={{textIndent: '0pt', textAlign: 'left'}} />
                </td>
              </tr>
              <tr style={{height: '22pt'}}>
                <td className="ERF_blue-boxes" />
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="ERF_s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>Did the incident occur on agency premises?</p></td>
                <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <div className="ERF_inputGrid">
                    <div className="ERF_s3-right">Yes</div>
                    <div className="ERF_centerInput">
                      <input className="ERF_Input"  type="radio" defaultValue="Yes" id="PremisesYes" value={premises} onChange={(e) => setPremises(e.target.value)} name="Premises" />
                    </div>
                  </div>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="ERF_inputGrid">
                    <div className="ERF_inputGrid">
                      <div className="ERF_s3-right">No</div>
                      <div className="ERF_centerInput">
                        <input className="ERF_Input"  type="radio" defaultValue="No" id="PremisesNo" value={premises} onChange={(e) => setPremises(e.target.value)} name="PremisesNo" />
                      </div>
                    </div>
                    <div className="ERF_inputGrid">
                      <div className="ERF_s3-right">Unknown</div>
                      <div className="ERF_centerInput">
                        <input className="ERF_Input"  type="radio" defaultValue="Unknown" id="PremisesUnknown" value={premises} onChange={(e) => setPremises(e.target.value)} name="PremisesUnknown" />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '22pt'}}>
                <td className="ERF_blue-boxes" />
                <td colSpan={2} style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="ERF_s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>Injury or illness</p></td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="ERF_inputGrid">
                    <div className="ERF_inputGrid">
                      <div className="ERF_s3-right">Injury</div>
                      <div className="ERF_centerInput">
                        <input className="ERF_Input"  type="radio" defaultValue="Injury" id="Injury" value={injuryIllness} onChange={(e) => setInjuryIllness(e.target.value)} name="Injury" />
                      </div>
                    </div>
                    <div className="ERF_inputGrid">
                      <div className="ERF_s3-right">Illness</div>
                      <div className="ERF_centerInput">
                        <input className="ERF_Input"  type="radio" defaultValue="Illness" id="Illness" value={injuryIllness} onChange={(e) => setInjuryIllness(e.target.value)} name="Illness" />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '23pt'}}>
                <td className="ERF_blue-boxes" />
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '2pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="ERF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>Describe the injury or illness (affected body part and type of injury; Ex. contusion, bruise, laceration, sprain, break, etc.)</p>
                  <div className="ERF_endInput"><input className="ERF_Input"  type="text" id="describeInjuryIllness" value={describeInjuryIllness} onChange={(e) => setDescribeInjuryIllness(e.target.value)} name="describeInjuryIllness" /></div>
                </td>
              </tr>
              <tr style={{height: '23pt'}}>
                <td className="ERF_blue-boxes" />
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '2pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="ERF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>What object or substance, if any, directly harmed the employee?</p>
                  <div className="ERF_endInput"><input className="ERF_Input"  type="text" id="objectCausedHarmed" value={objectHarmed} onChange={(e) => setObjectHarmed(e.target.value)} name="objectCausedHarmed" /></div>
                </td>
              </tr>
              <tr style={{height: '22pt'}}>
                <td className="ERF_blue-boxes">16</td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="ERF_s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>Did the injured employee seek medical attention?</p></td>
                <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <div className="ERF_inputGrid">
                    <div className="ERF_s3-right">Yes</div>
                    <div className="ERF_centerInput">
                      <input className="ERF_Input"  type="radio" defaultValue="Yes" id="MedicalYes" value={medical} onChange={(e) => setMedical(e.target.value)} name="MedicalYes" />
                    </div>
                  </div>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="ERF_inputGrid">
                    <div className="ERF_inputGrid">
                      <div className="ERF_s3-right">No</div>
                      <div className="ERF_centerInput">
                        <input className="ERF_Input"  type="radio" defaultValue="No" id="MedicalNo" value={medical} onChange={(e) => setMedical(e.target.value)} name="MedicalNo" />
                      </div>
                    </div>
                    <div className="ERF_inputGrid">
                      <div className="ERF_s3-right">Unknown</div>
                      <div className="ERF_centerInput">
                        <input className="ERF_Input"  type="radio" defaultValue="Unknown" id="MedicalUnknown" value={medical} onChange={(e) => setMedical(e.target.value)} name="MedicalUnknown" />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '22pt'}}>
                <td className="ERF_blue-boxes">17</td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="ERF_s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>If yes, was the treatment given away from the worksite?</p></td>
                <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <div className="ERF_inputGrid">
                    <div className="ERF_s3-right">Yes</div>
                    <div className="ERF_centerInput">
                      <input className="ERF_Input"  type="radio" defaultValue="Yes" id="TreatmentYes" value={treatment} onChange={(e) => setTreatment(e.target.value)} name="TreatmentYes" />
                    </div>
                  </div>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="ERF_inputGrid">
                    <div className="ERF_inputGrid">
                      <div className="ERF_s3-right">No</div>
                      <div className="ERF_centerInput">
                        <input className="ERF_Input"  type="radio" defaultValue="No" id="TreatmentNo" value={treatment} onChange={(e) => setTreatment(e.target.value)} name="TreatmentNo"  />
                      </div>
                    </div>
                    <div className="ERF_inputGrid">
                      <div className="ERF_s3-right">Unknown</div>
                      <div className="ERF_centerInput">
                        <input className="ERF_Input"  type="radio" defaultValue="Unknown" id="TreatmentUnknown" value={treatment} onChange={(e) => setTreatment(e.target.value)} name="TreatmentUnknown"  />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '22pt'}}>
                <td className="ERF_blue-boxes">18</td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="ERF_s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>Was the employee treated in an emergency room?</p></td>
                <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <div className="ERF_inputGrid">
                    <div className="ERF_s3-right">Yes</div>
                    <div className="ERF_centerInput">
                      <input className="ERF_Input"  type="radio" defaultValue="Yes" id="emergencyRoomYes" value={emergencyRoom} onChange={(e) => setEmergencyRoom(e.target.value)} name="emergencyRoomYes" />
                    </div>
                  </div>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="ERF_inputGrid">
                    <div className="ERF_inputGrid">
                      <div className="ERF_s3-right">No</div>
                      <div className="ERF_centerInput">
                        <input className="ERF_Input"  type="radio" defaultValue="No" id="emergencyRoomNo" value={emergencyRoom} onChange={(e) => setEmergencyRoom(e.target.value)} name="emergencyRoomNo" /> />
                      </div>
                    </div>
                    <div className="ERF_inputGrid">
                      <div className="ERF_s3-right">Unknown</div>
                      <div className="ERF_centerInput">
                        <input className="ERF_Input"  type="radio" defaultValue="Unknown" id="emergencyRoomUnknown" value={emergencyRoom} onChange={(e) => setEmergencyRoom(e.target.value)} name="emergencyRoomUnknown" /> />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '22pt'}}>
                <td className="ERF_blue-boxes">19</td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="ERF_s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>Was the employee hospitalized overnight as an inpatient?</p></td>
                <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <div className="ERF_inputGrid">
                    <div className="ERF_s3-right">Yes</div>
                    <div className="ERF_centerInput">
                      <input className="ERF_Input"  type="radio" defaultValue="Yes" id="HospitalizedYes" value={hospitalized} onChange={(e) => setHospitalized(e.target.value)} name="Hospitalized" />
                    </div>
                  </div>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="ERF_inputGrid">
                    <div className="ERF_inputGrid">
                      <div className="ERF_s3-right">No</div>
                      <div className="ERF_centerInput">
                        <input className="ERF_Input"  type="radio" defaultValue="No" id="HospitalizedNo" value={hospitalized} onChange={(e) => setHospitalized(e.target.value)} name="HospitalizedNo" />
                      </div>
                    </div>
                    <div className="ERF_inputGrid">
                      <div className="ERF_s3-right">Unknown</div>
                      <div className="ERF_centerInput">
                        <input className="ERF_Input"  type="radio" defaultValue="Unknown" id="HospitalizedUnknown" value={hospitalized} onChange={(e) => setHospitalized(e.target.value)} name="HospitalizedUnknown"  />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '36pt'}}>
                <td className="ERF_blue-boxes">
                  20
                </td>
                <td colSpan={3} style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="ERF_s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Name of treating physician, health care provider, or emergency room</p>
                  <div className="ERF_endInput"><input className="ERF_Input"  type="text" id="HospitalName" value={hospitalName} onChange={(e) => setHospitalName(e.target.value)} name="HospitalName" /></div>
                </td>
              </tr>
              <tr style={{height: '23pt'}}>
                <td className="ERF_blue-boxes" />
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '2pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="ERF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>Address</p>
                  <div className="ERF_endInput"><input className="ERF_Input"  type="text" id="HospitalAddress" value={hospitalAddress} onChange={(e) => setHospitalAddress(e.target.value)} name="HospitalAddress" /></div>
                </td>
              </tr>
              <tr style={{height: '29pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td style={{width: '283pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                  <p className="ERF_s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>City</p>
                  <div className="ERF_endInput"><input className="ERF_Input"  type="text" id="hospitalCity" value={hospitalCity} onChange={(e) => setHospitalCity(e.target.value)} name="hospitalCity" /></div>
                </td>
                <td style={{width: '283pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'none', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                  <p className="ERF_s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>State</p>
                  <div className="ERF_endInput"><input className="ERF_Input"  type="text" id="HospitalState" value={hospitalState} onChange={(e) => setHospitalState(e.target.value)} name="HospitalState" /></div>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="ERF_s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Zip code</p>
                  <input className="ERF_Input"  type="tel" id="HospitalZipCode" value={hospitalZip} onChange={(e) => setHospitalZip(e.target.value)} name="HospitalZipCode"  placeholder="00000"   pattern="[0-9]{5}" />
                </td>
              </tr>
              <tr style={{height: '29pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '283pt', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                  <p className="ERF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>Phone number</p>
                  <input className="ERF_Input"  type="tel" id="Hospital_phone" value={hospitalPhone} onChange={(e) => setHospitalPhone(e.target.value)} name="Hospitalphone" placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                </td>
              </tr>
            </tbody></table>
          <div className="ERF_bottom-space" />
        </div>
      </div>
     );
}

export default EmployeeInjury;