import "../css/NotificationOfInjurytoEmployerReport_CSS.css"
import "../images/icons/FVSRA_ICON.png"
import logo from ".//PDRMA Form 03 Property Loss Report_files/Image_001.jpg"
import {useState} from "react";
import {useNavigate} from "react-router-dom";


const NotificationReport = () => {

  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [specificLocation, setSpecificLocation] = useState('');
  const [reporting, setReporting] = useState('No');
  const [dateReported, setDateReported] = useState('');
  const [timeReported, setTimeReported] = useState('');
  const [reportedTo, setReportedTo] = useState('');
  const [describeInjury, setDescribeInjury] = useState('');
  const [peoplePresent, setPeoplePresent] = useState('');
  const [partsInjured, setPartsInjured] = useState('');
  const [medicalAttention, setMedicalAttention] = useState('No');
  const [treatment, setTreatment] = useState('');
  const [injuredPreviously, setInjuredPreviously] = useState('No');
  const [describeInjuredPrior, setDescribeInjuredPrior] = useState('');
  const [locationTreatment, setLocationTreatment] = useState('');
  const [signature, setSignature] = useState('');
  const [dateSignature, setDateSignature] = useState('');
  const navigate = useNavigate() //Like going back and forward in "history"/back from the previous or next page

  const handleSubmit = (e) => { //Handles the onSubmit action of the log
    e.preventDefault();

    let NotificationReportObj = {
      "Employee_Name": name,
      "Date_of_Incident": date,
      "Time_of_Incident": time,
      "Specific_location_of_accident": specificLocation,
      "Are_you_reporting_the_injury_for_the_first_time_using_this_form": reporting,
      "Reporting_Date": dateReported,
      "Reporting_Time": timeReported,
      "Reported_To": reportedTo,
      "Describe_how_the_injury_occurred": describeInjury,
      "Name_all_people_present_at_the_time_of_injury": peoplePresent,
      "Identify_all_body_parts_you_injured": partsInjured,
      "Did_you_seek_medical_attention_on_the_date_of_the_accident": medicalAttention,
      "If_yes_where_did_you_seek_treatment":treatment,
      "Have_you_injured_this_body_part_previously":injuredPreviously,
      "If_yes_describe_which_body_part_and_what_the_prior_injury_was":describeInjuredPrior,
      "If_yes_where_did_you_receive_treatment":locationTreatment,
      "Employee_Signature":signature,
      "Signature_Date":dateSignature
    }

    fetch('http://127.0.0.1:5000/fvsra/notificationOfInjuryToEmployerReport', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(NotificationReportObj)
    }).then(() => {
      alert("Log has been reported.")
      navigate('/login') //Redirects page
    })

  }

    return ( 
        <div>
          <form onSubmit={handleSubmit}>
          <div className="NIRF_entire-page">
          <div className="NIRF_top-space" />
          <div className="NIRF_page-head">
            <div className="NIRF_page-head-grid">
              <div>
                <p style={{textIndent: '0pt', textAlign: 'left'}}><span><img alt="image" height={68} src={logo} width={222} /></span>
                </p>
              </div>
              <div>
                <table style={{borderCollapse: 'collapse'}} cellSpacing={0}>
                  <tbody><tr style={{height: '16pt'}}>
                      <td style={{width: '315pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: 'white'}} rowSpan={3} bgcolor="#25408F"><p className="NIRF_head-text4" style={{paddingTop: '1pt', paddingLeft: '1pt', paddingRight: '4pt', textIndent: '0pt', textAlign: 'center'}}>
                        </p><h2 style={{textIndent: '0pt', lineHeight: '27pt', textAlign: 'center'}}>Notification of Injury</h2>
                        <h2 style={{textIndent: '0pt', lineHeight: '27pt', textAlign: 'center'}}>to Employer Report</h2>
                        <p style={{paddingTop: '2pt', textIndent: '0pt', textAlign: 'center'}}>
                          (Employee to complete and submit to supervisor or HR.)
                        </p>
                      </td>
                      <td style={{width: '57pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt'}} bgcolor="#25408F"><p className="NIRF_head-text2" style={{paddingLeft: '7pt', paddingRight: '7pt', textIndent: '0pt', lineHeight: '15pt', textAlign: 'center'}}>
                        </p><h3 style={{paddingTop: '2pt', paddingLeft: '8pt', textIndent: '0pt', textAlign: 'left'}}>Form</h3>
                        <h2 style={{paddingTop: '3pt', paddingLeft: '7pt', textIndent: '0pt', textAlign: 'left'}}>04E</h2>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="NIRF_header-body-space" />
          <table className="NIRF_form-table">
            <tbody><tr style={{height: '21pt'}}>
                <td className="NIRF_blue-boxes-top">
                  1
                </td>
                <td colSpan={3} style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="NIRF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>Employee name</p>
                  <div className="NIRF_endInput"><input className="NIRF_Input"  type="text" id="Employee_Name"  value={name} onChange={(e) => setName(e.target.value)}  name="Employee_Name" /></div>
                </td>
              </tr>
              <tr style={{height: '22pt'}}>
                <td className="NIRF_blue-boxes">
                  2
                </td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '2pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="NIRF_s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>Date of incident (mm/dd/yyyy)</p>
                  <input className="NIRF_Input2"  type="date" id="Date_of_Incident"  value={date} onChange={(e) => setDate(e.target.value)}  name="Date_of_Incident" defaultValue min="2021-01-01" max="2050-01-01" />
                </td>
                <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '2pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '2pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="NIRF_s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>Time of incident (hh/mm,
                    a.m./p.m.)</p>
                  <input className="NIRF_Input2"  type="time" id="Time_of_Incident"  value={time} onChange={(e) => setTime(e.target.value)}  name="Time_of_Incident" />
                </td>
              </tr>
              <tr style={{height: '25pt'}}>
                <td className="NIRF_blue-boxes-top">
                  3
                </td>
                <td colSpan={3} style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="NIRF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>Specific location of accident. (Ex. Second floor hallway of recreation center, storage closet of maintenance shed, south entrance of aquatic facility, etc.)</p>
                  <div className="NIRF_endInput"><input className="NIRF_Input"  type="text" id="Employee_Name"  value={specificLocation} onChange={(e) => setSpecificLocation(e.target.value)}  name="Employee_Name" /></div>
                </td>
              </tr>
              <tr style={{height: '22pt'}}>
                <td className="NIRF_blue-boxes">
                  4
                </td>
                <td colSpan={2} style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E'}}>
                  <p className="NIRF_s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>Are you reporting the injury for the first time using this form?</p>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="NIRF_inputGrid">
                    <div className="NIRF_inputGrid">
                      <div className="NIRF_s3-right">Yes</div>
                      <div className="NIRF_centerInput">
                        <input className="NIRF_Input"  type="radio" defaultValue="Yes" id="reportingYes"  value={"Yes"} onClick={() => setReporting("Yes")}  name="ReportInjuryForFirstTime" />
                      </div>
                    </div>
                    <div className="NIRF_inputGrid">
                      <div className="NIRF_s3-right">No</div>
                      <div className="NIRF_centerInput">
                        <input className="NIRF_Input"  type="radio" defaultValue="No" id="reportingNo"  value={"No"} onClick={() => setReporting("No")}  name="ReportInjuryForFirstTime" defaultChecked />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '25pt'}}>
                <td className="NIRF_blue-boxes">
                </td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'none', borderTopWidth: '2pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="NIRF_s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>
                    If no, when did you first report the injury (verbally or in writing) and to whom did you report it?
                  </p>
                </td>
              </tr>
              <tr style={{height: '27pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td style={{width: '283pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                  <p className="NIRF_s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>Date</p>
                  <input className="NIRF_Input2"  type="date" id="Date_of_Incident"  value={dateReported} onChange={(e) => setDateReported(e.target.value)}  name="Date_of_Incident" defaultValue min="2021-01-01" max="2050-01-01" />
                </td>
                <td style={{width: '283pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'none', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                  <p className="NIRF_s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>Time</p>
                  <input className="NIRF_Input2"  type="time" id="Time_of_Incident"  value={timeReported} onChange={(e) => setTimeReported(e.target.value)}  name="Time_of_Incident" />
                </td>
                <td style={{width: '202pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="NIRF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>Reported to</p>
                  <div className="NIRF_endInput"><input className="NIRF_Input"  type="text" id="Reported_to"  value={reportedTo} onChange={(e) => setReportedTo(e.target.value)}  name="Reported_to" /></div>
                </td>
              </tr>
              <tr style={{height: '23pt'}}>
                <td className="NIRF_blue-boxes">
                  5
                </td>
                <td colSpan={3} style={{borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="NIRF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>Describe how the injury occurred. (Identify the job task you were doing and include a step-by-step explanation of what led to the injury.)
                  </p>
                  <div className="NIRF_endInput"><input className="NIRF_Input"  type="text" id="describeInjury"  value={describeInjury} onChange={(e) => setDescribeInjury(e.target.value)}  name="describeInjury" required /></div>
                </td>
              </tr>
              <tr style={{height: '23pt'}}>
                <td className="NIRF_blue-boxes">
                  6
                </td>
                <td colSpan={3} style={{borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="NIRF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>Name all people present at the time of injury (e.g., coworkers and/or witnesses)
                  </p>
                  <div className="NIRF_endInput"><input className="NIRF_Input"  type="text" id="peoplePresent"  value={peoplePresent} onChange={(e) => setPeoplePresent(e.target.value)}  name="peoplePresent" /></div>
                </td>
              </tr>
              <tr style={{height: '23pt'}}>
                <td className="NIRF_blue-boxes">
                  7
                </td>
                <td colSpan={3} style={{borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="NIRF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>Identify all body parts you injured. (Be specific. Indicate left or right, upper or lower.)
                  </p>
                  <div className="NIRF_endInput"><input className="NIRF_Input"  type="text" id="partInjured"  value={partsInjured} onChange={(e) => setPartsInjured(e.target.value)}  name="partInjured" /></div>
                </td>
              </tr>
              <tr style={{height: '22pt'}}>
                <td className="NIRF_blue-boxes">
                  8
                </td>
                <td colSpan={2} style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E'}}>
                  <p className="NIRF_s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>Did you seek medical attention on the date of the accident?</p>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="NIRF_inputGrid">
                    <div className="NIRF_inputGrid">
                      <div className="NIRF_s3-right">Yes</div>
                      <div className="NIRF_centerInput">
                        <input className="NIRF_Input"  type="radio" defaultValue="Yes" id="SeekMedAttentionYes"  value={"Yes"} onClick={() => setMedicalAttention("Yes")}  name="SeekMedAttention" />
                      </div>
                    </div>
                    <div className="NIRF_inputGrid">
                      <div className="NIRF_s3-right">No</div>
                      <div className="NIRF_centerInput">
                        <input className="NIRF_Input"  type="radio" defaultValue="No" id="SeekMedAttentionNo"  value={"No"} onClick={() => setMedicalAttention("No")}  name="SeekMedAttention" defaultChecked />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '27pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '202pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="NIRF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>If yes, where did you seek treatment?</p>
                  <div className="NIRF_endInput"><input className="NIRF_Input"  type="text" id="Reported_to"  value={treatment} onChange={(e) => setTreatment(e.target.value)}  name="Reported_to" /></div>
                </td>
              </tr>
            </tbody></table>
          <div className="NIRF_bottom-space" />
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
        {/*PAGE BREAK*/}
        {/*PAGE BREAK*/}
        {/*PAGE BREAK*/}
        {/*PAGE BREAK*/}
        <div className="NIRF_entire-page">
          <div className="NIRF_top-space" />
          <div className="NIRF_page-head">
            <div className="NIRF_page-head-grid">
              <div>
                <p style={{textIndent: '0pt', textAlign: 'left'}}><span><img alt="image" height={68} src={logo} width={222} /></span>
                </p>
              </div>
              <div>
                <table style={{borderCollapse: 'collapse'}} cellSpacing={0}>
                  <tbody><tr style={{height: '16pt'}}>
                      <td style={{width: '315pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: 'white'}} rowSpan={3} bgcolor="#25408F"><p className="NIRF_head-text4" style={{paddingTop: '1pt', paddingLeft: '1pt', paddingRight: '4pt', textIndent: '0pt', textAlign: 'center'}}>
                        </p><h2 style={{textIndent: '0pt', lineHeight: '27pt', textAlign: 'center'}}>Notification of Injury</h2>
                        <h2 style={{textIndent: '0pt', lineHeight: '27pt', textAlign: 'center'}}>to Employer Report</h2>
                        <p style={{paddingTop: '2pt', textIndent: '0pt', textAlign: 'center'}}>
                          (Employee to complete and submit to supervisor or HR.)
                        </p>
                      </td>
                      <td style={{width: '57pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt'}} bgcolor="#25408F"><p className="NIRF_head-text2" style={{paddingLeft: '7pt', paddingRight: '7pt', textIndent: '0pt', lineHeight: '15pt', textAlign: 'center'}}>
                        </p><h3 style={{paddingTop: '2pt', paddingLeft: '8pt', textIndent: '0pt', textAlign: 'left'}}>Form</h3>
                        <h2 style={{paddingTop: '3pt', paddingLeft: '7pt', textIndent: '0pt', textAlign: 'left'}}>04E</h2>
                        <p style={{paddingTop: '2pt', textIndent: '0pt', textAlign: 'center'}}>(pg. 2)</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="NIRF_header-body-space" />

            <table className="NIRF_form-table">
              <tbody><tr style={{height: '22pt'}}>
                  <td className="NIRF_blue-boxes">
                    9
                  </td>
                  <td colSpan={2} style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E'}}>
                    <p className="NIRF_s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>Have you injured this body part previously?</p>
                  </td>
                  <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                    <div className="NIRF_inputGrid">
                      <div className="NIRF_inputGrid">
                        <div className="NIRF_s3-right">Yes</div>
                        <div className="NIRF_centerInput">
                          <input className="NIRF_Input"  type="radio" defaultValue="Yes" id="DamagePreviousYes"  value={"Yes"} onClick={() => setInjuredPreviously("Yes")}  name="DamagePrevious" />
                        </div>
                      </div>
                      <div className="NIRF_inputGrid">
                        <div className="NIRF_s3-right">No</div>
                        <div className="NIRF_centerInput">
                          <input className="NIRF_Input"  type="radio" defaultValue="No" id="DamagePreviousNo"  value={"No"} onClick={() => setInjuredPreviously("No")}  name="DamagePrevious" defaultChecked />
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr style={{height: '27pt'}}>
                  <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                  <td colSpan={3} style={{width: '202pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                    <p className="NIRF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>If yes, please describe which body part and what the prior injury was.</p>
                    <div className="NIRF_endInput"><input className="NIRF_Input"  type="text" id="Injured_Prior"  value={describeInjuredPrior} onChange={(e) => setDescribeInjuredPrior(e.target.value)}  name="Injured_Prior" /></div>
                  </td>
                </tr>
                <tr style={{height: '21pt'}}>
                  <td className="NIRF_blue-boxes-top" />
                  <td colSpan={3} style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                    <p className="NIRF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>If yes, where did you receive treatment?</p>
                    <div className="NIRF_endInput"><input className="NIRF_Input"  type="text" id="locationTreatment"  value={locationTreatment} onChange={(e) => setLocationTreatment(e.target.value)}  name="LocationTreatment" /></div>
                  </td>
                </tr>
                <tr style={{height: '25pt'}}>
                  <td className="NIRF_blue-boxes" />
                  <td colSpan={3} style={{width: '526pt', borderTopStyle: 'none', borderTopWidth: '2pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="NIRF_s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>
                      The above information is true and accurate:
                    </p>
                  </td>
                </tr>
                <tr style={{height: '27pt'}}>
                  <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                  <td colSpan={2} style={{width: '283pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                    <p className="NIRF_s3" style={{textIndent: '0pt', textAlign: 'left'}}>(Employee Signature)</p>
                    <div className="NIRF_endInput"><input className="NIRF_Input"  type="text" id="Employee_Signature"  value={signature} onChange={(e) => setSignature(e.target.value)}  name="Employee_Signature" /></div>
                  </td>
                  <td style={{width: '202pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                    <p className="NIRF_s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>Date</p>
                    <input className="NIRF_Input2"  type="date" id="Signature_Date"  value={dateSignature} onChange={(e) => setDateSignature(e.target.value)}  name="Signature_Date" defaultValue min="2021-01-01" max="2050-01-01" />
                  </td>
                </tr>
                <tr style={{height: '25pt'}}>
                  <td className="NIRF_blue-boxes" />
                  <td colSpan={3} style={{width: '526pt', borderTopStyle: 'none', borderTopWidth: '2pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}} />
                </tr>
              </tbody></table>
            <div className="NIRF_center-text">
              <button name="submit4E" >Submit</button>
            </div>

          <div className="NIRF_bottom-space" />
        </div>
      </form>
      </div>
     );
}
 
export default NotificationReport;