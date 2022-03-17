import "../css/AccidentIncidentReport_CSS.css"
import "../images/icons/FVSRA_ICON.png"
import logo from ".//PDRMA Form 03 Property Loss Report_files/Image_001.jpg"
import {useState} from "react";

const AccidentReport = () => {
  const [AgencyName, setAgencyName] = useState('');
  const [TodaysDate, setTodaysDate] = useState('');
  const [IncidentDate, setIncidentDate] = useState('');
  const [IncidentTime, setIncidentTime] = useState('');
  const [PersonCompletingFormName, setPersonCompletingFormName] = useState('');
  const [PersonCompletingFormTitle, setPersonCompletingFormTitle] = useState('');
  const [BusinessPhone, setBusinessPhone] = useState('');
  const [BusinessEmail, setBusinessEmail] = useState('');
  const [HowIncidentOccurred, setHowIncidentOccurred] = useState('');
  const [LocationName, setLocationName] = useState('');
  const [LocationAddress, setLocationAddress] = useState('');
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
  const [EmpZip, setZip] = useState('');
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
  const [PoliceDepName, setPoliceDepName] = useState('');
  const [OfficerName, setOfficerName] = useState('');
  const [DidYouExpectAClaim, setDidYouExpectAClaim] = useState('');
  const [WasPropDamaged, setWasPropDamaged] = useState('');
  const [HowWasPropDamaged, setHowWasPropDamaged] = useState('');
  const [PropDamageLName, setPropDamageLName] = useState('');
  const [PropDamageFName, setPropDamageFName] = useState('');
  const [PropDamAddress, setPropDamAddress] = useState('');
  const [PropDamCity, setPropDamCity] = useState('');
  const [PropDamState, setPropDamState] = useState('');
  const [PropDamZip, setPropDamZip] = useState('');
  const [PropDamDescription, setPropDamDescription] = useState('');
  const [Witness, setWitness] = useState('');
  const [WitnessLName, setWitnessLName] = useState('');
  const [WitnessFName, setWitnessFName] = useState('');
  const [WitnessAddress, setWitnessAddress] = useState('');
  const [WitnessCity, setWitnessCity] = useState('');
  const [WitnessState, setWitnessState] = useState('');
  const [WitnessZip, setWitnessZip] = useState('');
  const [WitnessPhoneNum, setWitnessPhoneNum] = useState('');
  const [PropDamageDescByWitness, setPropDamageDescByWitness] = useState('');
  const [WitnessStatement, setWitnessStatement] = useState('');
  const [WitnessSaid, setWitnessSaid] = useState('');
  const [WitnessLocationDuringIncident, setWitnessLocationDuringIncident] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    let accidentReportObj = {
      "Agency_Name" : AgencyName,
      "Todays_Date" : TodaysDate,
      "Date_of_Incident" : IncidentDate,
      "Time_Of_Incident" : IncidentTime,
      "Name_of_the_person_Completing_the_report" : PersonCompletingFormName,
      "Title_Of_Person_Completing_the_report" : PersonCompletingFormTitle,
      "Business_Phone" : BusinessPhone,
      "Business_Email" : BusinessEmail,
      "How_did_the_incident_Occur" : HowIncidentOccurred,
      "Name_of_the_location" : LocationName,
      "Is_there_an_address_for_incident_Location" : LocationAddress,
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
      "Name_of_the_police_department" : PoliceDepName,
      "Name_of_the_officer" : OfficerName,
      "did_you_expect_this_person_submit_a_claim" : DidYouExpectAClaim,
      "Was_Property_Damaged_As_A_Result_Of_This_AccidentOrIncident" : WasPropDamaged,
      "If_Yes_How_Was_The_Person_Involved_In_The_AccidentOrIncident" : HowWasPropDamaged,
      "last_name_Property_damage" : PropDamageLName,
      "first_name_Property_damage" : PropDamageFName,
      "Address_Property_damage" : PropDamAddress,
      "city_Property_damage" : PropDamCity,
      "state_Property_damage" : PropDamState,
      "zip_code_Property_damage" : PropDamZip,
      "Describe_the_property_damage" : PropDamDescription,
      "If_There_Was_A_Witness_To_The_AccidentOrIncident" : Witness,
      "Last_name_witness_information" : WitnessLName,
      "first_name_witness_information" : WitnessFName,
      "Address_witness_information" : WitnessAddress,
      "City_witness_information" : WitnessCity,
      "State_witness_information" : WitnessState,
      "zip_code_witness_information" : WitnessZip,
      "phone_number_witness_information" : WitnessPhoneNum,
      "Describe_the_property_damage_witness_information" : PropDamageDescByWitness,
      "did_Witness_make_any_statements" : WitnessStatement,
      "If_yes_what_did_witness_say" : WitnessSaid,
      "Where_was_witness_when_the_accident" : WitnessLocationDuringIncident
    }

    fetch('http://127.0.0.1:5000/fvsra/accidentIncidentReport', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(minorInjuryLogObj)
    }).then(() => {
      alert("Log has been reported.")
      navigate('/login') //Redirects page
    })

  }



return (
        <div>

          <img className="MLF_FVSRA" src={logo} />
          <form onSubmit={handleSubmit}>
            <table className="MLF_shift-down">
              <colgroup><col width={120} />
                <col width={110} />
                <col width={220} />
                <col width={130} />
                <col width={150} />
                <col width={350} />
                <col width={200} />
                <col width={140} />
              </colgroup>

              <thead>
              <tr>
                <th>Agency Name</th>
                <th>Today's Date</th>
                <th>Date of the Incident</th>
                <th>Name of the person completing the report</th>
                <th>Title of the person completing the report</th>
                <th>Business Phone Number</th>
                <th>Business Email</th>
                <th>How did the incident Occur?</th>
                <th>Name of the Location</th>
                <th>Does the Address for the Incident Have a Location?</th>
                <th>Street Address</th>
                <th>City</th>
                <th>State</th>
                <th>Zip Code</th>
                <th>The Location</th>
                <th>The Primary Location</th>
                <th>Was a person Injured?</th>
                <th>Last Name of the Employee Injured</th>
                <th>First Name of the Employee Injured</th>
                <th>Employee Address</th>
                <th>Employee City</th>
                <th>Employee State</th>
                <th>Employee Zip Code</th>
                <th>Employee Sex</th>
                <th>Is the injured person a Agency Volunteer?</th>
                <th>Please Describe the Injury</th>
                <th>Did the injured person make any statements?</th>
                <th>If yes, what did the injured person say?</th>
                <th>Was First Aid administered?</th>
                <th>Name and Position of the person who administered the First Aid</th>
                <th>What First Aid was given to the Injury</th>
                <th>Did the First Aid involve AED and/or CPR</th>
                <th>Were Paramedic services offered</th>
                <th>Name of the Police Department involved</th>
                <th>Name of the Officer</th>
                <th>Did you expect this person to submit a claim?</th>
                <th>Was Property damaged as a result from the accident/incident?</th>
                <th>If yes, How was the Person involved in the accident/incident? </th>
                <th>Last Name of the Owner of said Property Damage</th>
                <th>First Name of the Owner of said Property Damage</th>
                <th>Property Address</th>
                <th>Property City</th>
                <th>Property State</th>
                <th>Property Zip Code</th>
                <th>Please describe the Property Damage</th>
                <th>Was there a Witness to this accident/incident?</th>
                <th>Witness's Last Name</th>
                <th>Witness's First Name</th>
                <th>Witness's Address</th>
                <th>Witness's City</th>
                <th>Witness's State</th>
                <th>Witness's Zip Code</th>
                <th>Witness's Phone Number</th>
                <th>Witness's Description of the Property Damage</th>
                <th>Did the Witness make any Statements?</th>
                <th>If yes, what did the Witness say?</th>
                <th>Where was the Witness as the accident/incident occurred?</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td><input type="text" name="AgencyName" value={AgencyName} onChange={(e) => setAgencyName(e.target.value)} id="AgencyName" required/></td>
                <td><input type="date" name="TodaysDate" value={TodaysDate} onChange={(e) => setTodaysDate(e.target.value)} id="TodaysDate" required/></td>
                <td><input type="date" name="incidentDate" value={IncidentDate} onChange={(e) => setIncidentDate(e.target.value)} id="IncidentDate"  required /></td>
                <td><input type="time" name="incidentTime" value={IncidentTime} onChange={(e) => setIncidentTime(e.target.value)} id="IncidentTime" required /></td>
                <td><input type="text" placeholder="i.e. Tom" name="PersonCompletingFormName" value={PersonCompletingFormName} onChange={(e) => setPersonCompletingFormName(e.target.value)} id="PersonCompletingFormName" required /></td>
                <td><input type="text" placeholder="i.e. Janitor" name="PersonCompletingFormTitle" value={PersonCompletingFormTitle} onChange={(e) => setPersonCompletingFormTitle(e.target.value)} id="PersonCompletingFormTitle" required /></td>
                <td><input type="text" placeholder="i.e. (123) 456-7899" name="BusinessPhone" value={BusinessPhone} onChange={(e) => setBusinessPhone(e.target.value)} id="BusinessPhone" required /></td>
                <td><input type="email" placeholder="i.e. helloFromMatt@yahoo.com" name="BusinessEmail" id="BusinessEmail" value={BusinessEmail} onChange={(e) => setBusinessEmail(e.target.value)} required /></td>
                <td><input type="text" placeholder="i.e. Car Wreck" name="HowIncidentOccurred" value={HowIncidentOccurred} onChange={(e) => setHowIncidentOccurred(e.target.value)} id="HowIncidentOccurred" required/></td>
                <td><input type="text" placeholder="i.e. Washington" name="LocationName" value={LocationName} onChange={(e) => setLocationName(e.target.value)} id="LocationName" required/></td>
                <td><input type="text" placeholder="i.e. Walmart" name="LocationAddress" value={LocationAddress} onChange={(e) => setLocationAddress(e.target.value)} id="LocationAddress"  required /></td>
                <td><input type="text" placeholder="i.e. 123 Oak Street" name="StreetAddress" value={StreetAddress} onChange={(e) => setStreetAddress(e.target.value)} id="StreetAddress" required /></td>
                <td><input type="text" placeholder="i.e. Aurora" name="City" value={City} onChange={(e) => setCity(e.target.value)} id="City" required/></td>
                <td><input type="text" placeholder="i.e. Illinois" name="State" value={State} onChange={(e) => setState(e.target.value)} id="State" required/></td>
                <td><input type="text" placeholder="i.e. 61616" name="ZipCode" value={ZipCode} onChange={(e) => setZipCode(e.target.value)} id="ZipCode"  required /></td>
                <td><input type="text" placeholder="i.e. Parking Lot" name="Location" value={Location} onChange={(e) => setLocation(e.target.value)} id="Location"  required /></td>
                <td><input type="text" placeholder="i.e. Lot E6" name="PrimaryLocation" value={PrimaryLocation} onChange={(e) => setPrimaryLocation(e.target.value)} id="PrimaryLocation"  required /></td>
                <td><input type="text" name="InjuredPerson" value={InjuredPerson} onChange={(e) => setInjuredPerson(e.target.value)} id="InjuredPerson"  required /></td>
                <td><input type="text" placeholder="i.e. Ross" name="EmpLName" value={EmpLName} onChange={(e) => setEmpLName(e.target.value)} id="EmpLName"  /></td>
                <td><input type="text" placeholder="i.e. Bob" name="EmpFName" value={EmpFName} onChange={(e) => setEmpFName(e.target.value)} id="EmpFName"  /></td>
                <td><input type="text" placeholder="i.e. 456 Tree Street" name="EmpAddress" value={EmpAddress} onChange={(e) => setEmpAddress(e.target.value)} id="EmpAddress"   /></td>
                <td><input type="text" placeholder="i.e. Aurora" name="EmpCity" value={EmpCity} onChange={(e) => setEmpCity(e.target.value)} id="EmpCity"   /></td>
                <td><input type="text" placeholder="i.e. Illinois" name="EmpState" value={EmpState} onChange={(e) => setEmpState(e.target.value)} id="EmpState"  /></td>
                <td><input type="text" placeholder="i.e. 61616" name="EmpZip" value={EmpZip} onChange={(e) => setEmpZip(e.target.value)} id="EmpZip"   /></td>
                <td><input type="text" placeholder="i.e. (123) 456-7899" name="EmpHomePhone" value={EmpHomePhone} onChange={(e) => setEmpHomePhone(e.target.value)} id="EmpHomePhone"  /></td>
                <td><input type="text" placeholder="i.e. (123) 456-7899" name="EmpWorkPhone" value={EmpWorkPhone} onChange={(e) => setEmpWorkPhone(e.target.value)} id="EmpWorkPhone"  /></td>
                <td><input type="text" placeholder="i.e. (123) 456-7899" name="EmpCellPhone" value={EmpCellPhone} onChange={(e) => setEmpCellPhone(e.target.value)} id="EmpCellPhone"   /></td>
                <td><input type="number" placeholder="i.e. 43" name="EmpAge" value={EmpAge} onChange={(e) => setEmpAge(e.target.value)} id="EmpAge"   /></td>
                <td><input type="checkbox" name="EmpAge" value={EmpAge} onChange={(e) => setEmpAge(e.target.value)} id="EmpAge"   /></td>
                <td><input type="checkbox" name="IsInjuredPersonAgencyVolunteer" value={IsInjuredPersonAgencyVolunteer} onChange={(e) => setIsInjuredPersonAgencyVolunteer(e.target.value)} id="IsInjuredPersonAgencyVolunteer"  required /></td>
                <td><input type="text" placeholder="Write Here" name="InjuryDescription" value={InjuryDescription} onChange={(e) => setInjuryDescription(e.target.value)} id="InjuryDescription"   /></td>
                <td><input type="checkbox" name="InjuredStatements" value={InjuredStatements} onChange={(e) => setInjuredStatements(e.target.value)} id="InjuredStatements"  required /></td>
                <td><input type="text" placeholder="Write Statement Here" name="InjuredSaid" value={InjuredSaid} onChange={(e) => setInjuredSaid(e.target.value)} id="InjuredSaid"   /></td>
                <td><input type="checkbox" name="FirstAid" value={FirstAid} onChange={(e) => setFirstAid(e.target.value)} id="FirstAid"  required /></td>
                <td><input type="text" placeholder="i.e. Tom The Janitor" name="PersonAndPositionOfFirstAidGiver" value={PersonAndPositionOfFirstAidGiver} onChange={(e) => setPersonAndPositionOfFirstAidGiver(e.target.value)} id="PersonAndPositionOfFirstAidGiver"  /></td>
                <td><input type="text" placeholder="i.e. Bandages" name="FirstAidGiven" value={FirstAidGiven} onChange={(e) => setFirstAidGiven(e.target.value)} id="FirstAidGiven"  /></td>
                <td><input type="checkbox" name="CprOrAed" value={CprOrAed} onChange={(e) => setCprOrAed(e.target.value)} id="CprOrAed"  required /></td>
                <td><input type="checkbox" name="ParamedicsOffered" value={ParamedicsOffered} onChange={(e) => setParamedicsOffered(e.target.value)} id="ParamedicsOffered"  required /></td>
                <td><input type="text" placeholder="i.e. Aurora Police" name="PoliceDepName" value={PoliceDepName} onChange={(e) => setPoliceDepName(e.target.value)} id="PoliceDepName"   /></td>
                <td><input type="text" placeholder="i.e. Dog the Bounty Hunter" name="OfficerName" value={OfficerName} onChange={(e) => setOfficerName(e.target.value)} id="OfficerName"   /></td>
                <td><input type="checkbox" name="DidYouExpectAClaim" value={DidYouExpectAClaim} onChange={(e) => setDidYouExpectAClaim(e.target.value)} id="DidYouExpectAClaim"  required /></td>
                <td><input type="checkbox" name="WasPropDamaged" value={WasPropDamaged} onChange={(e) => setWasPropDamaged(e.target.value)} id="WasPropDamaged"  required /></td>
                <td><input type="text" placeholder="i.e. By a Car Wreck" name="HowWasPropDamaged" value={HowWasPropDamaged} onChange={(e) => setHowWasPropDamaged(e.target.value)} id="HowWasPropDamaged"   /></td>
                <td><input type="text" placeholder="i.e. Zombie" name="PropDamageLName" value={PropDamageLName} onChange={(e) => setPropDamageLName(e.target.value)} id="PropDamageLName"   /></td>
                <td><input type="text" placeholder="i.e. Rob" name="PropDamageFName" value={PropDamageFName} onChange={(e) => setPropDamageFName(e.target.value)} id="PropDamageFName"   /></td>
                <td><input type="text" placeholder="i.e. 123 Graveyard Lane" name="PropDamAddress" value={PropDamAddress} onChange={(e) => setPropDamAddress(e.target.value)} id="PropDamAddress"   /></td>
                <td><input type="text" placeholder="i.e. Aurora" name=PropDamCity"" value={PropDamCity} onChange={(e) => setPropDamCity(e.target.value)} id="PropDamCity"   /></td>
                <td><input type="text" placeholder="i.e. Illinois" name="PropDamState" value={PropDamState} onChange={(e) => setPropDamState(e.target.value)} id="PropDamState"   /></td>
                <td><input type="text" placeholder="i.e. 61616" name="PropDamZip" value={PropDamZip} onChange={(e) => setPropDamZip(e.target.value)} id="PropDamZip"   /></td>
                <td><input type="text" placeholder="i.e. Big Hole in the wall of Walmart" name="PropDamDescription" value={PropDamDescription} onChange={(e) => setPropDamDescription(e.target.value)} id="PropDamDescription"   /></td>
                <td><input type="checkbox" name="Witness" value={Witness} onChange={(e) => setWitness(e.target.value)} id="Witness"  required /></td>
                <td><input type="text" placeholder="i.e. Roosevelt" name="WitnessLName" value={WitnessLName} onChange={(e) => setWitnessLName(e.target.value)} id="WitnessLName"   /></td>
                <td><input type="text" placeholder="i.e. Teddy" name="WitnessFName" value={WitnessFName} onChange={(e) => setWitnessFName(e.target.value)} id="WitnessFName"   /></td>
                <td><input type="text" placeholder="i.e. 123 Robin Street" name="WitnessAddress" value={WitnessAddress} onChange={(e) => setWitnessAddress(e.target.value)} id="WitnessAddress"   /></td>
                <td><input type="text" placeholder="i.e. Aurora" name="WitnessCity" value={WitnessCity} onChange={(e) => setWitnessCity(e.target.value)} id="WitnessCity"   /></td>
                <td><input type="text" placeholder="i.e. Illinois" name="WitnessState" value={WitnessState} onChange={(e) => setWitnessState(e.target.value)} id="WitnessState"   /></td>
                <td><input type="text" placeholder="i.e. 61616" name="WitnessZip" value={WitnessZip} onChange={(e) => setWitnessZip(e.target.value)} id="WitnessZip"   /></td>
                <td><input type="text" placeholder="i.e. (123) 456-7899" name="WitnessPhoneNum" value={WitnessPhoneNum} onChange={(e) => setWitnessPhoneNum(e.target.value)} id="WitnessPhoneNum"   /></td>
                <td><input type="text" placeholder="Witness Description Here" name="PropDamageDescByWitness" value={PropDamageDescByWitness} onChange={(e) => setPropDamageDescByWitness(e.target.value)} id="PropDamageDescByWitness"   /></td>
                <td><input type="checkbox"  name="WitnessStatement" value={WitnessStatement} onChange={(e) => setWitnessStatement(e.target.value)} id="WitnessStatement"  required /></td>
                <td><input type="text" placeholder="Write the Witness' Statement " name="WitnessSaid" value={WitnessSaid} onChange={(e) => setWitnessSaid(e.target.value)} id="WitnessSaid"   /></td>
                <td><input type="text" placeholder="i.e. Inside the store" name="WitnessLocationDuringIncident" value={WitnessLocationDuringIncident} onChange={(e) => setWitnessLocationDuringIncident(e.target.value)} id="WitnessLocationDuringIncident"   /></td>
                </tr>
              </tbody>
            </table>

            <footer className="MLF_bottom">
              <button className="MLF_submit">Submit</button>
            </footer>
          </form>



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
                  <input className="ARF_Input" type="text" id="Agency_Name" name="Agency_Name" />
                </td>
                <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderBottomColor: '#24418E'}}>
                  <p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="ARF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>Today’s date</p>
                  <input className="ARF_Input" type="date" id="Todays_Date" name="Today's_Date" defaultValue min="2021-01-01" max="2050-01-01" />
                </td>
              </tr>
              <tr style={{height: '22pt'}}>
                <td className="ARF_blue-boxes">
                  2
                </td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '2pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="ARF_s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>Date of incident (mm/dd/yyyy)</p>
                  <input className="ARF_Input" type="date" id="Date_of_Incident" name="Date_of_Incident" defaultValue min="2021-01-01" max="2050-01-01" />
                </td>
                <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '2pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '2pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="ARF_s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>Time of incident (hh/mm,
                    a.m./p.m.)</p>
                  <input className="ARF_Input" type="time" id="Time_of_Incident" name="Time_of_Incident" required />
                </td>
              </tr>
              <tr style={{height: '22pt'}}>
                <td className="ARF_blue-boxes">
                  3
                </td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="ARF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>Name of person completing the report</p>
                  <input className="ARF_Input" type="text" id="Name_of_person_completing_the_report" name="Name_of_person_completing_the_report" />
                </td><td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="ARF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>Title of person completing report</p>
                  <div className="ARF_endInput"><input className="ARF_Input" type="text" id="Title_of_person_completing_report" name /></div>
                </td>
              </tr>
              <tr style={{height: '21pt'}}>
                <td className="ARF_blue-boxes">
                  4
                </td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderBottomColor: '#24418E'}}>
                  <p className="ARF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>Business phone</p>
                  <input className="ARF_Input" type="tel" id="Business_phone" name="phone" placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
                </td><td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderBottomColor: '#24418E'}}>
                  <p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="ARF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>Business email</p>
                  <div className="ARF_endInput"><input className="ARF_Input" type="text" id="Business_email" name /></div>
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
                  <div className="ARF_endInput"><input className="ARF_Input" type="text" id="How_did_the_incident_occur_and_what_property_was_damaged" name="How_did_the_incident_occur_and_what_property_was_damaged" /></div>
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
                  <div className="ARF_endInput"><input className="ARF_Input" type="text" id="NameOfLocation" name="NameOfLocation" /></div>
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
                      <input className="ARF_Input" type="checkbox" defaultValue="Yes" id="Does_Incident_Have_A_Address" name="Does_Incident_Have_A_Address" />
                    </div>
                  </div>
                  {/*                <p class="s3" style="text-indent: 0pt;line-height: 10pt;text-align: right;">Yes <div class="centerInput"><input className="ARF_Input" type="checkbox" id="horns" name="horns"></div></p>*/}
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="ARF_inputGrid">
                    <div className="ARF_inputGrid">
                      <div className="ARF_s3-right">No</div>
                      <div className="ARF_centerInput">
                        <input className="ARF_Input" type="checkbox" defaultValue="No" id="Does_Incident_Have_A_Address" name="Does_Incident_Have_A_Address" />
                      </div>
                    </div>
                    <div className="ARF_inputGrid">
                      <div className="ARF_s3-right">Unknown</div>
                      <div className="ARF_centerInput">
                        <input className="ARF_Input" type="checkbox" defaultValue="Unknown" id="Does_Incident_Have_A_Address" name="Does_Incident_Have_A_Address" />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '32pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="ARF_s3" style={{paddingTop: '4pt', textIndent: '0pt', textAlign: 'left'}}>Street address</p>
                  <div className="ARF_endInput"><input className="ARF_Input" type="text" id="StreetAddressIncidentLocation" name="StreetAddressIncidentLocation" /></div>
                </td>
              </tr>
              <tr style={{height: '27pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                  <p className="ARF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>City</p>
                  <div className="ARF_endInput"><input className="ARF_Input" type="text" id="CityIncidentLocation" name="CityIncidentLocation" /></div>
                </td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                  <p className="ARF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>State</p>
                  <div className="ARF_endInput"><input className="ARF_Input" type="text" id="StateIncidentLocation" name="StateIncidentLocation" /></div>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="ARF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>Zip code</p>
                  <input className="ARF_Input" type="tel" id="ZipCode" name="ZipCode" placeholder="00000" pattern="[0-9]{5}" required />
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
                  <div className="ARF_endInput"><input className="ARF_Input" type="text" id="LocationSpecify" name="LocationSpecify" /></div>
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
                  <div className="ARF_endInput"><input className="ARF_Input" type="text" id="PrimaryLocation" name="PrimaryLocation" /></div>
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
                      <input className="ARF_Input" type="checkbox" defaultValue="Yes" id="Was_A_Person_Injured" name="Was_A_Person_Injured" />
                    </div>
                  </div>
                  {/*                <p class="s3" style="text-indent: 0pt;line-height: 10pt;text-align: right;">Yes <div class="centerInput"><input className="ARF_Input" type="checkbox" id="horns" name="horns"></div></p>*/}
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="ARF_inputGrid">
                    <div className="ARF_inputGrid">
                      <div className="ARF_s3-right">No</div>
                      <div className="ARF_centerInput">
                        <input className="ARF_Input" type="checkbox" defaultValue="No" id="Was_A_Person_Injured" name="Was_A_Person_Injured" />
                      </div>
                    </div>
                    <div className="ARF_inputGrid">
                      <div className="ARF_s3-right">Unknown</div>
                      <div className="ARF_centerInput">
                        <input className="ARF_Input" type="checkbox" defaultValue="Unknown" id="Was_A_Person_Injured" name="Was_A_Person_Injured" />
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
                  <div className="ARF_endInput"><input className="ARF_Input" type="text" id="PersonResponsibleLastName" name="PersonResponsibleLastName" /></div>
                </td>
                <td colSpan={3} style={{width: '202pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="ARF_s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>First name</p>
                  <div className="ARF_endInput"><input className="ARF_Input" type="text" id="PersonResponsibleFirstName" name="PersonResponsibleFirstName" /></div>
                </td>
              </tr>
              <tr style={{height: '36pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="ARF_s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Address</p>
                  <div className="ARF_endInput"><input className="ARF_Input" type="text" id="PersonResponsibleStreetAddress" name="PersonResponsibleStreetAddress" /></div>
                </td>
              </tr>
              <tr style={{height: '29pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                  <p className="ARF_s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>City</p>
                  <div className="ARF_endInput"><input className="ARF_Input" type="text" id="PersonResponsibleCity" name="PersonResponsibleCity" /></div>
                </td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                  <p className="ARF_s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>State</p>
                  <div className="ARF_endInput"><input className="ARF_Input" type="text" id="PersonResponsibleState" name="PersonResponsibleState" /></div>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="ARF_s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Zip code</p>
                  <input className="ARF_Input" type="tel" id="ZipCodePersonResponsible" name="ZipCodePersonResponsible"  placeholder="00000"  pattern="[0-9]{5}" required />
                </td>
              </tr>
              <tr style={{height: '29pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                  <p className="ARF_s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Home phone #</p>
                  <div className="ARF_endInput"><input className="ARF_Input" type="text" id="PersonResponsibleHomePhone" name="PersonResponsibleHomePhone" placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" /></div>
                </td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                  <p className="ARF_s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Work phone #</p>
                  <div className="ARF_endInput"><input className="ARF_Input" type="text" id="PersonResponsibleWorkPhone" name="PersonResponsibleWorkPhone" placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" /></div>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="ARF_s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Cell phone #</p>
                  <input className="ARF_Input" type="tel" id="PersonResponsibleCellPhone" name="PersonResponsibleCellPhone" placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                </td>
              </tr>
              <tr style={{height: '29pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={2} style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                  <p className="ARF_s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Age</p>
                  <div className="ARF_endInput"><input className="ARF_Input" type="text" id="PersonResponsibleAge" name="PersonResponsibleAge" /></div>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="ARF_s3" style={{paddingRight: '33pt', textIndent: '0pt', textAlign: 'right'}}>
                  </p><div className="ARF_inputGrid">
                    <div className="ARF_inputGrid3">
                      <div className="ARF_s3">Sex</div>
                      <div className="ARF_s3-left">Male</div>
                      <div className="ARF_input-right">
                        <input className="ARF_Input" type="checkbox" defaultValue="Male" id="PersonResponsibleMaleSex" name="PersonResponsibleMaleSex" />
                      </div>
                    </div>
                    <div className="ARF_inputGrid">
                      <div className="ARF_s3-left">Female</div>
                      <div className="ARF_input-right">
                        <input className="ARF_Input" type="checkbox" defaultValue="Female" id="PersonResponsibleFemaleSex" name="PersonResponsibleFemaleSex" />
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
                      <input className="ARF_Input" type="checkbox" defaultValue="Yes" id="InjuredPersonIsAgencyVolunteer" name="InjuredPersonIsAgencyVolunteer" />
                    </div>
                  </div>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="ARF_s3" style={{paddingRight: '33pt', textIndent: '0pt', textAlign: 'right'}}>
                  </p><div className="ARF_inputGrid">
                    <div className="ARF_inputGrid">
                      <div className="ARF_s3-right">No</div>
                      <div className="ARF_centerInput">
                        <input className="ARF_Input" type="checkbox" defaultValue="No" id="InjuredPersonIsNotAgencyVolunteer" name="InjuredPersonIsNotAgencyVolunteer" />
                      </div>
                    </div>
                    <div className="ARF_inputGrid">
                      <div className="ARF_s3-right">Unknown</div>
                      <div className="ARF_centerInput">
                        <input className="ARF_Input" type="checkbox" defaultValue="Unknown" id="InjuredPersonIsUnknownAgencyVolunteer" name="InjuredPersonIsUnknownAgencyVolunteer" />
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
                  <div className="ARF_endInput"><input className="ARF_Input" type="text" id="InjuryDescription" name="InjuryDescription" /></div>
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
                      <input className="ARF_Input" type="checkbox" defaultValue="Yes" id="InjuredPersonMakesAStatement" name="InjuredPersonMakesAStatement" />
                    </div>
                  </div>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="ARF_s3" style={{paddingRight: '33pt', textIndent: '0pt', textAlign: 'right'}}>
                  </p><div className="ARF_inputGrid">
                    <div className="ARF_inputGrid">
                      <div className="ARF_s3-right">No</div>
                      <div className="ARF_centerInput">
                        <input className="ARF_Input" type="checkbox" defaultValue="No" id="DoesNotMakeAStatement" name="DoesNotMakeAStatement" />
                      </div>
                    </div>
                    <div className="ARF_inputGrid">
                      <div className="ARF_s3-right">Unknown</div>
                      <div className="ARF_centerInput">
                        <input className="ARF_Input" type="checkbox" defaultValue="Unknown" id="UnknownStatement" name="UnknownStatement" />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '23pt'}}>
                <td className="ARF_blue-boxes-bottom">
                </td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="ARF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>If yes, what did injured person say?</p>
                  <div className="ARF_endInput"><input className="ARF_Input" type="text" id="whatDidInjuredPersonSay" name="whatDidInjuredPersonSay" /></div>
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
                      <input className="ARF_Input" type="checkbox" defaultValue="Yes" id="FirstAidWasAdministered" name="FirstAidWasAdministered" />
                    </div>
                  </div>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="ARF_s3" style={{paddingRight: '33pt', textIndent: '0pt', textAlign: 'right'}}>
                  </p><div className="ARF_inputGrid">
                    <div className="ARF_inputGrid">
                      <div className="ARF_s3-right">No</div>
                      <div className="ARF_centerInput">
                        <input className="ARF_Input" type="checkbox" defaultValue="No" id="FirstAidWasNotAdministered" name="FirstAidWasNotAdministered" />
                      </div>
                    </div>
                    <div className="ARF_inputGrid">
                      <div className="ARF_s3-right">Unknown</div>
                      <div className="ARF_centerInput">
                        <input className="ARF_Input" type="checkbox" defaultValue="Unknown" id="FirstAidWasUnknown" name="FirstAidWasUnknown" />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '32pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="ARF_s3" style={{paddingTop: '4pt', textIndent: '0pt', textAlign: 'left'}}>Name and position of person who administered first aid</p>
                  <div className="ARF_endInput"><input className="ARF_Input" type="text" id="NameAndPositionOfPersonAdministered" name="NameAndPositionOfPersonAdministered" /></div>
                </td>
              </tr>
              <tr style={{height: '32pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="ARF_s3" style={{paddingTop: '4pt', textIndent: '0pt', textAlign: 'left'}}>What first aid was given?</p>
                  <div className="ARF_endInput"><input className="ARF_Input" type="text" id="TypeOfFirstAidAdministered" name="TypeOfFirstAidAdministered" /></div>
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
                      <input className="ARF_Input" type="checkbox" defaultValue="Yes" id="AedOrCprWasInvolved" name="AedOrCprWasInvolved" />
                    </div>
                  </div>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="ARF_s3" style={{paddingRight: '33pt', textIndent: '0pt', textAlign: 'right'}}>
                  </p><div className="ARF_inputGrid">
                    <div className="ARF_inputGrid">
                      <div className="ARF_s3-right">No</div>
                      <div className="ARF_centerInput">
                        <input className="ARF_Input" type="checkbox" defaultValue="No" id="AedOrCprWasNotInvolved" name="AedOrCprWasNotInvolved" />
                      </div>
                    </div>
                    <div className="ARF_inputGrid">
                      <div className="ARF_s3-right">Unknown</div>
                      <div className="ARF_centerInput">
                        <input className="ARF_Input" type="checkbox" defaultValue="Unknown" id="AedOrCprWasNotUnknown" name="AedOrCprWasNotUnknown" />
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
                      <input className="ARF_Input" type="checkbox" defaultValue="Unknown" id="CalledAndRefused" name="CalledAndRefused" />
                    </div>
                    <div className="ARF_s3">
                      Offered and called
                      <input className="ARF_Input" type="checkbox" defaultValue="Unknown" id="OfferedAndCalled" name="OfferedAndCalled" />
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
                      <input className="ARF_Input" type="checkbox" defaultValue="Unknown" id="OfferedAndRefused" name="OfferedAndRefused" />
                    </div>
                    <div className="ARF_s3">
                      Offered, refused, called by agency anyway
                      <input className="ARF_Input" type="checkbox" defaultValue="Unknown" id="OfferedAndRefusedButCalledByAgency" name="OfferedAndRefusedButCalledByAgency" />
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
                      <input className="ARF_Input" type="checkbox" defaultValue="Unknown" id="UnableToRespond" name="UnableToRespond" />
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
                      <input className="ARF_Input" type="checkbox" defaultValue="Yes" id="PoliceWereCalled" name="PoliceWereCalled" />
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
                  <div className="ARF_endInput"><input className="ARF_Input" type="text" id="PoliceDepartmentName" name="PoliceDepartmentName" /></div>
                </td>
              </tr>
              <tr style={{height: '32pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="ARF_s3" style={{paddingTop: '4pt', textIndent: '0pt', textAlign: 'left'}}>Name of officer</p>
                  <div className="ARF_endInput"><input className="ARF_Input" type="text" id="OfficerName" name="OfficerName" /></div>
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
                      <input className="ARF_Input" type="checkbox" defaultValue="Yes" id="ClaimIsExpected" name="ClaimIsExpected" />
                    </div>
                  </div>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="ARF_inputGrid">
                    <div className="ARF_inputGrid">
                      <div className="ARF_s3-right">No</div>
                      <div className="ARF_centerInput">
                        <input className="ARF_Input" type="checkbox" defaultValue="No" id="ClaimIsNotExpected" name="ClaimIsNotExpected" />
                      </div>
                    </div>
                    <div className="ARF_inputGrid">
                      <div className="ARF_s3-right">Unknown</div>
                      <div className="ARF_centerInput">
                        <input className="ARF_Input" type="checkbox" defaultValue="Unknown" id="ClaimIsNotUnknown" name="ClaimIsNotUnknown" />
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
                  10
                </td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="ARF_s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>Was property damaged as a result of this accident/incident?</p></td>
                <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <div className="ARF_inputGrid">
                    <div className="ARF_s3-right">Yes</div>
                    <div className="ARF_centerInput">
                      <input className="ARF_Input" type="checkbox" defaultValue="Yes" id="PropertyWasDamagedFromIncident" name="PropertyWasDamagedFromIncident" />
                    </div>
                  </div>
                  {/*                <p class="s3" style="text-indent: 0pt;line-height: 10pt;text-align: right;">Yes <div class="centerInput"><input className="ARF_Input" type="checkbox" id="horns" name="horns"></div></p>*/}
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="ARF_inputGrid">
                    <div className="ARF_inputGrid">
                      <div className="ARF_s3-right">No</div>
                      <div className="ARF_centerInput">
                        <input className="ARF_Input" type="checkbox" defaultValue="No" id="PropertyWasNotDamagedFromIncident" name="PropertyWasNotDamagedFromIncident" />
                      </div>
                    </div>
                    <div className="ARF_inputGrid">
                      <div className="ARF_s3-right">Unknown</div>
                      <div className="ARF_centerInput">
                        <input className="ARF_Input" type="checkbox" defaultValue="Unknown" id="PropertyWasUnknown" name="PropertyWasUnknown" />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '27pt'}}>
                <td className="ARF_blue-boxes">
                  11
                </td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="ARF_s3" style={{paddingRight: '9pt', textIndent: '0pt', textAlign: 'left'}}>If yes, how was the person involved in the accident/incident?</p>
                </td>
              </tr>
              <tr style={{height: '20pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={4} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="ARF_inputGrid">
                    <div className="ARF_s3">
                      Owner of property adjacent to park district
                      <input className="ARF_Input" type="checkbox" defaultValue="Unknown" id="OwnerOfPropertyAdjacentToParkDistrict" name="OwnerOfPropertyAdjacentToParkDistrict" />
                    </div>
                    <div className="ARF_s3">
                      Patron
                      <input className="ARF_Input" type="checkbox" defaultValue="Unknown" id="Patron" name="Patron" />
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
                      <input className="ARF_Input" type="checkbox" defaultValue="Unknown" id="PoliceInvestigationYesNoUnknown" name="PoliceInvestigationYesNoUnknown" />
                    </div>
                    <div className="ARF_s3">
                      Other
                      <input className="ARF_Input" type="checkbox" defaultValue="Unknown" id="PoliceInvestigationYesNoUnknown" name="PoliceInvestigationYesNoUnknown" />
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '20pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}>18<br /></p></td>
                <td colSpan={4} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="ARF_inputGrid">
                    <div className="ARF_s3">
                      Last name (or business name)
                      <div className="ARF_endInput"><input className="ARF_Input" type="text" id="LastOrBusinessName" name="LastOrBusinessName" /></div>                  </div>
                    <div className="ARF_s3">
                      First name (not necessary if business name)
                      <div className="ARF_endInput"><input className="ARF_Input" type="text" id="FirstNameIfNotBusinessName" name="FirstNameIfNotBusinessName" /></div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '36pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="ARF_s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Address</p>
                  <div className="ARF_endInput"><input className="ARF_Input" type="text" id="PropertyOwnerAddress" name="PropertyOwnerAddress" /></div>
                </td>
              </tr>
              <tr style={{height: '20pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={4} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="ARF_inputGrid4">
                    <div className="ARF_s3">
                      City
                      <div className="ARF_endInput"><input className="ARF_Input" type="text" id="PropertyOwnerCity" name="PropertyOwnerCity" /></div>                  </div>
                    <div className="ARF_s3">
                      State
                      <div className="ARF_endInput"><input className="ARF_Input" type="text" id="PropertyOwnerState" name="PropertyOwnerState" /></div>
                    </div>
                    <div className="ARF_s3">
                      Zip Code
                      <div className="ARF_endInput"><input className="ARF_Input" type="text" id="PropertyOwnerZipCode" name="PropertyOwnerZipCode"  placeholder="00000" pattern="[0-9]{5}" required /></div>
                    </div>
                    <div className="ARF_s3">
                      Phone number
                      <div className="ARF_endInput"><input className="ARF_Input" type="text" id="PropertyOwnerPhoneNumber" name="PropertyOwnerPhoneNumber" placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" /></div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '32pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="ARF_s3" style={{paddingTop: '4pt', textIndent: '0pt', textAlign: 'left'}}>Describe the property damage</p>
                  <div className="ARF_endInput"><input className="ARF_Input" type="text" id="PropertyDamageDescription" name="PropertyDamageDescription" /></div>
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
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="ARF_s3" style={{paddingRight: '9pt', textIndent: '0pt', textAlign: 'left'}}>If there was a witness(es) to the accident/incident, please provide the following information:</p>
                </td>
              </tr>
              <tr style={{height: '20pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={4} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="ARF_inputGrid">
                    <div className="ARF_s3">
                      Last name
                      <div className="ARF_endInput"><input className="ARF_Input" type="text" id="WitnessLastName" name="WitnessLastName" /></div>                  </div>
                    <div className="ARF_s3">
                      First name
                      <div className="ARF_endInput"><input className="ARF_Input" type="text" id="WitnessFirstName" name="WitnessFirstName" /></div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '36pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="ARF_s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Address</p>
                  <div className="ARF_endInput"><input className="ARF_Input" type="text" id="WitnessAddress" name="WitnessAddress" /></div>
                </td>
              </tr>
              <tr style={{height: '20pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={4} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="ARF_inputGrid4">
                    <div className="ARF_s3">
                      City
                      <div className="ARF_endInput"><input className="ARF_Input" type="text" id="WitnessCity" name="WitnessCity" /></div>                  </div>
                    <div className="ARF_s3">
                      State
                      <div className="ARF_endInput"><input className="ARF_Input" type="text" id="WitnessState" name="WitnessState" /></div>
                    </div>
                    <div className="ARF_s3">
                      Zip Code
                      <div className="ARF_endInput"><input className="ARF_Input" type="text" id="WitnessStateZipCode" name="WitnessStateZipCode"  placeholder="00000"  pattern="[0-9]{5}" required /></div>
                    </div>
                    <div className="ARF_s3">
                      Phone number
                      <div className="ARF_endInput"><input className="ARF_Input" type="text" id="WitnessStatePhoneNumber" name="WitnessStatePhoneNumber" placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" /></div>
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
                      <input className="ARF_Input" type="checkbox" defaultValue="Yes" id="WitnessMadeStatements" name="WitnessMadeStatements" />
                    </div>
                  </div>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="ARF_s3" style={{paddingRight: '33pt', textIndent: '0pt', textAlign: 'right'}}>
                  </p><div className="ARF_inputGrid">
                    <div className="ARF_inputGrid">
                      <div className="ARF_s3-right">No</div>
                      <div className="ARF_centerInput">
                        <input className="ARF_Input" type="checkbox" defaultValue="No" id="WitnessDidNotMakeStatements" name="WitnessDidNotMakeStatements" />
                      </div>
                    </div>
                    <div className="ARF_inputGrid">
                      <div className="ARF_s3-right">Unknown</div>
                      <div className="ARF_centerInput">
                        <input className="ARF_Input" type="checkbox" defaultValue="Unknown" id="WitnessStatementsUnknown" name="WitnessStatementsUnknown" />
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
                  <div className="ARF_endInput"><input className="ARF_Input" type="text" id="WhatDidTheWitnessSay" name="WhatDidTheWitnessSay" /></div>
                </td>
              </tr>
              <tr style={{height: '23pt'}}>
                <td className="ARF_blue-boxes-bottom">21
                </td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="ARF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>Where was witness when the accident/incident occurred?</p>
                  <div className="ARF_endInput"><input className="ARF_Input" type="text" id="WitnessLocationDuringIncident" name="WitnessLocationDuringIncident" /></div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="ARF_bottom-space" />
        </div>
        </div>
    );
}
 
export default AccidentReport;