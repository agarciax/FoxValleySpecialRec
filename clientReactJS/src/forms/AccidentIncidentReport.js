import "../css/AccidentIncidentReport_CSS.css"
import "../images/icons/FVSRA_ICON.png"
import logo from ".//PDRMA Form 03 Property Loss Report_files/Image_001.jpg"
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const AccidentReport = () => {
  const [AgencyName, setAgencyName] = useState('Fox Valley Special Recreation Association');
  const [TodaysDate, setTodaysDate] = useState('');
  const [IncidentDate, setIncidentDate] = useState('');
  const [IncidentTime, setIncidentTime] = useState('');
  const [PersonCompletingFormName, setPersonCompletingFormName] = useState('');
  const [PersonCompletingFormTitle, setPersonCompletingFormTitle] = useState('');
  const [BusinessPhone, setBusinessPhone] = useState('');
  const [BusinessEmail, setBusinessEmail] = useState('');
  const [HowIncidentOccurred, setHowIncidentOccurred] = useState('');
  const [LocationName, setLocationName] = useState('');
  const [DoesLocationHaveAddress, setDoesLocationHaveAddress] = useState('');
  const [StreetAddress, setStreetAddress] = useState('');
  const [City, setCity] = useState('');
  const [State, setState] = useState('');
  const [ZipCode, setZipCode] = useState('');
  const [Location, setLocation] = useState('');
  const [PrimaryLocation, setPrimaryLocation] = useState('');
  const [InjuredPerson, setInjuredPerson] = useState('');
  const [EmpLName, setEmpLName] = useState('');
  const [EmpFName, setEmpFName] = useState('');
  const [EmpAddress, setEmpAddress] = useState('');
  const [EmpCity, setEmpCity] = useState('');
  const [EmpState, setEmpState] = useState('');
  const [EmpZip, setEmpZip] = useState('');
  const [EmpHomePhone, setEmpHomePhone] = useState('');
  const [EmpWorkPhone, setEmpWorkPhone] = useState('');
  const [EmpCellPhone, setEmpCellPhone] = useState('');
  const [EmpAge, setEmpAge] = useState('');
  const [EmpSex, setEmpSex] = useState('');
  const [IsInjuredPersonAgencyVolunteer, setIsInjuredPersonAgencyVolunteer] = useState('');
  const [InjuryDescription, setInjuryDescription] = useState('');
  const [InjuredStatements, setInjuredStatements] = useState('');
  const [InjuredSaid, setInjuredSaid] = useState('');
  const [FirstAid, setFirstAid] = useState('');
  const [PersonAndPositionOfFirstAidGiver, setPersonAndPositionOfFirstAidGiver] = useState('');
  const [FirstAidGiven, setFirstAidGiven] = useState('');
  const [CprOrAed, setCprOrAed] = useState('');
  const [ParamedicsOffered, setParamedicsOffered] = useState('');
  const [WerePoliceCalled, setWerePoliceCalled] = useState("");
  const [PoliceDepName, setPoliceDepName] = useState('');
  const [OfficerName, setOfficerName] = useState('');
  const [DidYouExpectAClaim, setDidYouExpectAClaim] = useState('');
  const [WasPropDamaged, setWasPropDamaged] = useState('');
  const [HowWasPersonInvolved, setHowWasPersonInvolved] = useState('');
  const [PropDamageLName, setPropDamageLName] = useState('');
  const [PropDamageFName, setPropDamageFName] = useState('');
  const [PropDamAddress, setPropDamAddress] = useState('');
  const [PropDamCity, setPropDamCity] = useState('');
  const [PropDamState, setPropDamState] = useState('');
  const [PropDamZip, setPropDamZip] = useState('');
  const [PropDamPhone, setPropDamPhone] = useState("");
  const [PropDamDescription, setPropDamDescription] = useState('');
  const [WitnessLName, setWitnessLName] = useState('');
  const [WitnessFName, setWitnessFName] = useState('');
  const [WitnessAddress, setWitnessAddress] = useState('');
  const [WitnessCity, setWitnessCity] = useState('');
  const [WitnessState, setWitnessState] = useState('');
  const [WitnessZip, setWitnessZip] = useState('');
  const [WitnessPhoneNum, setWitnessPhoneNum] = useState('');
  const [WitnessStatement, setWitnessStatement] = useState('');
  const [WitnessSaid, setWitnessSaid] = useState('');
  const [WitnessLocationDuringIncident, setWitnessLocationDuringIncident] = useState('');
  const navigate = useNavigate() //Like going back and forward in "history"/back from the previous or next page


  const handleSubmit = (e) => {
    e.preventDefault();

    let accidentReportObj = {
      "Agency_Name" : AgencyName,
      "Todays_Date" : TodaysDate,
      "Date_of_Incident" : IncidentDate,
      "Time_of_incident" : IncidentTime,
      "Name_of_the_person_Completing_the_report" : PersonCompletingFormName,
      "Title_Of_Person_Completing_the_report" : PersonCompletingFormTitle,
      "Business_Phone" : BusinessPhone,
      "Business_Email" : BusinessEmail,
      "How_did_the_incident_Occur" : HowIncidentOccurred,
      "Name_of_the_location" : LocationName,
      "Is_there_an_address_for_incident_Location" : DoesLocationHaveAddress,
      "Street_Address" : StreetAddress,
      "City" : City,
      "State" : State,
      "Zip_code" : ZipCode,
      "Location" : Location,
      "Primary_Location" : PrimaryLocation,
      "Was_a_person_injured" : InjuredPerson,
      "Last_name_employee_injury" : EmpLName,
      "First_name_employee_injury" : EmpFName,
      "Address_employee_injury" : EmpAddress,
      "city_employee_injury" : EmpCity,
      "State_employee_injury" : EmpState,
      "Zip_code_employee_injury" : EmpZip,
      "Home_phone_Number" : EmpHomePhone,
      "Work_phone_number" : EmpWorkPhone,
      "Cell_phone_number" : EmpCellPhone,
      "Age" : EmpAge,
      "Sex" : EmpSex,
      "Is_injured_person_an_agency_volunteer" : IsInjuredPersonAgencyVolunteer,
      "Describe_the_injury" : InjuryDescription,
      "Did_injured_person_make_any_statements" : InjuredStatements,
      "If_yes_what_did_injured_person_say" : InjuredSaid,
      "was_first_aid_administered" : FirstAid,
      "Name_and_position_of_person_who_administered_the_First_aid" : PersonAndPositionOfFirstAidGiver,
      "What_first_aid_was_given" : FirstAidGiven,
      "Did_first_aid_involve_AED_and_or_CPR" : CprOrAed,
      "Were_paramedic_services_offered" : ParamedicsOffered,
      "Were_Police_Called": WerePoliceCalled,
      "Name_of_the_police_department" : PoliceDepName,
      "Name_of_the_officer" : OfficerName,
      "did_you_expect_this_person_submit_a_claim" : DidYouExpectAClaim,
      "Was_Property_Damaged_As_A_Result_Of_This_AccidentOrIncident" : WasPropDamaged,
      "If_Yes_How_Was_The_Person_Involved_In_The_AccidentOrIncident" : HowWasPersonInvolved,
      "last_name_Property_damage" : PropDamageLName,
      "first_name_Property_damage" : PropDamageFName,
      "Address_Property_damage" : PropDamAddress,
      "city_Property_damage" : PropDamCity,
      "state_Property_damage" : PropDamState,
      "zip_code_Property_damage" : PropDamZip,
      "phone_num_Property_Damage": PropDamPhone,
      "Describe_the_property_damage" : PropDamDescription,
      "Last_name_witness_information" : WitnessLName,
      "first_name_witness_information" : WitnessFName,
      "Address_witness_information" : WitnessAddress,
      "City_witness_information" : WitnessCity,
      "State_witness_information" : WitnessState,
      "zip_code_witness_information" : WitnessZip,
      "phone_number_witness_information" : WitnessPhoneNum,
      "did_Witness_make_any_statements" : WitnessStatement,
      "If_yes_what_did_witness_say" : WitnessSaid,
      "Where_was_witness_when_the_accident" : WitnessLocationDuringIncident
    }

    fetch(process.env.REACT_APP_FOX_VALLEY_SPECIAL_REC_ENDPOINT + '/fvsra/accidentIncidentReport', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(accidentReportObj)
    }).then(() => {

      navigate("/submitted") //Redirects page
    })

  }



return (
        <div>
          <form onSubmit={handleSubmit}>
        <div className="ARF_entire-page">
          <div className="ARF_top-space" />
          <div className="ARF_page-head">
            <div className="ARF_page-head-grid">
              <div>
                <p style={{textIndent: '0pt', textAlign: 'left'}}><span><img alt="image" height={68} src={logo} width={222} /></span>
                </p>
              </div>
              <div>
                <table style={{borderCollapse: 'collapse'}} cellSpacing={0}>
                  <tbody><tr style={{height: '16pt'}}>
                      <td style={{width: '315pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: 'white'}} rowSpan={3} bgcolor="#25408F"><p className="ARF_head-text4" style={{paddingTop: '1pt', paddingLeft: '1pt', paddingRight: '4pt', textIndent: '0pt', textAlign: 'center'}}>
                        </p><h1 style={{textIndent: '0pt', lineHeight: '27pt', textAlign: 'center'}}>Accident/Incident Report</h1>
                        <p style={{paddingTop: '2pt', textIndent: '0pt', textAlign: 'center'}}>
                          Attorney/Client Privileged Document
                        </p>
                      </td>
                      <td style={{width: '57pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt'}} bgcolor="#25408F"><p className="ARF_head-text2" style={{paddingLeft: '7pt', paddingRight: '7pt', textIndent: '0pt', lineHeight: '15pt', textAlign: 'center'}}>
                        </p><h3 style={{paddingTop: '2pt', paddingLeft: '8pt', textIndent: '0pt', textAlign: 'left'}}>Form</h3>
                        <h2 style={{paddingTop: '3pt', paddingLeft: '14pt', textIndent: '0pt', textAlign: 'left'}}>01</h2>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="ARF_header-body-space" />

          <table className="ARF_form-table">
            <tbody><tr style={{height: '21pt'}}>
                <td className="ARF_blue-boxes-top">
                  1
                </td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderBottomColor: '#24418E'}}>
                  <p className="ARF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>Agency name</p>
                  <input className="ARF_Input" type="text" name="AgencyName" value={AgencyName} onChange={(e) => setAgencyName(e.target.value)} id="AgencyName" required/>
                </td>
                <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderBottomColor: '#24418E'}}>
                  <p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="ARF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>Today’s date</p>
                  <input className="ARF_Input" type="date" name="TodaysDate" value={TodaysDate} onChange={(e) => setTodaysDate(e.target.value)} id="TodaysDate" defaultValue min="2021-01-01" max="2050-01-01" required/>
                </td>
              </tr>
              <tr style={{height: '22pt'}}>
                <td className="ARF_blue-boxes">
                  2
                </td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '2pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="ARF_s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>Date of incident (mm/dd/yyyy)</p>
                  <input className="ARF_Input" type="date" name="incidentDate" value={IncidentDate} onChange={(e) => setIncidentDate(e.target.value)} id="IncidentDate" defaultValue min="2021-01-01" max="2050-01-01" required />
                </td>
                <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '2pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '2pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="ARF_s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>Time of incident (hh/mm,
                    a.m./p.m.)</p>
                  <input className="ARF_Input" type="time" name="incidentTime" value={IncidentTime} onChange={(e) => setIncidentTime(e.target.value)} id="IncidentTime" required />
                </td>
              </tr>
              <tr style={{height: '22pt'}}>
                <td className="ARF_blue-boxes">
                  3
                </td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="ARF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>Name of person completing the report</p>
                  <input className="ARF_Input" type="text" value={PersonCompletingFormName} onChange={(e) => setPersonCompletingFormName(e.target.value)} id="Name_of_person_completing_the_report" name="Name_of_person_completing_the_report" />
                </td><td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="ARF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>Title of person completing report</p>
                  <div className="ARF_endInput"><input className="ARF_Input" type="text" name="PersonCompletingFormTitle" value={PersonCompletingFormTitle} onChange={(e) => setPersonCompletingFormTitle(e.target.value)} id="PersonCompletingFormName" required /></div>
                </td>
              </tr>
              <tr style={{height: '21pt'}}>
                <td className="ARF_blue-boxes">
                  4
                </td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderBottomColor: '#24418E'}}>
                  <p className="ARF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>Business phone</p>
                  <input className="ARF_Input" type="tel" placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="BusinessPhone" value={BusinessPhone} onChange={(e) => setBusinessPhone(e.target.value)} id="BusinessPhone" required />
                </td><td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderBottomColor: '#24418E'}}>
                  <p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="ARF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>Business email</p>
                  <div className="ARF_endInput"><input className="ARF_Input" type="email" name="BusinessEmail" id="BusinessEmail" value={BusinessEmail} onChange={(e) => setBusinessEmail(e.target.value)} required /></div>
                </td>
              </tr>
              <tr style={{height: '25pt'}}>
                <td className="ARF_blue-boxes">
                  5
                </td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '2pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="ARF_s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>How did the incident
                    occur? (Provide a brief, factual description; do not speculate on fault, etc.)</p>
                </td>
              </tr>
              <tr style={{height: '20pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p>
                  <div className="ARF_endInput"><input className="ARF_Input" type="text" placeholder="i.e. Car Wreck" name="HowIncidentOccurred" value={HowIncidentOccurred} onChange={(e) => setHowIncidentOccurred(e.target.value)} id="HowIncidentOccurred" required/></div>
                </td>
              </tr>
              <tr style={{height: '20pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p>
                  {/*                <div class="endInput"><input className="ARF_Input" type="text" id="HowDidIncidentOccur2" name=""></div>*/}
                </td>
              </tr>
              <tr style={{height: '4pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p>
                  {/*                <div class="endInput"><input className="ARF_Input" type="text" id="HowDidIncidentOccur3" name=""></div>*/}
                </td>
              </tr>
              <tr style={{height: '23pt'}}>
                <td className="ARF_blue-boxes">
                  6
                </td>
                <td colSpan={3} style={{borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="ARF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>Name of the location (park, pool,
                    community center; <span className="ARF_s7">Ex. Smith Pool, Johnson Community Center</span>) or nearest intersection
                  </p>
                  <p className="ARF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>where the incident occurred.</p>
                  <div className="ARF_endInput"><input className="ARF_Input" type="text" placeholder="i.e. Washington" name="LocationName" value={LocationName} onChange={(e) => setLocationName(e.target.value)} id="LocationName" required/></div>
                </td>
              </tr>
              <tr style={{height: '19pt'}}>
                <td className="ARF_blue-boxes">
                  7
                </td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="ARF_s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>
                    Is there an address for incident location? If yes, please provide the following:</p>
                </td>
                <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <div className="ARF_inputGrid">
                    <div className="ARF_s3-right">Yes</div>
                    <div className="ARF_centerInput">
                      <input className="ARF_Input" type="radio" defaultValue="Yes" name="DoesLocationHaveAddress" value={"Yes"} onClick={() => setDoesLocationHaveAddress("Yes")} id="DoesLocationHaveAddress"  required />
                    </div>
                  </div>
                  {/*                <p class="s3" style="text-indent: 0pt;line-height: 10pt;text-align: right;">Yes <div class="centerInput"><input className="ARF_Input" type="checkbox" id="horns" name="horns"></div></p>*/}
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="ARF_inputGrid">
                    <div className="ARF_inputGrid">
                      <div className="ARF_s3-right">No</div>
                      <div className="ARF_centerInput">
                        <input className="ARF_Input" type="radio" defaultValue="No" name="DoesLocationHaveAddress" value={"No"} onClick={() => setDoesLocationHaveAddress("No")} id="DoesLocationHaveAddress"  required />
                      </div>
                    </div>
                    <div className="ARF_inputGrid">
                      <div className="ARF_s3-right">Unknown</div>
                      <div className="ARF_centerInput">
                        <input className="ARF_Input" type="radio" defaultValue="Unknown" name="DoesLocationHaveAddress" value={"Unknown"} onClick={() => setDoesLocationHaveAddress("Unknown")} id="DoesLocationHaveAddress"  required />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '32pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="ARF_s3" style={{paddingTop: '4pt', textIndent: '0pt', textAlign: 'left'}}>Street address</p>
                  <div className="ARF_endInput"><input className="ARF_Input" type="text" name="StreetAddress" value={StreetAddress} onChange={(e) => setStreetAddress(e.target.value)} id="StreetAddress" /></div>
                </td>
              </tr>
              <tr style={{height: '27pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                  <p className="ARF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>City</p>
                  <div className="ARF_endInput"><input className="ARF_Input" type="text" name="City" value={City} onChange={(e) => setCity(e.target.value)} id="City"/></div>
                </td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                  <p className="ARF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>State</p>
                  <div className="ARF_endInput"><input className="ARF_Input" type="text" placeholder="i.e. Illinois" name="State" value={State} onChange={(e) => setState(e.target.value)} id="State" /></div>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="ARF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>Zip code</p>
                  <input className="ARF_Input" type="tel" placeholder="00000" name="ZipCode" pattern="[0-9]{5}" value={ZipCode} onChange={(e) => setZipCode(e.target.value)} id="ZipCode"   />
                </td>
              </tr>
              <tr style={{height: '5pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              </tr>
              <tr style={{height: '24pt'}}>
                <td className="ARF_blue-boxes">
                  8
                </td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="ARF_s3" style={{paddingLeft: '1pt', textIndent: '0pt', textAlign: 'left'}}>Location (Specify the exact type of location/facility where injury occurred. Ex. maintenance garage, sports field, aquatic
                    outdoor, golf course, etc.)</p>
                </td>
              </tr>
              <tr style={{height: '22pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p>
                  <div className="ARF_endInput"><input className="ARF_Input" type="text" name="Location" value={Location} onChange={(e) => setLocation(e.target.value)} id="Location"  required /></div>
                </td>
              </tr>
              <tr style={{height: '6pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p>
                  {/*                <div class="endInput"><input className="ARF_Input" type="text" id="LocationSpecify2" name=""></div>*/}
                </td>
              </tr>
              <tr style={{height: '24pt'}}>
                <td className="ARF_blue-boxes">
                  9
                </td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="ARF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>Primary location (Specify exact location. Ex. lap pool, cart storage, classroom, pavilion)</p>
                  <div className="ARF_endInput"><input className="ARF_Input" type="text" name="PrimaryLocation" value={PrimaryLocation} onChange={(e) => setPrimaryLocation(e.target.value)} id="PrimaryLocation"  required /></div>
                </td>
              </tr>
              <tr style={{height: '23pt'}}>
                <td colSpan={4} className="ARF_blue-boxes" style={{borderRight: '3px solid #24418E'}}>
                  <div className="ARF_text-left">BODILY INJURY</div>
                </td>
              </tr>
              <tr style={{height: '23pt'}}>
                <td colSpan={4} className="ARF_white-boxes-red-text" style={{borderRight: '3px solid #24418E', borderLeft: '1px solid #24418E'}}>
                  <div className="ARF_text-left">If an employee was injured, please submit the form for an Employee Injury (Form 04) type of incident.</div>
                </td>
              </tr>
              <tr style={{height: '22pt'}}>
                <td className="ARF_blue-boxes">
                  10
                </td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="ARF_s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>Was a person injured? (Ex. patron, citizen, participant, volunteer)</p></td>
                <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <div className="ARF_inputGrid">
                    <div className="ARF_s3-right">Yes</div>
                    <div className="ARF_centerInput">
                      <input className="ARF_Input" type="radio" defaultValue="Yes" name="InjuredPerson" value={"Yes"} onClick={() => setInjuredPerson("Yes")} id="InjuredPerson"  required />
                    </div>
                  </div>
                  {/*                <p class="s3" style="text-indent: 0pt;line-height: 10pt;text-align: right;">Yes <div class="centerInput"><input className="ARF_Input" type="checkbox" id="horns" name="horns"></div></p>*/}
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="ARF_inputGrid">
                    <div className="ARF_inputGrid">
                      <div className="ARF_s3-right">No</div>
                      <div className="ARF_centerInput">
                        <input className="ARF_Input" type="radio" defaultValue="No" name="InjuredPerson" value={"No"} onClick={() => setInjuredPerson("No")} id="InjuredPerson"  required />
                      </div>
                    </div>
                    <div className="ARF_inputGrid">
                      <div className="ARF_s3-right">Unknown</div>
                      <div className="ARF_centerInput">
                        <input className="ARF_Input" type="radio" defaultValue="Unknown" name="InjuredPerson" value={"Unknown"} onChange={() => setInjuredPerson("Unknown")} id="InjuredPerson"  required />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '27pt'}}>
                <td className="ARF_blue-boxes">
                  11
                </td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="ARF_s3" style={{paddingRight: '9pt', textIndent: '0pt', textAlign: 'left'}}>If yes, provide the following information:</p>
                </td>
              </tr>
              <tr style={{height: '36pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td style={{width: '283pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                  <p className="ARF_s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Last name</p>
                  <div className="ARF_endInput"><input className="ARF_Input" type="text" name="EmpLName" value={EmpLName} onChange={(e) => setEmpLName(e.target.value)} id="EmpLName"  /></div>
                </td>
                <td colSpan={3} style={{width: '202pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="ARF_s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>First name</p>
                  <div className="ARF_endInput"><input className="ARF_Input" type="text"  name="EmpFName" value={EmpFName} onChange={(e) => setEmpFName(e.target.value)} id="EmpFName"  /></div>
                </td>
              </tr>
              <tr style={{height: '36pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="ARF_s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Address</p>
                  <div className="ARF_endInput"><input className="ARF_Input" type="text" name="EmpAddress" value={EmpAddress} onChange={(e) => setEmpAddress(e.target.value)} id="EmpAddress"   /></div>
                </td>
              </tr>
              <tr style={{height: '29pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                  <p className="ARF_s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>City</p>
                  <div className="ARF_endInput"><input className="ARF_Input" type="text" name="EmpCity" value={EmpCity} onChange={(e) => setEmpCity(e.target.value)} id="EmpCity"   /></div>
                </td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                  <p className="ARF_s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>State</p>
                  <div className="ARF_endInput"><input className="ARF_Input" type="text" name="EmpState" value={EmpState} onChange={(e) => setEmpState(e.target.value)} id="EmpState"  /></div>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="ARF_s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Zip code</p>
                  <input className="ARF_Input" type="tel"  name="EmpZip" value={EmpZip} onChange={(e) => setEmpZip(e.target.value)} id="EmpZip" placeholder="00000"  pattern="[0-9]{5}" />
                </td>
              </tr>
              <tr style={{height: '29pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                  <p className="ARF_s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Home phone #</p>
                  <div className="ARF_endInput"><input className="ARF_Input" type="text" name="EmpHomePhone" placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={EmpHomePhone} onChange={(e) => setEmpHomePhone(e.target.value)} id="EmpHomePhone"  /></div>
                </td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                  <p className="ARF_s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Work phone #</p>
                  <div className="ARF_endInput"><input className="ARF_Input" type="text" placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="EmpWorkPhone" value={EmpWorkPhone} onChange={(e) => setEmpWorkPhone(e.target.value)} id="EmpWorkPhone"  /></div>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="ARF_s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Cell phone #</p>
                  <input className="ARF_Input" type="tel" placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="EmpCellPhone" value={EmpCellPhone} onChange={(e) => setEmpCellPhone(e.target.value)} id="EmpCellPhone"   />
                </td>
              </tr>
              <tr style={{height: '29pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={2} style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                  <p className="ARF_s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Age</p>
                  <div className="ARF_endInput"><input className="ARF_Input" type="text" name="EmpAge" value={EmpAge} onChange={(e) => setEmpAge(e.target.value)} id="EmpAge"   /></div>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="ARF_s3" style={{paddingRight: '33pt', textIndent: '0pt', textAlign: 'right'}}>
                  </p><div className="ARF_inputGrid">
                    <div className="ARF_inputGrid3">
                      <div className="ARF_s3">Sex</div>
                      <div className="ARF_s3-left">Male</div>
                      <div className="ARF_input-right">
                        <input className="ARF_Input" type="radio" defaultValue="Male" name="EmpSex" value={"M"} onClick={() => setEmpSex("M")} id="EmpSex"   />
                      </div>
                    </div>
                    <div className="ARF_inputGrid">
                      <div className="ARF_s3-left">Female</div>
                      <div className="ARF_input-right">
                        <input className="ARF_Input" type="radio" defaultValue="Female" name="EmpSex" value={"F"} onClick={() => setEmpSex("F")} id="EmpSex"  />

                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '25pt'}}>
                <td className="ARF_blue-boxes">
                  12
                </td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="ARF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>Is the injured person an agency volunteer?</p>
                </td>
                <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="ARF_s8" style={{textIndent: '0pt', textAlign: 'right'}}>
                  </p><div className="ARF_inputGrid">
                    <div className="ARF_s3-right">Yes</div>
                    <div className="ARF_centerInput">
                      <input className="ARF_Input" type="radio" defaultValue="Yes" name="IsInjuredPersonAgencyVolunteer" value={"Yes"} onClick={() => setIsInjuredPersonAgencyVolunteer("Yes")} id="IsInjuredPersonAgencyVolunteer"   />

                    </div>
                  </div>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="ARF_s3" style={{paddingRight: '33pt', textIndent: '0pt', textAlign: 'right'}}>
                  </p><div className="ARF_inputGrid">
                    <div className="ARF_inputGrid">
                      <div className="ARF_s3-right">No</div>
                      <div className="ARF_centerInput">
                        <input className="ARF_Input" type="radio" defaultValue="No" name="IsInjuredPersonAgencyVolunteer" value={"No"} onChange={() => setIsInjuredPersonAgencyVolunteer("No")} id="IsInjuredPersonAgencyVolunteer"   />
                      </div>
                    </div>
                    <div className="ARF_inputGrid">
                      <div className="ARF_s3-right">Unknown</div>
                      <div className="ARF_centerInput">
                        <input className="ARF_Input" type="radio" defaultValue="Unknown" name="IsInjuredPersonAgencyVolunteer" value={"Unknown"} onChange={() => setIsInjuredPersonAgencyVolunteer("Unknown")} id="IsInjuredPersonAgencyVolunteer"  />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '36pt'}}>
                <td className="ARF_blue-boxes">
                  13
                </td>
                <td colSpan={3} style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="ARF_s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Describe the injury (affected body part and type of injury; Ex. contusion, bruise, laceration, sprain, break, etc.)</p>
                  <div className="ARF_endInput"><input className="ARF_Input" type="text" name="InjuryDescription" value={InjuryDescription} onChange={(e) => setInjuryDescription(e.target.value)} id="InjuryDescription" /></div>
                </td>
              </tr>
              <tr style={{height: '25pt'}}>
                <td className="ARF_blue-boxes">
                  14
                </td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="ARF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>Did injured person make any statements?</p>
                </td>
                <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="ARF_s8" style={{textIndent: '0pt', textAlign: 'right'}}>
                  </p><div className="ARF_inputGrid">
                    <div className="ARF_s3-right">Yes</div>
                    <div className="ARF_centerInput">
                      <input className="ARF_Input" type="radio" defaultValue="Yes" name="InjuredStatements" value={"Yes"} onChange={() => setInjuredStatements("Yes")} id="InjuredStatements"   />
                    </div>
                  </div>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="ARF_s3" style={{paddingRight: '33pt', textIndent: '0pt', textAlign: 'right'}}>
                  </p><div className="ARF_inputGrid">
                    <div className="ARF_inputGrid">
                      <div className="ARF_s3-right">No</div>
                      <div className="ARF_centerInput">
                        <input className="ARF_Input" type="radio" defaultValue="No" name="InjuredStatements" value={"No"} onChange={() => setInjuredStatements("No")} id="InjuredStatements"   />
                      </div>
                    </div>
                    <div className="ARF_inputGrid">
                      <div className="ARF_s3-right">Unknown</div>
                      <div className="ARF_centerInput">
                        <input className="ARF_Input" type="radio" defaultValue="Unknown" name="InjuredStatements" value={"Unknown"} onChange={() => setInjuredStatements("Unknown")} id="InjuredStatements"   />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '23pt'}}>
                <td className="ARF_blue-boxes-bottom">
                </td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="ARF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>If yes, what did injured person say?</p>
                  <div className="ARF_endInput"><input className="ARF_Input" type="text" name="InjuredSaid" value={InjuredSaid} onChange={(e) => setInjuredSaid(e.target.value)} id="InjuredSaid"   /></div>
                </td>
              </tr>
            </tbody></table>
          <div className="ARF_bottom-space" />
        </div>
        {/*BREAK BETWEEN PAGES*/}
        {/*BREAK BETWEEN PAGES*/}
        {/*BREAK BETWEEN PAGES*/}
        {/*BREAK BETWEEN PAGES*/}
        {/*BREAK BETWEEN PAGES*/}
        {/*BREAK BETWEEN PAGES*/}
        {/*BREAK BETWEEN PAGES*/}
        {/*BREAK BETWEEN PAGES*/}
        {/*BREAK BETWEEN PAGES*/}
        {/*BREAK BETWEEN PAGES*/}
        <div className="ARF_entire-page">
          <div className="ARF_top-space" />
          <div className="ARF_page-head">
            <div className="ARF_page-head-grid">
              <div>
                <p style={{textIndent: '0pt', textAlign: 'left'}}><span><img alt="image" height={68} src={logo} width={222} /></span>
                </p>
              </div>
              <div>
                <table style={{borderCollapse: 'collapse'}} cellSpacing={0}>
                  <tbody><tr style={{height: '16pt'}}>
                      <td style={{width: '315pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: 'white'}} rowSpan={3} bgcolor="#25408F"><p className="ARF_head-text4" style={{paddingTop: '1pt', paddingLeft: '1pt', paddingRight: '4pt', textIndent: '0pt', textAlign: 'center'}}>
                        </p><h1 style={{textIndent: '0pt', lineHeight: '27pt', textAlign: 'center'}}>Accident/Incident Report</h1>
                        <p style={{paddingTop: '2pt', textIndent: '0pt', textAlign: 'center'}}>
                          Attorney/Client Privileged Document
                        </p>
                      </td>
                      <td style={{width: '57pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt'}} bgcolor="#25408F"><p className="ARF_head-text2" style={{paddingLeft: '7pt', paddingRight: '7pt', textIndent: '0pt', lineHeight: '15pt', textAlign: 'center'}}>
                        </p><h3 style={{paddingTop: '2pt', paddingLeft: '8pt', textIndent: '0pt', textAlign: 'left'}}>Form</h3>
                        <h2 style={{paddingTop: '3pt', paddingLeft: '14pt', textIndent: '0pt', textAlign: 'left'}}>01</h2>
                        <div className="ARF_s5-center">(pg. 2)</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="ARF_header-body-space" />
          <table className="ARF_form-table">
            <tbody><tr style={{height: '25pt'}}>
                <td className="ARF_blue-boxes">
                  15
                </td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="ARF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>Was first aid administered?</p>
                </td>
                <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="ARF_s8" style={{textIndent: '0pt', textAlign: 'right'}}>
                  </p><div className="ARF_inputGrid">
                    <div className="ARF_s3-right">Yes</div>
                    <div className="ARF_centerInput">
                      <input className="ARF_Input" type="radio" defaultValue="Yes" name="FirstAid" value={"Yes"} onChange={() => setFirstAid("Yes")} id="FirstAid"   />
                    </div>
                  </div>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="ARF_s3" style={{paddingRight: '33pt', textIndent: '0pt', textAlign: 'right'}}>
                  </p><div className="ARF_inputGrid">
                    <div className="ARF_inputGrid">
                      <div className="ARF_s3-right">No</div>
                      <div className="ARF_centerInput">
                        <input className="ARF_Input" type="radio" defaultValue="No" name="FirstAid" value={"No"} onChange={() => setFirstAid("No")} id="FirstAid"   />
                      </div>
                    </div>
                    <div className="ARF_inputGrid">
                      <div className="ARF_s3-right">Unknown</div>
                      <div className="ARF_centerInput">
                        <input className="ARF_Input" type="radio" defaultValue="Unknown" name="FirstAid" value={"Unknown"} onChange={() => setFirstAid("Unknown")} id="FirstAid"   />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '32pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="ARF_s3" style={{paddingTop: '4pt', textIndent: '0pt', textAlign: 'left'}}>Name and position of person who administered first aid</p>
                  <div className="ARF_endInput"><input className="ARF_Input" type="text" name="PersonAndPositionOfFirstAidGiver" value={PersonAndPositionOfFirstAidGiver} onChange={(e) => setPersonAndPositionOfFirstAidGiver(e.target.value)} id="PersonAndPositionOfFirstAidGiver"  /></div>
                </td>
              </tr>
              <tr style={{height: '32pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="ARF_s3" style={{paddingTop: '4pt', textIndent: '0pt', textAlign: 'left'}}>What first aid was given?</p>
                  <div className="ARF_endInput"><input className="ARF_Input" type="text" name="FirstAidGiven" value={FirstAidGiven} onChange={(e) => setFirstAidGiven(e.target.value)} id="FirstAidGiven"  /></div>
                </td>
              </tr>
              <tr style={{height: '25pt'}}>
                <td className="ARF_blue-boxes">
                </td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="ARF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>Did first aid involve AED and/or CPR?</p>
                </td>
                <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="ARF_s8" style={{textIndent: '0pt', textAlign: 'right'}}>
                  </p><div className="ARF_inputGrid">
                    <div className="ARF_s3-right">Yes</div>
                    <div className="ARF_centerInput">
                      <input className="ARF_Input" type="radio" defaultValue="Yes" name="CprOrAed" value={"Yes"} onChange={() => setCprOrAed("Yes")} id="CprOrAed"  />
                    </div>
                  </div>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="ARF_s3" style={{paddingRight: '33pt', textIndent: '0pt', textAlign: 'right'}}>
                  </p><div className="ARF_inputGrid">
                    <div className="ARF_inputGrid">
                      <div className="ARF_s3-right">No</div>
                      <div className="ARF_centerInput">
                        <input className="ARF_Input" type="radio" defaultValue="No" name="CprOrAed" value={"No"} onChange={() => setCprOrAed("No")} id="CprOrAed"  />
                      </div>
                    </div>
                    <div className="ARF_inputGrid">
                      <div className="ARF_s3-right">Unknown</div>
                      <div className="ARF_centerInput">
                        <input className="ARF_Input" type="radio" defaultValue="Unknown" name="CprOrAed" value={"Unknown"} onChange={() => setCprOrAed("Unknown")} id="CprOrAed"  />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="ARF_s3" style={{paddingTop: '4pt', textIndent: '0pt', textAlign: 'left'}}>If yes, please submit a PDRMA post-AED form.</p>
                </td>
              </tr>
              <tr>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="ARF_s3" style={{paddingTop: '4pt', textIndent: '0pt', textAlign: 'left'}}>Were paramedic services offered?</p>
                </td>
              </tr>
              <tr style={{height: '20pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={4} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="ARF_inputGrid">
                    <div className="ARF_s3">
                      Called and refused (at scene by patron)
                      <input className="ARF_Input" type="radio" defaultValue="CalledAndRefused" name="ParamedicsOffered" value={"CalledAndRefused"} onClick={() => setParamedicsOffered("CalledAndRefused")} id="ParamedicsOffered"  />
                    </div>
                    <div className="ARF_s3">
                      Offered and called
                      <input className="ARF_Input" type="radio" defaultValue="OfferedAndCalled" name="ParamedicsOffered" value={"OfferedAndCalled"} onClick={() => setParamedicsOffered("OfferedAndCalled")} id="ParamedicsOffered"   />
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '20pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={4} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="ARF_inputGrid">
                    <div className="ARF_s3">
                      Offered and refused
                      <input className="ARF_Input" type="radio" defaultValue="OfferedAndRefused" name="ParamedicsOffered" value={"OfferedAndRefused"} onClick={() => setParamedicsOffered("OfferedAndRefused")} id="ParamedicsOffered"   />
                    </div>
                    <div className="ARF_s3">
                      Offered, refused, called by agency anyway
                      <input className="ARF_Input" type="radio" defaultValue="OfferedAndRefusedButCalledByAgency" name="ParamedicsOffered" value={"OfferedAndRefusedButCalledByAgency"} onClick={() => setParamedicsOffered("OfferedAndRefusedButCalledByAgency")} id="ParamedicsOffered"   />
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '20pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={4} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="ARF_inputGrid">
                    <div className="ARF_s3">
                      Unable to respond and called
                      <input className="ARF_Input" type="radio" defaultValue="UnableToRespond" name="ParamedicsOffered" value={"UnableToRespond"} onClick={() => setParamedicsOffered("UnableToRespond")} id="ParamedicsOffered"  />
                    </div>
                    <div />
                  </div>
                </td>
              </tr>
              <tr style={{height: '19pt'}}>
                <td className="ARF_blue-boxes" />



                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="ARF_s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>
                    Were police called?</p>
                </td>
                <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <div className="ARF_inputGrid">
                    <div className="ARF_s3-right">Yes</div>
                    <div className="ARF_centerInput">
                      <input className="ARF_Input" type="radio" defaultValue="Yes" id="PoliceWereCalled" onClick={() => setWerePoliceCalled("Yes")} name="PoliceWereCalled"  />
                    </div>
                  </div>

                  <div className="ARF_inputGrid">
                    <div className="ARF_s3-right">No</div>
                    <div className="ARF_centerInput">
                      <input className="ARF_Input" type="radio" defaultValue="No" id="PoliceWereCalled" onClick={() => setWerePoliceCalled("No")} name="PoliceWereCalled"  />
                    </div>
                  </div>

                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="ARF_s3">If yes, provide the following information:</div>
                </td>
              </tr>
              <tr style={{height: '32pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="ARF_s3" style={{paddingTop: '4pt', textIndent: '0pt', textAlign: 'left'}}>Name of police department</p>
                  <div className="ARF_endInput"><input className="ARF_Input" type="text" name="PoliceDepName" value={PoliceDepName} onChange={(e) => setPoliceDepName(e.target.value)} id="PoliceDepName"   /></div>
                </td>
              </tr>
              <tr style={{height: '32pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="ARF_s3" style={{paddingTop: '4pt', textIndent: '0pt', textAlign: 'left'}}>Name of officer</p>
                  <div className="ARF_endInput"><input className="ARF_Input" type="text" name="OfficerName" value={OfficerName} onChange={(e) => setOfficerName(e.target.value)} id="OfficerName"   /></div>
                </td>
              </tr>
              <tr style={{height: '19pt'}}>
                <td className="ARF_blue-boxes" />
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="ARF_s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>
                    Do you expect this person to submit a claim?</p>
                </td>
                <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <div className="ARF_inputGrid">
                    <div className="ARF_s3-right">Yes</div>
                    <div className="ARF_centerInput">
                      <input className="ARF_Input" type="radio" defaultValue="Yes" name="DidYouExpectAClaim" value={"Yes"} onClick={() => setDidYouExpectAClaim("Yes")} id="DidYouExpectAClaim"   />
                    </div>
                  </div>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="ARF_inputGrid">
                    <div className="ARF_inputGrid">
                      <div className="ARF_s3-right">No</div>
                      <div className="ARF_centerInput">
                        <input className="ARF_Input" type="radio" defaultValue="No" name="DidYouExpectAClaim" value={"No"} onClick={() => setDidYouExpectAClaim("No")} id="DidYouExpectAClaim"   />
                      </div>
                    </div>
                    <div className="ARF_inputGrid">
                      <div className="ARF_s3-right">Unknown</div>
                      <div className="ARF_centerInput">
                        <input className="ARF_Input" type="radio" defaultValue="Unknown" name="DidYouExpectAClaim" value={"Unknown"} onClick={() => setDidYouExpectAClaim("Unknown")} id="DidYouExpectAClaim"   />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '23pt'}}>
                <td colSpan={4} className="ARF_blue-boxes" style={{borderRight: '3px solid #24418E'}}>
                  <div className="ARF_text-left">PROPERTY DAMAGE</div>
                </td>
              </tr>
              <tr style={{height: '22pt'}}>
                <td className="ARF_blue-boxes">
                  16
                </td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="ARF_s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>Was property damaged as a result of this accident/incident?</p></td>
                <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <div className="ARF_inputGrid">
                    <div className="ARF_s3-right">Yes</div>
                    <div className="ARF_centerInput">
                      <input className="ARF_Input" type="radio" defaultValue="Yes" name="WasPropDamaged" value={"Yes"} onClick={() => setWasPropDamaged("Yes")} id="WasPropDamaged"  required />
                    </div>
                  </div>
                  {/*                <p class="s3" style="text-indent: 0pt;line-height: 10pt;text-align: right;">Yes <div class="centerInput"><input className="ARF_Input" type="checkbox" id="horns" name="horns"></div></p>*/}
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="ARF_inputGrid">
                    <div className="ARF_inputGrid">
                      <div className="ARF_s3-right">No</div>
                      <div className="ARF_centerInput">
                        <input className="ARF_Input" type="radio" defaultValue="No" name="WasPropDamaged" value={"No"} onClick={() => setWasPropDamaged("No")} id="WasPropDamaged"  required />
                      </div>
                    </div>
                    <div className="ARF_inputGrid">
                      <div className="ARF_s3-right">Unknown</div>
                      <div className="ARF_centerInput">
                        <input className="ARF_Input" type="radio" defaultValue="Unknown" name="WasPropDamaged" value={"Unknown"} onClick={() => setWasPropDamaged("Unknown")} id="WasPropDamaged"  required />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '27pt'}}>
                <td className="ARF_blue-boxes">
                  17
                </td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="ARF_s3" style={{paddingRight: '9pt', textIndent: '0pt', textAlign: 'left'}}>If yes, how was the person involved in the accident/incident?</p>
                </td>
              </tr>
              <tr style={{height: '20pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={4} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="ARF_inputGrid">
                    <div className="ARF_s3">
                      Owner of property adjacent to park district
                      <input className="ARF_Input" type="radio" defaultValue="OwnerOfPropertyAdjacentToParkDistrict" name="HowWasPersonInvolved" value={"OwnerOfPropertyAdjacentToParkDistrict"} onClick={() => setHowWasPersonInvolved("OwnerOfPropertyAdjacentToParkDistrict")} id="HowWasPersonInvolved"   />
                    </div>
                    <div className="ARF_s3">
                      Patron
                      <input className="ARF_Input" type="radio" defaultValue="Patron" name="HowWasPersonInvolved" value={"Patron"} onClick={() => setHowWasPersonInvolved("Patron")} id="HowWasPersonInvolved"   />
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '20pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={4} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="ARF_inputGrid">
                    <div className="ARF_s3">
                      Vehicle Owner
                      <input className="ARF_Input" type="radio" defaultValue="VehicleOwner" name="HowWasPersonInvolved" value={"VehicleOwner"} onChange={() => setHowWasPersonInvolved("VehicleOwner")} id="HowWasPersonInvolved"   />
                    </div>
                    <div className="ARF_s3">
                      Other
                      <input className="ARF_Input" type="radio" defaultValue="Other" name="HowWasPersonInvolved" value={"Other"} onChange={() => setHowWasPersonInvolved("Other")} id="HowWasPersonInvolved"   />
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '20pt'}}>
                <td className="ARF_blue-boxes">
                  18
                </td>
                {/*<td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}>18<br /></p></td>*/}
                <td colSpan={4} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="ARF_inputGrid">
                    <div className="ARF_s3">
                      Last name (or business name)
                      <div className="ARF_endInput"><input className="ARF_Input" type="text" name="PropDamageLName" value={PropDamageLName} onChange={(e) => setPropDamageLName(e.target.value)} id="PropDamageLName"   /></div>
                    </div>
                    <div className="ARF_s3">
                      First name (not necessary if business name)
                      <div className="ARF_endInput"><input className="ARF_Input" type="text" name="PropDamageFName" value={PropDamageFName} onChange={(e) => setPropDamageFName(e.target.value)} id="PropDamageFName"   /></div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '36pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="ARF_s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Address</p>
                  <div className="ARF_endInput"><input className="ARF_Input" type="text" name="PropDamAddress" value={PropDamAddress} onChange={(e) => setPropDamAddress(e.target.value)} id="PropDamAddress"   /></div>
                </td>
              </tr>
              <tr style={{height: '20pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={4} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="ARF_inputGrid4">
                    <div className="ARF_s3">
                      City
                      <div className="ARF_endInput"><input className="ARF_Input" type="text" name="PropDamCity" value={PropDamCity} onChange={(e) => setPropDamCity(e.target.value)} id="PropDamCity"   /></div>
                    </div>
                    <div className="ARF_s3">
                      State
                      <div className="ARF_endInput"><input className="ARF_Input" type="text" name="PropDamState" value={PropDamState} onChange={(e) => setPropDamState(e.target.value)} id="PropDamState"   /></div>
                    </div>
                    <div className="ARF_s3">
                      Zip Code
                      <div className="ARF_endInput"><input className="ARF_Input" type="text" name="PropDamZip" placeholder="00000" pattern="[0-9]{5}" value={PropDamZip} onChange={(e) => setPropDamZip(e.target.value)} id="PropDamZip"   /></div>
                    </div>
                    <div className="ARF_s3">
                      Phone number
                      <div className="ARF_endInput"><input className="ARF_Input" type="text" name="PropDamPhone" placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={PropDamPhone} onChange={(e) => setPropDamPhone(e.target.value)} id="PropDamPhone"   /></div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '32pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="ARF_s3" style={{paddingTop: '4pt', textIndent: '0pt', textAlign: 'left'}}>Describe the property damage</p>
                  <div className="ARF_endInput"><input className="ARF_Input" type="text" id="PropertyDamageDescription" name="PropertyDamageDescription" value={PropDamDescription} onChange={(e) => setPropDamDescription(e.target.value)} /></div>
                </td>
              </tr>
              <tr style={{height: '23pt'}}>
                <td colSpan={4} className="ARF_blue-boxes" style={{borderRight: '3px solid #24418E'}}>
                  <div className="ARF_text-left">WITNESS INFORMATION</div>
                </td>
              </tr>
              <tr style={{height: '27pt'}}>
                <td className="ARF_blue-boxes">
                  19
                </td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="ARF_s3" style={{paddingRight: '9pt', textIndent: '0pt', textAlign: 'left'}}>If there was a witness(es) to the accident/incident, please provide the following information:</p>
                </td>
              </tr>


            {/*<input type="checkbox" name="Witness" value={Witness} onChange={(e) => setWitness(e.target.value)} id="Witness"  required />*/}
            {/*Code does not include the yes and no options to say if there was a witness, here is the code if added*/}




              <tr style={{height: '20pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={4} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="ARF_inputGrid">
                    <div className="ARF_s3">
                      Last name
                      <div className="ARF_endInput"><input className="ARF_Input" name="WitnessLName" value={WitnessLName} onChange={(e) => setWitnessLName(e.target.value)} id="WitnessLName"   /></div>
                    </div>
                    <div className="ARF_s3">
                      First name
                      <div className="ARF_endInput"><input className="ARF_Input" type="text" name="WitnessFName" value={WitnessFName} onChange={(e) => setWitnessFName(e.target.value)} id="WitnessFName"   /></div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '36pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="ARF_s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Address</p>
                  <div className="ARF_endInput"><input className="ARF_Input" type="text" name="WitnessAddress" value={WitnessAddress} onChange={(e) => setWitnessAddress(e.target.value)} id="WitnessAddress"   /></div>
                </td>
              </tr>
              <tr style={{height: '20pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={4} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="ARF_inputGrid4">
                    <div className="ARF_s3">
                      City
                      <div className="ARF_endInput"><input className="ARF_Input" type="text" name="WitnessCity" value={WitnessCity} onChange={(e) => setWitnessCity(e.target.value)} id="WitnessCity"   /></div>
                    </div>
                    <div className="ARF_s3">
                      State
                      <div className="ARF_endInput"><input className="ARF_Input" type="text" name="WitnessState" value={WitnessState} onChange={(e) => setWitnessState(e.target.value)} id="WitnessState"   /></div>
                    </div>
                    <div className="ARF_s3">
                      Zip Code
                      <div className="ARF_endInput"><input className="ARF_Input" type="text" name="WitnessZip" placeholder="00000"  pattern="[0-9]{5}" value={WitnessZip} onChange={(e) => setWitnessZip(e.target.value)} id="WitnessZip"   /></div>
                    </div>
                    <div className="ARF_s3">
                      Phone number
                      <div className="ARF_endInput"><input className="ARF_Input" type="text" name="WitnessPhoneNum" placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={WitnessPhoneNum} onChange={(e) => setWitnessPhoneNum(e.target.value)} id="WitnessPhoneNum"   /></div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '25pt'}}>
                <td className="ARF_blue-boxes">
                  20
                </td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="ARF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>Did witness make any statements?</p>



                </td>
                <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="ARF_s8" style={{textIndent: '0pt', textAlign: 'right'}}>
                  </p><div className="ARF_inputGrid">
                    <div className="ARF_s3-right">Yes</div>
                    <div className="ARF_centerInput">
                      <input className="ARF_Input" type="radio" defaultValue="Yes" name="WitnessStatement" value={"Yes"} onClick={() => setWitnessStatement("Yes")} id="WitnessStatement"   />
                    </div>
                  </div>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="ARF_s3" style={{paddingRight: '33pt', textIndent: '0pt', textAlign: 'right'}}>
                  </p><div className="ARF_inputGrid">
                    <div className="ARF_inputGrid">
                      <div className="ARF_s3-right">No</div>
                      <div className="ARF_centerInput">
                        <input className="ARF_Input" type="radio" defaultValue="No" name="WitnessStatement" value={"No"} onClick={() => setWitnessStatement("No")} id="WitnessStatement"   />
                      </div>
                    </div>
                    <div className="ARF_inputGrid">
                      <div className="ARF_s3-right">Unknown</div>
                      <div className="ARF_centerInput">
                        <input className="ARF_Input" type="radio" defaultValue="Unknown" name="WitnessStatement" value={"Unknown"} onClick={() => setWitnessStatement("Unknown")} id="WitnessStatement"   />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>

              <tr style={{height: '36pt'}}>
                <td className="ARF_blue-boxes">
                </td>
                <td colSpan={3} style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="ARF_s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>If yes, what did witness say?</p>
                  <div className="ARF_endInput"><input className="ARF_Input" type="text" name="WitnessSaid" value={WitnessSaid} onChange={(e) => setWitnessSaid(e.target.value)} id="WitnessSaid"   /></div>
                </td>
              </tr>
              <tr style={{height: '23pt'}}>
                <td className="ARF_blue-boxes-bottom">21
                </td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="ARF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>Where was witness when the accident/incident occurred?</p>
                  <div className="ARF_endInput"><input className="ARF_Input" type="text" name="WitnessLocationDuringIncident" value={WitnessLocationDuringIncident} onChange={(e) => setWitnessLocationDuringIncident(e.target.value)} id="WitnessLocationDuringIncident"   /></div>
                </td>
              </tr>
            <div>
              <button type={"submit"}>Submit</button>
            </div>
            </tbody>

          </table>
          <div className="ARF_bottom-space" />
        </div>
          </form>
        </div>

    );
}
 
export default AccidentReport;